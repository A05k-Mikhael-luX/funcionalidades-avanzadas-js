// Escribe tu código aquí:
const colors = new Set()

colors.add('Rojo')
colors.add('Verde')
colors.add('Azul')
colors.add('Rojo') //Intentar agregar un color duplicado

console.log('colores en el set: ',colors)

const colorToCheck = 'Verde'
console.log(`¿${colorToCheck} existe en el Set? 
${colors.has(colorToCheck)}`)

