module.exports = {

    getAllUsers: (req, res, next) => {
        const db = req.app.get('db');
        db.find_user([profile.identities[0].user_id])
        .then (response => {
        })
    },

    getUserPropsTens: (req, res, next) => {
        const db = req.app.get('db');
        db.get_users_tenants_properties([req.user.id])
        .then (response => {
            res.status(200).send(response)
        })
    },

    setUser: (req, res, next) => {
        const db = req.app.get('db');  
        const { id, type } = req.params
        db.set_user([id,type])
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => res.status(500).send(err))
    },

    addProperty: (req, res, next) => {
        const db = req.app.get('db');
        const {image, address, rent} = req.params
        db.add_property([req.user.id, image, address, rent])
        .then ((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    },
    
    addTenant: (req, res, next) => {
        const db = req.app.get('db');
        const {id, email, lease} = req.params
        db.add_tenant([id, email, lease])
        .then ((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    },

    getProperties: (req, res, next) => {
        const db = req.app.get('db');
        db.get_user_props([req.user.id])
        .then (response => res.status(200).send(response))
    },

    editContact: (req, res, next) => {
        const db = req.app.get('db');
        const {phone, prefcontact} = req.params;
        console.log(req.user.id)
        db.update_contact([req.user.id, phone, prefcontact])
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    }
}
