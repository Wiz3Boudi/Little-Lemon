const navBarMenu = document.getElementById('mobile-menu');
const navBarMenuActive = document.getElementById('mobile');
const mobileNavBar = document.getElementById('mobile-nav-bar');
const logo = document.querySelector('.logo')
logo.addEventListener('click', function(){
      window.document.location.reload();
})

navBarMenu.addEventListener('click', function () {
      navBarMenu.classList.toggle('active');
      mobileNavBar.classList.toggle('active');


})

document.querySelectorAll('#nav-links').forEach(link => {
      link.addEventListener('click', function () {
            navBarMenu.classList.remove('active')
            mobileNavBar.classList.remove('active')

      })
})












































































































































































































































































































































































// // Card data - could also come from an API
// const cardData = [
//       {
//             title: 'Greek Salad',
//             image: '/imageo/card-one.jpg',
//             description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago...',
//             price: '$12.99'
//       },
//       {
//             title: 'Bruschetta ',
//             image: '/imageo/card-2.jpg',
//             description: 'Our Bruschetta is made from grilled bread that has been smeared with garl...',
//             price: '$7.99'
//       },
//       {
//             title: 'Grilled Fish ',
//             image: '/imageo/card-one.jpg',
//             description: 'Lorem ipsum dolor sit amet, consectetur...',
//             price: '$12.99'
//       }
// ];

// // Function to create a card
// function createCard(cardInfo) {
//       return `
//       <div class="card">
//       <img src="${cardInfo.image}" alt="${cardInfo.title}" class="card-image">
//       <div class="card-content">
//       <h3 class="card-title">${cardInfo.title}</h3>
//       <p class="card-text">${cardInfo.description}</p>
//       <div class="card-price">${cardInfo.price}</div>
//       <a href="#" class="card-button">Add to Cart</a>
//       </div>
//       </div>
// `;
// }

// // Function to render all cards
// function renderCards() {
//       const container = document.getElementById('card-container');
//       container.innerHTML = cardData.map(createCard).join('');
// }

// // Call the function when the page loads
// window.addEventListener('DOMContentLoaded', renderCards);
