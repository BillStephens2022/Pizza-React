export default function Pizza(props) {
  const { name, ingredients, photoName, price } = props;
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>Price: $ {price}</span>
      </div>
    </div>
  );
}
