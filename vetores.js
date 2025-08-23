const marcas = ["BMW", "AUDI", "FERRARI"];
console.log(marcas[2]);
console.log(marcas.at(2));

marcas.push("LAMBORGUINI");

for(let i = 0; i < marcas.length; i++){
    console.log(`Marca: ${marcas[i]} famoso`)
}


marcas.shift();
marcas.pop();

for (item of marcas){
    console.log("Restou: " + item);
}