import React from 'react'
import pic1 from '../img/osi.png'
import pic2 from '../img/ig.JPG'
import pic3 from '../img/breakingbad.png'
import pic4 from '../img/covid.jpg'
import pic5 from '../img/SaaS.JPG'
import pic6 from '../img/Portfolio.JPG'

const Projects = () => {
  return (
    <projects className='center'>
        <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <div className="project-content">
                <div className="card">
                    <div className="box">
                        <a href="https://osi-farming.herokuapp.com/" target="_blank"><img src={pic1} alt=""/></a>
                        <div className="text">OSI Farming</div>
                        <p>
                            A Website to get Farming Equipments on Rent for the poor farmers who cannot afford to buy the Equipments for themselves.<br/>
                            Click on the Image to Visit
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <a href="http://sanidhyainsta.herokuapp.com/" target="_blank"><img src={pic2} alt=""/></a>
                        <div className="text">Sanidhya Insta</div>
                        <p>
                            A simple Instagram clone based on MERN Stack. It has features like Password reset , follow , unfollow , like comment and much more!<br/>
                            Click on the Image to Visit
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <a href="http://breakingbadcharacter.herokuapp.com/" target="_blank"><img src={pic3} alt=""/></a>
                        <div className="text">Breaking Bad Wiki</div>
                        <p>
                            A Website to get a list of characters and their details from the popular show Breaking Bad by using their public API.<br/>
                            Click on the Image to Visit
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="project-content">
            <div className="card">
                    <div className="box">
                        <a href="http://tathastu.twowaits.in/covid-tracker/" target="_blank"><img src={pic4} alt=""/></a>
                        <div className="text">Covid-19 Tracker</div>
                        <p>
                            A simple covid-19 tracker website using public API to fetch the details of covid-19 by country.<br/>
                            Click on the Image to Visit
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <a href="http://tathastu.twowaits.in/saas-freshworks/" target="_blank"><img src={pic5} alt="SaaS"/></a>
                        <div className="text">SaaS clone</div>
                        <p>
                            A Simple clone of a SaaS website (Freshworks). I cloned the Homepage and all the navigation links into a l  ook of my choice<br/>
                            Click on the Image to Visit
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <a href="http://sanidhyaportfolio.herokuapp.com/" target="_blank"><img src={pic6} alt="Portfolio"/></a>
                        <div className="text">Personal Portfolio</div>
                        <p>
                            A simple web based digital Resume to showcase my skills and talents with practical implementations.<br/>
                            Click on the Image to Visit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </projects>
  )
}

export default Projects
