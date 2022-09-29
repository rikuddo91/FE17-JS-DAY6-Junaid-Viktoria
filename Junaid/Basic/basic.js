var arr = JSON.parse(favfood);
console.log(arr)

arr.forEach(function(value, i) {
    document.getElementById("result").innerHTML = `
    My favorite sandwich is a ${arr[0].sandwich} which has approximately ${arr[0].calories} calories, along with it I enjoy eating ${arr[1].fries_size} which have about ${arr[1].calories} calories.<br>
  `;
})