const cursor = document.getElementById('custom-cursor');
cursor.innerHTML = '⛺'; // Set the cursor to the tent emoticon

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
