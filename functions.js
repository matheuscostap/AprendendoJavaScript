//Criando objeto diretamente
var produto = {nome:"Celular", preco:1500};

//Function Expression
var formulaImposto = function(preco){
	return preco * 0.1;
}

//Passando uma função por parâmetro
var calcularPreco = function(produto, formulaImposto){
	return produto.preco + formulaImposto(produto.preco);
}

//Invocando a funçao diretamente
console.log(calcularPreco(produto,formulaImposto));


//Função que retorna uma função
var helloWorld = function(){
	return function(){
		return "Hello World!";
	}
}

console.log(helloWorld); //Function
console.log(helloWorld()); //Pega o primeiro return
console.log(helloWorld()()); //Pegar segundo return com a string


//Utilizando função como método
var pessoa = {
	nome:"Matheus",
	idade:18,
	getIdade:function(){
		return this.idade;
	}
};

console.log(pessoa.getIdade());


//Declarando a função como método fora do objeto
var getIdade = function(){
	return this.idade;
}

var pessoa2 = {
	nome:"Kannemann",
	idade:26,
	getIdade: getIdade
}

console.log(pessoa2.getIdade());


//Call e Apply passando um escopo. Function.call(escopo)
//Se a função tiver parâmetros, com o call passa os parâmetros normalmente
//e com apply passa em forma de array.

var getNome = function(sobrenome){
	return this.nome.concat(sobrenome);
}

var pessoa3 = {
	nome:"Pedro",
	idade:30,
	getIdade: getIdade,
	getNome: getNome
}

console.log("Call e Apply");
console.log(getNome.call(pessoa3, " Geromel"));
console.log(getNome.apply(pessoa3, [" Geromel"]));


//Funções Contrutoras vs Funções Fábrica

//Função Fábrica
var criarTime = function(nome,estadio){
	return{
		nome: nome,
		estadio: estadio
	};
};

console.log("Função Fábrica");
console.log(criarTime("Grêmio","Arena do Grêmio"));
console.log(criarTime("Tottenham","White Hart Lane"));

//Função Construtora
var Carro = function(nome,marca){
	this.nome = nome; //this referencia o objeto que esta sendo criado com o "new"
	this.marca = marca;
};

console.log("Função Construtora");
console.log(new Carro("Golf","Volkswagen"));
console.log(new Carro("Camaro","Chevrolet"));


//Encapsulamento com Factory Function e Closures
var createCounter = function(){ //Factory Function, é apenas a função de um contador que deve ser atribuida para uma variavel
	var value = 0; //value encapsulado
	return { //retorna um objeto que contem uma propriedade add que é uma function ***
		add: function(){
			return ++value; //sem o this porque está dentro de um objeto diferente, retornaria undefined
		}
	};
};

var counter = createCounter(); //Atribuindo uma função contador para uma variável

console.log("Encapsulamento com Factory Function e Closures");
console.log(counter.value); //undefined
console.log(counter.add()); //Adiciona +1
console.log(counter.add());
console.log(counter.add());

//Conclusão: a variavel value se tornou privada e a função add se tornou publica
// *** O mesmo que um objeto diretamente criado -> return {add: function(){return value++;}

//Encapsulamento com Constructor Function
var Counter = function(){
	var value = 0; //value encapsulado
	this.add = function(){ //função publica
		return ++value;
	}
}

var counter2 = new Counter();

console.log("Encapsulamento com Constructor Function");
console.log(counter2.value); //undefined
console.log(counter2.add()); //Adiciona +1
console.log(counter2.add());
console.log(counter2.add());



//Função Imediatamente Ivocada
//Module Pattern
var contador = (function(){ // var variavel = (function(){})();
	var value = 0;
	return{
		add: function(){
			console.log("Adicionou!");
			return ++value;
		},
		reset: function(){
			console.log("Resetou!");
			value = 0;
		}
	}
})();

console.log("Module Pattern");
console.log(contador.value); //undefined
console.log(contador.add()); //Adiciona +1
console.log(contador.add());
console.log(contador.add());
console.log(contador.reset());
console.log(contador.add());


