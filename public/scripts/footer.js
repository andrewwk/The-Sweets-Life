$(() => {
  const roundMoney = (number) => {
    number = (Math.round(number * 100) / 100);
    return number;
  }


  const createSubtotal = () => {
    let subTotal = 0
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      products = JSON.parse(cartItems).products;
      for (item in products) {
        subTotal += products[item].price * products[item].quantity;
      }
    }
    return subTotal;
  }

  createSubtotal();

  if (createSubtotal() == 0) {
    $('#total').append(0)
  } else {
    $('#total').append(roundMoney(createSubtotal() * 1.13).toFixed(2));
  }

  $('.add-item').on('click', () => {
    $('#total').html('').append(roundMoney(createSubtotal() * 1.13).toFixed(2));
  });

  $('.delete-item').on('click', () => {
    $('#total').html('').append(roundMoney(createSubtotal() * 1.13).toFixed(2));
  });

  $('.edit-item-quantity').on('click', (e) => {
    $(e.target).on('change', (e) => {
      $('#total').html('').append(roundMoney(createSubtotal() * 1.13).toFixed(2));
    })
  })
});