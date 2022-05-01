// function trocaVogais(parametro){
//     var novastring=''
//     for(i=1;i<parametro.length;i++){
//         var caracte=parametro[i]
//         if(parametro[i]==='a'||parametro[i]==='e'||parametro[i]==='i'||parametro[i]==='o'||parametro[i]==='u'){
//             novastring=novastring+1
//         }else{
//             novastring=novastring+caracte
//         }
//     }
//     return novastring
// }   
// console.log(trocaVogais('matheus'))


// function trocaVogais(parametro) {
//     return parametro.replaceAll(/[aeiou]/g, 1)
// }
// console.log(trocaVogais('aeiou'))

// function tiraNumeros(parametro) {
//     var res=''
//     for (i = 0; i < parametro.length; i++) {
        
//         if(parametro[i]!=='1'&& parametro[i]!=='2'&& parametro[i]!=='3'&& parametro[i]!=='4'&& parametro[i]!=='5'&& parametro[i]!=='6'&& parametro[i]!=='7'&& parametro[i]!=='8'&& parametro[i]!=='9'){
//             res+=parametro[i]
//         }
//     }
//     return res
//   }
//   console.log(tiraNumeros('ma1the54us'))

// function somaAteMeta(inicio, meta) {
//     let numeros=[]
//     let soma=0
//     for(i=inicio+1;soma<meta;i++){
        
//         numeros.push(i)
//         soma=i+soma
//     }
//     return numeros
// }
// somaAteMeta(2,12)

// function multiplicar(num1,num2,num3){
//     var res=[]
//     var n1=num1*3
//     res.push(n1)
//     var n2=num2*3
//     res.push(n2)
//     var n3=num3*3
//     res.push(n3)
//     console.log(res)
//     return res
    
// }
// console.log(multiplicar(1,2,3))

// function comprar(preco, parcelas){
//     if(parcelas>10){
//         return 'comprar'
//     }else if(1000>preco>500&&parcelas>5){
//         return 'comprar'
//     }else if(preco<500){
//         return 'comprar'
//     }else{
//         return 'nao comprar'
//     }
    
// }
// console.log(comprar(1200,6))



// function contaLetras(palavra, letra){
//     var res=''
//     for(i=0;i<palavra.length;i++){
//         if(palavra[i]==letra)
//         res=res+letra
        
//     }
//     return res.length
// }

// function tiraNumeros(parametro){
//     var res=''
    
//     for(i=0;i<parametro.length;i++){
//         var letra=parametro[i]
//         if(letra!=='0'||letra!=='1'||letra!=='2'||letra!=='3'||letra!=='4'||letra!=='5'||letra!=='6'||letra!=='7'||letra!=='8'||letra!=='9'){
//             res=res+letra
//         }
//     }
//     return res
// }
// function somaAteMeta(inicio, meta){
//     let soma=0
//     let numeros=[]
//     for(i=inicio+1;soma<meta;i++){
//         soma=soma+i
//         numeros.push(i)
//     }
//     return numeros
// }
// function subArray(parametro, subarray) {
// 	var contagem = 0
	
// 	for (i = 0; i < parametro.length; i++) {
// 		if (parametro[i] === subarray[contagem]) {
// 			contagem++
// 			if (contagem === parametro.length) { break }
// 		}
// 	}
// 	return contagem === subarray.length
//}
// function maiorIndice(lista) {
// 	var maior=0
	
// 	for(i=0;i<lista.lenthg;i++){
// 	  if(lista[i]>maior){
// 		 maior=i
// 	  }
// 	}
// 	return maior
//   }
//   console.log(maior)
// function avancarDias(dia, quantidade) {
// 	var dias = ['Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado, Domingo']
// 	var dn=0
// 	for(i=0;i<dias.length;i++){
// 	  if(dias[i]==dia){
// 		dn=i
		
// 	  }
// 	}
	
// 	console.log(dn)
//   }

// function intervaloPares(inicio, fim, quantidade) {
// 	var c=0
// 	var pares=[]
// 	var c1=inicio
// 	while(c<quantidade&&pares.length<quantidade){
// 	  if(inicio%2==0){
// 		c1=c1+2
// 		pares.push(c1)
// 		c++
// 	  }else{
// 		c1=c1+1
// 		c++
// 		pares.push(c1)
// 	  }
	  
// 	}
// 	return pares
//   }
//   console.log(intervaloPares(2,10,5))

