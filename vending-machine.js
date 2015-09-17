$(document).ready(function() {
  var pepsi = 5;
  var coke = 5;
  var up7 = 5;
  var drpepper = 5;
  var fanta = 5;
  var horchata = 5;
  var price = 2;
  var input = parseInt(prompt('How much money will you insert?'));



  $("#pepsi").click(function() {
    if (input > 1) {
      if (pepsi > 0) {
        pepsi -= 1;
        alert("Pick up drink");
        input -= 2;
      }
        if (pepsi === 0) {
          $("#pepsi").attr("disabled", "disabled");
          $("#pepsi").attr("title", "Sold out");
          alert("Out of stock!");
        }
      } else {
      alert('Not enough money!!!');
    }
  });//pepsi

  $("#coke").click(function() {
    if (input > 1) {
      if (coke > 0) {
        coke -= 1;
        alert("Pick up drink");
        input -= 2;
      }
        if (coke === 0) {
          $("#coke").attr("disabled", "disabled");
          $("#coke").attr("title", "Sold out");
          alert("Out of stock!");
        }
    } else {
      alert('Not enough money!!!');
    }
  });//coke

  $("#up7").click(function() {
    if (input > 1) {
      if (up7 > 0) {
        up7 -= 1;
        alert("Pick up drink");
        input -= 2;
      }
        if (up7 === 0) {
          $("#up7").attr("disabled", "disabled");
          $("#up7").attr("title", "Sold out");
          alert("Out of stock!");
        }
    } else {
      alert('Not enough money!!!');
    }
  });//up7

  $("#drpepper").click(function() {
    if (input > 1) {
      if (drpepper > 0) {
        drpepper -= 1;
        alert("Pick up drink");
        input -= 2;
      }
        if (drpepper === 0) {
          $("#drpepper").attr("disabled", "disabled");
          $("#drpepper").attr("title", "Sold out");
          alert("Out of stock!");
        }
    } else {
      alert('Not enough money!!!');
    }
  });//drpepper

  $("#fanta").click(function() {
    if (input > 1) {
      if (fanta > 0) {
        fanta -= 1;
        alert("Pick up drink");
        input -= 2;
      }
        if (fanta === 0) {
          $("#fanta").attr("disabled", "disabled");
          $("#fanta").attr("title", "Sold out");
          alert("Out of stock!");
        }
    } else {
      alert('Not enough money!!!');
    }
  });//fanta

  $("#horchata").click(function() {
    if (input > 1) {
      if (horchata > 0) {
        horchata -= 1;
        alert("Pick up drink");
        input -= 2;
      }
      if (horchata === 0) {
        $("#horchata").attr("disabled", "disabled");
        $("#horchata").attr("title", "Sold out");
        alert("Out of stock!");
      }
  } else {
    alert('Not enough money!!!');
  }
  });//horchata

});//ready
