const imgur = require('imgur')
const readlines = require('readline-sync')

const conteudo = readlines.question('Hi! Say an animal name: ');
console.log('You searched for: ' + conteudo);

buscadorDeImagem(conteudo)
.then(results => {  
  return results;
})
.catch(err => console.error(err));


async function buscadorDeImagem(conteudo){
  /*
  sort - Accepts 'time', 'viral', or 'top' as a value. Defaults to top.
  dateRange - Accepts 'day', 'week', 'month', 'year', or 'all' as a value. Defaults to all.
  page - Accepts an integer (e.g. 1, 2, 3, 4) as a value. Defaults to 1.
  */
  const optionalParams = {sort: 'time', dateRange: 'all', page: 1}
  let response1 =     await imgur.search(conteudo, optionalParams);
  let linkResposta = await response1['data'][0]['link'];
  let respostaDados = await response1['data'];

  
  respostaDados.forEach(elemento => {
    console.log(elemento['link']);
  });  


}