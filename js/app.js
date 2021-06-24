'use strict';



let x=prompt('enter your name please');
alert ('welcome '+' '+x+' ' +'in our webpage we hope to enjoy in this trip');
alert('please read following message and after that you will answer one qustion');
alert('ilove small cars like (Ford ,Toyota and tesla)'+' '+',love health food ,'+' '+',and my height is 153.'+' '+',inlove with node color'+' ' +',reading book'+' '+' intresting on technical.');
let countScore=0;
// let c=confirm('did i love fast food');
// if (c=== true){
//   console.log('No i didnt like fast food not good for health');
// }
// else{
//   console.log('realy happy for your answer');
//   console.log(countScore=countScore+1);
// }
let q1=function() {
  switch(a1){
  case 'yes':
    console.log('yes i love small car');
    console.log(countScore=countScore+1);
    break;
  case 'no':
    console.log('no didnt like big car');
    break;
  default:
    console.log('hmmm try another answer');
    break;
  }
}
let a1=prompt('did i prefare small car answer(yes/no)'.toLowerCase());
q1(a1);
let q2=function(){
  switch(a2){
  case 'yes':
    console.log('i hope you love reading olso');
    console.log(countScore=countScore+1);
    break;
  case 'no':
    console.log('no i want to read one') ;
    break;
  default:
    console.log('hmmm try another answer');
    break;
  }
  }
  let a2=prompt('did i love read big book?(YES/NO)'.toLowerCase());
  q2(a2);
let q3=function(){
  switch(a3){
    case 'y':
      console.log('no not my tast'); 
      break;
      case 'n':
        console.log('correct answer');
        countScore=countScore+1;
        console.log(countScore);
        break;
        default:
          console.log('hmmm try another answer');
          break;
        }
      }
        let a3=prompt('did you prefare classic color(y/n)'.toUpperCase());
        q3(a3);
let q4=function(){
  if (a4 === 'yes'){
    console.log('im realy happy correct answer');
    console.log(countScore=countScore+1);
  }else if(a4 ==='no'){
    console.log('wrong answer try to foucs on alert next time');
  }
  else{
    console.log('not the expected answer');
  }
  }
  let a4=prompt('Is my height 153(yes/no)'.toLowerCase());
  q4(a4);
let q5=function(){
  if (a5 === 'y'){
    console.log('always want to learn somthing new');
    countScore=countScore+1;
     console.log(countScore);
  }else{
    console.log('not the correct answer');
  }
  }
  let a5=prompt('did i intrested in technology(y/n)'.toUpperCase());
  q5(a5);
let q6=function(){
  for (let i=1; i<4;i++) {
    if (a6>1993)
    {console.log('too high');
    alert ('too high');
  }
  else if (a6 < 1993)
  {//console.log('too low');
    alert('too low');
  }
  else {console.log('coorect answer');
  countScore=countScore+1;
  console.log(countScore);
  break;}
  a6 = prompt('inter my barthday year');
  }
  }
  let a6=parseInt(prompt('inter my barthday year'));
  q6(a6);
let q7=function(){
  let colorArr = ['red','blue','green','yellow','black'];
  for(let i=0; i<6;i++){
    if(colorArr.indexOf(a7) !== -1) {
      // alert("Yes, the value exists!")  ;
      console.log(countScore=countScore+1);
      break;}
      else
      {a7=prompt(' Guess what my favorit color'); } }
    }
      let a7=prompt(' Guess what my favorit color');
      q7(a7);
alert('score'+countScore);
alert ('These my favorate color'+colorArr);
alert (x+' '+'this website will keep developed every day inshaalah');