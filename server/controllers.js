module.exports = {

    getAllUsers: (req, res, next) => {
        const db = req.app.get('db');
        db.find_user([profile.identities[0].user_id])
        .then (response => {
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
        db.add_property([id, image, address, rent])
        .then ((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err))
    },

    getProperties: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.get_user_props([id])
        .then (response => {
            console.log(response)
            res.status(200).send(response[0])
        })
    }
}
