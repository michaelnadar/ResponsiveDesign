
import { PriceArticle } from '../../Price'
import './displayPrice.css'


interface priceData{
  priceArticle?: PriceArticle[] 
}

const DisplayPrice:React.FC<priceData> = ({priceArticle}) => {
  console.log(priceArticle)
  return (
    <>
    <div className='parent-displayprice'>
    
    <div className='display-title-article'>
        Article No.
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="lightblue" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
      </div>
    
      
      <div className='display-title'>
        Product/Service
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="lightgreen" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
      </div>
     
      
      
      <div className='display-title-in-price'>
        In Price
        
      </div>
     
     
      
      <div className='display-title'>
        Price
        
      </div>
     
      
      
      <div className='display-title-unit'>
        Unit
        
      </div>
      
      
      
      <div className='display-title-stock'>
        In Stock
        
      </div>
      
     
      
      <div className='display-title-description'>
        Description
        
      </div>
      
      
    
      
      <svg className='arrow-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#0f7ee8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
      {priceArticle?.map((item)=>
      (
    <>
        <div className='display-bottom-article'>
        {item.articleno}
      </div>
       <div className='display-bottom'>
        {item.product}
      </div>
      <div className='display-bottom-in-price'>
        {item.inprice}
      </div>
      <div className='display-bottom'>
        {item.price}
      </div>
      <div className='display-bottom-unit'>
        {item.unit}
      </div>
      <div className='display-bottom-stock'>
        {item.instock}
      </div>
      <div className='display-bottom-description'>
        {item.description}
      </div>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="svg-threedot" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
      </>
        ))}
     
      
    </div>
    </>
  )
}

export default DisplayPrice