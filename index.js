const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesControler = require("./categories/CategoriesControler")
const articlesControler = require("./articles/ArticlesControler")

const Article = require("./articles/Article");
const Category = require("./categories/Category")

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

app.get("/", (req, res) => {

    Article.findAll().then(articles =>{
        res.render("index", {articles: articles})
    })
   
})


app.use("/",categoriesControler);
app.use("/", articlesControler);



app.listen(8080, () => {
    console.log("O servidor esta rodando")
})