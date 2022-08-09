import chalk from 'chalk';
 // Foi instalada uma dependência chamada chalk que irá auxiliar na localização de logs. $npm install chalk
 //precisei adicionar a seguinte linha no arquivo package json para rodar: "type": "module",
 //Esta outra forma de lidar com a importação("import modulo") e exportação de módulos veio com o famoso ES6 ou JS2015
import fs from 'fs'; // biblioteca FileSystem, utilizada para percorrer arquivos no node - import fs from 'fs'; - não necessita de instalação, só é preciso realizar a importação pois é nativa.

//extraindo links da expressão do parâmetro
function extractLinks(text){
    //expressão regular criada no site
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
//laço que vai inserir no array os objetos com chave do tipo do link e como atributo o próprio link em si
    while((temp = regex.exec(text)) !== null ){
        arrayResults.push({ [temp[1]]: temp[2] })
    }
    return arrayResults.length === 0 ? 'Não existem links no arquivo' : arrayResults;
}

//jogando o possível erro com o throw
//sincrono: bate e volta, assincrono: leva mais tempo pra finalizar e aguardamos o retorno continuando a execução do código, assim usando as promessas
function treatMistake(mistake){
    throw new Error(chalk.bgRedBright(mistake.code, 'Erro ao processar leitura do arquivo'));
}

// função assincrona usando promessa: ideal para textos grandes
export default async function getFile(filePath) {
    const encoding = 'utf-8';
    try {
      const text = await fs.promises.readFile(filePath, encoding)
      return extractLinks(text);
    } catch(erro) {
      treatMistake(erro);
    }
  }

//export default function getFile(filePath){
//    const encoding = 'utf-8';
//    fs.promises //chamando a promessa
//    .readFile(filePath, encoding)
//    .then((text) => console.log((extractLinks(text))))//leia o arquivo e depois realize
//    .catch((err) => treatMistake(err)) //pegar o erro caso ele ocorra
//}

//getFile('./files/post.md');


//função sincrona:
//function getFile(filePath){
//    const encoding = 'utf-8';
//    //recebendo o erro de maneira nativa do fs e jogando no if, se der erro irá entrar na nossa função de tratar erro, 
//    //caso não dê erro a função recebe o texto que foi lido
//    fs.readFile(filePath, encoding, (err, data) => { 
//        if(err){
//            treatMistake(chalk.bgRedBright(err));
//        }
//        console.log(chalk.bgYellowBright(data));
//    })
//}