import '../assets/styles/GamingLibrary.css';
import {GamingLibraryCards, SectionHeader,SectionWrapper} from '../components/index';


import GamingLibraryData from '../Data/GamingLibraryData';


const cards = GamingLibraryData.map(card =>{
    return (
        <GamingLibraryCards key={card.id} image={card.image} title={card.title} category={card.category} date_added ={card.date_added} hours_played={card.hours_played}  download={card.download}/>
    )
});

const GamingLibrary = () => {

return (
<>
    <SectionWrapper>
        <SectionHeader>
            Gaming Library
        </SectionHeader>

            <div className='gaming-libray-cards'>
                {cards}
            </div>


    </SectionWrapper>
    
</>
)
}

export default GamingLibrary;
