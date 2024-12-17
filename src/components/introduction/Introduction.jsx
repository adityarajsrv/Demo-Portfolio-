import hireme from '../../assets/hireme.png'
import image from '../../assets/image.png'
import './intro.css'

const Introduction = () => {
  return (
    <div className="mainpage">
        <div className="intro">
            <h3>Hello,</h3>
            <h1>I&apos;m <span className="names">Smith</span></h1>
            <h1>Website Designer</h1>
            <p>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</p>
            <button className="hire">
                <img src={hireme} alt="" className="hireImg" />
                Hire me
            </button>
        </div>
        <img src={image} alt="" className="profile" />
    </div>
  )
}

export default Introduction