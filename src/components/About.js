import React from 'react'
import pic from '../img/profile-1.jpeg'
import resume from '../files/Sanidhya CV(Photo).pdf'

const About = () => {
  return (
    <about className='center'>
        <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                <img src={pic} alt='Profile Pic' />
                </div>
                <div className="column right">
                    <div className="text">I'm Sanidhya and I'm a <span className="typing-2"></span></div>
                    <p>An incessant learner and A keen observer, Skilled in Computer Science, Web Development and Databases. Always ready to learn something new and apply it in real life Scenarios. Open to Opportunities related to Web Development and Database Management.</p>
                    <a href={resume} target="_blank">Open CV</a>
                </div>
            </div>
        </div>
    </section>
    </about>
  )
}

export default About