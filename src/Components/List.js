import React from 'react';
const List = (props)=>{
  console.log('LAVG1',props.getItems);
  
  props.getItems.map((getList) => {
    console.log('Lavg2',getList);
 return( 
    <p> 
     <span> {getList.item} </span>
     <span> {getList.amount} </span>
     <span> {getList.date} </span>
     
   </p>
     
  
   )}  
  )
    
   
  
}
export default List;