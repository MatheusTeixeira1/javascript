
function carregar(){
    var horad= new Date()
    var hora=horad.getHours()
    var msg=document.getElementById('msg')
    var img=document.getElementById('img')
    msg.innerHTML=`${hora}`
    if(hora>0 && hora<12){
        img.src='manha.png'
        msg.innerHTML=`Bom dia, agora são${hora}`
        document.body.style.backgroundColor='#e2cd9f'
    }else if(hora>=12 && hora<18){
        img.src='tarde.png'
        msg.innerHTML=`Boa tarde, agora são ${hora}`
    }else{
        img.src='noite.png'
        msg.innerHTML=`Boa noite, agora são ${hora}`
    }
}