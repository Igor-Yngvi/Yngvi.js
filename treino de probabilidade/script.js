let body = document.getElementsByTagName("body");
let pokebola = document.querySelector(".pokeboll");
let namePokemon = document.querySelector(".name");
let botao = document.querySelector(".resetar");
let getPokemon;

function pokemon() {
	classPokemon = Math.floor(Math.random() * 100);
	console.log(classPokemon);
	
	if(classPokemon <= 2 && classPokemon >= 0){
		getPokemon = Math.floor(Math.random() * 2);
		console.log(getPokemon);
		
		switch (getPokemon) {
			case 1:
				pokebola.src = 'img/pokemons/mewtwo.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(mewtwo)";
				break;
			case 2:
				pokebola.src = 'img/pokemons/mew.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(mew)";
				break;
			default: 
				pokebola.src = 'img/pokemons/ditto.png';
				namePokemon.innerHTML = "(ditto)";
				pokebola.style.width = "20vh";
		}
	}else if(classPokemon <= 6 && classPokemon >= 3) {
		getPokemon = Math.floor(Math.random() * 3);
		console.log(getPokemon);
		
		switch (getPokemon) {
			case 1:
				pokebola.src = 'img/pokemons/articuno.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(articuno)";
				break;
			case 2:
				pokebola.src = 'img/pokemons/moltres.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(moltres)";
				break;
			case 3:
				pokebola.src = 'img/pokemons/zapdos.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(zapdos)";
				break;
			default: 
				pokebola.src = 'img/pokemons/ditto.png';
				namePokemon.innerHTML = "(ditto)";
				pokebola.style.width = "20vh";
		}
	}else if(classPokemon <= 16 && classPokemon >= 6) {
		getPokemon = Math.floor(Math.random() * 3);
		console.log(getPokemon);
		
		switch (getPokemon) {
			case 1:
				pokebola.src = 'img/pokemons/charmander.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(charmander)";
				break;
			case 2:
				pokebola.src = 'img/pokemons/bulbasaur.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(bulbasaur)";
				break;
			case 3:
				pokebola.src = 'img/pokemons/squirtle.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(squirtle)";
				break;
			default: 
				pokebola.src = 'img/pokemons/ditto.png';
				namePokemon.innerHTML = "(ditto)";
				pokebola.style.width = "20vh";
		}
	}else if(classPokemon <= 26 && classPokemon >= 16) {
		getPokemon = Math.floor(Math.random() * 2);
		console.log(getPokemon);
		
		switch (getPokemon) {
			case 1:
				pokebola.src = 'img/pokemons/pikachu.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(pikachu)";
				break;
			case 2:
				pokebola.src = 'img/pokemons/eevee.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(eevee)";
				break;
			default: 
				pokebola.src = 'img/pokemons/ditto.png';
				namePokemon.innerHTML = "(ditto)";
				pokebola.style.width = "20vh";
		}
	}else if(classPokemon <= 46 && classPokemon >= 26) {
		getPokemon = Math.floor(Math.random() * 2);
		console.log(getPokemon);
		
		switch (getPokemon) {
			case 1:
				pokebola.src = 'img/pokemons/abra.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(abra)";
				break;
			case 2:
				pokebola.src = 'img/pokemons/eevee.png';
				pokebola.style.width = "20vh";
				namePokemon.innerHTML = "(eevee)";
				break;
			default: 
				pokebola.src = 'img/pokemons/ditto.png';
				namePokemon.innerHTML = "(ditto)";
				pokebola.style.width = "20vh";
		}
	}
	botao.style.display = "block";
}

function resetar() {
	window.location.reload();
}