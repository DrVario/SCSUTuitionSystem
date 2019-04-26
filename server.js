const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const app = express();
const router = express.Router();


const dbRoute = "mongodb://Grant:WXK7M3WTpsLrw8m@ds155815.mlab.com:55815/scsutuition";

app.use(express.static(path.join(__dirname, '../client/build')))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'))
})


mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

db.once("open", () => console.log("connected to the database"));


db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

app.use("/api", router);
const PORT = process.env.PORT || 5000
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
