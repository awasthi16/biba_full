import React, { useState } from 'react'
import "./Profile.css"
import App from './App'
import { Link } from 'react-router-dom'

const Profile = () => {

    const [bbpro, setbbpro] = useState(false)
   

    return (

        <>

            <div className='pro'>

                <div className='pro_lft'>

                    <span className='spnpro'>

                    <p className='lnkpro' onClick={()=>{setbbpro(true)}}> Sign In/ Sign Up  </p>  to access your account 
                    </span>


                </div>

                {bbpro && <div className="bigboxpro">

                    <div className="smallboxpro">





                        <img src="https://www.biba.in/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwdf778587/login-apr11-1.jpg" alt="" />






                        <div className='sp2pro'>

                            <button className='btn2pro' onClick={() => { setbbpro(false) }} > X </button>
                            <p className='p1pro'> SIGN IN/ SIGN UP  </p>

                            <p className='p2pro'> via OTP  </p>


                            <div className="img2pro">

                                <span className='sp3pro'>

                                    <img src="https://media.istockphoto.com/id/1471401435/vector/round-icon-of-indian-flag.jpg?s=612x612&w=0&k=20&c=kXy7vTsyhEycfrQ9VmI4FpfBFX2cMtQP5XIvTdU8xDE=" alt="" />

                                    <b> +91 </b>

                                    <input type="text" placeholder='Enter your mobile number' />

                                </span>
                            </div>


                            <p className='p4pro'> We will use this to notify you for any updates & offers </p>

                            <span className='sp4pro'>

                                <input type="checkbox" /> <p className='p5pro'> Remember Me </p>


                            </span>



                            <button className='btn1pro'> CONTINUE </button>

                        </div>
                    </div>

                    



                </div>}


                <div className="pro_rgt">

                 <img src= "./src/assets/images/wishlist1.jpg" alt="" width={180} height={120} />


                <div className='para_pro'>

                  <p className='para_pro1'><b> Your Wishlist is Empty </b> </p>

                  <p className='para_pro2'> Add items you like to your wishlist </p>

                 <Link to="/"> <button className='btn_cart_pro'> CONTINUE SHOPPING </button> </Link>

                  </div>



                </div>

            </div>






        </>

    )
}

export default Profile