import React, {useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
function Footer(){

    return(
        <React.Fragment>
        <div className="footer flex">
             <div className="block flex flex-col">
              <h2 className="title s16 fontb color" >POPULAR CATEGORIES</h2>
              <Link to="/" className="noul noulh font s14"  >Cars</Link>
              <Link to="/" className="noul noulh font s14"  >Flats for rent</Link>
              <Link to="/" className="noul noulh font s14"  >Jobs</Link>
              <Link to="/" className="noul noulh font s14"  >Mobile Phones</Link>
             </div>
             <div className="block flex flex-col">
              <h2 className="title s16 fontb color" >TRENDING SEARCHES</h2>
              <Link to="/" className="noul noulh font s14"  >Bikes</Link>
              <Link to="/" className="noul noulh font s14"  >Watches</Link>
              <Link to="/" className="noul noulh font s14"  >Books</Link>
              <Link to="/" className="noul noulh font s14"  >Dogs Phones</Link>
             </div>
             <div className="block flex flex-col">
              <h2 className="title s16 fontb color" >ABOUT US</h2>
              <Link to="/" className="noul noulh font s14"  >About OLX Group</Link>
              <Link to="/" className="noul noulh font s14"  >OLX Blog</Link>
              <Link to="/" className="noul noulh font s14"  >Contact Us</Link>
              <Link to="/" className="noul noulh font s14"  >OLX for Business</Link>
             </div>
             <div className="block flex flex-col">
              <h2 className="title s16 fontb color" >OLX</h2>
              <Link to="/" className="noul noulh font s14 "  >Help</Link>
              <Link to="/" className="noul noulh font s14 "  >Sitemap</Link>
              <Link to="/" className="noul noulh font s14 "  >Legal & Privacy information</Link>
              
             </div>
             <div className="block flex flex-col">
              <h2 className="title s16 fontb color" >Follow Us</h2>
              <div className="tag flex as">
              <a href="#" className="noul bl"><i class="fa fa-facebook"></i></a>
            <a href="#" className="noul bl"><i class="fa fa-twitter"></i></a>
            <a href="#" className="noul bl"><i class="fa fa-youtube text-white"></i></a>
            <a href="#" className="noul bl"><i class="fa fa-instagram text-white"></i></a>
              
              </div>
              <div className="links flex as">
            <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" ></img></a>
            <a href="#" className="noul bl"><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" ></img></a>
            </div>
             </div>
        </div>
        <div className="footerb flex">
         <h2 className="cfff font s14" >Other Countries India - South Africa - Indonesia</h2>
         <h2 className="r cfff font s14" >Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
        </div>
        </React.Fragment>

    );
    
}
export default Footer;