//Revealing Module Pattern
var contador = (function(){ // var variavel = (function(){})();
	var value = 0; //encapsulado
	var add = function(){ //encapsulado
		console.log("Adicionou!");
		return ++value;
	};
	var	reset = function(){ //encapsulado
		console.log("Resetou!");
		value = 0;
	}
	return{
		add: add, //publico
		reset: reset	//publico
	}
})();

console.log("Revealing Module Pattern");
console.log(contador.value); //undefined
console.log(contador.add()); //Adiciona +1
console.log(contador.add());
console.log(contador.add());
console.log(contador.reset());
console.log(contador.add());
 

//Array

//Filter
var carros = [];
carros[0] = {marca: "Ford", modelo:"Ka"};
carros[1] = {marca: "Volkswagen", modelo:"Gol"};
carros[2] = {marca: "Chevrolet", modelo:"Corsa"};

var carrosVolksvagen = carros.filter(function(elemento){
	return elemento.marca === "Volkswagen";
});

console.log(carrosVolksvagen);

//Every - se todos os elementos satisfazem a condição
var todos = carros.every(function (elemento){
	return elemento.marca === "Ford"; //Retorna true ou false
});

console.log("Every: " + todos);

//Some - se algum elemento satisfaz a condição
var algum = carros.some(function(elemento){
	return elemento.marca === "Chevrolet"; //Retorna true ou false
});

console.log("Some: " + algum);


//Map - deriva um novo array 
var modelos = carros.map(function(elemento){
	return elemento.modelo;
})

console.log("Modelos: " + modelos);


//Reduce - permite processar os itens do array sem alterar o array

var produtos = [];

produtos[0] = {nome:"Celular", preco: 1500};
produtos[1] = {nome:"Computador", preco: 3500};
produtos[2] = {nome:"Notebook", preco: 2000};

var valorTotal;

valorTotal = produtos.reduce(function(elementoAnterior , elementoAtual){
	return elementoAnterior + elementoAtual.preco;
}, 0); //valor inicial, é o elementoAnterior na primeira interação do laço, se não houvesse seria undefined

console.log(produtos);
console.log("Valor total dos produtos: " + valorTotal);


//Concat - concatena dois arrays em um NOVO ARRAY

var timesGauchos = ["Grêmio","Inter"];
var timesPaulistas = ["Corinthians","São Paulo"];

var brasileirao = timesGauchos.concat(timesPaulistas);

console.log("Brasileirão: " + brasileirao);


//Slice - fatia o array em uma posição inicial até uma posição final -1
//Não altera o array original

console.log("Slice (0,2): " + brasileirao.slice(0,2));
console.log("Slice (1,3): " + brasileirao.slice(1,3));
console.log("Slice (2): " + brasileirao.slice(2)); //até a ultima não precisa a posição final


//Reverse - inverte a ordem dos elementos
//Altera o array original

console.log("Reverse: " + brasileirao.reverse());


//Sort - ordenando os elementos, ordem alfabética por padrão

console.log("Sort (default): " + brasileirao.sort());

produtos.sort(function(a,b){ 
	return a.preco - b.preco; 
});
//retorna um numero negativo, zero ou positivo
//se for negativo: a fica ordenado em primeiro e b em segundo
//se for zero: fica inalterado
//se for positivo: b fica em primeiro e a fica em segundo

//Como funciona:
// Array produtos
// Celular - 1500
// Computador - 3500
// Notebook - 2000
// 1ª comparação -> Celular x Computador
// Celular fica na frente
// 2ª comparação -> Computador x Notebook
// Notebook fica na frente
// 3ª comparação -> Celular x Notebook (Outra volta no array)
// Celular fica na frente
// Repete até nenhum elemento se movimentar mais

console.log(produtos);


//Join - junta os elementos de um array separada por um elemento definido por parâmetro
//Retorna uma string

console.log("Join: " + brasileirao.join(" -> "));



//Expressões Regulares

//Criando usando duas barras / <regexp> /
var regExp = /abc/;
console.log("RegExp: " + regExp);

