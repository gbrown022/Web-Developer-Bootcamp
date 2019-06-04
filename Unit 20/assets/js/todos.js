//console.log("Connected.");

// selecet all the LIs
// if LI is clicked, add class "completed"
//      turn the background gra
//      add strikethrough to text

//var lis = document.getElementsByTagName("li");


// for (var i = 0; i < lis.length; i++) {
//     lis[i].addEventListener("click", function() {
//         lis[i].classList.toggle("completed");
//     }
// )};

$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
}) 

// Click on X to delete Todo
$('ul').on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    
    //$(this).parent().remove();
    event.stopPropagation();
});

// Add a new Todo li when user enters a new item and presses 'enter'
$('input[type="text"]').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
            // grabbing new todo text from input
            var todoText = $(this).val();
            $('ul').append('<li><span>X</span> ' + todoText + '</li>');
            //$('input[type="text"]').val('');
            $(this).val=('');
            event.stopPropagation();
        }
});