require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const ctrl = require('./controllers.js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
}))
app.use(passport.initialize());
app.use(passport.session());

// Stripe Setup
app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
        break;
    } else {
        pennies.push(amountArray[i])
    }
    }
    const convertedAmt = parseInt(pennies.join(''));
    
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
    }, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
    });
    });

    //Stripe END

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('You have successfully connected to the database.')
    app.set('db', db);
})

// Auth0Setup:
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db');

    db.find_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            console.log('create entry')
            db.create_user([profile._json.name, profile._json.email, profile._json.picture, profile._json.identities[0].user_id]).then(user => {
                return done(null, user[0].id);
            })

        }
    })
}
))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect:'http://localhost:3000/check',
    failureRedirect: '/auth'
}));


app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
        return res.status(200).send(false)
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', ((req, res, next) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
}))
//user info gets added to express session at login.
passport.serializeUser(function (id, done) {

    done(null, id)
})

passport.deserializeUser(function (id, done) { //everytime the user wants to go to an endpoint etc, the deserialize checks for a session in the serialize box and then

    app.get('db').find_current_user([id])
        .then(user => {

            done(null, user[0]); // takes user object from database and puts it on req.user. we can use it on any endpoint now.
        }).catch(err => console.log('deserialize failed', err))
})


//GET endpoints:
app.get('/api/properties', ctrl.getProperties)
app.get('/api/usersprops', ctrl.getAllPropsUsers)
app.get('/api/userspropsreqs', ctrl.getUsersPropsReqs)
 
//POST endpoints:
app.post('/api/setuser/:id/:type', ctrl.setUser)
app.post('/api/addprop', ctrl.addProperty)
app.post('/api/addreq/:property_id', ctrl.addRequest)

//PUT endpoints:
app.put('/api/addtenant/:id/:email/:lease', ctrl.addTenant)
app.put('/api/contact/:phone/:prefcontact', ctrl.editContact)
app.put('/api/editprop/:id', ctrl.editProperty)

//DELETE endpoints:
app.delete('/api/delete/:id', ctrl.deleteProperty)
app.delete('/api/deletereq/:id', ctrl.deleteRequest)



const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));