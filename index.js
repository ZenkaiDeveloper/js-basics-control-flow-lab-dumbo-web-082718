function scuberGreetingForFeet(distance){
  if(distance>2500){
    "No can do.";
  }else if(distance<=400){
    "This one is on me!";
  }else if(distance>=2000){
    "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  city === "NYC" ? "Okay, sounds good." : "no go.";
}

function switchOnCharmFromTip(phrase){
  switch (phrase){
    case 'generous':
      'Thank you so much.';
      break;
    case 'not as generous':
      'Thank you.';
      break;
    default:
    "Bye."
  }
  
}