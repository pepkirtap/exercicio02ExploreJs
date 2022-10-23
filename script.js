
/*- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;



Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/


let students =[
  {
    name: "Carlos",
    noteOne: 6,
    noteTwo:8
  },
  {
    name: "Elisa",
    noteOne: 9,
    noteTwo: 6,
  },
  {
    name: "João",
    noteOne: 3,
    noteTwo: 4,
  },
  {
    name: "Pedro",
    noteOne: 7,
    noteTwo: 5,
  },
]


function average (noteOne, noteTwo){
  let result= (noteOne + noteTwo) / 2
  
  if (result >= 7){
    return result + " Parabens Voce foi aprovado no concurso!! "

  }else{
   return result + " Nao foi dessa vez, continue tentando!! "
  }
  
}

let studentName = []

for(student of students){
  studentName.push(alert(`A média do(a) aluno(A) ${student.name} É: ${average(student.noteOne, student.noteTwo)} `))
}






