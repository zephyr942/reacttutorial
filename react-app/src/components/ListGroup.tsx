import { useState } from "react";

//{items:[], heading:string}
interface ListGroupItem {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupItem) {
  const [selectIndex, setSelectIndex] = useState(-1);

  // items = [];

  /* //for practice
  const message = items.length === 0 ? <p>No items found</p> : null;
  const getMessage = () => {
    return <p>No items found</p>;
  }; */

  // Event handler
  // const handleOnClick = (index) => {
  //   return (selectIndex = index);
  // };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}

      {/* {message} */}
      {/* {items.length === 0 && getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? `list-group-item active`
                : `list-group-item`
            }
            key={item}
            // onClick={handleOnClick(index)}
            onClick={() => {
              setSelectIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
