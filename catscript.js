document.addEventListener('DOMContentLoaded', () => {
    const slapButton = document.getElementById('slapButton');
    const catPaw = document.getElementById('catPaw');
    const cat = document.getElementById('cat');

    slapButton.addEventListener('click', () => {
        // Show the cat paw
        catPaw.style.display = 'block';
        catPaw.style.top = `${cat.offsetTop + 20}px`; // Adjust this value to position the cat paw correctly
        catPaw.style.left = `${cat.offsetLeft - 30}px`; // Adjust this value to position the cat paw correctly

        // Add the slapping animation
        catPaw.classList.add('slapping');

        // Remove the slapping animation after a short delay
        setTimeout(() => {
            catPaw.classList.remove('slapping');
            catPaw.style.display = 'none';
        }, 500);
    });
});
