const items = document.querySelectorAll('.item');
const totalPriceElement = document.getElementById('total-price');

items.forEach(item => {
  const decrementBtn = item.querySelector('.decrement-btn');
  const incrementBtn = item.querySelector('.increment-btn');
  const deleteBtn = item.querySelector('.delete-btn');
  const likeBtn = item.querySelector('.like-btn');
  const quantityElement = item.querySelector('.item-quantity');
  const priceElement = item.querySelector('.item-price');

  let quantity = parseInt(quantityElement.innerText);
  let price = parseFloat(priceElement.innerText.replace('$', ''));

  decrementBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      updateTotalPrice();
    }
    quantityElement.innerText = quantity;
  });

  incrementBtn.addEventListener('click', () => {
    quantity++;
    updateTotalPrice();
    quantityElement.innerText = quantity;
  });

  deleteBtn.addEventListener('click', () => {
    item.remove();
    updateTotalPrice();
  });

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
  });

  function updateTotalPrice() {
    const total = Array.from(items).reduce((acc, item) => {
      const itemPrice = parseFloat(item.querySelector('.item-price').innerText.replace('$', ''));
      const itemQuantity = parseInt(item.querySelector('.item-quantity').innerText);
      return acc + itemPrice * itemQuantity;
    }, 0);

    totalPriceElement.innerText = total.toFixed(2);
  }
});