// function compareTriplets(a, b) {
//     var c=0
//     var pA=0
//     var pB=0
//     var p=[]
//     for(c;c<3;c++){
// 		if(a[c]==b[c]){

// 		}else{
// 			if(a[c]>b[c]){
// 				pA+=1   
// 			}else{
// 				pB+=1
// 			}	
// 		}
        
//     }
//     p.push(pA)
//     p.push(pB)
//     return p

// }
// function diagonalDifference(arr) {
//     var somaED=arr[1][0]+arr[2][1]+arr[3][2]
//     var somaDE=arr[1][2]+arr[2][1]+arr[3][0]
//     var soma=somaED+(-somaDE)
//     if(soma<0){
//         soma=soma*(-1)
//         return soma
//     }else{
//         return soma
//     }

// }





// var ar=[
// 	[1]
// 	[1,2,3]
// 	[4,5,6]
// 	[7,8,9]
// ]
// console.log(ar)

// var ar=[]
// var n=[4]
// ar.push(n)
// var v1=[11,2,4,5]
// ar.push(v1)
// var v2=[4,5,6,5]
// ar.push(v2)
// var v3=[10,8,-12,6]
// ar.push(v3)
// var v4=[5,6,2,6]
// ar.push(v4)
// // console.log(ar)
// console.log(diagonalDifference(ar))1


// function diagonalDifference(arr) {
//     var somaED=0
//     for1c=0;c<=arr[0][0]-1;c++){
//         somaED=somaED+arr[c+1][c]
        
//     }
//     var 1=1
//     var somaDE=0
//     for(i=arr[0][0]-1;i>arr[0][0]-(arr[0][0]+1);i--){
//         somaDE=somaDE+arr[c2][i]
//         c2++
        
//     }
//     var soma=somaED+(-somaDE)
//     if(soma<0){
//         soma=soma*(-1)
//         return soma
//     }else{
//         return soma
//     }
// }






// console.log(letrasRepetidas('ovo'))

// function letrasRepetidas(parametro){
//     var acuquanti=[]
//     console.log(acuquanti)
//     var letras=[]
//     for(c=0;c<parametro.length;c++){
//         var c1=0
//         for(i=0;i<c;i++){
//             if(parametro[i]===parametro[c]){
//                 c1++
//             }
//         }
//         console.log(c1)
//         acuquanti.push(c1)
//     }
//     for(i=0;i<acuquanti.length;i++){
//         if(acuquanti[i]===1){
//             letras.push(parametro[i])
//         }
//     }
//     return letras
// }


// function avancarDias(dia, quantidade) {
//     var dias=['Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo']
//     if(quantidade>7){
//         quantidade=quantidade-7
//     }
//     var cont=0
//     for(i=0;i<dias.length;i++){
//         if(dia==dias[i]){
//             cont=i
//         }
//     }
//     var res=cont+quantidade
//     return dias[res]
// }


// function intervaloPares(inicio, fim, quantidade){
//     var numeros=[]
//     for(i=0;i<quantidade;i++){
//         if(inicio%2==0){
//             inicio=inicio+2
//             numeros.push(inicio)
//         }else{
//             inicio=inicio+1
//             numeros.push(inicio)
//         }
//     }
//     return numeros
// }

// console.log(intervaloPares(2,10,3))

// function intervaloPares(inicio, fim, quantidade) {
//     var pares=[]
//     for (let i = 0; i < quantidade; i++) {
//         if(inicio%2==0){
//             inicio=inicio+2
//             pares.push(inicio)
//         }
//         else{
//             inicio=inicio+1
//             pares.push(inicio)
//         }
//     }
//     return pares
// }


// function intervaloPares(inicio, fim, quantidade) {
//     var c = 0
//     var pares = []
//     var c1 = inicio
//     while (c < quantidade) {
//         if (inicio % 2 == 0) {
//             c1 = c1 + 2
//             pares.push(c1)
//             c++
//         } else {
//             c1 = c1 + 1
//             pares.push(c1)
//             c++
//         }

//     }
//     return pares
// }



// function contaLetras(string, letra) {
//     var res=0       
//     for(i=0;i<string.length;i++){
//         if(string[i]===letra){
//             res=res+1
//         }
//     }
//     return res
// }

