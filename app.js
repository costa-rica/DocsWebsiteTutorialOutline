const express = require('express')
const app = express()


var path = require('path');
const fs = require('fs');
const fs_promises = require('fs').promises;
const marked = require('marked');
require('dotenv').config();

app.set('view engine', 'ejs');

const config = {
    PORT: process.env.PORT,
    PROJECT_RESOURCES_DIR: process.env.PROJECT_RESOURCES_DIR,
};
const PORT = config.PORT || 3000;
module.exports = config;// needed for the config object

// Middleware to serve static files
app.use(express.static('public'))


app.get("/",(req,res)=>{
    res.render("home");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});