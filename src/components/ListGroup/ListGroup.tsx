import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

//{items:[], heading:string}
interface ListGroupItem {
  items: string[];
  heading: string;
  //(item:string)=>void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupItem) {
  const [selectIndex, setSelectIndex] = useState(0);

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
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectIndex}
            key={item}
            // onClick={handleOnClick(index)}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
