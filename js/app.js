'use strict';
let x=prompt("enter your name please");

alert ("welcome "+" "+x+" "+"in our webpage we hope to enjoy in this trip");

alert('please read following message and after that you will answer one qustion')

alert('ilove small cars like (Ford ,Toyota and tesla)'+"  "+",love health food ,"+"  "+",and my height is 153."+"  "+",inlove with node color"+"  "
+" ,reading book"+"  "+" intresting on technical.");

    let c=confirm("did i love fast food")

    if (c== false){
        console.log('realy happy for your answer'); 
    }
    else{
        console.log('No i didnt like fast food not good for health'); 
    }
    
let a1=prompt("did i prefare big car answer(yse/no)".toLowerCase());
switch(a1){
    case 'yes':
         console.log('yes i love small car'); 
        break;
        case 'no':
            console.log('no didnt like big car'); 
              break;
          default:
            console.log('hmmm try another answer'); 
            break;

    }

    let a2=prompt("did i love read big book?(YSE/NO)".toLowerCase());
switch(a2){
    case 'yes':
         console.log('i hope you love reading olso'); 
        break;
        case 'no':
            console.log('not prefer it') ;
              break;
          default:
            console.log('hmmm try another answer'); 
            break;

    }

    let a3=prompt("did you prefare classic color(yse/no)".toUpperCase());
switch(a3){
    case 'Y':
         console.log('no not my tast'); 
        break;
        case 'N':
            console.log('correct answer'); 
              break;
          default:
            console.log('hmmm try another answer'); 
            break;
    }

    let a4=prompt("Is my height 153(yse/no)".toLowerCase());

    if (a4 === 'yes'){
        console.log('im realy happy correct answer');

    }else if(a4 ==='no'){
        console.log('wrong answer try to foucs on alert next time');
    }
    else{
        console.log('not the expected answer');
    }

    let a5=prompt("did i intrested in technology(y/n)".toUpperCase());

    if (a5 === 'y'){
        console.log('yes try to learn somthing new');

    }else{
        console.log('not the correct answer');
    }

    alert (x+" "+"this website will keep developed every day inshaalah")

    