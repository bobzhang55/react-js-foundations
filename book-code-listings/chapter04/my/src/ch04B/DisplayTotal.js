function DisplayTotal(props) {
  const calculatedTotal = props.items.reduce((accumulator, item) => accumulator + (item.price || 0), 0);
  return <p>total: ${calculatedTotal}</p>;
}

export default DisplayTotal;
