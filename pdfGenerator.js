#!/usr/bin/node

const fs = require('fs');
const path = require('path');
const pdf = require('html-pdf');
const options = { format: 'Letter' };

var html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

pdf.create(html, options).toFile(path.join(__dirname, 'file.pdf'), function(err, res) {
    if (err) return console.log(err);
    console.log(res);
});
