'use strict';
let x=prompt("enter your name please");

alert ("welcome "+" "+x+" "+"in our webpage we hope to enjoy in this trip");

alert('please read following message and after that you will answer one qustion')

alert('ilove small cars like (Ford ,Toyota and tesla)'+"  "+",i love health food ,"+"  "+" and my height is 153.");

    let c=confirm("did i love fast food")

    if (c== false){
        console.log('realy happy for your answer'); 
    }
    else{
        console.log('No i didnt like fast food not good for health'); 
    }


    alert('Answer following qustion to help us to developed our webpage in the future.');
let a1=prompt("did you love big artucle answer(yse/no)".toLowerCase());
switch(a1){
    case 'yes':
         console.log('good reader'); 
        break;
        case 'no':
            console.log('we will foucse in this point'); 
              break;
          default:
            console.log('hmmm try another answer'); 
            break;

    }

    let a2=prompt("did you prefare colorful webpages answer(YSE/NO)".toLowerCase());
switch(a2){
    case 'yes':
         console.log('very good'); 
        break;
        case 'no':
            console.log('you love classic theme'); 
              break;
          default:
            console.log('hmmm try another answer'); 
            break;

    }

    let a3=prompt("did you prefare techniqal webpage(yse/no)".toUpperCase());
switch(a3){
    case 'Y':
         console.log('we will work on that'); 
        break;
        case 'N':
            console.log('can you please contact us to us what you prefare'); 
              break;
          default:
            console.log('hmmm try another answer'); 
            break;
    }

    let a4=prompt("did you prefar small font size(yse/no)".toLowerCase());

    if (a4 === 'yes'){
        console.log('very good');

    }else{
        console.log('we will work on that');
    }

    let a5=prompt("did you prefare simple font decoration(y/n)".toLowerCase());

    if (a5 === 'y'){
        console.log('good tast');

    }else{
        console.log('we will work on that');
    }

    alert (x+" "+"we will take all your answer we will take it seriously")
