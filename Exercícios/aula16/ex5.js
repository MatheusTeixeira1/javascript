function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(2))














function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n+fatorial(n-1)
    }
}
console.log(fatorial(110))

console.log(x)

function fatorial(n){
    var fat=1
    for(n;n>1;n--){
        fat=fat+n
    }
    return fat
}
console.log(fatorial(110))