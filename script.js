$(document).ready(function () {
  let notes = []


  $("#add").click(function(){
    let note = {
      title: $(".title").val(),
      text: $(".text").val(),
      data: new Date().getTime()
    }
    notes.push(note)
    $(".title").val("")
    $(".text").val("")
    console.log(notes)
    draw()
  })

  function draw(){
    notes.forEach(element => {
      $(".notes").append(
        `
        <div class="note">
      <div class="head">
        <h3>SIT</h3>
        <h5>12:11</h5>
      </div>

      <p> Введіть інформацію котру ви хочете прикріпити або запам'ятати</p>
      <div class="buttons">
        <button class="but"><i class="fa-solid fa-pen"></i></button>
        <button><i class="fa-solid fa-trash-can"></i></button>
        <button><i class="fa-solid fa-check"></i></button>
      </div>

    </div>
        `
      )
    });
  }

});
// new Date(data).toDateString()

// localStorage.setItem("notes", JSON.stringify(data))

// JSON.parse(localStorage.getItem("notes"))