const express = require('express');
const fs = require('fs')
const router = express.Router();

const { getComicsList, getIssuesList, getComicBook } = require('../parser')
const { translateText } = require('../translator')
const { detectionText } = require('../vision')

router.get('/comics-list/:comicName', async (req, res) => { 
    return res.send(await getComicsList(req.params.comicName.replace('+', ' ')))
})

router.get('/issues-list/:comicLink', async (req, res) => {
    return res.send(await getIssuesList(`https://readcomiconline.to/Comic/${req.params.comicLink}`))
})

router.get('/comic-book/:name/:issueLink', async (req, res) => {
    const { name, issueLink } = req.params
    const myPath = `./public/comics/${name}/${issueLink}`;

    if (!fs.existsSync(myPath)){
        console.log('Comics is start loading')
        await getComicBook(`https://readcomiconline.to/Comic/${name}/${issueLink}?id=${req.query.id}&readType=${req.query.readType}`, name, issueLink);
        console.log('Comics has been downloaded')        
    } 
    console.log('Start following')

    console.log('This link')
    const link = {
        name: `${name.replace(/\-/gm, " ")} (${issueLink.replace(/\-/gm, " ")})`,
        pages: []
    }

    fs.readdirSync(myPath).forEach((elem, i) => {
        link.pages = link.pages.concat(`http://localhost:8080/picture/comics/${name}/${issueLink}/${i}.jpg`)
    })

    let ner = link.pages 
    ner = ner.sort((a, b) => a - b);
    console.log(ner)
    return res.send(link)

})

router.post('/translation/', async (req, res) => {
    
    const { text } = req.body
    return res.send(await translateText(text)) 
})

router.post('/detectionText/', async (req, res) => {
    
    const { image } = req.body
    return res.send(await detectionText(image)) 
})

module.exports = router;