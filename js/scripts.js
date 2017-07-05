//business logic (Back-end)

//Base Price 8.00

//Pretty Woman -1.00
//Best in Show -1.00
//Up normal price
//Wonder Woman new release +2.00

//13:00 Matinee -2.00
//15:00 normal
//17:00 normal
//19:00 normal

//12 and under -1.50
//12 - 18 normal
//18 - 60 normal
//60 and over -1.50

//Ad student ID -1.00

function Ticket(title, time, age) {
  this.movieTitle = title;
  this.movieTime = time;
  this.userAge = age;
}

Ticket.prototype.price = function() {
  var ticketPrice = 8;
  if (this.movieTitle === "Pretty Woman") {
    ticketPrice -= 1;
  } else if (this.movieTitle === "Best in Show") {
    ticketPrice -= 1;
  } else if (this.movieTitle === "Up") {
    ticketPrice += 0;
  } else {
    ticketPrice += 2;
  }

  if (this.movieTime === "13:00 Matinee") {
    ticketPrice -= 2;
  } else {
    ticketPrice += 0;
  }

  if (this.userAge === "12 and under" || this.userAge === "60 and over") {
    ticketPrice -= 1.5;
  } else {
    ticketPrice += 0;
  }
}

//user logic (Front-end)

  $(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();

      var inputTitle = $("#movieInput").val();
      var inputTime = $("#timeInput").val();
      var inputAge = $("#ageInput").val();
      var newTicket = new Ticket(inputTitle, inputTime, inputAge);

      $(".ticketResults").show();
      $("#showPrice").text(newTicket.price());
    });
  });
