//  The key is restricted from Google Cloud Console. Any bad intentioned usage will only result in errors for the end user.
//The below code prevents users to open Dev Tools from keyboard. It can still be opened by using the mouse only
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123) {
     e.stopPropagation();
     e.preventDefault();
    }
   });

alert("This website works with browser-based database. When using the app some of your settings/preferences may be saved. In order to keep those and enjoy the app, avoid deleting cache/memory occupied by this application. Thank you :)")

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
  if (targetId === 'maps-content') {
      // If the target content is 'maps-content', hide the entire left-panel
      const leftPanel = document.getElementById('left-panel');
      if (leftPanel) {
          leftPanel.style.display = 'none';
      }
  } else {
      // For other content, hide all content first
      hideAllContent();

      // Show the specific target content
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
          targetContent.style.display = 'block';
      }
  }
}

// Function to hide all content
function hideAllContent() {
  // Get a list of all content elements and hide them
  const contentElements = document.querySelectorAll('.content');
  contentElements.forEach(function (element) {
      element.style.display = 'none';
  });

  // If you want to show the 'left-panel' when hiding the content, you can add the following line
  const leftPanel = document.getElementById('left-panel');
  if (leftPanel) {
      leftPanel.style.display = 'block';
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
  


  // Get references to elements
const mobileHarta = document.getElementById("mobile-harta");
const navbarItems1 = document.querySelectorAll('.responsive-navbar li[data-target]');

// Add event listeners to the navbar items
navbarItems1.forEach(item => {
    item.addEventListener("click", function () {
        const target = this.getAttribute("data-target");
        // Check if the target is "maps-content"
        if (target === "maps-content") {
            mobileHarta.style.display = "block"; // Show the mobile-harta element
        } else {
            mobileHarta.style.display = "none"; // Hide the mobile-harta element for other content
        }
    });
});

  // Function to handle Ctrl+C (copy)
function handleCopy(event, inputField) {
  if (event.ctrlKey && event.key === 'c') {
    const selectedText = inputField.value.substring(inputField.selectionStart, inputField.selectionEnd);
    navigator.clipboard.writeText(selectedText).then(function() {
      console.log('Text copied to clipboard');
    }).catch(function(err) {
      console.error('Failed to copy text: ', err);
    });
  }
}

  // Function to handle Ctrl+V (paste)
function handlePaste(event, inputField) {
  if (event.ctrlKey && event.key === 'v') {
    navigator.clipboard.readText().then(function(text) {
      inputField.setRangeText(text, inputField.selectionStart, inputField.selectionEnd, 'end');
    }).catch(function(err) {
      console.error('Failed to paste text: ', err);
    });
  }
}

const cityInput = document.getElementById('cityInput');
const textInput = document.getElementById('textInput');
const folderLinkInput = document.getElementById('folderLinkInput');

  // Attach event listeners for copy and paste functionality to each input field
cityInput.addEventListener('keydown', (event) => handleCopy(event, cityInput));
cityInput.addEventListener('keydown', (event) => handlePaste(event, cityInput));

textInput.addEventListener('keydown', (event) => handleCopy(event, textInput));
textInput.addEventListener('keydown', (event) => handlePaste(event, textInput));

folderLinkInput.addEventListener('keydown', (event) => handleCopy(event, folderLinkInput));
folderLinkInput.addEventListener('keydown', (event) => handlePaste(event, folderLinkInput));
