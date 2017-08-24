module.exports = {
    getPlanes: function(req, res, next){
        req.app.get('db').getPlanes(25).then(planes => {
            res.status(200).send(planes);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    }
}