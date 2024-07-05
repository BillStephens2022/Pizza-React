import Pizza from "./Pizza";
import { pizzaData } from "../data/data";

export default function Menu() {
  console.log(pizzaData);
  return (
    <main className="menu">
      <h2 style={{ color: "steelblue", fontSize: "2rem" }}>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza key={pizza.name} {...pizza} />;
        })}
      </ul>
    </main>
  );
}
