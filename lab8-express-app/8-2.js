const expressFunction = require('express');
const expressApp = expressFunction();

const student = [
    { stdid: 'B6004804', name: 'Puwanat Torcheewee' },
    { stdid: 'B6011111', name: 'Sommai Chairungsri' }
];

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