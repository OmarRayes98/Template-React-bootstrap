import '../assets/styles/SectionWrapper.css'


const SectionWrapper = (props) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='section-wrapper'>
        {props.children}

    </div>
  )
}

export default SectionWrapper