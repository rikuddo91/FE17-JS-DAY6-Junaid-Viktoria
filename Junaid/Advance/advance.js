let data = JSON.parse(books);
console.log(data);

for (let index in data) {
    document.getElementById("result").innerHTML +=
        `<div class="card" style="width: 18%; float:left; margin:1%; col-2">
                <img src="${data[index].img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="color${index}">${data[index].title}</h5>
                  <p class="card-text">${data[index].author}</p>
                </div>
              </div>`

    if (data[index].read == true) {
        document.getElementById(`color${index}`).style.color += "green";
    } else {
        document.getElementById(`color${index}`).style.color += "red";
    };
}