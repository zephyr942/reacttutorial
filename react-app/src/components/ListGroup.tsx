function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  // items = [];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found</p>}

        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
