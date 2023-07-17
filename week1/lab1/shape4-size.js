import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Enter the size: ', (size) => {
    // Convert size to a number
    size = parseInt(size);
   
    // Check if size is a valid number
    if (isNaN(size) || size <= 0) {
      console.log('Invalid size');
      rl.close();
      return;
    }
   
    // Generate the shape
    let shape = '';
   
    for (let i = -size + 1; i < size; i++) {
      let row = '';
      for (let j = -size + 1; j < size; j++) {
        if (Math.abs(i) + Math.abs(j) === size - 1) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      shape += row + '\n';
    }
   
    console.log(shape);
    rl.close();
   });
   
//node lab1/shape4-size.js
