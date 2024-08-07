// Add external project folder
const express = require('express')
const app = express()
const fs = require('fs');
const marked = require('marked');

// New
const path = require('path')
require('dotenv').config();

const config = {
    PROJECT_RESOURCES_DIR: process.env.PROJECT_RESOURCES_DIR,
};

async function convertMarkdown() {
    const filePathAndName = "/Users/nick/Documents/_project_resources/DocsWebsite/markdown_docs/ExpressJsProject.md"
    const data = await fs.promises.readFile(filePathAndName, "utf8");
    const markdown_to_html = marked.parse(data);
    return markdown_to_html
  }

app.get('/', (req, res)=>{
    var files = fs.readdirSync(path.join(config.PROJECT_RESOURCES_DIR, "markdown_docs"));
    let arry_files = []
    for (file of files) {
      var arr_name_and_extension = file.split(".")
      var name = arr_name_and_extension[0]
      var extension = arr_name_and_extension[1]
      if (extension == "md") {
        arry_files.push(name)
      }
    };
    res.send("Home page of Docs Website" + arry_files)
})

app.get('/doc', async (req,res)=>{
    try {
        const markdown_to_html = await convertMarkdown();
        res.send(markdown_to_html)
      } catch {
        console.log("There was an error")
    }
})

app.listen(5001)