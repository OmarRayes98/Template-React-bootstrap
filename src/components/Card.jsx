import  '../assets/styles/Card.css';
import {FaStar ,FaDownload} from 'react-icons/fa';



const Card = ({image, title , category ,rate , download}) => {
return (

    <>
    <div className='card-wrapper'>
        <img className='most-popular-item-image' src={image} />
        <div className='most-popular-item-content'>
            <ul className='most-popular-item-title'>
            <li>{title} </li>
            <li className='most-popular-item-category'>{category}</li>
            </ul>
            <ul className='most-popular-item-title'>
                <li><FaStar style={{"color":" var(--color-icons)"}}/> <span>{rate}</span></li>
                <li><FaDownload style={{"color":" var(--color-primary)"}}/> <span>{download}</span></li>
            </ul>

        </div>
    </div>

</>
)
}

export default Card
