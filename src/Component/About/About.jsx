import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon'/>

        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Nuturing tommorow's Leaders Today</h2>
            <p>Embark on an enriching educational journey with us, where innovation meets tradition. Our 
                institution fosters a supportive learning environment tailored to individual needs.
                 Explore diverse academic programs guided by expert faculty, igniting curiosity and passion. 
                 Engage in hands-on experiences and collaborative projects that prepare you for real-world 
                 challenges. Join our vibrant community and unlock your full potential with us.</p>
            <p>we provide personalized support to nurture each student's unique talents and aspirations.</p>
            <p> From innovative classroom experiences to hands-on practical learning opportunities, our institution offers a holistic approach to education that inspires lifelong growth and achievement. Join us on a path to excellence, where every step shapes a brighter future."</p>

        </div>
    </div>
  )
}

export default About