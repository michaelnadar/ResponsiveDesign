import './inputprice.css'
import search from '../../../public/search.png';
import add  from "../../../public/add.png";
import printer from '../../../public/printer.png';
import mode from '../../../public/advanced_mode.png';
const Inputprice = () => {
    const handleClick =()=>{
        alert('asd');
    }
  return (
   <>
   <div className='price-container'>
   <div className='price-input-parent'>
    <div className='input-price'>
        <img src={search} alt="search"  height={21} width={21}/>
   <input  placeholder='Search Article No....'/>
    </div>
    <div className='input-price'>
        <img src={search} alt="search"  height={21} width={21}/>
   <input  placeholder='Search Product'/>
    </div>
   </div>
   <div className='price-button-parent'>
    <div className='price-button'>
    <button onClick={handleClick}>New Product</button>
        <img src={add} alt="add"  height={25} width={25}/>
    </div>
    <div className='price-button'>
    <button>Print List</button>
        <img src={printer} alt="printer"  height={25} width={25}/>
    </div>
    <div className='price-button'>
    <button>Advanced mode</button>
        <img src={mode} alt="advanced_mode"  height={25} width={25}/>
    </div>
   </div>
   </div>
   </>
  )
}

export default Inputprice