//executar usando node cli.js ./files/post.md
import getFile from './index.js';
import chalk from 'chalk';

const path = process.argv;

async function processText(filePath){
    const result = await getFile(path[2]);
    console.log(chalk.yellow('Lista de Links localizados no arquivo:'), result);

}

processText(path);