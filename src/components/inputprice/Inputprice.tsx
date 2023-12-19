import './inputprice.css'
import search from '../../../public/search.png';
import { PricePage } from '../../Price';


interface PriceData {
    pricePage?: PricePage; 
  }


const Inputprice :React.FC<PriceData>= ({pricePage}) => {
   
  return (
   <>
   <div className='price-container'>
   <div className='price-input-parent'>
    {pricePage?.input.map((item,index)=>(

    <div className='input-price' key={index}>
        <img src={search} alt="search"  height={21} width={21}/>
   <input  placeholder={item}/>
    </div>
    ))}
    
   </div> 
   
   <div className='price-button-parent'>
   {pricePage?.button_main.map((item,index)=>(
    <div className='price-button' key={index}>
    <button >{item.name}</button>
        <img src={item.img} alt="add"  height={25} width={25}/>
    </div>
    ))}
   </div>
   </div>
   </>
  )
}

export default Inputprice