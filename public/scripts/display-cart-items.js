const deleteCartItem = (id) => {
  let cart = getCart();
  let matchingProduct = cart.products.findIndex((product) => {
    return product.item_id === id;
  })
  cart.products.splice(matchingProduct, 1);
  setCart(cart);
}

const editCart = (id, quantity) => {
  let cart = getCart()
  let matchingProduct = cart.products.findIndex((product) => {
    return product.item_id === id;
  })
  // Andrew - If new quantity is > 0, quantity will be updated
  if (quantity > 0) {
    cart.products[matchingProduct].quantity = quantity;
    // Andrew - Will delete item if quantity === 0
  } else {
    cart.products.splice(matchingProduct, 1);
  }
  setCart(cart);
};

const roundMoney = (number) => {
  number = (Math.round(number * 100) / 100);
  return number;
}
// let subTotal = 0;

const createCartItem = (cartItem) => {
  const $item = $(`
    <div class="row" id="cart-item">
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
        <img class="img-responsive" src="${cartItem.image_url}">
      </div>
      <div class="col-lg-6 col-md-5 col-sm-7 col-xs-12">
        <ul class="item-info">
          <li class="item-name">${cartItem.name}</li>
          <li class="item-price">$${cartItem.price}</li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-10 col-xs-2">
        <ul class="adjust-item">
          <li>
            <input class="edit-item-quantity" data-id="${cartItem.item_id}" type="number" class="form-control text-center" value="${cartItem.quantity}"></input>
          </li>
          <li>
            <input type="button" class="delete-item" value="Remove" data-id="${cartItem.item_id}"></input>
          </li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right">
        <span class="item-subtotal">$${roundMoney(cartItem.price * cartItem.quantity)}</span>
      </div>
    </div>
    `);
  return $item;
}

const createSubtotal = () => {
  subTotal = 0;
  const cartItems = JSON.parse(localStorage.getItem('cart')).products;

  for (item in cartItems) {
    subTotal += roundMoney(cartItems[item].price * cartItems[item].quantity);
  }
  return subTotal;
};

$(() => {
  if (localStorage.getItem('cart') === null || JSON.parse(localStorage.getItem('cart')).products.length === 0) {
    $('.order').append(`
        <div class="row">
          <div class="col-12 text-center">
            Please select an item from the <a href="/user/menu">menu</a>.
          </div>
        </div>
      `)
    $('#checkout').attr('class', 'checkout-hidden')
  } else {
    const cartItems = JSON.parse(localStorage.getItem('cart')).products;

    for (item in cartItems) {
      $('.order').append(createCartItem(cartItems[item]));
    //   subTotal += roundMoney(cartItems[item].price * cartItems[item].quantity);
    }

    const renderTotals = () => {
      createSubtotal();

      const tax = subTotal * 0.13;
      const total = subTotal + tax;

      $('.order').append(`
        <div class="row totals">
        <div class="col-12 text-right">
        <p>Subtotal $${roundMoney(subTotal).toFixed(2)}</p>
        <p>Tax $${roundMoney(tax).toFixed(2)}</p>
        <p>Total $${roundMoney(total).toFixed(2)}</p>
        </div>
        </div>
        `);
    }

    renderTotals();

    $('.delete-item').on('click', (e) => {
      let id = $(e.target).data('id')
      // Andrew - Remove item from cart and then call deleteCartItem function.
      $(e.target).closest('#cart-item').remove()
      deleteCartItem(id)

      $('.totals').remove();

      renderTotals();

    });


    $('.edit-item-quantity').on('click', (e) => {
      $(e.target).on('change', (e) => {
        let quantity = $(e.target).val();
        let price = Number($(e.target).parents('div#cart-item.row').find('.item-price').html().slice(1));
        let item = $(e.target).closest('.edit-item-quantity');
        editCart(item.data('id'), quantity);

        let newPrice = '$' + roundMoney(quantity * price);

        $(e.target).parents('div#cart-item.row').children('div:eq(3)').children().html(newPrice);

        $('.totals').remove();

        renderTotals();

      })
    })
  }
});
