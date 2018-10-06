// Write your code in this file!
//et(199)).to.equal('This one is on me!');
//     });

//     it('charges 30 dollars for a distance over 2000 feet', function () {
//       expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
//     });

//     it('does not allow rides over 2500 feet', function () {
//       expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
//     });
//   });
function scuberGreetingForFeet(distance){
  if(distance>2500){
    "No can do.";
  }elsif(distance<=400);{
    "This one is on me!";
  }elsif(distance>=2000){
    "I will gladly take your thirty bucks."
  }
}