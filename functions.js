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
 