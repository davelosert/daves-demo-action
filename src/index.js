const core = require('@actions/core');

const person = core.getInput('person', { required: true });
console.log(`Hello ${person}!`);
