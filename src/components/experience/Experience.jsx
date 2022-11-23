import React from 'react'
import './experience.css'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <article className='experience'>
            <div className="experience__head">
          <h3>Tata Consultancy Services Ltd.</h3>
          <h5 className='text-light'>Software Developer</h5>
          </div>        
        <ul className="experience__list">
        <li>
          <p>
          Worked as a software developer in TCS in a migration project for 6 months. In which worked on python (3.7 version) and PostgreSQL. (Client: GE, Project name: One wind).
          </p>
          </li>
          <li>
          <p>
          Worked as a software developer in TCS in a migration project for 5 months. In which worked on NodeJS, STS (Java 1.8), and PostgreSQL. (Client: GE, Project name: HPCi EMPC).
          </p>
          </li>  
        </ul>

        </article>
        </div>
        <div >
        <article className='experience'>
          <div className="experience__head">
        <h3>Axtria India Private Limited</h3>
        <h5 className='text-light'>Analyst</h5>
        </div>
       
        <ul className="experience__list">
          <li>
          <p>
          Working as a Analyst at Axtria - Ingenious Insights.
          </p>
          </li>
        </ul>
        </article>
        </div>
      </div>
    </section>
  )
}

export default Experience