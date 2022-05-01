function trocaVogais(parametro) {
setTimeout(()=>{
    for (let i = 0; i < parametro.length; i++) {
        const element = parametro[i];
        if(element.match(/[aeiou]/)){
            parametro[i]=1;
            console.log('aoba')
        }
        console.log(parametro)
    }

},3000)
    return parametro
    // return parametro.replaceAll(/[aeiou]/g,1)
} 

    console.log(
    trocaVogais('aeiou'))


    function trocaVogais(parametro) {
        let resposta = "";
        for (let i = 0; i < parametro.length; i++) {
          resposta += parametro[i].match(/[aeiou]/) ? 1 : parametro[i];
        }
      
        return resposta;
      }
      
      console.log(trocaVogais("aefiou"));