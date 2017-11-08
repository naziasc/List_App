import React from 'react';
 
const staticStyle = {padding:'10px'}
const List = (props) => {
  const style = {
    complete: {color:'green', borderRadius:'50%'},
    incomplete: {color:'red', backgroundColor: 'black', float:'right'},
    //all style inside the section as it is toggle between the two only.
  };
const listStyle = {color:'blue', fontStyle:'italic', fontFamily:'georgia', borderStyle:'dashed', width:'150px'}
return (<ul>
  {props.items.map((items,index) => (
    <li style ={{...staticStyle,...listStyle}} key={index}>
      {items.toDo}
      <button style= {{...staticStyle,...style[items.complete?'complete':'incomplete']}} onClick = {()=>props.onComplete(index)}>
        {items.complete?'done':'to do'}
      </button>
    </li>
  ))}
</ul>);
};


export default List;
