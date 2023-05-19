import Container from "./components/Container";
import products from "./products.json";

const Item = ({ item }) => {
  return (
    <li className="item" data-testid="product-item">
      <img src={item.thumbnail}></img>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>{item.brand}</span>
      <span>{item.price}</span>
    </li>
  );
};

function App() {
  const filteredProducts = products.filter((f) => f.category === "smartphones");

  return (
    <Container>
      <ul className="list" data-testid="product-list">
        {filteredProducts.map((prod) => (
          <Item key={prod.id} item={prod} />
        ))}
      </ul>
    </Container>
  );
}

export default App;
