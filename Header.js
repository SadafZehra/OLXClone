import React from 'react';
import Logo from '../ui/olx.png';
import { Link } from 'react-router-dom';

function Header(){
    const nav=[
     {ID:1, label:"Mobile Phones"},
     {ID:2, label:"Cars"},
     {ID:3, label:"Motorcycles"},
     {ID:4, label:"Houses"},
     {ID:5, label:"TV-Video-Audio"},
     {ID:6, label:"Tablets"},
     {ID:7, label:"Land & Plots"}
    ];
    return(
        <React.Fragment>
        <div className = 'header fixed flex aic'>
            <div className = 'logo' >
            <img src ={Logo}  />
            </div>
            <div className = "location rel flex aic">
                <div className="icon-search ico s24"><i class="fa fa-search" aria-hidden="true"></i></div>
                    <input className="label s15 font" placeholder="Your Location" value="Pakistan" />
                    <button className="icon-chevron-down arro s24"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
        </div>
            <div className="search flex aic">
                <input type="text" placeholder="Find cars,Mobile Phones and more..." className="query font s15" />
                <button className="icon-search go s24 cfff" ><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
            <div className="actions flex aic">
                <Link to="/account/signin" className="color fontb s16 noulh noul">Sign In</Link>
            <button className="sell flex color aic" >
                <div className="icon-plus ico s24" ><i class="fa fa-plus" aria-hidden="true"></i></div>
                <h2 className="s18 fontb">SELL</h2>
            </button>
            </div>
        </div>
        <div className = 'hnav fixed flex aic'>
            <button className="view-cats flex aic color">
            <h2 className="s18 font">All Categories</h2>
            <button className="icon-chevron-down arro s24"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                </button>
                {
                    nav.map(item =>{
                        return(
                            <Link to = {"/browser/" + item.ID} className="noul noulh bl color font s15" >{item.label}</Link>
                        )
                    })
                }
        </div>
        <div className = "hclr" />
        </React.Fragment>
    );
}
export default Header;