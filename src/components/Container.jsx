import '../assets/styles/Container.css'
import Containerr from 'react-bootstrap/Container';


const Container = (props) => {
return (

    <Containerr className='main-container'>
    <h1>{props.children}</h1>
    </Containerr>
)
}

export default Container
