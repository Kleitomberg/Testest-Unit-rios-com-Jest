<h1 align="center"> Testes Unitários com Jest </h1>

<p align="center">
  <a href="#-tecnologia">Tecnologia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-configuração">Instalação e configuração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-criando-os-testes">Criando os Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-casos-para-testes">Casos para Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-os-testes">Rodando os Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

 
## ✨ Tecnologia

Para Execução dos testes foi utilizado o Framework:

- [Jest](https://jestjs.io/pt-BR/docs/getting-started)


## ⚙️ Instalação e Configuração

1 - Instalando o JEST
```bash
  npm install --save-dev jest
```

2 - Configurando o JEST
Adicione a seguinte seção ao seu package.json:
```bash
 {
  "scripts": {
    "test": "jest"
  }
}
```


## 💻 Criando os Testes

Após instalar e configurar o projeto, podemos agora criar nossos casos de teste em um <b>arquivo.test.js<b>

1 - Exporte as funções que deseja utilizar nos testes

```bash
  
function triangulo(ladoA, ladoB, ladoC) {

        let resp =''

        if(ladoA==ladoB && ladoB==ladoC){

            resp="Equilátero";

        }else if(ladoA!=ladoB && ladoB!=ladoC && ladoA!=ladoC){

            resp="Escaleno"

        }else
        {
            resp="Isósceles";

        }

        return resp

    }

    module.exports = triangulo;
```
2 - Importando as funções

```bash
const triangulo = require('../codigo/Triangulos.js');

```
3 - Criando os testes

```bash
test.only('equilateros', () => {
  expect(triangulo(10,10,10)).toBe("Equilátero");
});

test('escaleno', () => {
    expect(triangulo(7,8,10)).toBe("Escaleno");
  });

test('Isósceles', () => {
    expect(triangulo(19,19,16)).toBe("Isósceles");
  })

```


## Casos para Testes
Segue algumas opções de entradas para serem testadas

### Isósceless = dois lados iguais

    # triangulo 1

    a 19
    B 16
    C 19

    # triangulo 2

    a 10
    b 10
    c 12

### Escaleno = todos os lados diferentes

    # triangulo 1
    a = 7
    b = 8
    c = 10

    # triangulo 2

    a = 7
    b = 8
    c = 5

### Equilátero = todos os lados iguais

    # triangulo 1
    a = 9
    b = 9
    c = 9

    # triangulo 2

    a = 7
    b = 7
    c = 7
    
# ▷ Rodando os Testes
Para executar nossos casos de testes podemos usar 

```bash
yarn test

```
ou
```bash
npm run test
```
  
# 📈 Resultados
Apos rodar um dos comandos acima, o resultado será algo parecido com isso
 ```bash
  
 PASS  tests/triangulo.test.js
  √ equilateros (2 ms)
  ○ skipped escaleno
  ○ skipped Isósceles

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
Snapshots:   0 total
Time:        0.664 s, estimated 1 s
Ran all test suites.
Done in 1.78s.
  
```

## 🎬 Video
Demonstração em video
- [Clique aqui para assistir](https://jestjs.io/pt-BR/docs/getting-started)



