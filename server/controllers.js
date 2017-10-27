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
        console.log('addprop', req.body)
        const db = req.app.get('db');
        const {image, address, rent} = req.body
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
    },

    editProperty: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {imageurl, address, monthly_rent, tenant_email, lease_exp} = req.body
        db.update_property([id, imageurl, address, monthly_rent, tenant_email, lease_exp])
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    },

    deleteProperty: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_property([req.user.id, id])
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    },

    getAllPropsUsers: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_users_props()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(console.log('Controller Failure', err)))
    },

    addRequest: (req, res, next) => {
        console.log(req.body)
        console.log(req.params)
        const db =  req.app.get('db');
        const {property_id} = req.params;
        const {req_img, description, priority, land_email} = req.body;
        db.add_request([req_img, description, priority, land_email, req.user.id, property_id])
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(console.log('Add Request Failed', err)))
    }
}
