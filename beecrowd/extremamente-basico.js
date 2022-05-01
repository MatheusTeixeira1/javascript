//requisita acesso aos FileSistem
// var input=require('fs').readFileSync('stdin', 'utf8')
// var lines=input.split(' ')


var x=[8,1,9,1,3,7,5,4,1]
// console.log(x)
// console.log(x.sort((a,b,index)=>{
    
    
//     console.log(a)
//     console.log(b)
//     console.log('-----------------')
//     return a-b
    
// }))

// const result=x.sort((proximo,atual)=>{
//     console.log('proximo',proximo)
//     console.log('atual',atual)
//     console.log((proximo-atual)>0)
//     console.log('-----------------')
//     return proximo-atual
// })
// console.log('result',result)
const meusort = (arry,callback)=>{
    if(arry.length==0){
        return 1;
    }
    arry = callback(arry)
    return meusort(arry, callback)+arry.length
}
const resultado = meusort(x,(arry)=>{
    console.log('label callback',arry)
    arry.pop()
    return arry
})
console.log(resultado)

// var x=['Matheus','Ayaka','Luiz','Bode']
// x.forEach((nome,posição,lista)=>{
//     console.log(`Seu nome é ${nome}, sua posição é ${posição+1} de ${lista.length}`)
// })

// var a1={aluno:'Matheus',idade:'18',profissão:'vagabundo'}
// var a2={aluno:'Dio',idade:'23',profissão:'progamador'}
// var a3={aluno:'Leo',idade:'18',profissão:'universitario'}
// var Da=[a1,a2,a3]
// console.log(Da[2].idade)
// var x=[1,3,4,5]
// x.splice(1,1)
// console.log(x)

// var numeros=lines.map(item=>Number(item))
// numeros.sort((a,b)=>{
//     if(a>b)
//         return -1;
//     if(a<b)
//         return 1;
//     return 0;
    
// })
// var [A, B, C]=numeros
// if(A>=B+C){
//     console.log('NAO FORMA TRIANGULO')
// }else{
//     if(A**2===(B**2)+(C**2)){
//         console.log('TRIANGULO RETANGULO')
//     }else if(A**2>=(B**2)+(C**2)){
//         console.log('TRIANGULO OBTUSANGULO')
//     }else if(A**2<=(B**2)+(C**2)){
//         console.log('TRIANGULO ACUTANGULO')
//     }
//     if(A===B&&A===C&&B===C){
//         console.log('TRIANGULO EQUILATERO')
//     }else if(A===B||A===C||B===C){
//         console.log('TRIANGULO ISOSCELES')
//     }
// }


// var palavra='xyz'
// var chave=3
//     var alfabero=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     var c=0
//     var posi=[]
//     for(i=0;i<27;i++){
//         if(palavra[c]==alfabero[i]){
//             c++
//             posi.push(i)
//         }
//     }
//     console.log(posi)
//    for(i=0;i<posi.length;i++){
//        posi[i]=posi[i]+chave
//    }
//    var res=''
//    for(i=0;i<palavra.length;i++){
//        res=res+alfabero[posi[i]]
//    }
//    console.log(res)


// console.log(ehNumeroDriven(3))

// function ehNumeroDriven (numero) {
//     var calculo=1
//     for(i=1;i<1000;i++){
//         if((5**i)-2==numero){
//             return 'É desse tipo'
//         }else{
//             return 'Não é desse tipo'
//         }
//     }
//   }



// function yinYang (array) {
//     var x=''
//     for(i=0;i<array.length;i++){
//         if(array[i]%3==0&&array[i]%2==0){
//             x=x+'YinYang'
//         }else if(array[i]%2==0){
//             x=x+'Yin'
            
//         }else if(array[i]%3==0){
//             x=x+'Yang'
//         }else{
//             x=x+array[i]
//         }
//     }
// }




// console.log(proximosMultiplosDe5(16, 3))

// function proximosMultiplosDe5 (valorInicial, quantidade) {
//     var x=parseInt(valorInicial/5)
//     var numeros=[]
//     var y=1
//     for(i=x+1;numeros.length<quantidade;i++){
//         y=i*5
//         numeros.push(y)
//     }
//     return numeros
// }




// function indiceDoValor (array, valor) {
//   return array.indexOf(valor)
// }



// console.log(ehPalindromo('abccba'))
// function ehPalindromo (string) {
//     var x=string.length-1
//     var c=0
//     for(i=0;i<string.length;i++){
//         if(string[i]==string[x]){
//             c++
//             x--
//         }
//     }
//     return c==string.length
//   }



// var [n1, n2]=lines.map(item=>Number(item))

// if(n1 % n2 === 0 || n2 % n1 === 0){
//     console.log('Sao Multiplos')
// }else{
//     console.log('Nao sao Multiplos')
// }



// var ntxt=input.split(' ')
// var [l1,l2,l3]=ntxt.map(item=>Number(item))
// var perimetro=0
// var area=0
// if(l1+l2>l3&&l1+l3>l2&&l3+l2>l1){
//     perimetro=l1+l2+l3
//     console.log(`Perimetro = ${perimetro.toFixed(1)}`)
// }else{
//     area=((l1+l2)*l3)/2
//     console.log(`Area = ${area.toFixed(1)}`)
// }


