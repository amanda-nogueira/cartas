let nipes = ['♥','♠','♦','♣']
let faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function sortear(){    
    let nipe = nipes[Math.floor(Math.random()*4)]
    let face = faces[Math.floor(Math.random()*13)]
    let cor
    if(nipe === '♥' || nipe ==='♦'){
        cor = "#ff0000"
    }else{
        cor = "#000"
    }

    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    document.getElementById('supEsq').style.color = cor
    let cc = document.getElementById('centro')
    if(face === 'J'){
        cc.innerHTML = `<img src="./img/valete.png">`
    }else if(face === 'Q'){
        cc.innerHTML = `<img src="./img/dama.png">`
    }else if(face === 'K'){
        cc.innerHTML = `<img src="./img/rei.png">`
    }else{
        cc.innerHTML = `${nipe}`
        cc.style.color = cor
    }    

    document.getElementById('infDir').innerHTML = `<div>${nipe}</div> <div>${face}</div>`
    document.getElementById('infDir').style.color = cor
    
}