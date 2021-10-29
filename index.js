let blocksPickup
const hq = 0
function distanceFromHqInBlocks(blocksPickup) {
    if (blocksPickup > 42) {
        return blocksPickup - 42 
    }
    else (blocksPickup < 42) 
        return 42 - blocksPickup
}

function distanceFromHqInFeet(feetPickup) {
    if (feetPickup > 42) {
        return (feetPickup - 42) * 264
    }
    else (feetPickup < 42)
        return (42 - feetPickup) * 264
}

function distanceTravelledInFeet(pointA, pointB) {
     if (pointA > pointB) {
        return (pointA - pointB) * 264
     }
     else (pointB > pointA)
        return (pointB - pointA) * 264
}

function calculatesFarePrice(pointA, pointB) {
    const feetTraveled = distanceTravelledInFeet(pointA, pointB);
    console.log(feetTraveled);   
    if (feetTraveled <= 400) {
        return 0
    }
    else if (feetTraveled >= 2500) 
        return 'cannot travel that far'
    else if (feetTraveled > 2000 && feetTraveled < 2500)
        return 25;
    else if (400 < feetTraveled && feetTraveled <= 2000) {
        console.log(feetTraveled * .02)
        return (feetTraveled - 400) * .02};
}