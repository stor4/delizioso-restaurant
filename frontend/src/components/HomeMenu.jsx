import {useEffect, useState} from 'react'
import MenuCard from './MenuCard'
import arrow from '../assets/arrow_back.svg'
import etc from '../assets/etc.svg'
import { useAllFoodQuery } from '../api';
import loading from "../assets/loading.jpg"

function HomeMenu() {
    const [activeCategory, setActiveCategory] = useState('All category');
    const {data, error, isLoading} = useAllFoodQuery()

    const categories = ['All category', 'Dinner', 'Lunch', 'Dessert', 'Drink'];
  
    const handleCategoryClick = (category) => {
      setActiveCategory(category);
    };

    useEffect(() => {
        console.log(data)

    }, [data])

  return (
    <div className='homeMenu'>
        <div className="container homeMenu__container">
            <h3>Our popular menu</h3>
            <div className="homeMenu__list">
                <ul className="homeMenu__cats">
                    {/* <li className='homeMenu__link-active'>All category</li>
                    <li className='homeMenu__link'>Dinner</li>
                    <li className='homeMenu__link'>Lunch</li>
                    <li className='homeMenu__link'>Dessert</li>
                    <li className='homeMenu__link'>Drink</li> */}
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
                {isLoading && <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img className='loader' src={loading} alt="loading" /></div>}
                <div className="homeMenu__grid">
                    {data.map((i) => <MenuCard title={i.title} desc={i.desc} price={i.price}/>)}

                </div>
                
                <div className="homeMenu__pagination">
                    <span className="homeMenu__pagination-back">
                        <img src={arrow} alt="back" />
                    </span>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li><img src={etc} alt="more" /></li>
                    </ul>
                    <span className="homeMenu__pagination-next" >
                        <img src={arrow} alt="next"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeMenu