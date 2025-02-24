/* Шапка сайта с содержимым */
const header = document.querySelector('.header'); 
/* Логотип сайта */
const headerLogo = header.querySelector('.header__logo'); 
/* Кнопка для открытия меню */
const burgerMenuButton = header.querySelector('.burger'); 
/* Span внутри кнопки открытия меню (полоски) */
const burgerMenu = header.querySelector('.burger__menu'); 
/* Навигация сайта */
const mainNav = header.querySelector('.nav'); 
/* Иконка корзины с товарами */
const cart = header.querySelector('.cart'); 


burgerMenuButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
    header.classList.toggle('active');
    headerLogo.classList.toggle('active');
    cart.classList.toggle('active');
})
// Select all products
const products = document.querySelectorAll('.product');

products.forEach((product) => {
  // Select the product details and add-to-cart button for each product
  const details = product.querySelector('.product__details');

  // Add click event to each product
  product.addEventListener('click', () => {
    // Toggle the visibility of product details
    if (details.style.visibility === 'visible') {
      details.style.visibility = 'hidden';
      details.style.opacity = '0';
      details.style.transform = 'translateY(20px)';
    } else {
      details.style.visibility = 'visible';
      details.style.opacity = '1';
      details.style.transform = 'translateY(0)';
    }
  });
});
