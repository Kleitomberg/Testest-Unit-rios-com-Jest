<h1 align="center"> 🧪 Testes Unitários com Jest 🧪 </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-configuração">Instalação e Configuração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-criando-os-testes">Criando os Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-casos-para-testes">Casos para Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-os-testes">Rodando os Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-resultados">Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-video">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

</p>


## ✨ Tecnologias

Para Execução dos testes foi utilizado o Framework:

- [Javascript](https://www.javascript.com/)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)


## ⚙ Instalação e Configuração

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

describe.only('module 1', () => {

    test.only('primeiro', () => {
    expect(triangulo(1, 2,3)).toBe("Escaleno");
    });


    test('segundo', () => {
        expect(triangulo(10, 10,10)).toBe("Equilátero");
    });


    test('terceior', () => {
        expect(triangulo(3, 2,3)).toBe("Isósceles");
    });

});

```

4 - Setup e teardown em JEST

Executa uma função antes que cada um dos testes neste arquivo seja executado. 
```bash
beforeEach(() => {
  // Clears the database and adds some testing data.
});
```

Executa uma função antes de qualquer um dos testes neste arquivo ser executado. 
```bash
beforeAll(() => {
  // Limpa o banco de dados e adiciona alguns dados de teste.

});
```

Executa uma função depois que todos os testes neste arquivo forem concluídos:

```bash
afterAll(() => {
  //comandos
});
```

Executa uma função após cada um dos testes deste arquivo completar.
```bash
afterEach(() => {
  //comandos
});
```



## 💡 Casos para Testes
Segue algumas opções de entradas para serem testadas(opcional)

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
  module 1
    √ primeiro (2 ms)
    ○ skipped segundo
    ○ skipped terceior

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
Snapshots:   0 total
Time:        0.902 s, estimated 1 s
Ran all test suites.
Done in 2.63s.

```

## 🎬 Video
Demonstração em video
- [Clique aqui para assistir](https://youtu.be/v9htsdkRFAk)


## 🤖 Configurando Actions

Podemos também automatizar a execução de nossos testes sempre que uma mudança é feita no codigo principal:

```bash

name: jestTest

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm install --save-dev jest
    - run: npm test
```

Status build

[![jestTest](https://github.com/Kleitomberg/Testest-Unit-rios-com-Jest/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Kleitomberg/Testest-Unit-rios-com-Jest/actions/workflows/node.js.yml)
