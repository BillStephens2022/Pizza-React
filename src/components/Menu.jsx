import Pizza from "./Pizza";


export default function Menu() {
  return (
    <main className="menu">
      <h2 style={{ color: "steelblue", fontSize: "2rem" }}>Our Menu</h2>
      <Pizza name="Pizza Spinaci" ingredients="Tomato, mozzarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={10.00} />
      <Pizza name="Pizza Funghi" ingredients="Tomato, mozzarella, red onion, mushrooms" photoName="pizzas/funghi.jpg" price={9.50} />
    </main>
  );
}
