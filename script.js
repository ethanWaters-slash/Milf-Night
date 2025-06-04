document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------
  // TESTIMONIALS SLIDER
  // ----------------------------------------
  const slides = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initialize first slide
  if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
  }

  // ----------------------------------------
  // TOUR DATES CLICK HANDLER
  // ----------------------------------------
  const tourDays = document.querySelectorAll('.tour-days li');
  const selectedDateInfo = document.getElementById('selected-date-info');

  tourDays.forEach((day) => {
    day.addEventListener('click', () => {
      // Clear previous selection
      tourDays.forEach((d) => d.classList.remove('selected'));

      // Mark the clicked date
      day.classList.add('selected');

      // Determine month from parent card
      const month = day.closest('.tour-month-card')
        .querySelector('h3')
        .textContent;
      const dateNum = day.textContent;
      const city = day.dataset.city || '';

      // Check availability
      const dateString = `${month} ${dateNum}`;
      const isAvailable = isDateAvailable(dateString);

      // Update the info text
      if (isAvailable) {
        selectedDateInfo.textContent = `Selected Date: ${month} ${dateNum} – ${city}`;
        selectedDateInfo.style.color = 'var(--accent-2)';
      } else {
        selectedDateInfo.textContent = `Selected Date: ${month} ${dateNum} – ${city} (Sold Out)`;
        selectedDateInfo.style.color = 'red';
      }
    });
  });

  function isDateAvailable(date) {
    // Populate with strings like "April 6", "May 4", etc.
    const availableDates = [
      // Example available dates:
      // Add more as needed
    ];
    return availableDates.includes(date);
  }

  // ----------------------------------------
  // MERCH HOVER (OPTIONAL – CSS handles overlay and scaling)
  // ----------------------------------------
  // No JS required for merch overlay since CSS .sold-out-overlay and :hover handle it.
  // If additional JS-based interactivity is desired, implement here.
});
