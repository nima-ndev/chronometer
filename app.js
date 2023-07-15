var hour=document.querySelector('.hour');
var minute=document.querySelector('.minute');
var second=document.querySelector('.second');
var millisecond=document.querySelector('.millisecond');
var start=document.querySelector('.start-btn');
var stopB=document.querySelector('.stop-btn');
var reSet=document.querySelector('.reSet-btn');
var points=document.querySelector('.points');

var numbers_loop; 
var license=true;
start.addEventListener('click',function(){  
    if(license==false){
        return 0;
    }
    license=false;
    numbers_loop=setInterval(function(){
        var current_hour=+hour.innerHTML;
        var current_minute=+minute.innerHTML;
        var current_second=+second.innerHTML;
        var current_millisecond=+millisecond.innerHTML;

        if(current_millisecond==1000){
            current_millisecond=0;
            current_second=+second.innerHTML;
            second.innerHTML= `${current_second<10 ? 0 : ""}${current_second+1}`;
        }
        if(current_second==60){
            second.innerHTML='0'
            current_minute=+minute.innerHTML;
            minute.innerHTML= `${current_minute<10 ? 0 : ""}${current_minute+1}`;
        }
        if(current_minute==60){
            minute.innerHTML='0'
            current_hour=+hour.innerHTML;
            hour.innerHTML= current_hour+1;
        }
        millisecond.innerHTML=`${current_millisecond<100 ? '0' : ""}${current_millisecond+10}`;
    },10)
});


stopB.addEventListener('click',function(){
    if(license){
        return 0;
    }
    var element=document.createElement('div');
    element.classList.add('result');
    element.innerHTML= hour.innerHTML+" : " + minute.innerHTML+" : " + second.innerHTML+" : " + millisecond.innerHTML;
    points.appendChild(element);
});

reSet.addEventListener('click',function(){
    clearInterval(numbers_loop);
    hour.innerHTML='0';
    minute.innerHTML='00';
    second.innerHTML='00';
    millisecond.innerHTML='000';
    points.innerHTML='';
    license=true;
})