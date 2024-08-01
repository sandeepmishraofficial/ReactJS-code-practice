import "./Product.css";

function Product({ title, price, features }) {
  let styles = { backgroundColor: price > 30000 ? "blue" : "" };
  return (
    <div style={styles}>
      <h3>{title}</h3>
      <h5>price: {price}</h5>
      {price > 30000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}

export default Product;
