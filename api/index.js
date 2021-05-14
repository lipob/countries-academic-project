//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { add } = require('./src/controllers/countries.js');
const { conn } = require('./src/db.js');
const { Country, Activity } = require('./src/db.js');
const axios = require('axios');

function fillDatabaseWithCountries() {
    return axios.get('https://restcountries.eu/rest/v2/all')
      .then(results => {
        const countriesData = results.data;
        countriesData.map(country => Country.create({
          id: country.alpha3Code,
          name: country.name,
          flag: country.flag,
          capital: country.capital,
          region: country.region,
          subregion: country.subregion,
          area: country.area,
          population: country.population
        }))
      })
}

// Syncing all the models at once.
conn.sync()
.then(() => {
    Country.count()
        .then(c => {
            console.log(c);
            if(c === 0) {
                fillDatabaseWithCountries()
            };
        });
})
.then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});