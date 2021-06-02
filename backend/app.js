const express = require("express");
const cors = require('cors');


// express app
const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// configure the app to use bodyParser()
app.use(express.urlencoded());
app.use(express.json())



// listen for requests
app.listen(5200);

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');


app.use(cors());
app.options('*', cors()); // request accept from all server

var pg = require('pg');
var connectionString = "postgres://postgres:Hafizhabib.123@localhost:5433/postgres";
var pgClient = new pg.Client(connectionString);
pgClient.connect().then(() => console.log("Connected Successfully"));




// Getting all values


app.get("/shape", async (req, res) => {
  const dbresponse = await pgClient.query("SELECT shapeid,shapename,color,width,height,dpth from shape");
  res.json({
    dbresponse
  });
});
// Updating after getting that line


app.get("/update/:a/:b", async (req, res) => {
  await pgClient.query(`UPDATE shape SET color ='${req.params.a}' WHERE shapeid = '${req.params.b}'`);
});

// Deleting after getting that line

app.get("/delete/:c", async (req, res) => {
  await pgClient.query(`DELETE FROM shape WHERE shapeid=${req.params.c}`);
});



// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});