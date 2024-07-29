import star from "../assets/star.svg"
import cardImg from "../assets/card1.png"
import btn from "../assets/card_btn.svg"

function MenuCard({title='Spaghetti', img=cardImg, rate, price='12.05', desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.'}) {
  return (
    <div className='menuCard'>
      <div className="menuCard__bg"></div>
      <div className="menuCard__container">
      <img className="menuCard__img" src={img} alt="card-img" />
        <p className="menuCard__title">{title}</p>
        <div className="menuCard__rate">
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
        </div>
        <p className="menuCard__text">
        {desc} 
        </p>
        <div className="menuCard__bottom">
            <p className="menuCard__price">${price}</p>
            <button className="d-btn-secondary menuCard__btn">Order now</button>
            <button className="menuCard__btn-mob">
              <img src={btn} alt="add" />
            </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard