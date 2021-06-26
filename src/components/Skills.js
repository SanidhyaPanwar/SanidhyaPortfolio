import React from 'react'

const Skills = () => {
  return (
    <skills className='center'>
        <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My Skills and Self Learnings</div>
                    <p>I have acquired knowledge of Web Development through constantly updating myself with new and improved ways of doing things.
                    <br/>
                    I have a knowledge of mySQL and I have experience in Database Handling through MongoDB.
                    </p>
                    <a href="https://www.linkedin.com/in/sanidhya-panwar-824504180/">Go to my LinkedIn</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Node.JS</span>
                            <span>65%</span>
                        </div>
                        <div className="line nodejs"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </skills>
  )
}

export default Skills