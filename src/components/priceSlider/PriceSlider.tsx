import './priceSlider.css'
// import Invoices from '../../../public/invoice.png'
import Customers from '../../../public/customers.png'
// import MyBusiness from '../../../public/mybusiness.png'
// import InvoiceJournel from '../../../public/invoicejournel.png'
// import PriceList from '../../../public/pricelist.png'
// import MultipleInvoicing from '../../../public/multipleinvoice.png'
// import UnpaidInvoices from '../../../public/unpaidinvoices.png'
// import Offer from '../../../public/offer.png'
// import InventoryControl from '../../../public/inventorycontrol.png'
// import MemberInvoicing from '../../../public/memberinvoice.png'
// import ImportExport from '../../../public/importexport.png'
// import Logout from '../../../public/logout.png'
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