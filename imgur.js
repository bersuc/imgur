const imgur = require('imgur')
//const clientId = require('./keys.json').clientId
const readlines = require('readline-sync')

const conteudo = readlines.question('Ola, diga um animal em ingles: ');
console.log(conteudo);
console.log(typeof(conteudo));

//imgur.setClientId(clientId)
buscadorDeImagem(conteudo)
.then(results => {
  return results;
})
.catch(err => console.error(err));


async function buscadorDeImagem(conteudo){
  const optionalParams = {sort: 'top', dateRange: 'month', page: 1}
  let response1 = await imgur.search(conteudo, optionalParams);
  let linkResposta = response1['data'][0]['link'];
  let respostaDados = response1['data'];
  let tamanhoObjeto = Object.keys(respostaDados).length;

  respostaDados.forEach(elemento => {
    console.log(elemento['link']);
  });  


}