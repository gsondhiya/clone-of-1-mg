import React from 'react'
import Button from 'react-bootstrap/Button';
import './Footer.css'
const Footer = () => {
  return (
   <>
   <div className='Mainbox'>
    {/* ist box */}
      <div className='Istbox'>
        <div className='Box1'>
        <h2>Know Us</h2>
        <br></br>
        
        <p>About</p>
        <p>Contact us</p>
        <p>Press Coverage</p>
        <p>Careers</p>
        <p>Business Partnership</p>
        <p>Become a Health Partner</p>
        </div>
        <div className='Box1'>
         <h2>Our Policies</h2>
         <br></br>
         <p>Privacy Policy</p>
         <p>Terms and Conditons</p>
         <p>Editorial Policy</p>
         <p>Return Policy</p>
         <p>Ip Policy</p>
        </div>
        <div className='Box1'>
        <h2>Our Services</h2>
        <br></br>
         <p>Order Medicines</p>
         <p>Book Lab Tests</p>
         <p>Consult a Doctor</p>
         <p>Ayurveda Articles</p>
         <p>Hindi Articles</p>
         <p>Care Plan</p>
        </div>
        <div className='Box1'>
        <h2>Connect</h2>
        <br></br>
        <p>Social Links</p>
            <div className='Sociallink'>
           <span><i class="fa-brands fa-facebook"></i></span>
           <span><i class="fa-brands fa-twitter"></i></span>
           <span><i class="fa-brands fa-youtube"></i></span>
           <span><i class="fa-brands fa-linkedin"></i></span>
             </div>
            <p>Want daily dose of health?</p>
             <div><Button variant="warning">SignUp</Button>{' '}</div>
         </div>
         <div className='Box1'>
          <h2>Download App</h2>
          <br></br>
            <span><i class="fa-brands fa-google-play fa-4x"></i></span>
            <span><i class="fa-brands fa-apple fa-4x"></i></span>
         </div>
     </div>

     {/* 2nd box */}
       <div className='Istbox'>
          <div className='info'>
            <div><i class="fa-solid fa-calendar-check fa-6x"></i></div>
            <br></br>
            <div>
                <h1>Reliable</h1>
                <br></br>
            <p>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</p>
            </div>
          </div>
          <div className='info'>
            <div><i class="fa-solid fa-lock fa-6x"></i></div>
            <br></br>
            <div>
                <h1>Secure</h1>
                <br></br>
                <p>Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</p>
            </div>
          </div>
          <div className='info'>
            <div><i class="fa-brands fa-get-pocket fa-6x"></i></div>
            <div>
               <h1>Affordable</h1>
               <br></br>
                <p>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</p>
            </div>
          </div>


       </div>

       {/* 3rd box */}

       <div className='Istbox'>
          <div className='info'>
            <div>
                <img src="https://static.legitscript.com/seals/729605.png"/>
            </div>
            <div>
                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"/>
            </div>
          </div>
       </div>
       <div style={{textAlign:'center'}}><h2>India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</h2></div>
    </div>
   </>
  )
}

export default Footer