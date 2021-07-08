// const box = document.querySelectorAll(".box");
// box.addEventListener('click', () =>{
//     if(box.classList.contains('boxclicked')){
//         box.classList.remove('boxclicked')
//     }
// else{
//     box.classList.add('boxclicked')
// }}
// )
// var arr=[];
// for(let i=1; i<=100; i++)
// {
//     arr[i]=0;
// }
// function myF(elmnt) {
//     console.log(elmnt);
//     elmnt.style.backgroundColor = "magenta";
//     arr[i]=1;
//   }



// const container = document.querySelector('.grid');

// const seatCount = document.getElementById('bookedSeats');
// const remCount = document.getElementById('remainingSeats');

// var bookedSeats = 0;
// var remainingSeats = 45;

// container.addEventListener('click',(check) => {
//     if(check.target.classList.contains('box1') && !check.target.classList.contains('boxClicked')){
//         check.target.classList.add('boxClicked');
//         bookedSeats++;
//         remainingSeats--;
//     }
//     else{
//         check.target.classList.remove('boxClicked');
//         bookedSeats--;
//         remainingSeats++;
//     }
//     seatCount.innerText = bookedSeats;
//     remCount.innerText = remainingSeats;
// });

var item = [ ];


var bs=0, rs=100;
document.getElementById("val1").innerHTML=bs;
document.getElementById("val2").innerHTML=rs;

for (let i=1;i<=100;i++)
{
 item[i]=0;
}
function myfu(classnamee){
 const pclass="grid-container";
 element=document.getElementsByClassName(classnamee);
 n=classnamee.slice(4)
 if(item[n] == 0)
 {
   item[n]=1;
   bs+=1;
   rs-=1;
   document.getElementById("val1").innerHTML=bs;
   document.getElementById("val2").innerHTML=rs; 

 element[0].style.backgroundColor ="purple";
 }
 else
 {
   rs+=1;
   bs-=1;
   document.getElementById("val1").innerHTML=bs;
   document.getElementById("val2").innerHTML=rs; 
   item[n]=0;
   element[0].style.backgroundColor ="pink";
 }
}