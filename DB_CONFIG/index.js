"use strict";
const mongoose = require("mongoose");
const config = require("../Config");
console.log("DB URL:", config.DB_URL);
mongoose.connect(config.DB_URL);

const db = mongoose.connection;

db.on("error", () => console.error);

db.once("open", () => console.log("Database Connected"));
