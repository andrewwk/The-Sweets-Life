// Andrew - This adds item to cart 
// Andrew - ES6 way of writing $(document)...
$(() => {
  $('#shopping-cart').text(' 0')
  const cart = {}
  cart.products = []

  let cartItemCount = 0;

  $('.add-item').on('click', (e) => {

    let element = $(e.target);
    let item = element.closest('#item-details');
    cartItemCount += 1

    $('#shopping-cart').text(' ' + cartItemCount)
    addItem(item.data('id'), item.data('name'), item.data('price'))
  })
});