// var ntxt=input.split(' ')
// var n=ntxt.map(item=>Number(item))
// var maior=n[0]
// var menor=n[1]
// var meio=0
// for(let i=0;i<n.length;i++){
//     if(n[i]>maior){
//         maior=n[i]
//     }
//     if(n[i]<menor){
//         menor=n[i]
//     }
// }
// for(let i=0;i<n.length;i++){
//     if(n[i]!==maior&&n[i]!==menor){
//         meio=n[i]
//     }
// }
// console.log(menor)
// console.log(meio)
// console.log(maior)
// console.log()
// console.log(n[0])
// console.log(n[1])
// console.log(n[2])


// var q=input.split(' ')
// var [x, y]=q.map(item=>Number(item))
// if(x===0&&y===0){
//     console.log('Origem')
// }else if(x>0&&y>0){
//     console.log('Q1')
// }else if(x<0&&y>0){
//     console.log('Q2')
// }else if(x<0&&y<0){
//     console.log('Q3')
// }else if(x>0&&y<0){
//     console.log('Q4')
// }else if(x===0&&y!==0){
//     console.log('Eixo X')
// }else if(x!==0&&y===0){
//     console.log('Eixo X')
// }


// var numeros=lines[0].split(' ')
// var [n1, n2, n3, n4]=numeros.map(item=>Number(item))
// var nE=Number(lines[1])
// var mediape=((n1*2)+(n2*3)+(n3*4)+n4)/10
// console.log(`Media: ${mediape.toFixed(1)}`)
// if(mediape>=7){
//     console.log('Aluno aprovado.')
// }else if(mediape>=5&&mediape<7){
//     console.log('Aluno em exame.')
//     console.log(`Nota do exame: ${nE.toFixed(1)}`)
//     mediaf=(mediape+nE)/2

//     if(mediaf>=5){
//         console.log('Aluno aprovado.')
//         console.log(`Media final: ${mediaf.toFixed(1)}`)
//     }else{
//         console.log('Aluno reprovado.')
//     }
// }else{
//     console.log('Aluno reprovado.')
// }

// var [cod, quant]=lines.map(item=>Number(item))
// var preco=0
// switch(cod){
//     case 1:
//         preco=4
//         break
//     case 2:
//         preco=4.5
//         break
//     case 3:
//         preco=5
//         break
//     case 4:
//         preco=2
//         break
//     case 5:
//         preco=1.5
//         break    
// }
// console.log(`Total: R$ ${(preco*quant).toFixed(2)}`)


// var n=Number(input)
// if(n>=0&&n<=25){
//     console.log('Intervalo [0,25]')
// }else if(n>25&&n<=50){
//     console.log('Intervalo (25,50]')
// }else if(n>50&&n<=75){
//     console.log('Intervalo (50,75]')
// }else if(n>75&&n<=100){
//     console.log('Intervalo (75,100]')
// }else{
//     console.log('Fora de intervalo')
// }

 
// var lines = input.split(' ');
// var [A, B, C]=lines.map(item=>Number(item))
// var delta=(B*B)-(4*A*C)
// var x1=0
// var x2=0
// if(delta>0 && A!==0){
//     x1=(-B+Math.sqrt((B*B)-(4*A*C)))/(2*A)
//     x2=(-B-Math.sqrt((B*B)-(4*A*C)))/(2*A)

//     console.log(`R1 = ${x1.toFixed(5)}`)
//     console.log(`R2 = ${x2.toFixed(5)}`)
// }else{
//     console.log('Impossivel calcular')
// }

// var X=input.split(' ')
// var [A,B,C,D]=X.map(item=>Number(item))

//     if((B>C)&&(D>A)&&(C+D>A+B)&(C>0)&&(D>0)&&A%2==0){
//         console.log("Valores aceitos")
//     }else{
//         console.log('Valores nao aceitos')
//     }
//     console.log(A+C)

// var [a]= input.split()
// var dinheiro=parseFloat(a)
// var divisoresN=[100,50,20,10,5,2]
// var notas=0
// console.log('NOTAS:')
// for(i=0;i<divisoresN.length;i++){
//     notas=parseInt(dinheiro/divisoresN[i])
//     console.log(`${notas} nota(s) de R$ ${divisoresN[i].toFixed(2)}`)
//     dinheiro=dinheiro%divisoresN[i]
// }
// var divisoresM=[1,0.5,0.25,0.1,0.05,0.01]
// var moedas=0
// console.log('MOEDAS:')
// for(i=0;i<divisoresM.length;i++){
//     moedas=parseInt(dinheiro/divisoresM[i])
//     console.log(`${moedas} moeda(s) de R$ ${divisoresM[i].toFixed(2)}`)
//     dinheiro=dinheiro%divisoresM[i] + 0.00001
    
// }



// var dias=Number(input)
// var anos=parseInt(dias/365)
// dias=dias%365
// var meses=parseInt(dias/30)
// dias=dias%30
// console.log(`${anos} ano(s)`)
// console.log(`${meses} mes(es)`)
// console.log(`${dias} dia(s)`)


