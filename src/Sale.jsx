import React from 'react'
import './Sale.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Sale = () => {
  return (
   <>
   
    <div className="table1">

      <div className="table2">
            <div className="hom">HOME / SALE</div>
                
        <table>
          <tr className='border'>
            <td><div className="fi1">FILTER</div></td><td><div className="fi2">Clear All</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">Catogory(1)</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">price </div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">size</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">color</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">fabric</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">fit</div></td><td><div className="fi4">+</div></td>
              </tr>
          <tr className='border'>
                <td><div className="fi3">nackline</div></td><td><div className="fi4">+</div></td>
              </tr>
          <tr className='border'>
                <td><div className="fi3">sleeve type</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">waist type</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">collection</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">season</div></td><td><div className="fi4">+</div></td>
              </tr>
           <tr className='border'>
                <td><div className="fi3">discount</div></td><td><div className="fi4">+</div></td>
              </tr>
         </table>

           </div>

          

       <div className="girl1">

         <div className="heding">
                  <h2>SALE</h2><a> 15 product</a> 
                </div>

          <div className="best">
                    SORT BY :<a>Bestsellers <img src="https://cdn-icons-png.flaticon.com/512/203/203484.png" alt="" width="10px"/></a>
                  </div>

            <div className="cro">Sale 
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" width="20px"/>
                    </div>


     <div className="pho">

           <div className="pho1">
              <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw7fdb6e31/images/ss25/skdvin8652ess25org_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px" />
               <p>Orange Cotton Printed Anarkali  <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Suit Set</p>
               <p>MRP <b>₹ 3,496</b></p>
               </div>

                 <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw3f27f9fa/images/aw25/asrtcsl30210aw25blk_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Black And Rust Printed <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Straight Kurta </p>
               <p>MRP <b>₹ 1,499</b></p>
               </div>


            <div className="pho1">
            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw99be4798/images/aw25/skdasrt31427aw25pnk_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px" /> 
               <p>Pink Embroidered Straight <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Suit Set</p>
               <p>MRP <b>₹ 2,599</b></p>
               </div>


            <div className="pho1">
             <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw3afe7494/images/ss25/fes1526ess25ter_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Terracotta Cotton Layered<img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Anarkali Dress</p>
               <p>MRP <b>₹ 3,216</b></p>
               </div>


            <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw4649f98b/images/ss25/spiot2946ss25org_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/> 
               <p>Orange cotton Blend Schiffli<img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Straight Suit Set</p>
               <p>MRP <b>₹ 2,599</b></p>
               </div>


            <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwb5a80547/images/ss25/asrtkt21745ss25grn_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
             <p>Green Pure Cotton Printed<img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p> Straight Kurta Set</p>
               <p>MRP <b>₹ 1,459</b></p>
               </div>


            <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw5be7e2dc/images/ss25/skdnagma10831ss25red_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>  
               <p>Red Foil Printed kalidar<img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Suit Set</p>
               <p>MRP <b>₹ 3,575</b></p>
               </div>


          <div className="pho1">
            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwd29e84a5/images/ss25/spiot2952ss25grn_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/> 
               <p>Green Floral Printed <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p> Co-Ord Set</p>
               <p>MRP <b>₹ 2,599</b></p>
               </div>


          <div className="pho1">
            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw01359bdb/images/ss25/skdchar8178ess25brn_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>  
               <p>Brown Solid Gathered Stright <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Suit Set</p>
               <p>MRP <b>₹ 2,519</b></p>
               </div>


          <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw525e9861/images/ss25/skdvin8652ess25lpn_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>  
               <p>Light Pink Cotton Printed <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p> Anarkali Suit Set</p>
               <p>MRP <b>₹ 2,496</b></p>
               </div>


            <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf24509f7/images/ss25/skdjrok10628ss25pur_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/> 
               <p>Purple Model Blend Straight <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Suit Set</p>
               <p>MRP <b>₹ 2,496</b></p>
               </div>

                <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw556ea0e6/images/ss25/asrt21778ss25blk_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/> 
               <p>Black Embroidered Straight  <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Short Kurta</p>
               <p>MRP <b>₹ 2,437</b></p>
               </div> 

        <div className="pho1">
            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw9a833c5a/images/aw25/asrtcsl30211aw25grn_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>  
               <p>green ad beige Printed Straight <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Kurta Set</p>
               <p>MRP <b>₹ 1,875</b></p>
               </div>


          <div className="pho1">
               <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw7a2ae4ce/images/ss25/shib21571ss25blu_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Blue Printed Assymmetric Short <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p> Kurta</p>
               <p>MRP <b>₹ 2,155</b></p>
               </div>


            <div className="pho1">
               <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw4f8b4c09/images/aw25/skdasrt31306aw25fus_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Fuchsia Solid Straight<img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Suit Set</p>
               <p>MRP <b>₹ 2,599</b></p>
               </div>

                <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw5de3350e/images/ss25/crpkt21674ss25pnk_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Pink Printed Straight  <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Short Kurta</p>
               <p>MRP <b>₹ 2,437</b></p>
               </div> 

                <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwdbd0a5b7/images/aw22/fusion1772aw22pur_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Purple Cotton Straight <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>2 piece  Set</p>
               <p>MRP <b>₹ 2,300</b></p>
               </div>


          <div className="pho1">
                <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw0f905075/images/ss25/fes1588ess25blk_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Black Poly Chanderi Layered <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p> Tiered Dress</p>
               <p>MRP <b>₹ 3,216</b></p>
               </div>


            <div className="pho1">
               <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw2b220389/images/aw21/skd7670aw21ligrn_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Lime Green Cotton Anarkali<img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Kurta Plazzo Suit Set</p>
               <p>MRP <b>₹ 4,196</b></p>
               </div>

                <div className="pho1">
               <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw2da17a89/images/ss25/spiot2944ss25olv_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width="250px"/>
               <p>Olive Green Solid Straight <img src="https://static.vecteezy.com/system/resources/previews/005/948/320/non_2x/heart-icon-design-element-logo-element-illustration-love-symbol-icon-free-vector.jpg" alt="" width="20px"/></p>
               <p>Co-ord Set</p>
               <p>MRP <b>₹ 2,599</b></p>
               </div> 



          </div>

   </div>


        </div>

   
   </>
  )
}

export default Sale