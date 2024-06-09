
let notes = JSON.parse(localStorage.getItem("notes")) || []
draw()

$("#add").click(function () {
  let note = {
    title: $(".title").val(),
    text: $(".text").val(),
    data: new Date().getTime(),
    complete: false
  }
  notes.push(note)
  $(".title").val("")
  $(".text").val("")
  localStorage.setItem("notes", JSON.stringify(notes))
  draw()
  
})

function draw() {
  $(".notes").empty()
  notes.forEach(element => {
    $(".notes").append(
      `<div class="note ${element.complete}">
      <div class="head">
        <h3>${element.title}</h3>
        <h5>${new Date(element.data).toDateString()}</h5>
      </div>

      <p>${element.text}</p>
      
      <div class="buttons">
        <button onclick="redact(${element.data})"><i class="fa-solid fa-pen"></i></button>
        <button onclick="del(${element.data})"><i class="fa-solid fa-trash-can"></i></button>
        <button onclick="noteDo(${element.data})"><i class="fa-solid fa-check"></i></button>
      </div>

    </div>
        `
    )
    
  });
}

function del(data) {
  notes = notes.filter(item => item.data !== data)
  localStorage.setItem("notes", JSON.stringify(notes))
  draw()
}

function noteDo(complete) {
  
  let objectToModify = notes.find(obj => obj.data == complete);

  // Змінюємо поле обраного об'єкта
  if (objectToModify) {
    objectToModify.complete = !objectToModify.complete;
  }
  localStorage.setItem("notes", JSON.stringify(notes))
  draw()

}
function redact(data) {
  let objectToModify = notes.find(obj => obj.data == data);
  

  // Змінюємо поле обраного об'єкта
  if (objectToModify) {
    objectToModify.title = prompt("Введіть новий заголовок",objectToModify.title)
    objectToModify.text = prompt("Введіть новий текст",objectToModify.text)
  }
  localStorage.setItem("notes", JSON.stringify(notes))
  draw()

}

// prompt("asdasd","" ,(mess)=>{
//   alert(mess)
// })



// localStorage.setItem("notes", JSON.stringify(data))

