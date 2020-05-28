const jwt = require('jsonwebtoken');

const playload = {
    stdid: 'B6994804',
    name: 'Puwanat Torcheewee',
    major: 'CPE'
}

const key = 'MY_KEY';
const token = jwt.sign(playload, key, { expiresIn: 60 * 5 });
console.log(token);

try {
    const dataInToken = jwt.verify(token, key);
    console.log(dataInToken);
} catch (err) {
    console.log(err);
}