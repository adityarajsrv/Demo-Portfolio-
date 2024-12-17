import './about.css'
import uidesign from '../../assets/ui-design.png'
import websitedesign from '../../assets/website-design.png'
import appdesign from '../../assets/app-design.png'

const About = () => {
  return (
    <section className="about">
        <h1>What I do</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores quidem delectus expedita, voluptate earum adipisci ipsa laboriosam suscipit eos omnis ipsum? Debitis officiis quidem consequuntur tenetur reprehenderit laudantium doloremque.</p>
            <div className="skills">
              <div className="skill">
                  <img src={uidesign} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam rem laborum sapiente mollitia et.</p>
              </div>
              <div className="skill">
                  <img src={websitedesign} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam rem laborum sapiente mollitia et.</p>
              </div>
              <div className="skill">
                  <img src={appdesign} alt="" />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam rem laborum sapiente mollitia et.</p>
              </div>
            </div>  
    </section>
  )
}

export default About