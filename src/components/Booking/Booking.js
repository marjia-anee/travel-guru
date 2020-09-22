import React from 'react';
import room1 from '../../images/Rectangle 26.png';
import room2 from '../../images/Rectangle 27.png';
import room3 from '../../images/Rectangle 28.png';
import './Booking.css';




const Booking = () => {

    return (
        <div className = 'd-flex'>
            <div className="m-5 booking">
                <p>252 stays Apr 13-17 3 guests</p>
                <h1>Stay in Cox's Bazar</h1>
                <br />
                <div className=" d-flex align-items-center">
                    <div>
                        <img src={room1} alt="" />

                    </div>
                    <div className = "ml-3 room1">
                        <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                        <p>4guests 2 bedrooms 2 beds 2 baths</p>
                        <p>With Air conditioning kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <p>4.9(20)  $34/night $167 total</p>
                    </div>

                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={room2} alt="" />
                    </div>
                    <div className = " ml-3 room2">
                        <h5>Apartment in Lost Panorama</h5>
                        <p>4guests 2 bedrooms 2 beds 2 baths</p>
                        <p>With Air conditioning kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <p>4.8(10)  $52/night $167 total</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img src={room3} alt="" />

                    </div>
                    <div className = "ml-3 room3">
                        <h5>Air Lounge & Pool</h5>
                        <p>4guests 2 bedrooms 2 beds 2 baths</p>
                        <p>With Air conditioning kitchen</p>
                        <p>Cancellation flexibility available</p>
                        <p>4.9(25)  $44/night $167 total</p>
                    </div>


                </div>


            </div>

            <div className = "mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885735.1537074877!2d90.13875802217072!3d22.613619344875293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sbd!4v1600336785303!5m2!1sen!2sbd" width='450px' height='620px' borderradius='13px' frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

            </div>

        </div>
    );
};

export default Booking;