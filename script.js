function showCookiePopup() {
    var cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
        document.getElementById("cookiePopup").style.display = "block";
    }
}

function acceptCookies() {
    localStorage.setItem("cookieAccepted", true);
    document.getElementById("cookiePopup").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
    showCookiePopup();
});


function openCartPage() {
    window.location.href = "cart.html";
  }
  
  
  function addToCart(productName) {
    // Add your cart logic here
    // This is just an example to show the popup
    document.getElementById("popupText").textContent = productName + " has been added to the cart.";
    document.getElementById("popup").style.display = "block";
    setTimeout(function () {
        document.getElementById("popup").style.display = "none";
    }, 3000); // Hide the popup after 3 seconds
  }

  document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
  
    // Add event listeners to prev and next buttons
    prevButton.addEventListener("click", showPrevItem);
    nextButton.addEventListener("click", showNextItem);
  
    // Display the initial active item
    carouselItems[currentIndex].classList.add("active");
  
    function showPrevItem() {
      carouselItems[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[currentIndex].classList.add("active");
    }
  
    function showNextItem() {
      carouselItems[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add("active");
    }
  });

  function showCartPopup() {
    var cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = "block";
    setTimeout(function() {
      cartPopup.style.display = "none";
    }, 2000);
  }
  