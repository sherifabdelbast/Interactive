let selectedRating = 0;

function rate(number) {
    selectedRating = number;
    
    // Reset all stars to the default color
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('active');
    });
    
    // Set only clicked star to active
    document.querySelector(`.star:nth-child(${number})`).classList.add('active');
}

function handleSubmit() {
    if (selectedRating === 0) {
        alert('Please select a rating before submitting');
        return;
    }
    
    // Update rating text
    document.getElementById('rating').textContent = selectedRating;
    
    // Hide rating state and show thank you state
    document.getElementById('rating-state').style.display = 'none';
    document.getElementById('thank-you-state').style.display = 'flex';
}