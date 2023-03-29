import '../assets/styles/Hero.css';
import {PrimaryButton} from  '../components/index'

const Hero = () => {
return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
            <h4 className='hero-title'><em>Broswe</em> Our Popular Games Here</h4>

            <PrimaryButton>
            Broswe Now
            </PrimaryButton>
            {/* <div className='btn btn-link text-decoration-none'>
                <a className='text-decoration-none' href='browse.html'>Broswe Now</a>
            </div> */}

            </div>
        </div>
        
)
}

export default Hero