var counting = document.getElementById('box');
var clickcounting = document.getElementById('Count-clicked')
count=0;


function COUNTING(){
    count++;
    clickcounting.innerText= count + " ";
}
counting.addEventListener('click',COUNTING);