import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [categories, setCategories] =useState([])
  const [menuItems, setMenuItems] = useState(items)

  const filterMenu =(category)=>{
    if(category==='all'){
      setMenuItems(items)
      return;
    }
    let newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems)
  }
   
  return <main>
    <section className="menu section">
      <div className="title">
        <h1>our menu</h1>
        <div className="underline"></div>
      </div>
      <Categories filterMenu={filterMenu}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
