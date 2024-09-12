document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('leaves-container');
    const leafCount = 50;

    for (let i = 0; i < leafCount; i++) {
        createLeaf();
    }

    function createLeaf() {
        const leaf = document.createElement('img');
        leaf.src = 'leaf1.png'; // Make sure this path is correct
        leaf.classList.add('leaf');
        
        // Random starting position
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.top = -50 + 'px';

        container.appendChild(leaf);

        animateLeaf(leaf);
    }

    function animateLeaf(leaf) {
        const duration = 15000 + Math.random() * 10000; // 15-25 seconds
        const startRotation = Math.random() * 360;
        const rotationSpeed = Math.random() * 720 - 360; // -360 to 360 degrees per second
        const horizontalAmplitude = Math.random() * 300 + 100; // 100-400px horizontal drift
        const horizontalFrequency = Math.random() * 2 + 1; // 1-3 horizontal oscillations

        const keyframes = [];
        for (let i = 0; i <= 100; i++) {
            const progress = i / 100;
            const verticalPosition = progress * 105;
            const horizontalPosition = Math.sin(progress * Math.PI * 2 * horizontalFrequency) * horizontalAmplitude;
            const rotation = startRotation + rotationSpeed * progress * (duration / 1000);
            
            keyframes.push({
                transform: `translateY(${verticalPosition}vh) translateX(${horizontalPosition}px) rotate(${rotation}deg)`,
                opacity: 1 - progress
            });
        }

        leaf.animate(keyframes, {
            duration: duration,
            easing: 'linear',
            iterations: Infinity
        });
    }
});
