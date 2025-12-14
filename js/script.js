//added this line to check if the javascript is connected but now commenting it
//alert("SCRIPT.JS IS LOADED");
document.addEventListener("DOMContentLoaded", () => {
    // Show today's special deal
    function showDeal() {
        const dealSection = document.getElementById('deal');
        dealSection.innerHTML = `
            <h2>Today's Special Offer!</h2>
            <p>Grab your classic Nintendo Game Boy for only $79.99! Limited stock available!</p>
        `;
    }

    // Attach event to the button
    const dealButton = document.querySelector("button");
    if (dealButton) {
        dealButton.addEventListener("click", showDeal);
    }
});
// Typing effect for About page
document.addEventListener("DOMContentLoaded", function () {

    const aboutText = document.getElementById("aboutText");
    if (!aboutText) return;

    const text =`The Game Boy (JP) DMG-001 model is a portable handheld console manufactured by Nintendo and initially released in 1989. 
    It was the first dedicated 8-bit handheld system from the company, using interchangeable cartridges to play a wide variety of titles. 

    The console features a 2.6-inch LCD screen with 4 shades, stereo sound through headphones, and a button layout based on the Nintendo Entertainment System controller. 
    It is powered by 4 AA batteries but can also be connected to an AC Adapter for wall power. 

    Among handheld systems that used ROM cartridges, the Game Boy was the most popular of its time, captivating players with its portability, durability, and extensive game library. 
    It became a cultural icon in portable gaming and remains an important part of Nintendo's history.`;


    let i = 0;

    function typeText() {
        if (i < text.length) {
            aboutText.innerHTML +=
                text[i] === "\n" ? "<br><br>" : text[i];
            i++;
            setTimeout(typeText, 30);//for typing effect speed
        }
    }

    typeText();
});


// Feedback stars
const stars = document.querySelectorAll('.stars span');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.dataset.value;
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

// Feedback form submission
const form = document.getElementById('feedbackForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        if (!selectedRating) {
            alert('Please select a star rating!');
            return;
        }

        document.getElementById('feedbackMessage').innerText =
            `Thank you, ${name}! Your comment: "${comment}" with rating: ${selectedRating} stars has been submitted.`;

        form.reset();
        stars.forEach(s => s.classList.remove('selected'));
        selectedRating = 0;
    });
}
