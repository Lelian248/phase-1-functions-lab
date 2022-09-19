// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const  headquarters  = 42;
    let block = Math.abs(location - headquarters);
    return block
}
console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(blockNum){
    let blockNumber = distanceFromHqInBlocks(blockNum);
    return blockNumber * 264;
}

function distanceTravelledInFeet(start, destination){
    const distance = (Math.abs(start- destination) * 264);
    return distance;
}

function calculatesFarePrice(start, destination){
   const feet =  distanceTravelledInFeet(start , destination);
   if (feet <= 400){
    console.log ("gives customers a free sample"); 
    return  0;
   }else if(feet >400 && feet < 2000){
      console.log('charges 2 cents per foot when total feet travelled is between 400 and 2000 ')
      return ((feet - 400) * 2 ) /100;
   }else if(feet > 2000 && feet < 2500){
     console.log('charges 25 dollars for a distance over 2000 feet')
     return  25;
   }else {
     console.log('cannot travel that far')
     return 'cannot travel that far'
   }
}
