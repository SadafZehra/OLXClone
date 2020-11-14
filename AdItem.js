import React, {useState} from 'react';
import Pic from '../ui/image.jpg';
function AdItem(props){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    if("placeholder" in props)
    {
        return(
            <div className = 'ad-item'>
             <div className = 'poster anim placeholder'>
             <img src={Pic} width="235px" height="159px" />
                 </div>
             <div className = 'title anim placeholder b s22' >Rs 82,500,000</div>
             <div className = 'tagline anim placeholder s15 color' >4 Bds - 5 Ba - 9450 Square Feet</div>
             <div className="ftr anim flex">
             <div className = 'anim location placeholder color1' >House For Sale In Canal 
                 </div>
             <div className = 'anim stamp placeholder' />
             </div>
            </div>
        );
    }
    return(
        <div className = 'add-item'>
         
        </div>
    );
}
export default AdItem;