// function trocaVogais(parametro){
//     var p=parametro
//     var res=''
//     for(i=0;i<parametro.length;i++){
//         if(p[i]=='a'||p[i]=='e'||p[i]=='i'||p[i]=='o'||p[i]=='u'){
//             res=res+'1'
//         }else{
//             res=res+p[i]
//         }
//     }
//     return res
// }

// function somaAteMeta(inicio, meta){
//     var soma=0
//     var numeros=[]
//     for(i=inicio+1;soma<meta;i++){
//         soma=soma+i
//         numeros.push(i)
//     }
//     return numeros
// }


// var arr=[1,2,3,4,5,6]
// var subarr=[1,3,4]

// console.log(subArray(arr,subarr))

//     function subArray(parametro, subarray){
//         var res=0
//         var c=0
//         for(i=0;i<parametro.length;i++){
//             if(parametro[i]==subarray[c]){
//                 c++
//                 if (c === parametro.length) { break }
//             }
//         }
//         console.log(res)
//         return res===subarray.length
//     }
// console.log(letrasRepetidas('aaaq'))
// function letrasRepetidas(parametro){
//     var contagem=[]
//     for(i=0;i<parametro.length;i++){
//         var x=0
//         for(c=0;c<i;c++){
//             if(parametro[i]==parametro[c]){
//                 x++
//             }
//         }
//         contagem.push(x)
//     }
//     var letras=[]
//     for(q=0;q<contagem.length;q++){
//         if(contagem[q]==1){
//             letras.push(parametro[q])
//         }
//     }
//     return letras
// }



// function letrasRepetidas(parametro) {
// 	var acuquanti = []
	
// 	var letras = []
// 	for (c = 0; c < parametro.length; c++) {
// 		var c1 = 0
// 		for (i = 0; i < c; i++) {
// 			if (parametro[i] === parametro[c]) {
// 				c1++
// 			}
// 		}
// 		acuquanti.push(c1)
// 	}
// 	for (i = 0; i < acuquanti.length; i++) {
// 		if (acuquanti[i] === 1) {
// 			letras.push(parametro[i])
// 		}
// 	}
//     console.log(acuquanti)
// 	return letras
// }

// function subArray(parametro, subarray){
//     var c =0
//     for(i=0;i<parametro.length;i++){
//         if(parametro[i]==subarray[c]){
//             c++
//             if (c === parametro.length) { break }
//         }
//     }
//     return c==subarray.length
// }

// function letrasRepetidas(parametro) {
//     var letrasr=[]
//     for(i=0;i<parametro.length;i++){
//         var contagem=0
//         for(c=0;c<i;c++){
//             if(parametro[i]===parametro[c]){
//                 contagem++
//             }
//         }
//         letrasr.push(contagem)
//     }
//     var res=[]
//     for(q=0;q<letrasr.length;q++){
//         if(letrasr[q]==1){
//             res.push(parametro[q])
//         }
//     }
//     return res
// }

// function maiorIndice(lista){
//     var i=0
//     for(c=0;c<lista.length;c++){
//         if(lista[c]>lista[i]){
//             i=c
//         }
//     }
//     return i
// }
// function avancarDias(dia, quantidade){
//     var dias=['Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta feira', 'Sexta-feira', 'Sabado', 'Domingo']
//     var indice=0
//     for(i=0;i<dias.length;i++){
//         if(dias[i]===dia){
//             indice=i
//         }
//     }
//     indice=(indice+quantidade)%7
//     return dias[indice]
// }

// function intervaloPares(inicio, fim, quantidade){
//     var pares=[]
//     for(i=0;i<quantidade;i++){
//         if(inicio%2==0){
//             inicio=inicio+2
//             pares.push(inicio)
//         }else{
//             inicio=inicio+1
//             pares.push(inicio)
//         }
//     }
//     return pares
// }


// function fatorial(n){
//     var fatorial=1
//     for(i=n;n>0;n--){
//         if(i!=1){
//             fatorial=fatorial*n
//         }
//     }
//     return fatorial
// }
// console.log(fatorial(5))

// function fatorial(n){
//     if(n==1){
//         return 1
//     }else{
//         return n=n*fatorial(n-1)
//     }
// }






// var x=[]
// for(i=-3;i<4;i++){
//     x.push(i)
//     console.log(i)
// }



// console.log(plusMinus(x))


