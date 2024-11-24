/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
document.querySelectorAll(".like-button").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("liked");
  });
});



// Price cart js

let cart = [];
let totalAmount = 0;

// Event Listener for Add to Cart
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function () {
    const price = parseFloat(this.getAttribute("data-price"));
    const plan = this.getAttribute("data-plan");

    // Add to Cart
    cart.push({ plan, price });
    totalAmount += price;

    // Update UI
    updateCart();
  });
});


function addToCart(productName, productPrice) {
  // Get the cart table body
  const cartTableBody = document.querySelector('.shopping-cart tbody');

  // Check if the item is already in the cart
  const existingRow = Array.from(cartTableBody.rows).find(
    (row) => row.cells[0].textContent === productName
  );

  if (existingRow) {
    // Update the quantity and total price for the existing row
    const quantityCell = existingRow.cells[2];
    const priceCell = existingRow.cells[1];
    const currentQuantity = parseInt(quantityCell.textContent, 10) || 1;
    quantityCell.textContent = currentQuantity + 1;

    const totalPrice = (currentQuantity + 1) * productPrice;
    priceCell.textContent = `$${totalPrice.toFixed(2)}`;
  } else {
    // Create a new row for the cart item
    const newRow = cartTableBody.insertRow();

    // Create cells for product name, price, and quantity
    const productNameCell = newRow.insertCell(0);
    const productPriceCell = newRow.insertCell(1);
    const productQuantityCell = newRow.insertCell(2);

    // Set the content of the cells
    productNameCell.textContent = productName;
    productPriceCell.textContent = `$${productPrice.toFixed(2)}`;
    productQuantityCell.textContent = 1;
  }
}


document.addEventListener("DOMContentLoaded", function () { // Remove the loader after 3 seconds 
setTimeout(function () { const loaderWrapper = document.getElementById("pageLoader"); if (loaderWrapper) { loaderWrapper.style.opacity = "0"; 
  // Fade out the loader 
  setTimeout(() => { loaderWrapper.style.display = "none"; 
    // Hide completely after fading out 
    }, 500); // Wait for the fade-out transition to complete
     } }, 3000); // 3
    });