//Criando usando new RegExp();
var regExp = new RegExp("abc");
console.log("RegExp: " + regExp);


//Reconhecendo numero de telefone

var regExp = /9999-9999/;
var telefone = "9999-9999";

console.log("Reconhecendo um numeor de telefone");
//Exec - retorna index e o input
console.log("Exec: " + regExp.exec(telefone));

//Test - retorna true ou false
console.log("Test: " + regExp.test(telefone));


//Telefone com codigo de area
// \ -> escapar de caracteres especiais

var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log("Escape de caracteres especiais");
console.log("Exec: " + regExp.exec(telefone));
console.log("Test: " + regExp.test(telefone));


// ^ -> inicia com determinado caractere
// $ -> termina com determinado caractere

var regExp = /^\(48\) 9999-9999$/;
var telefoneCorreto = "(48) 9999-9999";
var telefoneIncorreto = "48 9999-9999 meu telefone";
console.log("Inicio e fim");
console.log("Exec: " + regExp.exec(telefoneCorreto));
console.log("Exec: " + regExp.exec(telefoneIncorreto));
console.log("Test: " + regExp.test(telefoneCorreto));
console.log("Test: " + regExp.test(telefoneIncorreto));


//Flexibilizando a regexp
//Grupos de caracteres
// ^ dentro de um grupo vale como negação
// "-" - traço é um range
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone1 = "(51) 8565-4494";
var telefone2 = "(51) 1234-4165";

console.log("Grupos de caracteres");
console.log("Exec: " + regExp.exec(telefone1));
console.log("Test: " + regExp.test(telefone1));
console.log("Exec: " + regExp.exec(telefone2));
console.log("Test: " + regExp.test(telefone2));


//Quantificadores
//{n} - um numero específico
//{n,} - um número mínimo
//{n,m} - um numero mínimo e máximo
//? - zero ou um
//* - zero ou mais
//+ - um ou mais

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/; //aceitando 9 dígitos com hífen opcional
var telefone1 = "(51) 98565-4494";
var telefone2 = "(51) 12344165";

console.log("Quantificadores");
console.log("Exec: " + regExp.exec(telefone1));
console.log("Test: " + regExp.test(telefone1));
console.log("Exec: " + regExp.exec(telefone2));
console.log("Test: " + regExp.test(telefone2));


//Telefones em uma estrutura de tabela
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;

var telefoneTable = "<table><tr><td>(51) 98745981</td><td>(51) 8565-4494</td><td>(55) 4587-6984</td></tr></table>"
console.log("Telefone em uma tabela");
console.log("Exec: " + regExp.exec(telefoneTable));
console.log("Test: " + regExp.test(telefoneTable));



//Metacaracteres
// . - qualquer caractere
// \w - conjunto [a-zA-Z0-9_]
// \W - conjunto [^a-zA-Z0-9_] 
// \d - conjunto [0-9]
// \D - conjunto [^0-9]
// \s - espaço em branco
// \s - não espaço em branco
// \n - qubra de linha
// \t - tab

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

var telefoneTable = "<table><tr><td>(51) 98745981</td><td>(51) 8565-4494</td><td>(55) 4587-6984</td></tr></table>"
console.log("Metacaracteres");
console.log("Exec: " + regExp.exec(telefoneTable));
console.log("Test: " + regExp.test(telefoneTable));


//Extraindo o telefone das linhas

//Modificadores
// i - case insensitive
// g - global matching
// m - multiline matching

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; //g no final da regExp, new RegExp("abc",g);

var telefoneTable = "<table><tr><td>(51) 98745981</td><td>(51) 8565-4494</td><td>(55) 4587-6984</td></tr></table>"

console.log("Extraindo os telefones");
console.log(telefoneTable.match(regExp)); //match -> função da String


//Substituindo todos os telefones
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g; 

var telefoneTable = "<table><tr><td>(51) 98745981</td><td>(51) 8565-4494</td><td>(55) 4587-6984</td></tr></table>"

console.log("Substituindo os telefones");
console.log(telefoneTable.replace(regExp, "telefone")); //replace -> função da String



