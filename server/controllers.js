module.exports = {

    getAllUsers: (req, res, next) => {
        const db = req.app.get('db');
        db.find_user([profile.identities[0].user_id])
        .then (response => {
            console.log(response)
        })
    },

    setUser: (req, res, next) => {
        const db = req.app.get('db');  
        const { id, type } = req.params
        console.log(req.params, id, type)
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
    }
}
