import React, { useState } from 'react'
import "./Nav.css"
// import style from "./Nav.module.css"
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Nav = () => {

    const[bb,setbb]=useState(false)

    const[as,setas]=useState(false)

    const [cart,setcart]= useState(false)


  return (

    

    <>
    
        

            {/* <div className={style.navbar}> */}

            <div className='navbar'>

               <u> ENJOY FREE SHIPPING ON ALL ORDERS ABOVE ₹999! </u> 

            </div>

            <div className="logo">

                <div className="img1">

               <Link to="/"> <img src="https://phoenixunited.s3.ap-south-1.amazonaws.com/BrandsImages/10072023164735895_brlo.png" alt="" width={120} height={100}/> </Link>

                </div>

                <span className='sp1'>

                    <p> Ship to <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" height={15} width={20} /> India ₹ <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt=""  height={10}/> </p>

                </span>

                <div className="search1">

                    <img src="https://cdn-icons-png.freepik.com/512/7828/7828884.png" alt="" height={16} /> Search kurta, shirts and dupattas

                </div>

                <div className="icons">

                    <ul>

                        <li> <Link to="/profile"> <img src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/> </Link> </li>

                        <li> <img onClick={()=>{setbb(true)}} src="https://static.vecteezy.com/system/resources/previews/026/630/551/non_2x/profile-icon-symbol-design-illustration-vector.jpg" alt="" height={20} /> </li>

                        


                        <li className='l1'> <img onMouseOver={()=>{setcart("b6")}} src="https://i.pinimg.com/564x/13/9c/30/139c30b5b3a875a6e9d0500091164289.jpg" alt="" height={20} /> </li>

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

                  { cart == "b6" &&

                    <div className="cart_profile" onMouseLeave={()=>setcart(false)}>

                        
                          <h4>  MY CART </h4>

                          <img src= "./src/assets/images/cart1.jpg" alt="" width={200} height={120} />

                          <h4 className='txt'>  Looks like you haven't made any choices yet  </h4>
                        
                         <div className='cart_div'>
                         <Link to="/profile"> <button className='btn_cart'>  ADD ITEMS FROM WISHLIST  </button> </Link>
                         </div>
                         




                    </div>

                }

                <div className="menu">

                    <ul>

                        <li className='m1' onMouseOver={()=>setas("b1")}> <Link to="/festive25" className='lnk1'>  FESTIVE'25 </Link>  </li>
                        <li onMouseOver={()=>setas("b2")}> <Link to ="/suit_sets" className='lnk'> SUIT SETS </Link> </li>
                        <li onMouseOver={()=>setas("b3")}> <Link to="/KurtaandTops" className='lnk'> KURTAS & TOPS  </Link></li>
                        <li onMouseOver={()=>setas("b4")}> <Link to="/dresses" className='lnk'> DRESSES</Link>   </li>
                        <li> <Link to="/dress_materials" className='lnk'>  DRESS MATERIALS </Link> </li> 
                        <li onMouseOver={()=>setas("b5")}> <Link to="/bottoms" className='lnk'> BOTTOMS </Link>  </li>
                        <li onMouseOver={()=>{setas("s1")}}> <Link to="/jewellery" className='lnk'> JEWELLERY </Link> </li>
                        <li > <Link to="/fragrances" className='lnk'> FRAGRANCES </Link> </li>
                        <li onMouseOver={()=>{setas("s2")}}> <Link to="/Girls" className='lnk'>GIRLS</Link> </li>
                        <li onMouseOver={()=>{setas("s3")}}> <Link to="/Collection" className='lnk'>COLLECTION</Link></li>
                        <li> <Link to="/CoordSets" className='lnk'>CO-ORD SETS</Link></li>
                        <li onMouseOver={()=>{setas("s4")}} className='m2'> <Link to="/sale" className='lnk1'>SALE</Link> </li>

                    </ul>

                </div>



            </div>

            {as=="b1" && 
            <div>
                
                <div className="bb1" onMouseLeave={()=>setas(false)}>

                    <ul className='hvr_menu'>

                        <li className='hvr_menu_heading'> CATEGORY </li>
                        <li className='hvr_menu_selected'> Shop All </li>
                        <li> Suit Sets </li>
                        <li> Kurtas & Tops </li>
                        <li> Dresses </li>
                        <li> Bottoms </li>
                        <li> Girls </li>
                        <li> Saree </li>

                    </ul>

                    <img src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw1cc90c82/nav-new-sept9.jpg" alt="" width={700} height={320} />



                </div>
                
                
                </div>}

                {as=="b2" && 
            <div>
                
                <div className="bb2">

                        <ul className='hvr_menu1'>

                            <li className='hvr_menu_heading'> CATEGORY </li>
                            <li className='hvr_menu_selected'> Shop All</li>
                            <li> Straight Suit Sets </li>
                            <li> Anarkali Suit Sets </li>
                            <li> Flared Suit Sets </li>
                            <li> A-line & Kalidar Suits </li>
                            <li> Asymmetric Suits </li>
                            <li> Fusion Suit Sets </li>
                            <li> Lehengas & Skirt Sets </li>
                            <li> Unstitched Suit Sets </li>

                        </ul>

                        <ul className='hvr_menu2'>

                            <li className='hvr_menu_heading'> COLLECTION </li>
                            <li className='hvr_menu_selected'> Shop All </li>
                            <li> Autumn Winter </li>
                            <li> Festive </li>
                            <li> Spring Summer </li>
                            <li> Winterwear </li>
                            <li> Workwear </li>

                        </ul>

                        <img src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw7f813eaf/nav-suit-sept17.jpg" alt="" height={320} width={700}/>
                    

                </div>
                
                
                </div>}

                {as=="b3" && 
            <div>
                
                <div className="bb3">

                      <ul className='hvr_menu1'>

                            <li className='hvr_menu_heading'> CATEGORY </li>
                            <li className='hvr_menu_selected'> Shop All</li>
                            <li> Kurtas </li>
                            <li> Kurtis & Tops </li>
                            <li> Shrugs & Jackets </li>
                            <li> Dupattas & Scarves </li>
                            <li> Nighty & More </li>

                        </ul>

                        <ul className='hvr_menu2'>

                            <li className='hvr_menu_heading'> COLLECTION </li>
                            <li className='hvr_menu_selected'> Shop All </li>
                            <li> Classic Solids </li>
                            <li> Autumn Winter </li>
                            <li> Festive </li>
                            <li> Spring Summer </li>
                            <li> Winterwear </li>
                            <li> Workwear </li>

                        </ul>

                        <img src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw46ebdee0/nav-kurta-sept17.jpg" alt="" height={320} width={700}/>

                </div>
                
                
                </div>}

                {as=="b4" && 
            <div>
                
                <div className="bb4">


                         <ul className='hvr_menu'>

                        <li className='hvr_menu_heading'> COLLECTION </li>
                        <li className='hvr_menu_selected'> Shop All </li>
                        <li> Autumn Winter </li>
                        <li> Casual </li>
                        <li> Festive </li>
                        <li> Spring Summer </li>
                        <li> Workwear </li>

                    </ul>

                    <img src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw7ef1299e/nav-dress-sept18.jpg" alt="" width={700} height={320} />
                    

                </div>
                
                
                </div>}

                {as=="b5" && 
            <div>
                
                <div className="bb5">

                     <ul className='hvr_menu'>

                        <li className='hvr_menu_heading'> CATEGORY </li>
                        <li className='hvr_menu_selected'> Shop All </li>
                        <li> Churidar & Leggings </li>
                        <li> Pants </li>
                        <li> Palazzos </li>
                        <li> Salwar </li>
                        <li> Skirts & Shararas </li>

                    </ul>

                    <img src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw98636bcc/nav-bottom-sept9.jpg" alt="" width={700} height={320} />                    

                </div>
                
                
                </div>}


            {as=="s1"&&
                 <div className="pd1">
                     <div className="dd1">
                        <a>CATEGORY </a>
                        <p>Shop All</p>
                        <p>Earrings</p>
                        <p>Necklaces and Seta</p>
                        <p>Bangles and Bracelets</p>
                        <p>Addons</p>
                    </div>
                    <div className="dd2">
                        <a>COLLECTION</a>
                        <p>shop All</p>
                        <p>Contemporary</p>
                        <p>Festive</p>
                    </div>
              <img className='dd3' src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw39f87d5a/nav-jewellery-sept18.jpg" alt="" width="600px"/>
               
                   
                </div>}
            
                {as=="s2"&&

                <div className="pd2">
                     <div className="dd1">
                        <a>CATEGORY </a>
                        <p>Shop All</p>
                        <p>Straight Suit Sets</p>
                        <p>Anarkali Suit Sets</p>
                        <p>Flared & Sharara Suit Sets</p>
                        <p>A-line & Kalidar Suits</p>
                        <p>Lehengas & Skirt Sets</p>
                        <p>Tops & Tunics</p>
                        <p>Frocks & Dresses</p>
                        <p>Pants & Leggings</p>
                        <p>Western sets</p>
                        <p>Girls Sleepwear</p>
                        <p>Shorts & Skirts</p>
                    </div>
                    <div className="dd2">
                        <a>COLLECTION</a>
                        <p>shop All</p>
                        <p>Autumn Winter</p>
                        <p>Casual</p>
                        <p>Festive</p>
                        <p>Spring Summer</p>
                        <p>Winterwear</p>
                    </div>
                    <img className='dd3' src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dw7dc7fa67/nav-girls-sept9.jpg" alt="" width="600px"/>
                     
                      </div>}


                {as=="s3"&&
                <div className="pd3">
                    <div className="dd1">
                        <a>CATEGORY </a>
                        <p>Shop All</p>
                        <p>Durga Puja Edit</p>
                        <p>Navratri Celebration</p>
                        <p>Plus Size Collection</p>
                        <p>Online Exclusive</p>
                    </div>
                    <div className="dd2">
                        <a>COLLECTION</a>
                        <p>shop All</p>
                        <p>BIBA by Rohit Bal</p>
                        <p>Wedding Splendor</p>
                        <p>Festive</p>
                        <p>Office Oomph</p>
                        <p>Everyday Grace</p>
                        <p>Indigo Chronicles</p>
                        <p>Posh Palette</p>
                        <p>Curio Edit</p>
                    </div>
                   <img className='dd3' src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dwc123c08a/nav-collection-sept17.jpg" alt="" />
                    </div>}
                
                {   as=="s4"&&
                        <div className="pd4">
                            <div className="dd4">
                                <a>Category</a>
                                <p>Shop All</p>
                                <p>Suit Sets</p>
                                <p>Kurtas and Tops</p>
                                <p>Dresses</p>
                                <p>Bottoms</p>
                                <p>Jewellary</p>
                                <p>Fragrance</p>
                                <p>Girls</p>
                            </div>
                        <img className='dd3' src="https://images.biba.in/on/demandware.static/-/Sites-biba-india/default/dwe44c33ce/nav-aug1.jpg" alt="" />
                  </div>}
                
                

           
            
        
    
    </>
  )
}

export default Nav