const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

describe('on page load', () => {
  test('h1 check "no-notes" after page loaded', async () => {
    let browser = await puppeteer.launch({})
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    })
    await page.goto('http://localhost:3001/');
    setTimeout( async function (){ let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML)
    const html = await page.$eval('.no-notes', e => e.innerHTML);
    expect(html).toBe('No notes');
    browser.close();}, 2000 )
  }, 16000)

})