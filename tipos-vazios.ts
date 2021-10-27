class Empty{}

function fn(args: Empty) {
    console.log(args);
}
/*
neste exemplo o TypeScript valida se o argumento passado para fn
 é válido Empty.
 Ele verifica a estrutra do argumento({k:10}) 
 e compara com a estrutura da class Empty{ }.
 E neste caso { k: 10 } tem todas as propriedades da class Empty
 pois a class Empty{ }, não tem nenhum argumento.
 (Como no caso da teoria de conjuntos, onde um conjunto vazio faz parte de todos os Universos de conjuntos)
*/
fn({k:10});