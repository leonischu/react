import { useState } from "react";
interface Props {
  items:string[];
  heading:string;
  onSelectItem:(item:string) =>void;
}



function ListGroup({items,heading,onSelectItem}:Props) {
  
  const [selectedIndex, setSelectedIndex]=useState(-1);
  return (
    <>

      <h1>{heading}</h1>
      {items.length === 0 &&<p>No Items found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li className={selectedIndex ===index ?'list-group-item active ':'list-group-item'}
           onClick={()=> {setSelectedIndex(index); onSelectItem(items)}} key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
