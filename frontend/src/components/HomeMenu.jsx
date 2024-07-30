import {useEffect, useState} from 'react'
import MenuCard from './MenuCard'
import arrow from '../assets/arrow_back.svg'
import etc from '../assets/etc.svg'
import { useAllFoodQuery, useGetFoodByCategoryQuery } from '../api';
import loading from "../assets/loading.jpg"

function HomeMenu() {
    const [activeCategory, setActiveCategory] = useState('All category');
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const { data, error, isLoading } = useAllFoodQuery({
        page, 
        limit, 
        category: activeCategory === 'All category' ? '' : activeCategory
    } 
    );

    const categories = ['All category', 'Salad', 'Seafood', 'Antipasti', 'Pasta', 'Pizza', 'Dessert', 'Drinks'];
  
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setPage(1); 
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= data?.totalPages) {
            setPage(newPage);
        }
    };

    useEffect(() => {
        console.log(data, activeCategory)

    }, [data, activeCategory])

  return (
    <div className='homeMenu'>
        <div className="container homeMenu__container">
            <h3>Our popular menu</h3>
            <div className="homeMenu__list">
                <ul className="homeMenu__cats">
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
                    {data?.foods.map((i, key) => <MenuCard key={key} title={i.title} desc={i.desc} price={i.price}/>)}
                </div>
                
                <div className="homeMenu__pagination">
                    <button disabled={page === 1} onClick={() => handlePageChange(page - 1)} className="homeMenu__pagination-back">
                        <img src={arrow} alt="back" />
                    </button>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li><img src={etc} alt="more" /></li>
                    </ul>
                    <button disabled={page === data?.totalPages} onClick={() => handlePageChange(page + 1)} className="homeMenu__pagination-next" >
                        <img src={arrow} alt="next"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeMenu