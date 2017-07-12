/**
 * Created by LABORATORIA 0017le on 12/07/2017.
 */
const express = require('express');
const app = express();
app.use(express.static(__dirname+"/assets"));
app.set('port', (process.env.PORT || 7000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

