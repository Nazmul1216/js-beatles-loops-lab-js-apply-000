// add solution here
function theBeatlesPlay(musicians,instruments){
  var musiciansPlaysInstruments=[]
  for(var i=0;i<musicians.length;i++){
   musiciansPlaysInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
   return musiciansPlaysInstruments
}
function johnLennonFacts(array){
  var i=0
  while(i<array.length){
    array[i]=`${array[i]}!!!`
    i+=1
  }
  return array
}
function iLoveTheBeatles(number){
  var potentialArray=[]
  do{
    potentialArray.push('I love the Beatles!')
    number++
  }
  while(number<15)
  return potentialArray
}
