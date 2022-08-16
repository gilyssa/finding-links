//executar usando node cli.js ./files/post.md
import getFile from './index.js';
import chalk from 'chalk';
import validationURLs from './http-validation.js';

const path = process.argv;

async function processText(filePath){
    const result = await getFile(path[2]);
    if(path[3] === 'validate'){
        console.log(chalk.yellow('Links Validados'), await validationURLs(result));
    } else {
        console.log(chalk.yellow('Lista de Links localizados no arquivo:'), result);
    }
}

processText(path);