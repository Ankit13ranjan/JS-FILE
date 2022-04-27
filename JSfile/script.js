// var buttonhello = document.getElementById('btn');
// buttonhello.addEventListener('click',function(){
//     alert("Hello!!!");
// })

function hellofunction(){
    alert("Hello!!!");
}

function byefunction(){
    alert("Bye!!!");
}

var buttonhello = document.getElementById('btn2');
buttonhello.addEventListener('click',hellofunction);


buttonhello.addEventListener('click',byefunction);