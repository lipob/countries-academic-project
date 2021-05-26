const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('flag', () => {
      it('should throw an error if flag is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid flag')))
          .catch(() => done());
      });
      it('should work when its a valid flag url', () => {
        Country.create({ flag: 'https://restcountries.eu/data/chl.svg' });
      });
    });
    describe('region', () => {
      it('should throw an error if region is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid region')))
          .catch(() => done());
      });
      it('should work when its a valid region', () => {
        Country.create({ region: 'América Latina' });
      });
    });
    describe('population', () => {
      it('should throw an error if population is not an integer', (done) => {
        Country.create({ population: 'un string'})
          .then(() => done(new Error('It requires an integer value')))
          .catch(() => done());
      });
      it('should work when its a valid number', () => {
        Country.create({ population: 540000 });
      });
    });
  });
});
