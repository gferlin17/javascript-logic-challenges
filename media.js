const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é:", media);



if (media >= 7) {
    console.log("Aprovado com média: " + media);
}  else if (media < 7 && media >= 5) {
    console.log("Recuperação com média: " + media);
} else {
    console.log("Reprovado com média: " + media);
}