import React, { useEffect, useState } from 'react';
import Shoes from './Shoes';
import ShoeSize from './ShoeSize';

const RelatedCategories = () => {
    const [shoe, setShoe]= useState({});
    const shoesImage= shoe?.gallery;

    const img1= shoe?.gallery?.[0]?.url;
    const img2= shoe?.gallery?.[1]?.url;
    const img3= shoe?.gallery?.[2]?.url;
    // console.log(ok);
    
    const mainImg = document.getElementById('mainImg');
    const thumbImg = document.getElementsByClassName('thumbImg');
    // console.log(thumbImg);
    console.log(mainImg);

    const changePicture1 =()=>{
        mainImg.src = img1;
    }
    const changePicture2 =()=>{
        mainImg.src = img2;
    }
    const changePicture3 =()=>{
        mainImg.src = img3;
    }


    useEffect(()=>{
        fetch('shoes.json')
        .then(res=> res.json())
        .then(data=> setShoe(data))

    },[])
    return (
        
        <div>
                 

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    
                <figure><img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80' id='mainImg' alt="Album"/></figure>
                <div className="card-body">
                    <h2>{shoe.title}</h2>
                    <h2 className="card-title">Price: </h2>
                    <p className='card-title'>Color: </p>

                  {/* ThumbNail section */}
                         <div>
                         <div>
                       <img onClick={changePicture1} id='thumbImg' className='w-32 h-20' src={img1} alt="" />
                  </div>
                    <div>
                       <img onClick={changePicture2} id='thumbImg' className='w-32 h-20' src={img2} alt="" />
                  </div>
                    <div>
                       <img onClick={changePicture3} id='thumbImg' className='w-32 h-20' src={img3} alt="" />
                  </div>
                         </div>
                    <p className='card-title'>Size: </p>

                    <ShoeSize></ShoeSize>
                </div>
                </div>
                  
              
          

            
        </div>
    );
};

export default RelatedCategories;