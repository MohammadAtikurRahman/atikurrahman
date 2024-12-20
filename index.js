// index.js

// Function to show a specific div
function showDiv(divId) {
    // Hide all content divs
    const contentDivs = document.querySelectorAll('.content-div');
    contentDivs.forEach(div => (div.style.display = 'none'));
  
    // Show the selected content div
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
      selectedDiv.style.display = 'block';
    }
  }
  
  // Add click listeners to navbar icons
  document.querySelectorAll('.nav-icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
  
      // Hide all content divs
      document.querySelectorAll('.content').forEach(div => (div.style.display = 'none'));
  
      // Get target div and show it
      const targetDiv = event.currentTarget.getAttribute('data-target');
      document.getElementById(targetDiv).style.display = 'block';
    });
  });
  