const filtersRange = document.querySelector('.filters__range');

noUiSlider.create(filtersRange, {
  start: [55, 155],
  step: 5,
  range: {
    'min': 0,
    'max': 200
  }
});

console.log(filtersRange)
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
