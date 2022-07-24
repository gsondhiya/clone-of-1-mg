import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
   <>
    <div className="container">
        <div className="header">
            <a href="index.html"><img className="logo" 
            src="https://www.1mg.com/images/tata_1mg_logo.svg" /></a>
            <form className="search">
                <input type="text" className="inputheader" placeholder="Search for Medicines and Health Products"/>
                {/* <!-- <button className="searchlogo" type="submit"><i class="fa fa-search"></i></button> --> */}
            </form>
            <p className="help">Need Help?</p>
        </div>
        <div className="body">
            <div className="bodyLeft">
                <p>Items NOT Requiring Prescription (1)</p>
                <div className="leftPurchaseDetail">
                        <div>
                            <div className="leftPurchaseName">Show the Product detail here</div>
                            <div className="leftPurchasePrice">
                                <div > ₹<b className="leftPurchasePriceFirst">995</b></div>
                                <div className="leftPruchaseMrp">MRP &nbsp; ₹<span className="mrpdash">1990</span></div>
                                
                            </div>
                        </div>
                        <div className="quant" >bottles of 60 tablets</div>
                        <div className="removeItem">
                            <div>
                                <div class="remove">
                                    <img src="https://img.1mg.com/images/delete_icon.svg" alt=""/></div> 
                                <div class="remove" >Remove</div>
                            </div>
                            <div>
                                <div className="dec" onclick="dec()">
                                    <img src="https://www.1mg.com/images/minus-cart.svg" alt="decrease" class=""/></div>
                                <div className="betweenIncDec">1 </div>
                                <div className="inc" onclick="inc()">
                                    <img src="https://www.1mg.com/images/plus-cart.svg" alt="increase"/></div>
                            </div>
                        </div>
                </div>
                <div class="smallbox0">
                    <p>Last Minute Buys</p>
                    <div class="smallbox1"></div>
                </div>
            </div>
            <div className="bodyRight">
                <div>
                    <div className="carepadding">
                        <img src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" alt="Coupon Image"/>
                    <div className="saveLine"><span><b>You can save extra ₹15 on this order</b></span></div> 
                    <div className="member"><b>Become a Member</b></div>
                    <div className="member">Care plan membership ₹165 <strike>₹549</strike> / 3 months</div>
                    <div className="carePlusButton">
                        <div>Know More</div>
                        <div>Add to cart</div>
                    </div>
                    </div>
                    <hr></hr>
                    <div>
                        <div className="applyCoupon">
                            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" alt=""/>
                            <div>
                                <div>Apply Coupon</div>
                                <div className="couponSymbol">+</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="checkHealth">
                        <div>Check the health of your vital organs now</div>
                        <div>
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStztoHxSgxIIzPxzX3NqA2MBZIMC6tCxBPZXMeDm_Zd0SjkSH9" height="30px" width="40px" alt=""/></div>
                    </div >
                    <div className="checkbox">
                        <input type="checkbox" className="checkboxsize"/>
                        <div>
                            <div>Book a full body checkup starting at only Rs 429</div>
                            <div class="healthorganfont">Get this test done from the comfort of your home</div>
                            <div class="healthorganfont">Find out your health status</div>
                            <div className="paysamplegreen">Pay later on home sample collection</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cartSummary">
                        <span>Item Total(MRP)</span>
                        <span className="cartSummarymrp">₹1990</span>
                    </div>
                    <div className="cartSummary">
                        <span>Price Discount</span>
                        <span className="cartSummaryDiscount">-₹995</span>
                    </div>
                        <hr></hr>
                    <div className="cartSummary">
                        <span>Shipping Fee</span>
                        <span className="cartSummaryShippingFee">As per delivery address</span>
                    </div>
                        <hr></hr>
                    <div className="cartSummary" >
                        <span>To be paid</span>
                        <span className="cartSummaryToBePaid">₹995</span>
                    </div>
                    <div className="cartTotalSavings">
                        <span className="totalSavingFont">Total Savings</span>
                        <span className="totalSavingGreen">₹995</span>
                    </div>
                </div>
                <div className="checkoutBox">
                    <div className="deliveryLocation">
                        <div>Your delivery location</div>
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <span>New Delhi</span>
                        </div>
                    </div>
                    <div className="checkoutButton"><a href="address.html" className="a"> CHECKOUT </a></div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footerLeft">
                <hr></hr>
                <p className="footertext">Tata 1mg is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personel to be his agent for delivery of the goods. For details read <a href="" className="termnCond"> terms and conditions.</a></p>
            </div>
            <div className="footrtRight">
                <hr></hr>
                <p className="footertext"><b className="footerstar">*</b> 1mg Cash will be credited 7 days after your complete order is delivered in case of Products and in case of Lab Services 1mg Cash will be credited within 24 hours from the time of generation of test report. 1mg Cash will not be credited in case a return request is initiated for the order.</p>
                <p className="footertext"><b className="footerstar">**</b> Coupon Discount value may change if the total order value changes.</p>
                <p className="footertext"><b className="footerstar">***</b> Items in your cart will always reflect the most recent price as compared to the prices in their product detail page.</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Cart;