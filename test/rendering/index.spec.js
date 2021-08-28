const fs = require('fs-extra');
const { resolve } = require('path');

const OPTS = {
  artifactsPath: 'test/rendering/__artifacts__',
};
const content = '.njs-viz[data-render-count="1"]';

describe('rendering', () => {
  let myBrowser;
  let myPage;

  const serve = require('@nebula.js/cli-serve'); // eslint-disable-line

  if (!process.env.BASE_URL) {
    let s;
    before(async function run() {
      this.timeout(10000);
      s = await serve({
        build: false,
        open: false,
      });

      process.env.BASE_URL = s.url;

      // eslint-disable-next-line global-require
      const puppeteer = require('puppeteer');
      myBrowser = await puppeteer.launch({ headless: true });
      // myBrowser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' });
      myPage = await myBrowser.newPage();

      myPage.on('pageerror', (e) => {
        console.log('Error:', e.message, e.stack);
      });
    });

    after(() => {
      s.close();
    });
  }

  after(async () => {
    await myBrowser.close();
  });

  const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');
  async function takeScreenshot(elm) {
    return myPage.screenshot({ clip: await elm.boundingBox() });
  }

  fs.readdirSync('test/rendering/data').forEach((file) => {
    const name = file.replace('.json', '');
    it(name, async () => {
      await myPage.goto(`${process.env.BASE_URL}/render/?app=${app}&render-config=${name}`);
      console.log(`${process.env.BASE_URL}/render/?app=${app}&render-config=${name}`);
      // this.timeout(10000);
      const elm = await myPage.waitForSelector(content, { visible: true, timeout: 5000 });
      const img = await takeScreenshot(elm);
      return expect(img).to.matchImageOf(name, OPTS, 0.0005);
    });
  });

  const plugins = ['lines', 'config1', 'config2'];
  const pluginPaths = ['lines/index.html', 'configurable/config1.html', 'configurable/config2.html'];

  plugins.forEach((plugin, index) => {
    it(`should render ${plugin} plugin correctly`, async function run() {
      const absolutePath = resolve(__dirname, `../../examples/plugins/${pluginPaths[index]}`);
      const localURL = `file://${absolutePath}`;
      console.log(localURL);
      await myPage.goto(localURL);
      const elm = await myPage.waitForSelector(content, {
        timeout: 5000,
      });
      this.timeout(5000);
      const img = await takeScreenshot(elm);
      return expect(img).to.matchImageOf(`plugin_${plugin}`, OPTS, 0.0005);
    });
  });
});
