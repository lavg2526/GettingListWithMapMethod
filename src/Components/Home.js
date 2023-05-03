import React,{useState} from 'react';
import List from './List';
import './Home.css';
import CheckOut from './CheckOut';

const Home = ()=>{
var itemList = [{
  item:'Spinach',
  amount:10,
  date: '20230101'
},
{
  item:'Strawberry',
  amount:80,
  date: '20230207'
},
{
  item: 'Banana',
  amount:50,
  date: '20230226'
}
]
console.log(itemList);

const [data,setData] = useState('');

const buttonClicked = (str)=>{
  setData(str);
      
}

return(
  <>
        <span>Row No</span>
        <span>Price</span>
        <span>Date</span>
        {data}
        <List getItems={itemList}/>
        <CheckOut handleButton={buttonClicked}/>
  </>
)
      
}
export default Home;