//  The key is restricted from Google Cloud Console. Any bad intentioned usage will only result in errors for the end user.
//The below code prevents users to open Dev Tools from keyboard. It can still be opened by using the mouse only
/*document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123) {
     e.stopPropagation();
     e.preventDefault();
    }
   });*/



// Get references to the content divs and navbar list items
const contentDivs = document.querySelectorAll('.content');
const navbarItems = document.querySelectorAll('.navbar li');

// Function to hide all content divs
function hideAllContent() {
    contentDivs.forEach(content => {
        content.style.display = 'none';
    });
}

// Function to show the content associated with the clicked navbar item
function showContent(targetId) {
    hideAllContent(); // Hide all content first
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
}

// Add click event listeners to navbar list items
navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        showContent(targetId);
    });
});

// Show the initial content when the page loads
showContent('home-content'); // Change 'home-content' to the default content ID you want to display

function toggleResponsiveNavbar() {
    var responsiveNavbar = document.querySelector(".responsive-navbar");
    if (window.innerWidth < 768) {
      responsiveNavbar.style.display = "block";
    } else {
      responsiveNavbar.style.display = "none";
    }
  }
  
  // Call the function on page load and window resize
  toggleResponsiveNavbar();
  window.addEventListener("resize", toggleResponsiveNavbar);
  // Get references to the content divs and responsive navbar list items
const contentDivs1 = document.querySelectorAll('.content');
const responsiveNavbarItems = document.querySelectorAll('.responsive-navbar li');

// Function to hide all content divs
function hideAllContent() {
    contentDivs.forEach(content => {
        content.style.display = 'none';
    });
}

// Function to show the content associated with the clicked responsive navbar item
function showContent(targetId) {
    hideAllContent(); // Hide all content first
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
}

// Add click event listeners to responsive navbar list items
responsiveNavbarItems.forEach(item => {
    item.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        showContent(targetId);
    });
});

// Show the initial content when the page loads
showContent('home-content'); // Change 'home-content' to the default content ID you want to display




//FULSCREEN MAP on last navbar button
function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      element.classList.add('fullscreen');
    } else {
      document.exitFullscreen();
      element.classList.remove('fullscreen');
      resetIframeSize(element);
    }
  }
  
  function resetIframeSize(element) {
    element.style.transform = 'scale(1)';
    element.style.width = '100%';
    element.style.height = '100%';
  }
  
  document.getElementById('fullscreen-button').addEventListener('click', function() {
    const harta = document.getElementById('harta');
    toggleFullscreen(harta);
  });
  
  document.addEventListener('fullscreenchange', function() {
    const harta = document.getElementById('harta');
    if (!document.fullscreenElement) {
      resetIframeSize(harta);
    }
  });
  