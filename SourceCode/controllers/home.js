var Router = require('router');

var router = Router()

router.route('/')
    .get((req, res) => {
        res.render('pages/home')
    });

module.exports = router