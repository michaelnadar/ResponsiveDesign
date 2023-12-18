import './priceSlider.css'
import {
    IconFileFilled,
    IconUser,
    IconSettings,
    IconBook,
    IconTag,
    IconFileDescription,
    IconX,
    IconReceiptTax,
    IconClipboardList,
    IconCloudUpload,
    IconLogout,
    IconCreditCard,
    IconCircleX,
  } from "@tabler/icons-react";
const PriceSlider:React.FC = () => {
  return  (
    <>
    <section className='slider'>
        <div className='slider-text-main'>
            <div className='slider-title'>

          Menu
            </div>
            
            <div className='slider-content'>
                <div className='slider-text'>
                <IconFileDescription color="#54cfff" />
                    <p>Invoices</p>
                </div>
                <div className='slider-text'>
                <IconUser color="#28ffc1" />
                    <p>Customers</p>
                </div>
                <div className='slider-text'>
                <IconSettings color="#54cfff" />
                    <p>My Business</p>
                </div>
                <div className='slider-text'>
                <IconBook color="#5ae2ff" />
                    <p>Invoice Journel</p>
                </div>
                <div className='slider-text'>
                    <div className='slider-active'></div>
                <IconTag color="#ffb257" />
                    <p>Price List</p>
                </div>
                <div className='slider-text'>
                <IconFileDescription color="#54cfff" />
                    <p>Multiple Invoicing</p>
                </div>
                <div className='slider-text'>
                <IconCircleX color="#ff4b97" />
                    <p>Unpaid Invoices</p>
                </div>
                <div className='slider-text'>
                <IconReceiptTax color="#f7c90b" />
                    <p>Offer</p>
                </div>
                <div className='slider-text'>
                <IconClipboardList color="#16ceff" />
                    <p>Inventory Control</p>
                </div>
                <div className='slider-text'>
                <IconCreditCard color="#1b9aff" />
                    <p>Member Invoicing</p>
                </div>
                <div className='slider-text'>
                <IconCloudUpload color="#82b1ff" />
                    <p>Import/Export</p>
                </div>
                <div className='slider-text'>
                    <IconLogout/>
                    <p>Log out</p>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default PriceSlider