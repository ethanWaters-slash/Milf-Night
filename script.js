// JavaScript for Carousel
document.addEventListener('DOMContentLoaded', function() {
  const countdownElement = document.getElementById('countdown');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  // Set the target date for the countdown
  const targetDate = new Date('2024-10-26T21:00:00').getTime();

  // Update the countdown every second
  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    daysElement.textContent = days + ' days';
    hoursElement.textContent = hours + ' hours';
    minutesElement.textContent = minutes + ' minutes';
    secondsElement.textContent = seconds + ' seconds';
  }
});
var slides = document.querySelectorAll(".mySlides");
var i = 0;

function plusSlides(n) {
  i += n;
  if (i > slides.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = slides.length - 1;
  }
  for (var slide of slides) {
    slide.style.display = "none";
  }
  slides[i].style.display = "block";
}

// Call plusSlides to display the initial slide
plusSlides(0);

setInterval(function() {
  plusSlides(1);
}, 3500);

const merchItems = document.querySelectorAll('.merch-item');

// Add event listeners for mouseenter and mouseleave on each merch item
merchItems.forEach((item) => {
  const image = item.querySelector('img');
  const soldOutMessage = document.createElement('div');
  soldOutMessage.textContent = 'Sold Out';
  soldOutMessage.classList.add('sold-out-message');

  item.addEventListener('mouseenter', () => {
    // Check if the item is sold out
    const isSoldOut = item.classList.contains('sold-out');

    if (isSoldOut) {
      // Display "Sold Out" message
      image.style.opacity = '0.5';
      image.insertAdjacentElement('afterend', soldOutMessage);
    }
  });

  item.addEventListener('mouseleave', () => {
    // Remove the "Sold Out" message when mouse leaves
    image.style.opacity = '1';
    soldOutMessage.remove();
  });
});

const tourDays = document.querySelectorAll('.tour-day');
const selectedDateInfo = document.getElementById('selected-date-info');

tourDays.forEach((day) => {
  day.addEventListener('click', () => {
    // Clear the selected class from all dates
    tourDays.forEach((d) => {
      d.classList.remove('selected');
    });

    // Add the selected class to the clicked date
    day.classList.add('selected');

    // Check if the selected date is available
    const isAvailable = isDateAvailable(day.textContent);

    // Extract the date and city from the text
    const [date, city] = day.textContent.split(' - ');

    // Update the selected date info
    const selectedDate = `${day.parentNode.previousElementSibling.textContent} ${date} - ${city}, `;
    if (isAvailable) {
      selectedDateInfo.textContent = `Selected Date: ${selectedDate}`;
      selectedDateInfo.style.color = '#000'; // Set the color for available date
    } else {
      selectedDateInfo.textContent = `Selected Date: ${selectedDate} (Sold Out)`;
      selectedDateInfo.style.color = '#f00'; // Set the color for sold out date
    }
  });
});


// Function to check if a date is available
function isDateAvailable(date) {
  // Implement your logic to check if the date is available or sold out
  // You can use an array, database, or any other data source to store the available dates
  // Return true if the date is available, and false if it is sold out
  // Example:
  const availableDates = [];
  return availableDates.includes(date);
}

// Play and Pause Controls
var audio = document.querySelector('audio');
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');

playButton.addEventListener('click', function() {
  audio.play();
});

pauseButton.addEventListener('click', function() {
  audio.pause();
});
