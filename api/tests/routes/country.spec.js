/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  flag: 'https://restcountries.eu/data/arg.svg',
  capital: 'Buenos Aires',
  region: 'América',
  id: 'ARG'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('it should get 404 if url does not exists', () =>
      agent.get('/paradise').expect(404)
    );
  });
  describe('GET /countries/:id', () => {
    it('should get 200 if country exists', () =>
      agent.get('/countries/ARG').expect(200)
    );
    it('it should get 404 if country id does not exists', () =>
      agent.get('/countries/456').expect(404)
    );
  });
  describe('GET /countries?name', () => {
    it('should get 200 if country name query match', () =>
      agent.get('/countries?name=Argentina').expect(200)
    );
    it('it should get 404 if country name does not match', () =>
      agent.get('/countries?name=kjhda').expect(404)
    );
  });
});
