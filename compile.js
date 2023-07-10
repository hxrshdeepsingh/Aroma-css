const { exec } = require('child_process');
const path = require('path');

const purgeCssCommand = 'npx purgecss --config ./purgecss.config.js';
const currentDirectory = __dirname;

const configFilePath = path.join(currentDirectory, 'purgecss.config.js');

exec(purgeCssCommand, { cwd: currentDirectory })