const express = require('express')
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

global.matrizProductos = [{"id":1,"title":"iPhone 11 64 GB (Product)Red","price":159000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-001.jpg"},
{"id":3,"title":"iPhone 12 64 GB azul","price":200000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-002.jpg"},
{"id":4,"title":"iPhone XR 64 GB negro","price":139000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-003.jpg"},
{"id":5,"title":"iPhone XR 64 GB negro","price":139000,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega10/main/img/img-004.jpg"},
]

app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '../../views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '../../views/partials/'
}));

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/productos', require('../rutas/apiProductos'))
app.use('/productos', require('../rutas/productos'))
app.use('/', router)
app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});

