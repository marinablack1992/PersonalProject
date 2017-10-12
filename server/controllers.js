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
        db.set_user([id,type])
        .then((res) => res.status(200).send(res))
        .catch((err) => res.status(500).send(err))
    },

    addProperty: (req, res, next) => {
        const db = req.app.get('db');
        const {image, address, rent} = req.params
        db.add_property([image, address, rent])
        .then ((res) => res.status(200).send(res))
        .catch((err) => res.status(500).send(err))
    }
}
