import star from "../assets/star.svg"
import cardImg from "../assets/card1.png"

function MenuCard() {
  return (
    <div className='menuCard'>
        <img className="menuCard__img" src={cardImg} alt="card-img" />
        <p className="menuCard__title">Spaghetti</p>
        <div className="menuCard__rate">
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
            <img src={star} alt="rate" />
        </div>
        <p className="menuCard__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. 
        </p>
        <div className="menuCard__bottom">
            <p className="menuCard__price">$12.05</p>
            <button className="d-btn-secondary menuCard__btn">Order now</button>
            <button className="menuCard__btn-mob"></button>
        </div>
        
    </div>
  )
}

export default MenuCard