// function plusMinus(arr){
//     var zero=0
//     var negativo=0
//     var positivo=0
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             zero++
//         }else if(arr[i]<0){
//             negativo++
//         }else if(arr[i]>0){
//             positivo++
//         }
//     }
//     var porcentagems=[]
//     var pzero=zero/arr.length
//     porcentagems.push(pzero)
//     var pnegativo=negativo/arr.length
//     porcentagems.push(pnegativo)
//     var ppositivo=positivo/arr.length
//     porcentagems.push(ppositivo)
//     return porcentagems
// }









// for (let i = 1; i <= 5; i++) {
//     console.log("#".repeat(i).padStart(5));
// }

// var x='a'
// console.log(x.padStart(2,'1'))



// var a='matheus'
// function trocaVogais(parametro){
//     var res=''
//     for(i=0;i<parametro.length;i++){
//         if(parametro[i]=='a'||parametro[i]=='u'||parametro[i]=='o'||parametro[i]=='i'||parametro[i]=='e'){
//             res=res+'1'
//         }else{
//             res=res+parametro[i]
//         }
//     }
//     return res
// }
// console.log(trocaVogais(a))




// console.log(tiraNumeros('mas25as12'))

// function tiraNumeros(parametro) {
//     var res=''
//     for(i=0;i<parametro.length;i++){
//         if(parametro[i]!='0'&&parametro[i]!='1'&&parametro[i]!='2'&&parametro[i]!='3'&&parametro[i]!='4'&&parametro[i]!='5'&&parametro[i]!='6'&&parametro[i]!='7'&&parametro[i]!='8'&&parametro[i]!='9'){
//             res+=parametro[i]
//         }
//     }
//     return res
// }




// console.log(somaAteMeta(2,12))

// function somaAteMeta(inicio, meta){
//     var soma=0
//     var numeros=[]
//     for(i=inicio+1;soma<meta;i++){
//         soma=soma+i
//         numeros.push(soma)
//     }
//     return numeros
// }





// var a=[1,2,3,4,5]
// var b=[2,4,3]

// console.log(subArray(a,b))

// function subArray(parametro, subarray){
//     var c=0
//     for(i=0;i<parametro.length;i++){
//         if(parametro[i]==subarray[c]){
//             c++
//         }
//     }
//     return c==subarray.length
// }



// var a='assado'
// console.log(letrasRepetidas(a))

// function letrasRepetidas(parametro){
//     var cod=[]
//     var letras=[]
//     for(i=0;i<parametro.length;i++){
//         var cont=0
//         for(c=0;c<i;c++){
//             if(parametro[i]==parametro[c]){
//                 cont++
                
//             }
//         }
//         cod.push(cont)
//     }
//     for(i=0;i<cod.length;i++){
//         if(cod[i]==1){
//             letras.push(parametro[i])
//         }
//     }
//     return letras
// }






// var ar=[
// 	[1]
// 	[1,2,3]
// 	[4,5,6]
// 	[7,8,9]
// ]
// console.log(ar)

// var ar=[]
// var n=[4]
// ar.push(n)
// var v1=[1,2,3,4]
// ar.push(v1)
// var v2=[5,6,7,11]
// ar.push(v2)
// var v3=[2,4,4,5]
// ar.push(v3)
//  var v4=[6,10,8,-12]
//  ar.push(v4)
//  console.log(ar)
// console.log(diagonalDifference(ar))



// function diagonalDifference(arr) {
//     var somaED=0
//     for(c=0;c<=arr[0][0]-1;c++){
//         somaED=somaED+arr[c+1][c]
        
//     }
//     var c2=1
//     var somaDE=0
//     for(i=arr[0][0]-1;i>arr[0][0]-(arr[0][0]+1);i--){
//         somaDE=somaDE+arr[c2][i]
//         c2++
        
//     }
//     var soma=somaED+(-somaDE)
//     if(soma<0){
//         soma=soma*(-1)
//         return soma
//     }else{
//         return soma
//     }
// }

// var x=[4,1,2,3,4,5,6,7,11,2,4,4,5,6,10,8,-12]

// console.log(diagonalDifference(x))

// function diagonalDifference(arr){
//     var diagED=0
//     var c=1
//     for(let i=0;i<arr[0];i++){
//         diagED=diagED+arr[c]
//         c=c+(arr[0]+1)
        
