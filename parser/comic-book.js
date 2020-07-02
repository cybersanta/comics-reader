const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs')
const request = require('request')


const getComicBook = async (linkComicBook, name, issue) => {
    const browser = await puppeteer.launch({headless : true});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0');
    await page.setViewport({
      width: 1920, 
      height: 1080
    })
    await page.goto(linkComicBook);
    await page.waitFor('#divImage > p:last-child > img[src^="https"]');

    const html = await gettingHTML(page)
    const $ = cheerio.load(html);
    
    const pages = [];

    $('#divImage > p > img').each((i, elem) => {
      const imgSource = $(elem).attr('src')
      pages[i] = imgSource
    })

    await browser.close();

    await downloadComicBook(`./public/comics/${name}/${issue}`, pages)

}
  
const gettingHTML = async (page) => {
  return page.evaluate(() => {
    const comics = document.querySelectorAll('body');
    const comicsHTML = Array.from(comics).map(c => c.innerHTML)
    return comicsHTML[0]
  })
}

const downloadComicBook = async (dir, pages) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, {recursive: true});
    pages.forEach((element, i) => {
      download(element, `${dir}/${i}.jpg`, ()=> {})
    });
  }else {
    console.log('alrady created')
    return
  }
}

const download = (uri, filename) =>{
    request(uri).pipe(fs.createWriteStream(filename));
};



module.exports = {
    getComicBook
};
  