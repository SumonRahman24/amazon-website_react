import "./Product.css";

const Product = (props) => {
  // console.log(props)
  const { name, img, seller, price, stock } = props.product;
  return (
    <>
      <div className="pd-container">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="product-content">
          <h3>{name}</h3>
          <p className="price">
            <small>by:{seller}</small>
          </p>{" "}
          <p>${price}</p>
          <p>
            <small className="stock">
              only {stock} left in stock - order soon
            </small>
          </p>
          <button
            onClick={() => props.handleAddProduct(props.product)}
            className="cart-btn"
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
