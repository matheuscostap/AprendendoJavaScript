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

console.log(criarTime("Grêmio","Arena do Grêmio"));
console.log(criarTime("Tottenham","White Hart Lane"));

//Função Construtora
var Carro = function(nome,marca){
	this.nome = nome; //this referencia o objeto que esta sendo criado com o "new"
	this.marca = marca;
};

console.log(new Carro("Golf","Volkswagen"));
console.log(new Carro("Camaro","Chevrolet"));
