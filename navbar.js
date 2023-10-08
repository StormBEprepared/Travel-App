const navbar = document.querySelector(".navbar");

// Function to set the active li element
function setActiveLi(li) {
    const lis = navbar.querySelectorAll("li");

    // Remove 'active' class from all li elements
    lis.forEach((item) => {
        item.classList.remove("active");
    });

    // Add 'active' class to the clicked li element
    li.classList.add("active");
}

// Event delegation: Listen for clicks on the ul element
navbar.querySelector("ul").addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        const li = e.target.parentElement;
        setActiveLi(li);
    }
});
