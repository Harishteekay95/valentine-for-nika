{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww29200\viewh17820\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const noBtn = document.getElementById('noBtn');\
const yesBtn = document.getElementById('yesBtn');\
const question = document.getElementById('question');\
const mainGif = document.getElementById('main-gif');\
const heartContainer = document.getElementById('heartContainer');\
const audio = document.getElementById('bgMusic');\
\
// Function to move "No" button\
noBtn.addEventListener('mouseover', () => \{\
    // Play music on first interaction (browsers block auto-play)\
    audio.play();\
    \
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);\
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);\
    \
    noBtn.style.left = `$\{x\}px`;\
    noBtn.style.top = `$\{y\}px`;\
\});\
\
// Create floating hearts\
function createHeart() \{\
    const heart = document.createElement('div');\
    heart.classList.add('heart');\
    heart.innerHTML = '\uc0\u10084 \u65039 ';\
    heart.style.left = Math.random() * 100 + 'vw';\
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';\
    heartContainer.appendChild(heart);\
    \
    setTimeout(() => \{ heart.remove(); \}, 5000);\
\}\
\
setInterval(createHeart, 300);\
\
// Success State\
yesBtn.addEventListener('click', () => \{\
    question.innerHTML = "I knew you'd say yes, Nika! \uc0\u10084 \u65039 ";\
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZqZzR6eXN6eHh4eXh4eXh4eXh4eXh4eXh4eXh4eXh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/H7v9tO9Y6p11v3I8hI/giphy.gif";\
    noBtn.style.display = 'none';\
    \
    // Extra celebration: more hearts!\
    for(let i=0; i<20; i++) \{\
        setTimeout(createHeart, i * 100);\
    \}\
\});}