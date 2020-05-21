// add solution here
var array = [];

function theBeatlesPlay(musicians, instruments){

  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0;

  while(i < facts.length){
    facts.push(`${facts[i]}!!!`)
    i++
  }
  return facts
}
