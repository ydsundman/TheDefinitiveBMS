// Loosely based on https://gist.github.com/joelbowen/1d2f2dfa471efad2154e6318c195b77e

const baseConfig = require('./base-app.json');
const env = process.argv.length === 3 ? process.argv[2] : 'dev';

console.log(`Application configuration loaded from base-app.json, env: ${env}`);

const config = Object.assign({}, baseConfig);

const fs = require('fs');
const path = require('path');

const dotEnvFile = path.join(__dirname, `../.env.${env}`);

console.log('Environment configuration settings loaded from', dotEnvFile);

if (fs.existsSync(dotEnvFile)) {
  require('dotenv').config({
    path: dotEnvFile,
  });
}

const prefix = new RegExp('^YDS_', 'i');
console.log('Using environment configurations that match', prefix);

const getClientEnvironment = () => Object.keys(process.env)
  .filter(key => prefix.test(key))
  .reduce((acc, key) => {
    if (process.env[key]) {
      acc[key.replace(prefix, '')] = process.env[key];
    }
    return acc;
  }, {});

config.expo.extra = getClientEnvironment();

console.log('Configuration contents generated, writing to app.json');
fs.writeFileSync('app.json', JSON.stringify(config, null, 2), 'utf8');
