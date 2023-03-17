const scroller = document.querySelector('.scroller');
const scrollerContent = document.querySelector('.scroller-content');
const chars = scrollerContent.textContent.split('');
let scrollPosition = scroller.offsetWidth;
scrollerContent.innerHTML = '';

// Wrap each character in a span
chars.forEach((char, index) => {
    const charSpan = document.createElement('span');
    charSpan.textContent = char;
    charSpan.dataset.index = index;
    scrollerContent.appendChild(charSpan);
});


   

function scroll() {
    // Update the scrollPosition variable
    scrollPosition -= 6; // Adjust this value to change the scrolling speed

   // Check if the scroller reached the end of the content
   /*
   if (scrollPosition <= -scrollerContent.scrollWidth) {
    scrollPosition += scrollerContent.scrollWidth;
}*/

    // Loop through each span element containing the characters
    const characterSpans = scrollerContent.querySelectorAll('span');
    characterSpans.forEach((charSpan, index) => {
        // Calculate the yOffset using the sine function
        const yOffset = Math.sin((scrollPosition + index * 5) / 15) * 15; // Increase amplitude and adjust frequency for a more noticeable Y effect
    
        // Apply the combined translateY and translateX to each character using the left and bottom CSS properties
        // Use a fixed spacing value (e.g., 40) between characters
        charSpan.style.left = `${scrollPosition + index * 40}px`;
        charSpan.style.bottom = `${yOffset}px`;
    });
    // Call the scroll function using requestAnimationFrame to create a smooth animation
    requestAnimationFrame(scroll);
};



// Add a function to set the scroller's vertical position
function setVerticalPosition(position) {
    scroller.style.bottom = `${position}px`;
};

// Set the scroller's vertical position (e.g., 100 pixels from the bottom of the screen)

setVerticalPosition(-500);
scroll();
