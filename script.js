const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');
const heartContainer = document.getElementById('heartContainer');
const audio = document.getElementById('bgMusic');

// Function to move "No" button within the visible screen
noBtn.addEventListener('mouseover', () => {
    audio.play().catch(e => console.log("Audio waiting for interaction"));
    
    // Limits movement to the visible window area
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heartContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 300);

yesBtn.addEventListener('click', () => {
    audio.play();
    question.innerHTML = "I knew you'd say yes, Nika! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZqZzR6eXN6eHh4eXh4eXh4eXh4eXh4eXh4eXh4eXh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/H7v9tO9Y6p11v3I8hI/giphy.gif";
    noBtn.style.display = 'none';
    for(let i=0; i<20; i++) {
        setTimeout(createHeart, i * 100);
    }
});
