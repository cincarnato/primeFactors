# Code Challenge: Prime Factors

Hallar los factores primos de un número. 

Tu resultado debe ser una cadena.

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: num
- **tipo**: Number
- **limitaciones**: debe ser positivo

## Salida

- **tipo**: String

## Ejemplo
**4** debe retornar **2 2** 

## Tests

### Test 1  

- **Parametros**: num = 4  
- **Resultado esperado**: "2 2"
---
### Test 2  

- **Parametros**: num = 24  
- **Resultado esperado**: "2 2 2 3"
---
### Test 3  

- **Parametros**: num = 59  
- **Resultado esperado**: "59"
---
### Test 4  

- **Parametros**: num = 1234567890 
- **Resultado esperado**: "2 3 3 5 3607 3803"
---
### Test 5  

- **Parametros**: num = 987654321098765  
- **Resultado esperado**: "987654321098765"