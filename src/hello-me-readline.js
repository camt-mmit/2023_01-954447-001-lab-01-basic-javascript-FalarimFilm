import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

//node src/hello-me-readline.js

rl.question('Input name: ', (name) => {
    console.log(`Hello ${name}.`);

    rl.close;
});

//console.log(`finish!!!`);