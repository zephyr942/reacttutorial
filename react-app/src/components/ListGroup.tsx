import type { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  // items = [];

  /* //for practice
  const message = items.length === 0 ? <p>No items found</p> : null;
  const getMessage = () => {
    return <p>No items found</p>;
  }; */

  //Event handler
  const handleOnClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}

      {/* {message} */}
      {/* {items.length === 0 && getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleOnClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