//     }
//     var diagDE=0
//     var c2=arr[0]
//     for(let i=0;i<arr[0];i++){
//         diagDE=diagDE+arr[c2]
//         c2=c2+(arr[0]-1)
//     }
//     var res=diagED-(diagDE)
//     if(res<0){
//         res=res*(-1)
//     }
//     return res
// }
// var x=[11,2,4
//       ,4,5,6
//       ,10,8,-12]
// console.log(diagonalDifference(x))

// function diagonalDifference(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr.length/i==i){
//             var dimen=i
//             var somaED=0
//             var y=0
//             for(let c=0;c<dimen;c++){
//                 somaED=somaED+arr[y]
//                 y=y+(dimen+1)
//             }
//             var somaDE=0
//             var k=dimen-1
//             for(let c=0;c<dimen;c++){
//                 somaDE=somaDE+arr[k]
//                 k=k+dimen-1
                
//             }   
//         }
//     }
//     var soma=somaED-(somaDE)
//     if(soma<0){
//                 return soma*(-1)
//             }else{  
//                 return soma
//             }
// }


// var x=[7,69,2,221,8974]
// console.log(miniMaxSum(x))
// function miniMaxSum(arr){

// }
// var x=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(diagonalDifference(x))
// function diagonalDifference(arr) {
//     var diag1=0
//     var diag2=0
//     var c=arr.length
//     for(let i in arr){
//         diag1=diag1+arr[i][i]
//         diag2=diag2+arr[i][c-1]
//         c--
//     }
//     var soma=diag1-(diag2)
//     if (soma<0){
//         return soma*-1
//     }else{
//         return soma
//     }
// }



// var h=[7,69,2,221,8974]
// console.log(miniMaxSum(h))
// function miniMaxSum(arr){
//     var somaT=0
//     for(let i=0;i<arr.length;i++){
//         somaT=somaT+arr[i]
//     }
    
//     var somas=[]
//     for(let i=0;i<arr.length;i++){
//         let x=somaT-arr[i]
//         somas.push(x)
//     }
//     var maior=somas[0]
//     var menor=somas[0]
//     var res=[]
//     for(let i in somas){
//         if(somas[i]>maior){
//             maior=somas[i]
//         }
//         if(somas[i]<menor){
//             menor=somas[i]
//         }
//     }
//     res.push(menor)
//     res.push(maior)
    
//     return res
// }

// console.log(subArray([1,2,3,4,5],[4,3,5]))

// function subArray(parametro, subarray) {
//     var x=0
//     for(let i=0;i<parametro.length;i++){
//         if(parametro[i]==subarray[x]){
//             x++
//         }
//     }
//     return x==subarray.length
// }
// console.log(letrasRepetidas('abcca'))

// function letrasRepetidas(parametro) {
//     var cod=[]
//     for(let i=0;i<parametro.length;i++){
//         var c1=0
//         for(let c=0;c<i;c++){
//             if(parametro[i]==parametro[c]){
//                 c1++
//             }
//         }
//         cod.push(c1)
//     }
//     var letrasR=[]
//     for(let i=0;i<cod.length;i++){
//         if(cod[i]===1){
//             letrasR.push(parametro[i])
//         }
//     }
//     return letrasR
// }

// console.log(letrasRepetidas('abcca'))

// function letrasRepetidas(parametro){
//     var cod=[]
//     for(let i=0;i<parametro.length;i++){
//         var c1=0
//         for(let c=0;c<i;c++){
//             if(parametro[i]==parametro[c]){
//                 c1++
//             }
//         }
//         cod.push(c1)
//     }
//     var res=[]
//     for(let i=0;i<cod.length;i++){
//         if(cod[i]==1){
//             res.push(parametro[i])
//         }
//     }
//     return res
// }


// console.log(contaLetras('matheus','a'))

// function contaLetras(string, letra){
//     var cont=0
//     for(i=0;i<string.length;i++){
//         if(string[i]==letra){
//             cont++
//         }
//     }
//     return cont
// }


// console.log(somaAteMeta(2,12))

// function somaAteMeta(inicio, meta){
//     var res=[]
//     var soma=0
//     for(i=inicio+1;soma<meta;i++){
//         soma=soma+i
//         res.push(i)
        
//     }
//     return res
// }

console.log(subArray('1,2,3,4,5','3,2,4'))

function subArray(parametro, subarray) {
    var c=0
    for(i=0;i<parametro.length;i++){
        if(parametro[i]==subarray[c]){
            c++
        }
    }
    return c==subarray.length
}