/*EJERCICIOS DE ES6
Iteracion 1: Arrows*/

/*-------------------------------------------------------------------------
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros
---------------------------------------------------------------------------*/

const functionArrowExercise = (a = 10, b = 5) => a + b

const functionArrowNoParam = functionArrowExercise()
console.log("🚀 ~ functionArrowNoParam:", functionArrowNoParam);

const functionArrowOneParam = functionArrowExercise(2)
console.log("🚀 ~ functionArrowOneParam:", functionArrowOneParam);

const functionArrowTwoParam = functionArrowExercise(2,2)
console.log("🚀 ~ functionArrowTwoParam:", functionArrowTwoParam);


/*EJERCICIOS DE ES6
Iteracion 2.1: Destructuring (Primer ejercicio)*/

/*-------------------------------------------------------------------------
2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
---------------------------------------------------------------------------*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const gameProperties = {title, gender, year}=game;
console.log("🚀 ~ gameProperties:", gameProperties);

/*EJERCICIOS DE ES6
Iteracion 2.2: Destructuring (Segundo ejercicio)*/

/*-------------------------------------------------------------------------
2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];
---------------------------------------------------------------------------*/

const fruits = ['Banana', 'Strawberry', 'Orange'];
const fruitsSplit = [fruit1, fruit2, fruit3] = fruits;
console.log("🚀 ~ fruit1:", fruit1)
console.log("🚀 ~ fruit2:", fruit2)
console.log("🚀 ~ fruit3:", fruit3);

/*EJERCICIOS DE ES6
Iteracion 2.3: Destructuring (Tercer ejercicio)*/

/*-------------------------------------------------------------------------
2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
---------------------------------------------------------------------------*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let bengalTiger = {name: 'Bengal Tiger', race: 'Tiger'}

const animalFunctionDestructuring = animalFunction(bengalTiger)
console.log("🚀 ~ animalFunctionDestructuring:", animalFunctionDestructuring);

/*EJERCICIOS DE ES6
Iteracion 2.4: Destructuring (Cuarto ejercicio)*/

/*-------------------------------------------------------------------------
2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
---------------------------------------------------------------------------*/

const car = {carname: 'Mazda 6', itv: [2015, 2011, 2020] }

const carProperties = {carname, itv}=car;
console.log("🚀 ~ carProperties:", carProperties);
const itvYears = [itvYear1, itvYear2, itvYear3]=itv;
console.log("🚀 ~ itvYears:", itvYears);

/*EJERCICIOS DE ES6
Iteracion 3.1: Spread operators (Primer ejercicio)*/

/*-------------------------------------------------------------------------
3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
---------------------------------------------------------------------------*/
const pointsList = [32, 54, 21, 64, 75, 43]
const copyPointsList = [...pointsList]
console.log("🚀 ~ copyPointsList:", copyPointsList);

/*EJERCICIOS DE ES6
Iteracion 3.2: Spread operators (Segundo ejercicio)*/

/*-------------------------------------------------------------------------
3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
---------------------------------------------------------------------------*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy}
console.log("🚀 ~ copyToy:", copyToy);

/*EJERCICIOS DE ES6
Iteracion 3.3: Spread operators (Tercer ejercicio)*/

/*-------------------------------------------------------------------------
3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
---------------------------------------------------------------------------*/

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
const pointsListSum = [...pointsList1, ...pointsList2];
console.log("🚀 ~ pointsListSum:", pointsListSum);

/*EJERCICIOS DE ES6
Iteracion 3.4: Spread operators (Cuarto ejercicio)*/

/*-------------------------------------------------------------------------
3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
---------------------------------------------------------------------------*/

const toyUpdate1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate2 = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const toyUpdateSum = {...toyUpdate1, ...toyUpdate2};
console.log("🚀 ~ toyUpdateSum:", toyUpdateSum);

/*EJERCICIOS DE ES6
Iteracion 3.5: Spread operators (Quinto ejercicio)*/

/*-------------------------------------------------------------------------
3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
---------------------------------------------------------------------------*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copyColors = [...colors];
const copyColorsFinal = copyColors.splice(2,1);
console.log("🚀 ~ copyColorsFinal:", copyColorsFinal)
console.log("🚀 ~ copyColors:", copyColors);

/*EJERCICIOS DE ES6
Iteracion 4.1: Map (Primer ejercicio)*/

/*-------------------------------------------------------------------------
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
---------------------------------------------------------------------------*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const userNames = users.map(user => user.name);
console.log("🚀 ~ userNames:", userNames);

/*EJERCICIOS DE ES6
Iteracion 4.2: Map (Segundo ejercicio)*/

/*-------------------------------------------------------------------------
4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
---------------------------------------------------------------------------*/

const ausers = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersAChanged = ausers.map((auser, index) => {
if (auser.name.startsWith("A")) {
    auser.name="Anacleto";
}
return auser.name;
});

console.log("🚀 ~ usersAChanged:", usersAChanged);

/*EJERCICIOS DE ES6
Iteracion 4.3: Map (Tercer ejercicio)*/

/*-------------------------------------------------------------------------
4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
---------------------------------------------------------------------------*/

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const checkIsVisited = cities.map((city, index) => {
    if (city.isVisited === true) {
city.name += " (Visitado)";
    }
    return city.name;
});
console.log("🚀 ~ checkIsVisited ~ checkIsVisited:", checkIsVisited);


