$(document).ready(function(e) {
  menulist();  // creates the menu
  // initial image to display;
  displayDog(0);

  // event listeners have to come after menulist is created
  $("#dog0").click(function(e) {
    displayDog(0);
  });
  $("#dog1").click(function(e) {
    displayDog(1);
  });
  $("#dog2").click(function(e) {
    displayDog(2);
  });
  $("#dog3").click(function(e) {
    displayDog(3);
  });
  $("#dog4").click(function(e) {
    displayDog(4);
  });

});

// creates the menu in a loop
function menulist() {
  for (let i=0; i<5; i++) {
    $(".dogmenu").append('<div id="dog' + i + '" class=\"col-4 col-md-3 col-lg-2 mb-2 mx-auto\"><img class=\"img-fluid\"src=\"' + dogs[i].urlLink() + '\"><div class="dogTitle text-center">' + dogs[i].breedName + '</div></div>')
  };
};

//displays dog image when called by click with dognum
function displayDog(dogNum) {
  let i = dogNum;
  $("#dogDisplay").html ('<div class="row"><div class=\"col-10 mx-auto text-center mb-4\"><img class="img-fluid" src="' + dogs[i].urlLink() + '"><div class="text-center">' + dogs[i].breedName + '</div><div class="text-center">' + dogs[i].comboName + '</div></div></div>');
};
