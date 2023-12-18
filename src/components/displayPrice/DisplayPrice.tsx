import './displayPrice.css'

const DisplayPrice:React.FC = () => {
  return (
    <>
    <div className='parent-displayprice'>
    
    <div className='display-title-article'>
        <p>Article No.</p>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="lightblue" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
      </div>
    
      
      <div className='display-title'>
        <p>Product/Service</p>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="lightgreen" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
      </div>
     
      
      
      <div className='display-title-in-price'>
        <p>In Price</p>
        
      </div>
     
     
      
      <div className='display-title'>
        <p>Price</p>
        
      </div>
     
      
      
      <div className='display-title-unit'>
        <p>Unit</p>
        
      </div>
      
      
      
      <div className='display-title-stock'>
        <p>In Stock</p>
        
      </div>
      
     
      
      <div className='display-title-description'>
        <p>Description</p>
        
      </div>
      
      
    
      
      <svg className='arrow-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#0f7ee8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
  <div className='display-bottom-article'>
        <p>1234567890</p>
      </div>
      
       <div className='display-bottom'>
        <p>This is a test product with fifty characters this!</p>
      </div>
      <div className='display-bottom-in-price'>
        <p>900500</p>
      </div>
      <div className='display-bottom'>
        <p>1500800</p>
      </div>
      <div className='display-bottom-unit'>
        <p>kilometers/hour</p>
      </div>
      <div className='display-bottom-stock'>
        <p>2500600</p>
      </div>
      
      
      <div className='display-bottom-description'>
        <p>this is description Hello world this is description</p>
      </div>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="svg-threedot" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
      
    </div>
    </>
  )
}

export default DisplayPrice