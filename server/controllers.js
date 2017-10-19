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
            res.status(200).send(response[0])
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
        const {email, lease, prop_id} = req.params
        db.add_tenant([email, lease, req.user.id, prop_id])
        .then ((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    },

    getProperties: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.get_user_props([id])
        .then (response => {
            res.status(200).send(response[0])
        })
    },

    editContact: (req, res, next) => {
        const db = req.app.get('db');
        const {id, phone, preferred} = req.params;
        db.update_contact([id, phone, preferred])
        .then ((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    }
}