// var numeros=[]
// var tempo=Number(input)
// var horas=parseInt(tempo/3600)
// var tempo=tempo%3600
// var minuto=parseInt(tempo/60)
// var segundo=tempo%60
// console.log(`${horas}:${minuto}:${segundo}`)
// --------------------------------------------------
// var valores=[3600,60,1]
// var resultado=[]
// var tempo=Number(lines)
// for(let i=0;i<valores.length;i++){
//     resultado.push(parseInt(tempo/valores[i]))
//     tempo=tempo%valores[i]
// }
// console.log(resultado.join(':'))



// var valores=[100, 50, 20, 10, 5, 2, 1]
// var valor=parseInt(lines)
// console.log(valor)
// for(let i=0;i<valores.length;i++){
//     var Nnotas=parseInt(valor/valores[i])
//     valor=valor%valores[i]
//     console.log(`${Nnotas} nota(s) de R$ ${valores[i]},00`)
// }


// var [tempo,velocidade]=lines.map(item=>Number(item))
// var txv=tempo*velocidade
// var litros=txv/12
// console.log(litros.toFixed(3))


// var x=Number(lines[0])
// var min=x*2
// console.log(`${min} minutos`)


// var [x1,y1]=lines[0].split(' ')
// var [x2,y2]=lines[1].split(' ')
// var distancia=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
// console.log(distancia.toFixed(4))


// var km=Number(lines[0])
// var l=Number(lines[1])
// var kmL=km/l
// console.log(`${kmL.toFixed(3)} km/l`)



// var A=Number(lines[0])
// var B=Number(lines[1])
// var C=Number(lines[2])
// var maiorAB=(A+B+Math.abs(A-B))/2
// var maiorXC=(maiorAB+C+Math.abs(maiorAB-C))/2
// console.log(`${maiorXC} eh o maior`)


// var n1=Number(lines[0])
// var n2=Number(lines[1])
// var n3=Number(lines[2]) 
// var areatriangulo=n1*n3/2
// var areacirculo=3.14159*(n3*n3)
// var areatrapezio=(n1+n2)*n3/2
// var areaquadrado=n2*n2
// var arearetangulo=n1*n2
// console.log(`TRIANGULO: ${areatriangulo.toFixed(3)}`)
// console.log(`CIRCULO: ${areacirculo.toFixed(3)}`)
// console.log(`TRAPEZIO: ${areatrapezio.toFixed(3)}`)
// console.log(`QUADRADO: ${areaquadrado.toFixed(3)}`)
// console.log(`RETANGULO: ${arearetangulo.toFixed(3)}`)


// var R=Number(lines[0])
// var pi=3.14159
// var volume=(4/3)*pi*(R*R*R)
// console.log(`VOLUME = ${volume.toFixed(3)}`)



// var numeros1=lines[0].split(' ')
// var valorapagar1=numeros1[1]*numeros1[2]
// var numeros2=lines[1].split(' ')
// var valorapagar2=numeros2[1]*numeros2[2]
// var valortotal=valorapagar1+valorapagar2
// console.log(`VALOR A PAGAR: R$ ${valortotal.toFixed(2)}`)


// var salario=Number(lines[1])
// var vendas=Number(lines[2])
// var bonus=vendas*0.15
// var salariof=salario+bonus
// console.log(`TOTAL = R$ ${salariof.toFixed(2)}`)


// var nume=Number(lines[0])
// var horas=Number(lines[1])
// var valorahora=Number(lines[2])
// var salario=horas*valorahora
// console.log(`NUMBER = ${nume}`)
// console.log(`SALARY = U$ ${salario.toFixed(2)}`)


// var A=Number(lines[0])
// var B=Number(lines[1])
// var C=Number(lines[2])
// var D=Number(lines[3])
// var soma=(A*B)-(C*D)
// console.log(`DIFERENCA = ${soma}`)


// var n1=parseFloat(numeros[0])
// var n2=parseFloat(numeros[1])
// var n3=parseFloat(numeros[2])
// var media=((n1*2)+(n2*3)+(n3*5))/10.0
// console.log(`MEDIA = ${media.toFixed(1)}`)
// console.log(typeof media)


// var n1=Number(numeros[0])
// var n2=Number(numeros[1])
// var media=((n1*3.5)+(n2*7.5))/11
// console.log(`MEDIA = ${media.toFixed(5)}`)


// var valores=input.split('\n')
// var A=Number(valores[0])
// var B=Number(valores[1])
// var x=A+B
// console.log(`X = ${x}`)


// var lines=input.split('\n')
// var pi=3.14159
// var raio=Number(input)
// var area=pi*(raio*raio)
// console.log(`A=${area.toFixed(4)}`)


// var valores=input.split('\n')
// var soma=Number(valores[0])+Number(valores[1])
// console.log(`SOMA = ${soma}`)


// var lines = input.split('\n');
// var n1=lines[0]
// var n2=lines[1]
// var PROD=Number(n1)*Number(n2)
// console.log(`PROD = ${PROD|}`)