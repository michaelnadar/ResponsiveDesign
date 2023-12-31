import './priceSlider.css'
import { PricePage } from '../../Price'


interface PriceData {
    pricePage?: PricePage; 
  }

const PriceSlider:React.FC<PriceData> = ({pricePage}) => {
  return  (
    <>
    <section className='slider'>
        <div className='slider-text-main'>
            <div className='slider-title'>
          {pricePage?.sidebar_title}
            </div>
            
            <div className='slider-content'>
        {pricePage?.sidebar_content_main.map((item,index)=>
             
              (
                  <div className='slider-text' key={index}>
                  <img src={item.img} alt="" />
                      <p>{item.text}</p>
                  </div>
              )
        )
          }
                  
             
            </div>
        </div>
        </section>
    </>
  )
}

export default PriceSlider