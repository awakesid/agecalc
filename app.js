
const button=document.querySelector(".btn");
const yd=document.querySelector(".barsanum");
const md=document.querySelector(".mainanum");
const dd=document.querySelector(".dinnum");


var total_days;
var total_this_days;
const date = new Date();




function error2(){
    const perr=document.getElementsByClassName("err");
    const nee=document.getElementsByClassName("ne");

nee[0].style.color='red';
nee[1].style.color='red';
nee[2].style.color='red';
    
    for (let i = 0; i < perr.length; i++) {
        const p = perr[i];
        if (i === 0) {
          p.style.display = 'block';
          p.style.color = 'red';
          
          
        } else if (i === 1) {
          p.style.display = 'block';
          p.style.color = 'red';
          
        } else {
          p.style.display = 'block';
          p.style.color = 'red';
          
        }
      }

}


function error(){

  
  var viewport_width = window.innerWidth;
    const perr=document.getElementsByClassName("err");
    const nee=document.getElementsByClassName("ne");
   



nee[0].style.color='red';
nee[1].style.color='red';
nee[2].style.color='red';
    
    for (let i = 0; i < perr.length; i++) {
        const p = perr[i];
        if (i === 0) {
          p.style.display = 'block';
          p.style.color = 'red';
          if(viewport_width>600){
          p.innerHTML='Must be valid day';
          }
          else{
            p.innerHTML='error';
          }
          
        } else if (i === 1) {
          p.style.display = 'block';
          p.style.color = 'red';
          if(viewport_width>600){
          p.innerHTML='Must be a valid month';
        }
        else{
          p.innerHTML='error';
        }
        } else {
          p.style.display = 'block';
          p.style.color = 'red';
          if(viewport_width>600){
          p.innerHTML="Must be a valid year";}
          else{
            p.innerHTML='error';
          }
        }
      }

}

function noerror(){

    const perr=document.getElementsByClassName("err");
    const nee=document.getElementsByClassName("ne");

nee[0].style.color='hsl(0, 1%, 44%)';
nee[1].style.color='hsl(0, 1%, 44%)';
nee[2].style.color='hsl(0, 1%, 44%)';
    
    for (let i = 0; i < perr.length; i++) {
        const p = perr[i];
        if (i === 0) {
          p.style.display = 'none';
          
          
        } else if (i === 1) {
          p.style.display = 'none';

        } else {
          p.style.display = 'none';

      }
}
}
button.addEventListener('click', ()=>{
  

    var year=document.querySelector(".inyear").value;
    var month=document.querySelector(".inmonth").value;
    var day=document.querySelector(".inday").value;

    Number(year);
    Number(month);
    Number(day);

    if(day>31 || month>12|| year>date.getFullYear()){
        error();
    }
    if(day==0 || month==0|| year==0){
        error2();
    }

    if(day!=0 && day<=31 && month!=0 && month<=12 && year!=0 && year<=date.getFullYear()){
        noerror();
    }
    total_days=(year*365)+(month*30)+(day*1);
    total_this_days=(date.getFullYear()*365)+((date.getMonth()+1)*30)+(date.getDay()*1);
    var diff=total_this_days-total_days;
    year=diff/365;
    var remainder=diff%365;
    month=remainder/30;
    day=remainder%30;

    year=Math.trunc(year);
    month=Math.trunc(month);
    day=Math.trunc(day);
    yd.innerHTML=year;
    md.innerHTML=month;
    dd.innerHTML=day; 
})







