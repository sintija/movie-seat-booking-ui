let container = document.querySelector(".container");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.querySelector("#count");
let total = document.querySelector("#total");
let movieSelect = document.querySelector("#movie");
//Adding the plus sign in front to change from number to string
let ticketPrice = +movieSelect.value;

//Update the ticket proce based on the movie
function updateSelectedCount() {
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    let selectedSeatsCount = selectedSeats.length;
    total.innerText = selectedSeatsCount * ticketPrice;
    count.innerHTML = selectedSeatsCount;
    // console.log(selectedSeats);
    //Adding to the local storage 
    //1.Copy selectd seats into the array (using spread operator to copy data from selected seats )
    let seatIndex = [...selectedSeats];







    //Map through array
    //return a new array indexes









}

// console.log(typeof ticketPrice);
function selectSeat(event) {
    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        event.target.classList.toggle('selected');
        updateSelectedCount();
    }
}

function changeTheTicketPrice(event) {
    ticketPrice = +event.target.value;
    updateSelectedCount();

}



//Click to the seat
container.addEventListener('click', selectSeat);

//Movie select event on the list change
movieSelect.addEventListener('change', changeTheTicketPrice);