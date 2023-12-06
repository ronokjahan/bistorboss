import { useState } from 'react';
import Cover from '../../../Pages/Sgared/Cover/Cover';
import orderimg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ManuHook from '../../Hook/ManuHook';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
    const[menus]=ManuHook()
    const{category}=useParams()
    console.log(category);
    const [order,setorder]=useState(0)
    const salad=menus.filter(item=>item.category ==='salad')
    const Dessert=menus.filter(item=>item.category ==='dessert')
    const pizza=menus.filter(item=>item.category ==='pizza')
    const soup=menus.filter(item =>item.category ==='soup')

  
    
   
    return (
        <div>
            <Cover img={orderimg}
                title="Order Food Now"

            ></Cover>
 <Tabs defaultIndex={order} onSelect={(index) => setorder(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Dessert</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    
  </TabList>
  <TabPanel>

<div className='grid md:grid-cols-3 gap-4'>
{
    salad.map(item=><FoodCard
    key={item._id}
    item={item}
    
    ></FoodCard>)
 }
</div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4'>
{
   Dessert.map(item=><FoodCard
    key={item._id}
    item={item}
    
    ></FoodCard>)
 }
</div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4'>
{
    pizza.map(item=><FoodCard
    key={item._id}
    item={item}
    
    ></FoodCard>)
 }
</div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4'>
{
    soup.map(item=><FoodCard
    key={item._id}
    item={item}
    
    ></FoodCard>)
 }
</div>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;