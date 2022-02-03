/*
Desafio
Pedro e Fernando são os desenvolvedores em uma stratup e vão desenvolver o novo sistema de cadastro, e pediram a sua ajuda. Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:

A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
Além disso, a senha pode ter de 6 a 32 caracteres.
*/

function validadorDeSenha(senha) {
    const tamanho = senha.length;

    if(tamanho < 6 || tamanho > 32) return false;

    let regexCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    const temCaractereEspecial = regexCaracterEspecial.test(senha);

    if (temCaractereEspecial) return false;

    const temEspaco = senha.includes(" ");

    if (temEspaco) return false;

    const caracteres = senha.split("");

    let temLetraMaiuscula = false;
    let temLetraMinuscula = false;
    let temNumero = false;

    for(let caractere of  caracteres) {
        if (!isNaN(caractere)) {
            temNumero = true;
        } else {
            if (caractere === caractere.toLowerCase()) {
            temLetraMinuscula = true;
        }

        if (caractere === caractere.toUpperCase()) {
            temLetraMaiuscula = true;
        }
        }
    }

    return temLetraMaiuscula && temLetraMinuscula && temNumero;
    }

let senha = "";

do {
senha = gets();
if (senha !== "") {
    let valido = validadorDeSenha(senha);
    console.log("Senha " + (valido ? "valida." : "invalida."));    
}
} while (senha !== "");
