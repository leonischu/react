import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleClick=(event:MouseEvent)=> console.log(event);
  
  return (
    <>

      <h1>List </h1>
      {items.length === 0 &&<p>No Items found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li className="list-group-item" onClick={handleClick} key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
