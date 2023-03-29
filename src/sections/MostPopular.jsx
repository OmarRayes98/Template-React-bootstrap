import {Card} from '../components/index';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SectionHeader,SectionWrapper} from '../components/index';

import mostPopularItems from '../Data/MostPopularData';

const MostPopular = () => {



    const cards = mostPopularItems.map(card =>{
        return (
        <Col key={card.id} xs={12} xl={3} lg={4} md={6}>
            <Card key={card.id} image={card.image} title={card.title} category={card.category} rate ={card.rate}  download={card.download}/>
        </Col>
        )
    });



return (
    <>
    <SectionWrapper>
        <SectionHeader>
            Most Popular
        </SectionHeader>

        <Row>
            {cards}

        </Row>

    </SectionWrapper>
    
    </>
)
}

export default MostPopular
