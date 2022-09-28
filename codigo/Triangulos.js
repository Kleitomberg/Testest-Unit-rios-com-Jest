
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
