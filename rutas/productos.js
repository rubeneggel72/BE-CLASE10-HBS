const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    console.log(matrizProductos)
    res.render('main', { layout: 'index', productos: matrizProductos, listExists: true });
});

module.exports = router