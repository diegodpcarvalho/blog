const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesControler = require("./categories/CategoriesControler")
const articlesControler = require("./articles/ArticlesControler")


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com sucesso");
    }).catch((error) => {
        console.log (error);
    })


app.use("/",categoriesControler);
app.use("/", articlesControler);

app.get("/", (req, res) => {
    res.render("index");    
})

app.listen(8080, () => {
    console.log("O servidor esta rodando")
})