//Date
var hoje = new Date(); //pega a data do interpretador
console.log(hoje);
console.log(typeof hoje);

var natal = new Date(1419465600000); //passando ms como parâmetro
console.log(natal);

Date.parse("2017/10/13"); //pega os ms de uma data

var aniversario = new Date("1999/01/04"); //passando string
console.log(aniversario);

new Date("2017-10-13T10:00:00-02:00"); //data formato ISO 8601 descontando o offset

new Date(2017,11,10,08,13,00); //passando a própia data, mês começa em 0


//Statement
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus venenatis maximus. Sed bibendum eu leo eleifend sodales. Phasellus pellentesque, massa eu posuere imperdiet, neque nibh pellentesque diam, gravida feugiat leo justo pulvinar nisl. Quisque venenatis risus sapien, a vehicula lorem dignissim a."

var HackerTextError = function(message){
	this.message = message;
	this.name = "HackerTextError";
}

var toHackerCase = function(text){
	if(!text) throw new HackerTextError("Invalid text!");
	if(typeof text != "string") throw new HackerTextError("Invalid type!");

	var hackerTextArray = [];
	var i = 0;
	while(i < text.length){
		switch(text.charAt(i)){
			case "o": hackerTextArray.push(0); break;
			case "l": hackerTextArray.push(1); break;
			case "e": hackerTextArray.push(3); break;
			case "a": hackerTextArray.push(4); break;
			case "s": hackerTextArray.push(5); break;
			case "t": hackerTextArray.push(7); break;
			default: hackerTextArray.push(text.charAt(i));
		}
		i++;
	}

	return hackerTextArray.join("");
}

try{
	console.log(toHackerCase());
}catch(e){
	console.log("Error: " + e.message + " " + e.name);
}

try{
	console.log(toHackerCase(10));
}catch(e){
	console.log("Error: " + e.message + " " + e.name);
}

console.log(toHackerCase(text));


//Herança

var homem = {
	sexo: "masculino"
}

var joao = {
	nome: "João",
	idade: 20,
	__proto__: homem //propriedade proto pode não funcionar em alguns interpretadores
}

var pedro = {
	nome: "Pedro",
	idade: 18,
}
Object.setPrototypeOf(pedro,homem); 

var matheus = Object.create(homem);
matheus.nome = "Matheus";
matheus.idade = 18;


console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);
console.log(matheus);
console.log(matheus.sexo);

//Shadowing
//Busca de uma propriedade consultando cada protótipo da cadeia de protótipos
//Se a propriedade tiver o mesmo nome em dois protótipos em uma cadeia, será retornado o primeiro 

console.log(Object.keys(joao)); //Retorna apenas as propriedades que existem em joao

for (var property in joao) {
	console.log(property); //o for in verifica em todos os níveis
}

//[[Prototype]] x prototype 
//[[Prototype]] - (conceito) prototipo um objeto que pode ser outro objeto ou null
//prototype - (propriedade) só existe em funções

var Homem = function(nome, idade){
	this.nome = nome;
	this.idade = idade;
}

Homem.prototype.sexo = "masculino"; 

var cleston = new Homem("Cléston", 20); //Cléston vai ter a propriedade sexo porque o "new" injetou o prototipo de Homem no prototipo de Cléston mas Esdras não terá
console.log(cleston);
console.log(cleston.sexo);

var esdras = {};
esdras.__proto__ = Homem.prototype; //É isso que ocorre quando se usa o "new", insere na propriedade __proto__ (ou similar) do objeto a propriedade prototype da função contrutora
Homem.call(esdras,"Esdras",40);
console.log(esdras);
console.log(esdras.sexo);

//A PROPRIEDADE NÃO SERÁ DO OBJETO! SERA DO SEU PROTOTIPO!´SÓ SERA REFERENCIADO.

var _new = function(f){ 
	var obj = {};
	obj.__proto__= f.prototype;
	f.apply(obj,Array.prototype.slice.call(arguments,1));
	return obj;
}

var andre = _new(Homem, "André",49);
console.log(andre);