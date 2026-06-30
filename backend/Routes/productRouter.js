const ensureAuthenticated = require('../Middleware/Auth')
const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {
            name: "book 1",
            price: 1000
        },
        {
            name: "book 2",
            price: 2000
        }
    ])
});


module.exports = router;