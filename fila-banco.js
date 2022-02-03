/*
Desafio 
O banco que você trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.

Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. A ordem de atendimento será decrescente: aqueles que receberam número maior deverão ser atendidos primeiro. 

Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.
*/

let N = gets();

for (let i = 0; i < N; i++) {
  let quantidadeClientes = parseInt(gets());
  let sms = gets();
  
  let senhas = sms.split(" ").map(senha => parseInt(senha));
  
  let senhasNaoOrdernadas = [...senhas];
  
  let quantidadeNaoMudou = 0;
    
  senhas.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  
  for (let i = 0; i < quantidadeClientes; i++) {
    if(senhas[i] === senhasNaoOrdernadas[i]) quantidadeNaoMudou++; 
  }

  console.log(quantidadeNaoMudou);
}
