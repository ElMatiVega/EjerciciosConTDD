// 1- iniciamos para crear pakage JSON
npm init -y

// 2- vitest
npm install -D vitest

ATTENCION "devDependencies": {
    "standard": "^17.0.0",
    "vitest": "^0.31.0" 
    <!-- el piquito de pato rompe hay que sacarlo -->
  },

// 3-
npm install standard -D//conjuntos de regla que detecta malas practicas, errores, fallos estaticos en el codigo

// 4- y agrego al p.json
"eslintConfig": {
    "extends":"./node_modules/standard/eslintrc.json"
  }

// 5- agregar y reemplazar el script para testing
 "scripts": {
    "test": "vitest",
    "coverage":"vitest run --coverage"
  },

  // 6- creamos carpeta TEST

  // 7- archivo fizzBuzz.test.js y lo corremos en terminal  npm run test

  // 8- agregar en el pJOSN "type": "module" para poder usar los import

  // 9- creacion del describe con el it("fizzBuzz debe ser una funcion"), el test debe dar rojo que no pasa.
  // 10- hacer que pase el test creando la fn fizzBuzz dentro del archivo del test


//Can-configure.ts es el reto 23 de adventJS ¿Puedes reconfigurar las fábricas para no para de de crear regalos?
https://2021.adventjs.dev/challenges/23