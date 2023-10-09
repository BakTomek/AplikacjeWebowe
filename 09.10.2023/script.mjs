import * as http from 'http';
import * as fs from 'fs';
import { Readable } from 'stream';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

async function * generate() {
    for (let i = 1; i <= 20; i++){
        yield getRandomArbitrary(-420, 2137);
    }
}

const readable = Readable.from(generate());
const writableStream = fs.createWriteStream(`random-${Date.now().toString()}.txt`);

readable.on('data', (chunk) => {
    console.log(chunk);
    writableStream.write(chunk.toString() + ', ');
})



