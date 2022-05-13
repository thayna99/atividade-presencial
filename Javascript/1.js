alert("Seja bem vindo!");
//prompt("digite seu nome");
 //document.write("Iniciando em Javascript");
 //prompt("Digite seu nome");
 //resp=confirm("Será que vai chover?");

// alert("Um retorno de carro\bem no meio desta lina");
//alert("\"Isto não saiu como deveria!\"disse ela");
 //alert("Esta linha tem tabulação\taqui");

// var a,b;
// a=5;
// b="5 Kg de açucar";
// document.write("O valor da variável A é:" +a);
 //document.write("<p>"+"O valor da variável B é:"+b+"</p>");
 //document.write("<p>"+"O valor da variável A dividido por 2 é:"+a/2+"</p>");
// document.write("<p>"+"O valor da variável B dividido por 2 é:"+b/2+"</p>");

 //var a,inteiro,flutuante;
// a="45.78 Kg de açucar";
 //inteiro=parseInt(a);
// flutuante=parseFloat(a);
 //document.write("O valor da variável A é:"+a);
 //document.write("<p>"+"O valor numérico inteiro da variável é:"+inteiro+"</p>");
// document.write("<p>"+"O valor da variável A dividido por 2 é:"+inteiro/2+"</p>");
// document.write("<p>"+"O valor da variável decimal da variável é:"+flutuante+"</p>");

//document.write("<p><b>"+"Usando o método toUpperCase"+"</p></b>");
//A= new String ("Olá pessoal!");
//b= new String ("Sejam bem vindos ao Javascript");
//document.write(A.toUpperCase());
//document.write(b.toUpperCase());
//document.write("<p><b>"+"voce poderá usar:"+"</p></b>");
//document.write("<p>"+A.toUpperCase()+b.toUpperCase()+"</p>");
//document.write("<p><b>"+"Usando o método toLowerCase"+"</p></b>");

//document.write(A.toLowerCase());
//document.write(b.toLowerCase());
//document.write("<p><b>"+"voce poderá usar:"+"</p></b>");
//document.write("<p>"+A.toLowerCase()+b.toLowerCase()+"</p>")

//hoje=new Date();
//xDia=hoje.getDay();
//diaSemana=new Array(7);
//diaSemana[0]="domingo";
//diaSemana[1]="Segunda-feira";
//diaSemana[2]="Terça-feira";
//diaSemana[3]="Quarta-feira";
//diaSemana[4]="Quinta-feira";
//diaSemana[5]="Sexta-feira";
//diaSemana[6]="Sábado";
//document.write("o número da semana é:+"+(xDia+1));
//document.write("<p><b>"+"hoje é:"+diaSemana[xDia]);


hoje=new Date();
xDia=hoje.getDay();
diaSemana=new Array(7);
pratododia=new Array(7);
precodoprato=new Array(7);

//dia da semana
diaSemana[0]="domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terça-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sábado";

document.write("o número da semana é:+"+(xDia+1));
document.write("<p><b>"+"hoje é:"+diaSemana[xDia]);

//prato do dia
pratododia[0]="Lasanha";
pratododia[1]="Bife acebolado";
pratododia[2]="Strogonoff";
pratododia[3]="Feijoada";
pratododia[4]="Baião de dois";
pratododia[5]="Feijão tropeira";
pratododia[6]="Filé a parmegiana";

document.write("o número da semana é:+"+(xDia+1));
document.write("<p><b>"+"hoje é:"+pratododia[xDia]);

//preço do prato
precodoprato[0]="23,00";
precodoprato[1]="12,00";
precodoprato[2]="21,00";
precodoprato[3]="35,00";
precodoprato[4]="14,00";
precodoprato[5]="20,00";
precodoprato[6]="25,00";

//document.write("preco do prato:+"+(xDia+1));
document.write("<p><b>"+"hoje é:"+ precodoprato [xDia]);










