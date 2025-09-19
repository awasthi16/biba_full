import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <>
    
        

            <div className='navbar'>

               <u> ENJOY FREE SHIPPING ON ALL ORDERS ABOVE ₹999! </u> 

            </div>

            <div className="logo">

                <div className="img1">

                <img src="https://phoenixunited.s3.ap-south-1.amazonaws.com/BrandsImages/10072023164735895_brlo.png" alt="" width={120} height={100}/>

                </div>

                <span className='sp1'>

                    <p> Ship to <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" height={15} width={20} /> India ₹ <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""  height={10}/> </p>

                </span>

                <div className="search">

                    <img src="https://cdn-icons-png.freepik.com/512/7828/7828884.png" alt="" height={16} /> Search kurta, shirts and dupattas

                </div>

                <div className="icons">

                    <ul>

                        <li> <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/> </li>
                        <li> <img src="https://static.vecteezy.com/system/resources/previews/026/630/551/non_2x/profile-icon-symbol-design-illustration-vector.jpg" alt="" height={20} /> </li>
                        <li> <img src="https://i.pinimg.com/564x/13/9c/30/139c30b5b3a875a6e9d0500091164289.jpg" alt="" height={20} /> </li>

                    </ul>

                </div>

                <div className="menu">

                    <ul>

                        <li className='m1'> FESTIVE'25 </li>
                        <li> SUITS </li>
                        <li> KURTAS & TOPS </li>
                        <li> DRESSES </li>
                        <li> DRESS MATERIALS </li> 
                        <li> BOTTOMS </li>
                        <li> JEWELLERY </li>
                        <li> FRAGRANCES </li>
                        <li> GIRLS </li>
                        <li> COLLECTIONS </li>
                        <li> CO-ORD SETS </li>
                        <li className='m2'> SALE </li>

                    </ul>

                </div>



            </div>

            
        
    
    </>
  )
}

export default Nav