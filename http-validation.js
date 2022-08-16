import fetch from 'node-fetch';

function treatError(erro) {
    throw new Error(erro.message);
  }
  
  async function checkStatus(arrayURLs) {
    try {
      const arrayStatus = await Promise
        .all(arrayURLs
          .map(async url => {
            const res = await fetch(url)
            return res.status;
      }))
      return arrayStatus;
    } catch(erro) {
      treatError(erro);
    }
  }
  
  function generateArrayURLs(arrayLinks) {
    return arrayLinks
      .map(objetsLink => Object
        .values(objetsLink).join());
  }

export default async function validationURLs(arrayLinks) {
    const links = generateArrayURLs(arrayLinks);
    const statusLinks = await checkStatus(links);
    
    const resultados = arrayLinks.map((objeto, indice) => ({
      ...objeto,
      status: statusLinks[indice]
    }))
    return resultados;}
