import React from 'react'
import './projects.css'
import IMG1 from '../../assets/speak_time.png'
import IMG2 from '../../assets/url_shortner.jpg'
import IMG3 from '../../assets/flask_blog.jpg'
import IMG4 from '../../assets/todo_list.jpg'
import IMG5 from '../../assets/portfolio_react.jpg'

const data =[
  {
  id: 1,
  image: IMG1,
  title: 'Speak Time Using Python',
  github:'https://github.com/noobcoder-7/Speak-Time',
  demo:'https://github.com/noobcoder-7/Speak-Time',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Url Shortner Using Flask',
    github:'https://github.com/noobcoder-7/flask-urlshortner-meet',
    demo:'https://github.com/noobcoder-7/flask-urlshortner-meet',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Blog Using Flask',
    github:'https://github.com/noobcoder-7/Python-Flask-Blog',
    demo:'https://github.com/noobcoder-7/Python-Flask-Blog',
  },

  {
    id: 4,
    image: IMG4,
    title: 'ToDo App Using Flask',
    github:'https://github.com/noobcoder-7/todo-flaskappmeet',
    demo:'https://github.com/noobcoder-7/todo-flaskappmeet',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Using React',
    github:'https://github.com/noobcoder-7/portfolio-react',
    demo:'https://noobcoder-7.github.io/portfolio-react/#',
  }
]
const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className="container projects__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id}
            className='projects__item'>
          <div className="projects__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="projects__item-cta">
          <a href={github} className="btn" target="_blank" rel="noreferrer" >GitHub</a>
          <a href={demo}className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
          )
          })
        }
      </div>
    </section>
  )
}

export default Projects