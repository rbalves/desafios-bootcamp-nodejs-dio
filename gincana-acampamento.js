/**
Desafio
Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.

No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas uma a uma até que sobrasse apenas um aluno, que seria o vencedor.

No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que o primeiro detém. O aluno onde o número contado cair, deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.

Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.
*/

while (true) {
    let N = gets();

    if (N === "0") break;

    let circulo = [];

    for (let i = 0; i < parseInt(N); i++) {
        const [nome, ficha] = gets().split(" ");
        circulo.push([nome, ficha]);
    }

    function buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos) {
        const fichaEhPar = ficha % 2 === 0;
        const contaNoSentidoAntiHorario = () => posicaoAtual --;
        const contaNoSentidoHorario = () => posicaoAtual ++;

        if (fichaEhPar) {
        contaNoSentidoAntiHorario();
        } else {
        contaNoSentidoHorario();
        }
        
        const chegouNoUltimo = posicaoAtual > totalAlunos - 1;
        const chegouNoPrimeiro = posicaoAtual < 0;
        
        const voltarProInicio = () => posicaoAtual = 0;
        const voltarProFim = () => posicaoAtual = totalAlunos - 1;

        if (chegouNoUltimo) {
        voltarProInicio();
        }

        if (chegouNoPrimeiro) {
        voltarProFim();
        }
        
        return posicaoAtual;
    }

    function realizarContagem (ficha, posicaoAtual, totalAlunos) {
        for (let i = 0; i < ficha - 1; i++) {
            posicaoAtual = buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos)
        }
        
        return posicaoAtual;
    }

    let posicaoAtual = 0;

    let ficha = circulo[posicaoAtual][1];

    let totalAlunos = circulo.length;

    posicaoAtual = buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos);

    let [alunoRemovido] = circulo[posicaoAtual];

    while (totalAlunos > 1) {
        posicaoAtual = realizarContagem(ficha, posicaoAtual, totalAlunos);

        alunoRemovido = circulo[posicaoAtual][0];
        
        ficha = circulo[posicaoAtual][1];
        
        let posicaoIniciaContagem = buscarPosicaoAtual(ficha, posicaoAtual, totalAlunos)
        
        let [alunoIniciaContagem] = circulo[posicaoIniciaContagem];

        circulo = circulo.filter(([aluno]) => aluno !== alunoRemovido);
        
        totalAlunos = circulo.length;

        posicaoAtual = circulo.map(([aluno]) => aluno).indexOf(alunoIniciaContagem)
    }

    const [[vencedor]] = circulo;

    console.log(`Vencedor(a): ${vencedor}`);
}
  