import Pizza from "./Pizza";
import { pizzaData } from "../data/data";

export default function Menu() {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2 style={{ color: "steelblue", fontSize: "2rem" }}>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza key={pizza.name} {...pizza} />;
          })}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
