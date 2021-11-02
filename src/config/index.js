const _ = require('lodash');
const path = require('path');

const config = require('./config');

const rootPath = path.normalize(`${__dirname}/..`);

const env = process.env.NODE_ENV || 'development';

const commonConfig = {
  env,
  root: rootPath,
};

const exportConfig = _.merge(commonConfig, config);

module.exports = exportConfig;