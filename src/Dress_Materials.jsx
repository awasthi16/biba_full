import React from 'react'
import "./Dress_Materials.css"

const Dress_Materials = () => {
  return (
    <div className='dressm'>

        <div className="lft">

        <table>

            <tr className='r1'>
                <td>  HOME / DRESS MATERIAL </td>
            </tr>

            <tr className='r2'>
                <td className='t4'>
                    FILTERS
                </td>

                <td className='t12'>
                     <u> Clear All </u>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    CATEGORY (1)
                </td>

                <td className='t3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    PRICE
                </td>

                <td className='t3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    SIZE
                </td>

                <td className='t3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    COLOR    
                </td>

                <td className='t3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    FABRIC
                </td>

                <td className='t3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    SEASON
                </td>

                <td className='t3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
                </td>
            </tr>

            <tr className='r3'>
                <td className='t11'>
                    DISCOUNT
                </td>

                <td className='t3'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>

                </td>
            </tr>

        </table>

        </div>

        <div className='rgt'>

          <div className='pr'>

            <b> DRESS MATERIAL </b> 300 Products

          </div>
          <div>

          <table>

            <tr>
                <td className='t5'> Dress Material <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhckH7E2YSwhL8j7Ae9l4BSLLQIpuNXB41A&s" alt="" height={25} />  </td> 

                <td className='t6'>  </td>

                <td className='t7'> <span> Sort By: <select name="sort_by" id="n3" className='slct1'>
                    
                    <option value={"Bestsellers"} className='op1' > <b> Bestsellers </b>  </option>
                    <option value={"Popular"}> Popular </option>
                    <option value={"New_Arrival"}> New Arrival </option>
                    <option value={"Price_high_low"}> Price (High to Low) </option>
                    <option value="Price_low_high"> Price (Low to High) </option>
                    <option value="Discount"> Discount </option>

                    </select>
                    </span>
                    
                     </td>
            </tr>

          </table>

          </div>

          <div className="items">

            <div className="item41">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw9ae48281/images/aw25/rtsncrlr2322aw25beg_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it41'> Beige Chanderi Jamdani Unstitched Suit Set </td>
                    <td>  <div className='it42'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹4,499 </b> </p>
            </table>

            

            </div>

              <div className="item41">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw615bf85d/images/ss25/rtssojh24des2ss25yel_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it41'> Yellow Cotton Printed Unstitched Suit Set </td>
                    <td>  <div className='it42'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹1,749 </b> </p>
            </table>

            

            </div>

              <div className="item41">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwda7bd65a/images/aw25/rtssn2002aw25blk_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it41'> Black Cotton Modal Digital Print Unstitched Suit Set </td>
                    <td>  <div className='it42'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹1,899 </b> </p>
            </table>

            

            </div>

              <div className="item41">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwa6ce7484/images/aw25/rtssd25mr12aw25tel_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it41'>  Teal Muslin Digital Print Unstitched Suit Set </td>
                    <td>  <div className='it42'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹2,799 </b> </p>
            </table>

            

            </div>

           


             <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw14b7e059/images/aw25/rtsam2197aw25lpst_1.jpg?sw=242&sh=363&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td> <div className='it1'> Light Pista Cotton Schiffli Unstitched Suit Set </div> </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹4,199  </b></p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw0a4b1847/images/ss25/rtschknje4092ss25gry_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Grey Art Silk Unstitched Suit Set  </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td> </tr>

                <p> MRP <b> ₹2,399 </b> </p>
                
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwe1d8fc5f/images/aw25/rtsncrsef5279aw25lav_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Lavender Chanderi Printed Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹3,799 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwa4cd56e0/images/ss24/rtsmgbinss24aqua_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Aqua Cotton Handloom Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹1,379 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwd5bd53ee/images/aw25/rtsdi10006928aw25pur_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Purple Cotton Unstitched Suit Set </td>
                   <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                 <p> MRP <b> ₹1,999 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw46d6b00f/images/aw22/rtshk10004aw22ass_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Assorted Cotton Hand Block Print Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                 <p> MRP <b> ₹1,619 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw9886340a/images/aw24/rtsapaa371aw24mrn_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Maroon Chanderi Printed Embroidered Unstitched Suit Set </td>
                 <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹2,099 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwb8bbcca3/images/aw25/rtssojh25mys36aw25ind_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Blue Cotton Hand Embroidered Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                 <p> MRP <b> ₹3,999 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw3d4a4a05/images/aw25/rtssojh25mys49aw25pnk_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Pink Chanderi Machine Embroidered Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹3,299 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw735293ed/images/aw25/rtsdi10006527aw25blu_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Blue Cotton Unstitched Suit Set</td>
                   <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹1,999 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw3d2d2b0f/images/aw25/rtsdi10006527aw25pnk_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Pink Cotton Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹1,999 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwc62b5a31/images/aw25/rtspr10aw25wne_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Wine Silk Blend Hand Embroidered Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                 <p> MRP <b> ₹4,299 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw8f86d98c/images/aw25/rtssc6408aw25beg_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Beige Chanderi Hand Embroidered Unstitched Suit Set </td>
                   <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹2,799 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw7de93a2d/images/aw23/rtsrs7686aw23ltblu_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Light Blue Chanderi Blend Printed Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                <p> MRP <b> ₹2,279 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw00c2e206/images/ss25/rtsrs8856ss25lav_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Lavender Chanderi Weave Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                 <p> MRP <b> ₹2,799 </b> </p>
            </table>

            

            </div>

            <div className="item1">

            <img src="https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw16859602/images/ss25/rtspp2039comss25sgr_1.jpg?sw=502&sh=753&q=100&strip=false" alt="" width={250} height={300} />

            <table>

                <tr>
                    <td className='it1'> Green Cotton Printed Unstitched Suit Set </td>
                    <td>  <div className='it2'> <img  src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" height={20}/>  </div></td>
                </tr>

                 <p> MRP <b> ₹1,519 </b> </p>
            </table>

            

            </div>


            </div>

             

        

        </div>

    </div>
  )
}

export default Dress_Materials