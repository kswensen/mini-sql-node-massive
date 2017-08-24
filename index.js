const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
const connectionString = require('./config');

const app = module.exports = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(connectionString).then(db => {
    app.set('db', db);

    // db.new_planes().then(planes => {
    //     console.log(planes);
    // }).catch(err => {
    //     console.log(err);
    // })

    db.get_planes(25).then(planes => {
        console.log(planes);
    }).catch(err => {
        console.log(err);
    })
})

app.get('/api/planes/', controller.getPlanes);

const port = 3001;
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

