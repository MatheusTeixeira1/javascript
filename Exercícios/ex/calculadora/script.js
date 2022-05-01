function começar(){
    var n1=Number(window.prompt('Digite o primeiro numero'))
    var operacao=n1
    while(operacao!='fim'){
        operacao=window.prompt('entre com uma letra para escolher a operação matemática: a(dição), (s)ubtração, (m)ultiplicaçã (divisão, ou (fim) paraencerrar.')
        var nx=Number(window.prompt('Digite mais um numero'))
        if(operacao=='a'){
            n1=n1+nx
            window.alert(`Resultado: ${n1}`)
        }else if(operacao=='s'){
            n1=n1-nx
            window.alert(`Resultado: ${n1}`)
        }else if(operacao=='m'){
            n1=n1*nx
            window.alert(`Resultado: ${n1}`)
        }else if(operacao=='d'){
            n1=n1/nx
            window.alert(`Resultado: ${n1}`)
        }
    }
}
// `Resultado: ${calculo1}, Se deseja continuar adicione mais um numero, caso contrario escreva 'sair'`