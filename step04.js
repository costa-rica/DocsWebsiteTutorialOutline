const express = require('express')
const app = express()
const fs = require('fs');
const marked = require('marked');

async function convertMarkdown() {
    const filePathAndName = "/Users/nick/Documents/_project_resources/DocsWebsite/markdown_docs/ExpressJsProject.md"
    const data = await fs.promises.readFile(filePathAndName, "utf8");
    const markdown_to_html = marked.parse(data);
    return markdown_to_html
  }

app.get('/', (req, res)=>{
    res.send("We up!")
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