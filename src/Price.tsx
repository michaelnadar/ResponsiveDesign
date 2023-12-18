import './price.css'
import PriceSlider from './components/priceSlider/PriceSlider'
import DisplayPrice from './components/displayPrice/DisplayPrice'
import Inputprice from './components/inputprice/Inputprice'


const Price:React.FC = () => {
  return (
    <>
    <nav className="nav2">
        <div className='left'>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="hamburger-icon" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="profile-img" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
    <span>Micheal Ajit
      <p className='left-p'>Role</p>
    </span>
        </div>
        <div className='right'>
        <p>Norsk Bokmal</p> 
<img  src="https://storage.123fakturere.no/public/flags/NO.png" alt="Flag"  height={23}/>
        </div>
    </nav>
    <div className='parent-price-container'>
        <PriceSlider/>
        <section className='pricecontainer'>
        <Inputprice/>
        <DisplayPrice/>
        </section>
    </div>
    </>
  )
}

export default Price