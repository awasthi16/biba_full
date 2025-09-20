import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {

    const[bb,setbb]=useState(false)

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

                        <li> <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={30}/> </li>

                        <li> <img onClick={()=>{setbb(true)}} src="https://static.vecteezy.com/system/resources/previews/026/630/551/non_2x/profile-icon-symbol-design-illustration-vector.jpg" alt="" height={30} /> </li>

                        


                        <li className='l1'> <img src="https://i.pinimg.com/564x/13/9c/30/139c30b5b3a875a6e9d0500091164289.jpg" alt="" height={27} /> </li>

                    </ul>

                </div>

                 {bb && <div className="bigbox">

                    <div className="smallbox">

                        

                        

                            <img src="https://www.biba.in/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwdf778587/login-apr11-1.jpg" alt="" />

                        
                                
                    

                            
                                <div className='sp2'>

                                     <button className='btn2' onClick={()=>{setbb(false)}} > X </button>
                                <p className='p1'> SIGN IN/ SIGN UP  </p>
                                
                                <p className='p2'> via OTP  </p>
                                

                                <div className="img2">

                                <span className='sp3'>

                                    <img src="https://media.istockphoto.com/id/1471401435/vector/round-icon-of-indian-flag.jpg?s=612x612&w=0&k=20&c=kXy7vTsyhEycfrQ9VmI4FpfBFX2cMtQP5XIvTdU8xDE=" alt="" />

                                    <b> +91 </b>

                                    <input type="text" placeholder='Enter your mobile number' /> 
                                    
                                </span>
                                </div>


                    <p className='p4'> We will use this to notify you for any updates & offers </p>

                    <span className='sp4'>

                        <input type="checkbox" /> <p className='p5'> Remember Me </p>


                    </span>

                    

                    <button className='btn1'> CONTINUE </button>

                    </div>
                    </div>
                     
                
                
                </div>}

                <div className="menu">

                    <ul>

                        <li className='m1'>  FESTIVE'25   </li>
                        <li>  SUITS  </li>
                        <li>  KURTAS & TOPS  </li>
                        <li>  DRESSES   </li>
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