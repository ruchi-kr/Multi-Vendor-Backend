const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser')
var fs = require('fs')
require("./DB_CONFIG")
const indexRoute = require("./Router/index")
const path = require("path");
const config = require("./Config");
const cors = require('cors');
const corsOptions = {
	exposedHeaders: ["Authorization","isAdmin","user_id","designation","role","user_type"],
};
app.use(cors(corsOptions));
// app.use(cors());

// app.use(morgan('dev')){

// }
//   app.use(morgan('common', {
//       stream: fs.createWriteStream(path.join(__dirname, 'Logs/access.log'), { flags: 'a' })
//   }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api", indexRoute)
 
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Multi Backend🧑🏼‍🍳",
  });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT} 🤝`);
// });

process.on("uncaughtException", (err)=>{
    console.log("Error uncaught", err);
})

module.exports = app;