function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  // items = [];

  /* //for practice
  const message = items.length === 0 ? <p>No items found</p> : null;
  const getMessage = () => {
    return <p>No items found</p>;
  }; */

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}

      {/* {message} */}
      {/* {items.length === 0 && getMessage()} */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
