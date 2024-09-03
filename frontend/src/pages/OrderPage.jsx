import {useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeMenu from "../components/HomeMenu"
import { useAllFoodQuery } from '../api';
import MenuCard from '../components/MenuCard';


function OrderPage() {
  
  const [activeCategory, setActiveCategory] = useState('All category');
  const [page, setPage] = useState(1)
  const limit = 100

  const categories = ['All category', 'Salad', 'Seafood', 'Antipasti', 'Pasta', 'Pizza', 'Dessert', 'Drinks']

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // setPage(1); 
  };

  const { data, error, isLoading } = useAllFoodQuery({
    page, 
    limit, 
    category: activeCategory === 'All category' ? '' : activeCategory
  } 
  );

  const groupedData = data?.foods?.reduce((groups, item) => {
    const group = groups[item.category] || [];
    group.push(item);
    groups[item.category] = group;
    return groups;
  }, {});

  const filteredData = activeCategory === 'All category' 
  ? groupedData 
  : (groupedData?.[activeCategory] ? { [activeCategory]: groupedData[activeCategory] } : {});

  useEffect(() => {
    console.log(groupedData)

  }, [groupedData])

  return (
    <>
        <Header/>
        <main className='order'>
          <div className="order__container container">
            <h1>Menu</h1>
            <ul className="order__cats homeMenu__cats">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`${activeCategory === category ? 'homeMenu__link-active' : 'homeMenu__link'}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
            </ul>
            <div className="order__menu">
              <div className="order__list">
                {data && Object.keys(filteredData).map((category) => (
                  <div key={category} className="order__group">
                    <p className="order__group-title">{category}</p>
                    <div className="order__group-items">
                      {filteredData[category]?.map((item) => (
                        <MenuCard key={item.id} item={item} title={item.title} desc={item.description} price={item.price}/>
                      ))}
                    </div>
                  </div>
                ))}

                {/* <div className="order__group">
                  <p className="order__group-title">Pasta</p>
                  <div className="order__group-items">
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                  </div>
                </div> */}

                
              </div>
              <div className="order__cart">
                <p className="order__cart-title">Order list</p>
                <div className="order__cart-list">

                </div>
                <div className="order__cart-voucher">

                </div>
                <div className="order__cart-sum">

                </div>
                <button className="order__cart-submit">Checkout</button>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
    </>
  )
}

export default OrderPage