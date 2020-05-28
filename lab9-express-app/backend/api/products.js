var expressFunctions = require('express');
const router = expressFunctions.Router();
const authorization = require('../config/authorize')

const products = [{
        type: 'cpu',
        id: '100001',
        name: 'Intel Core i7 Gen 10th',
        detail: 'The Intel Core i7-10750H is a high-end processor',
        quantity: 10,
        price: 10
    },
    {
        type: 'cpu',
        id: '100002',
        name: 'Intel Core i9 Gen 10th',
        detail: 'The Intel Core i9-10750FK is a high-end processor',
        quantity: 10,
        price: 1000000
    }
];

router.route('/products')
    .get(authorization, (req, res) => {
        res.status(200).json(products);
    })

module.exports = router