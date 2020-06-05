const express = require("express");
const server = express();
const db = require("./database/db");

server.use(express.static("public"));
// server.set("view engine", "html");
// server.set("view", path.join(__dirname, "views"))

server.use(express.urlencoded({extended: true}));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views",{
    express: server,
    noCache: true,
})

server.get("/", (req,res) => {
    return res.render("index.html")
})

server.get("/create-point", (req,res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {
    const {body} = req;

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?)
    `;

    const values = [
        req.body.img,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err)
            return console.log(err)
        
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", {saved: true});
    }

    db.run(query, values, afterInsertData)

    
})

server.get("/search", (req,res) => {
    const {query: {search}} = req;
    console.log(search)
    if (search === ""){
        return res.render("search-results.html", {total: 0});
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, (err,rows) => {
        if (err)
            return console.log(err);

        const total = rows.length;

        return res.render("search-results.html", {places: rows,total});
    })
    
    
})

server.listen(3000);