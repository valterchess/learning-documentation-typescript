/**
 * no typescript os objetos "não" são de nenhum tipo exato.
 * Por exemplo, se construirmos um objeto que satisfaça uma interface,
 *  (ou seja que tenha um valor que possa corresponder a determinado valor desta interface)
 *  podemos usar esse objeto onde a interface é esperada,
 * (neste caso em uma function)
 *  mesmo que não haja nenhuma relação declarativa entre os dois.
 * 
 *  Os relacionamentos entre os tipos são determinados pelas propriedades que eles contêm,
 *  não se foram declarados com algum relacionamento específico.
 */


interface PointLike { //não está presente em nenhuma forma no tempo de execução.
    x: number;
    y: number;
}

interface Named {
    name: string;
}

function logPoin(point: PointLike) {
    console.log(`x = ${point.x}, y = ${point.y}`)
}

function logName(param:Named) {
    console.log(`Hello ${param.name}`)
}

const obj = {
    x: 0,
    y: 0,
    name: "Origin",
};

logPoin(obj);
logName(obj);
