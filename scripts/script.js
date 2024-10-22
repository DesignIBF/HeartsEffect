// const container = document.querySelector('.heart-container');

// // SVG Heart
// const heartSVG = `
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E01983">
//     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//   </svg>
// `;

// // Generate 100 hearts with consistent sizes, positions, and staggered delays
// for (let i = 0; i < 200; i++) {
//   const heart = document.createElement('div');
//   heart.classList.add('heart');
  
//   // Add the SVG to the div
//   heart.innerHTML = heartSVG;

//   // Random horizontal position
//   heart.style.left = `${Math.random() * 250}%`;

//   // Set consistent animation duration
//   heart.style.animationDuration = `15s`;

//   // Random animation delay to stagger hearts
//   heart.style.animationDelay = `${Math.random() * 15}s`;

//   // Append each heart to the container
//   container.appendChild(heart);
// }


const container = document.querySelector('.heart-container');

// SVG Heart
const heartSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E01983">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
`;

// To store previous heart positions and prevent overlap
let previousPositions = [];

// Define the heart width (in percentage of container width) and minimum distance
const heartWidthPercentage = 32 / document.documentElement.clientWidth * 100; // Convert 32px to percentage of the viewport width
const minDistance = heartWidthPercentage + 5; // Minimum distance between hearts (heart width + extra 5% buffer)

// Generate 200 hearts with consistent sizes, positions, and staggered delays
for (let i = 0; i < 100; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Add the SVG to the div
  heart.innerHTML = heartSVG;

  // Calculate random horizontal position without overlap
  let newPosition;
  let attempts = 0; // Limit attempts to avoid infinite loops
  do {
    newPosition = Math.random() * 100; // Random percentage position across the container
    attempts++;
  } while (attempts < 100 && previousPositions.some(pos => Math.abs(newPosition - pos) < minDistance));

  // Store the new position to prevent future overlap
  previousPositions.push(newPosition);

  // Apply the random position to the heart
  heart.style.left = `${newPosition}%`;

  // Set consistent animation duration
  heart.style.animationDuration = `15s`;

  // Random animation delay to stagger hearts
  heart.style.animationDelay = `${Math.random() * 15}s`;

  // Append each heart to the container
  container.appendChild(heart);
}