function scuberGreetingForFeet(distance){
  if(distance>2500){
   return  "No can do.";
  }else if(distance<=400){
   return  "This one is on me!";
  }else if(distance>=2000){
   return  "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  var resp = "";
  city === "NYC" ? resp = "Okay, sounds good." : resp = "no go.";
  return resp;
}

function switchOnCharmFromTip(phrase){
  var ans="";
  switch (phrase){
    case 'generous':
      ans = 'Thank you so much.';
      break;
    case 'not as generous':
      ans= 'Thank you.';
      break;
    default:
    ans = "Bye.";
  }
  return ans;
  
}