import './portfolio.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
        <h1>My Works</h1>
        <div className='portfolio-container'>
            <img src={portfolio1} alt="" />
            <img src={portfolio2} alt="" />
            <img src={portfolio3} alt="" />
            <img src={portfolio4} alt="" />
            <img src={portfolio5} alt="" />
            <img src={portfolio6} alt="" />
        </div>
        <button className="more">
            Load More
        </button>
    </section>
  )
}

export default Portfolio