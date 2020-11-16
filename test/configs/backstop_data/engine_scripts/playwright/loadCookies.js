const fs = require('fs');

module.exports = async (page, scenario) => {
  let cookies = [];
  const cookiePath = scenario.cookiePath;

  // READ COOKIES FROM FILE IF EXISTS
  if (fs.existsSync(cookiePath)) {
    cookies = JSON.parse(fs.readFileSync(cookiePath));
  }

  // // MUNGE COOKIE DOMAIN
  // cookies = cookies.map(cookie => {
  //   cookie.url = 'https://' + cookie.domain;
  //   delete cookie.domain;
  //   return cookie;
  // });

  // SET COOKIES
  const setCookies = async () => {
    await page.context().addCookies(cookies.map((cookie) => {
      if (!['Strict', 'Lax', 'None'].includes(cookie.sameSite)) {
        cookie.sameSite = 'None';
      }
      return cookie;
    }));
  };

  await setCookies();
  console.log('Cookie state restored with:', JSON.stringify(cookies, null, 2));
};
