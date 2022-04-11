const prettify = require('html-prettify');
const fs = require ('fs')

console.log('Cleaning up index.html...')

const file = fs.readFileSync('./dist/index.html','utf-8')
const output = file.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'')

fs.writeFileSync('./dist/index.html', prettify(output), 'utf-8')
fs.rmSync('./dist/assets', { recursive: true, force: true })

console.log('Writing new index.html and removing unused assets 🥲')