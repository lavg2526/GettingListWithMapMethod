import React from 'react'

const CheckOut = (props)=>{
  
const handleOnclick = ()=>{
  console.log('button clicked');
  props.handleButton("Item is added");

}

return(
  <button onClick= {handleOnclick}> Add Item</button>
)
}
export default CheckOut;