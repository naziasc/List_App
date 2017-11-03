import React from 'react';

const List = (props) => (
<ul>
  {props.items.map((items,index) =>
    <li key ={index}>
      {items.toDo}
      <button onClick = {()=>props.onComplete(index)}>
        {items.complete?'done':'to do'}
      </button>
    </li>)}
</ul>
);


export default List;
