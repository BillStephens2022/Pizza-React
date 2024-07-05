export default function Pizza(props) {
  const { name, ingredients, photoName, price, soldOut } = props;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {soldOut ? "Sold Out" : <span>Price: $ {price}</span>}
      </div>
    </li>
  );
}
