
let notes = JSON.parse(localStorage.getItem("notes")) || []
draw()
let last;

$("#add").click(function () {
if(  $(".title").val() != "" ){

  let note = {
    title: $(".title").val(),
    text: $(".text").val(),
    data: new Date().getTime(),
    complete: false,
    change: false,
  }
  notes.push(note)
  $(".title").val("")
  $(".text").val("")
  localStorage.setItem("notes", JSON.stringify(notes))
  draw()
  
}else{
  alert("Введіть заголовок");
}
})

function draw() {
  $(".notes").empty()
  notes.forEach(element => {
    $(".notes").append(
      `<div class="note ${element.complete}">
      <div class="head">
        <h6 class="${element.change}">(Змінено)</h6>
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

  if (objectToModify) {
    $(".window").css("display", "flex")
    $(".window").addClass("open")
    $(".window").removeClass("closing")
    $("#headerredact").val(objectToModify.title);
    $("#arearedact").val(objectToModify.text);
    last = data
      localStorage.setItem("notes", JSON.stringify(notes))
      draw()
  }
}

$(".butt1").click(function saveEditedNote() {
  let editedTitle = $("#headerredact").val();
  let editedText = $("#arearedact").val();

  let objectToModify = notes.find(obj => obj.data == last);

  if (objectToModify) {
   
    objectToModify.title = editedTitle;
    objectToModify.text = editedText;
    objectToModify.change = true

    
    localStorage.setItem("notes", JSON.stringify(notes));

    draw();

    // $(".window").css("animation", "fadeOut")
    // $(".window").css("animation-duration", "1s")
    setTimeout(()=>{
      $(".window").css("display", "none")
    }, 500)
    $(".window").removeClass("open")
    $(".window").addClass("closing")
    
  }
})


// prompt("asdasd","" ,(mess)=>{
//   alert(mess)
// })



// localStorage.setItem("notes", JSON.stringify(







