const paises = ["Canadá", "Sokovia", "Wakanda", "Alemanha", "Espanha"]
paises.push("Brasil");
    console.log(paises)

//removendo do final
paises.pop()
    console.log(paises)

//adicionando ao inicio
paises.unshift("Brasil")
    console.log(paises)

// removendo do inicil
paises.shift(0);
    console.log(paises)

//imprimindo o ultimo
const ultimoPais = paises[paises.length - 1]
console.log(ultimoPais) 

//imprimindo o segundo país
console.log(paises[1])

//imprimindo o index 2
console.log(paises[2])
