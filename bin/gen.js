#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const fs = require('fs');
const findFile = (startPath, filter) => {
  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    if (filename == filter) {
      return true;
    }
  }
};

if (!findFile('./', 'package.json')) {
  console.log('could not find package.json, failed to setup');
  return;
}

const isYarn = findFile('./', 'yarn.lock');
const pm = isYarn ? 'yarn' : 'npm'; //package manager
console.log(`set up lint tools with ${pm}...`);

const installCommand = isYarn ? 'yarn add --dev' : 'npm i --save-dev';
console.log('install eslint');
// execSync(
//   `${installCommand} eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
// );

console.log('install prettier');
// execSync(`${installCommand} prettier`);
