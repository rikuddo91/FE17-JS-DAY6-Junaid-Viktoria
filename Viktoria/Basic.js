let myFavFood = JSON.parse(food);
console.log(myFavFood)

document.getElementById('result').innerHTML += "My favourite sandwich is a " + myFavFood[0].sandwiches + " which has approximately " + myFavFood[0].calories + " calories, along with it I enjoy eating " + myFavFood[1].fries_size + " which have about " + myFavFood[1].calories + " calories."