var expressFunction = require('express')
var expressApp = expressFunction()

const student = [
    { stdid: 'B6004804', name: 'Puwanat Torcheewee' },
    { stdid: 'B6011111', name: 'Sommai Chairungsri' }
];

expressApp.use(function(req, res, next) {
    console.log('Logged')
    next()
});

expressApp.use(function(req, res, next) {
    console.log('Authentication')
    next()
});

expressApp.get('/', function(req, res) {
    res.status(200).send('Hello World');
});

expressApp.get('/api/resource/students/:stdid', function(req, res) {
    const stdid = req.params.stdid;
    if (stdid == 'B6004804') {
        res.status(200).send(student[0]);
    } else if (stdid == 'B6011111') {
        res.status(200).send(student[1]);
    } else {
        res.status(404).send('Error 404 not found');
    }
});

expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
});