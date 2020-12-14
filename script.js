var counter = 0;

$(".button1").click(function() {
    var scale = $(".scale").val();
    var home = $(".home").val();
   
    if ( scale <= 5 && home==="big city") {
    $(".result").text("You got John B!");
    $(".results").show();
    $(".results").append("<img src=https://static.wikia.nocookie.net/outer-banks-netflix/images/3/32/John_B_Season_1_%282%29.jpg/revision/latest?cb=20200418034959>");
   
    } else if (scale > 5 && home==="big city") {
    $(".result").text("You got JJ!");
    $(".results").show();
    $(".results").append("<img src=https://static.wikia.nocookie.net/outer-banks-netflix/images/b/be/JJ_Season_1_%282%29.jpg/revision/latest?cb=20200418040423>");
    
    } else if (scale <= 5 && home==="by the beach") {
    $(".result").text("You got Kiera!");
    $(".results").show();
    $(".results").append("<img src=https://static.wikia.nocookie.net/outer-banks-netflix/images/5/59/Kiara_Season_1_%282%29.jpg/revision/latest?cb=20200418041434>");
    
    } else if (scale > 5 && home==="by the beach") {
    $(".result").text("You got Pope!");
    $(".results").show();
    $(".results").append("<img src=https://data.whicdn.com/images/343798739/original.png>");
    
    } else {
    $(".result").text("Check your answers and try again!");
    }
     
    counter = counter +1;
    $(".counter").text("This quiz was submitted " + counter + " times");

});



