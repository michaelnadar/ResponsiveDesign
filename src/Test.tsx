import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './Test.css'

interface Terms {
  id: number;
  lan: {
    id: number;
    name: string;
    img: string;
  };
  title: string;
  nav: string[];
  content: string;
  button: string;
}
const Test:React.FC = () => {
  const [data, setData] = useState<Terms>();  

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<Terms> = await axios.get('https://cross-backend-michealajit.vercel.app/api/terms');
        setData(response.data);
        
      } catch (error) {
    
        console.error('Error fetching data:', error);
      } 
    };

    
    fetchData();
  }, []);
  console.log(data)


  return (
    <> 
<img id="background-img" src="https://storage.123fakturere.no/public/wallpapers/geiranger.jpg" alt="Image" />
   <nav className='nav'>
        
    <div className='nav-left'>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="hamburger-icon" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        <img  src="https://storage.123fakturere.no/public/icons/diamond.png" alt="Diamond" height={30}/>
    </div>
    <div className='nav-right'>
        <div className='nav-right-a'>
          {data?.nav.map((item, index) => (
           <a href="" key={index}><span>
           {item}
           </span></a>
        ))}
           
        </div>
        <div className='nav-right-flag'>
        <p>{data?.lan.name} </p> 
<img  src={data?.lan.img} alt="Flag"  height={20}/>
        </div>
    </div>
   </nav>
   <div className='App'>
    <section className='term-container'>
        <p className='term-title'>{data?.title}</p>
        <button>{data?.button}</button>
        <div className='term-condition' dangerouslySetInnerHTML={{ __html: data?.content || ''}}>
        </div>
    <button>{data?.button}</button>
    </section>


    </div>
 
    </>
  )
}

export default Test