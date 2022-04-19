import React from 'react'
import logo from '../assets/logo.webp'
import facebook from '../assets/001-facebook.svg'
import youtube from '../assets/002-youtube.svg'
import linkedin from '../assets/003-linkedin.svg'
import twitter from '../assets/004-twitter.svg'
import wallet from '../assets/001-google-wallet.svg'
import paypal from '../assets/002-paypal.svg'
import surface from '../assets/surface1.svg'
import americanexpress from '../assets/005-american-express.svg'
import visa from '../assets/003-visa-logo.svg'

function Footer() {
    return (
        <div>
        <div className="footer-div">
            <hr></hr>
            <div className="footer-1">
                <div className="logo"><img src={logo}></img> </div><br></br>
                <div>
                    <p>Got Questions ? Call us</p> 
                    <p className="phn">1-800-532-4427</p> <br></br>
                </div>

                <div>
                    <p>Contact info</p>
                    <p className='addr'>5449 Endeavour Ct.<br></br> Moorpark, CA 93021</p><br></br>
                </div>

                <div className='footer-11'>
                    <div><img src={facebook}></img></div>
                    <div><img src={youtube}></img></div>
                    <div><img src={linkedin}></img></div>
                    <div><img src={twitter}></img></div>
                </div>
            </div>


            <div>
                <p className="p-head">COMPANY</p> <br></br>
                <p>About Us</p>
                <p>Buyer</p>
                <p>Sellers</p>
                <p>Contact Us</p>
            </div>


            <div>
                <p className="p-head">INFORMATION</p> <br></br>
                <p>INFORMATION Exchange and Returns Policy</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
            </div>


            <div>
                <div>
                    <p className="p-head">PAYMENT METHODS</p> <br></br>

                    <div className="footer-11">
                        <div><img src={wallet}></img></div>
                        <div><img src={paypal}></img></div>
                        <div><img src={surface}></img></div>
                        <div><img src={americanexpress}></img></div>
                        <div><img src={visa}></img></div>
                    </div>

                </div>

                <div>
                    <p className="p-head">SIGN UP FOR EMAIL</p>
                    <p>Be the first to hear about promotions, new products,<br></br> trends, and more.</p> <br></br>
                    <button className="subButton"> SUBSCRIBE NOW! </button>
                </div>

            </div>
            <hr></hr>
            
        </div>
            <hr className="tailhr" />
            <div className="tail"><p>Copyrights © 2021 Company Ltd. All rights reserved.</p></div> 
        </div>
    )
}

export default Footer