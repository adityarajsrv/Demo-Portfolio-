import facebook from '../../assets/facebook.png'
import adobe from '../../assets/adobe.png'
import walmart from '../../assets/walmart.png'
import microsoft from '../../assets/microsoft.png'
import './client.css'

const Client = () => {
  return (
    <section className='client'>
        <div className="clients">
          <h1>My Clients</h1>
          <div className="client-items">
              <img src={microsoft} alt="" />
              <img src={facebook} alt="" />
              <img src={adobe} alt="" />
              <img src={walmart} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Client