const Cart = (props) => {
  const cart = props.cart;
  const total = parseFloat(
    cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)
  );
  const tax = parseFloat(total / 10).toFixed(2);
  console.log(total);

  let shipping = 0;
  if (total > 12) {
    shipping = 2;
  } else if (total > 50) {
    shipping = 10;
  }

  //   const total = cart.reduce(
  //     (accumulator, current) => accumulator + current.price,
  //     0
  //   );
  console.log(total);
  return (
    <div>
      <p>Items Ordered: {cart.length}</p>
      <p>Total Price: {total} </p>
      <p>Estimated Tax: {tax} </p>
      <p>Shipping :{shipping} </p>
    </div>
  );
};

export default Cart;
