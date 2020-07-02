const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


const getComicsList = async (comicsName) => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0');
  await page.setViewport({
    width: 1920, 
    height: 1080
  })
  await page.goto('https://readcomiconline.to/');
  await page.waitFor('#keyword');
  await page.type('[name=keyword]', comicsName + String.fromCharCode(13));
  await page.waitFor('.listing > tbody > tr:last-child');
  await page.waitFor('.listing > tbody > tr:last-child > td:nth-child(1) > a');

  const html = await gettingHTML(page);

  const $ = cheerio.load(html);

  console.log($('tr'))

  const comicsList = [];

  $('tr').each((i, elem) => {
    if (i == 0 || i == 1) { return; }
    const name = $(elem).find('td:nth-child(1) > a').text().trim();
    let link = $(elem).find('td:nth-child(1) > a').attr('href');
    link = link.substring(7, link.length)
    const latestIssue = $(elem).find('td:nth-child(2)').text().trim();
    comicsList[i - 2] = { name,
                      link,
                      latestIssue }
  })

  
  await browser.close();
  console.log(comicsList);

  return comicsList
}

const gettingHTML = async (page) => {
  return page.evaluate(() => {
    const comics = document.querySelectorAll('body');
    const comicsHTML = Array.from(comics).map(c => c.innerHTML);
    return comicsHTML[0];
  })
}


module.exports = {
  getComicsList
};