/*
Desafio
O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.
 */

let nUniformes = parseInt(gets());

let uniformes = [];

while (nUniformes > 0) {
  let nome = gets();
  let corTamanho = gets();
  
  const [cor, tamanho] = corTamanho.split(" ");
  
  uniformes.push({ nome, cor, tamanho });
  
  nUniformes--;
}

uniformes.sort((a,b) => {
  if (a.cor > b.cor) return 1;
  if (a.cor < b.cor) return -1;
  if (a.tamanho > b.tamanho) return -1;
  if (a.tamanho < b.tamanho) return 1;
  if (a.nome > b.nome) return 1;
  if (a.nome < b.nome) return -1;
  return 0;
});

for (let uniforme of uniformes) {
  const { cor, nome, tamanho } = uniforme;
  console.log(`${cor} ${tamanho} ${nome}`)
}