const future = require('future-framework')
const generate = require('node-chartist')
const fs = require('fs')
const _ = require('lodash')

const fff = future(() => {
  return {
    value: Math.random(),
  };
}, {
  name: 'testing',
  input: {},
  output: {
    value: 'Float',
  },
})

const run = async () => {
  console.log('Starting to run...');
  console.log(await fff());

  const randomNumbers = [];
  randomNumbers.push((await fff()).value);
  randomNumbers.push((await fff()).value);
  randomNumbers.push((await fff()).value);
  randomNumbers.push((await fff()).value);
  randomNumbers.push((await fff()).value);
  console.log(randomNumbers)

  const options = {width: 400, height: 200};
  const data = {
    labels: ['a','b','c','d','e'],
    series: [
      {
        name: 'Random numbers',
        value: randomNumbers,
      },
    ],
  };

  const bar = await generate('line', options, data);
  fs.writeFileSync('./chart.html', `<link rel="stylesheet" type="text/css" href="./node_modules/node-chartist/dist/main.css">${bar}`);
};

run();
