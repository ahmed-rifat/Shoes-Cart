import React, { useEffect, useState } from 'react';

const RelatedCategories = () => {
    const [shoe, setShoe]= useState({});
    const [color1, setColor1]= useState(' Black');
    const [color2, setColor2]= useState(' Black-White');
    const [color3, setColor3]= useState(' Black');
    console.log(shoe);



    // thumbNail
    const img1= shoe?.gallery?.[0]?.url;
    const img2= shoe?.gallery?.[1]?.url;
    const img3= shoe?.gallery?.[2]?.url;

    // ShoeSize
    
    const mainImg = document.getElementById('mainImg');
    const mainColor = document.getElementById('mainColor');
    // const thumbImg = document.getElementById('thumbImg');
    // console.log(thumbImg);
    // console.log(mainImg);

    const changePicture1 =()=>{
        mainImg.src = img1;
        mainColor.innerText=color1;
    }
    const changePicture2 =()=>{
        mainImg.src = img2;
        mainColor.innerText =color2;
    }
    const changePicture3 =()=>{
        mainImg.src = img3;
        mainColor.innerText= color3;
    }


    useEffect(()=>{
        fetch('shoes.json')
        .then(res=> res.json())
        .then(data=> setShoe(data))

    },[])
    return (
        
        <div>
                 

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    
                <figure><img src={img1} id='mainImg' alt="Album"/></figure>
                <div className="card-body">
                    <h2>{shoe.title}</h2>
                    <h2 className="card-title">Price: </h2>
                    <p id='mainColor' className='card-title'>
                     {color1} </p>

    {/* ThumbNail section start*/}
                         <div className='grid grid-cols-6 gap-4'>
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
                    <p id='mainSize' className='card-title'>Size: </p>

    {/* ThumbNail section END*/}



             {/* shoeSize section start*/}

             <div className='grid grid-cols-5 gap-4'>
             <div className="tabs tabs-boxed">
                <a className="tab">5</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">5.5</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">6</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">6.5</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">7</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">7.5</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">8</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">8 wide</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">8.5</a> 
                </div>
             <div className="tabs tabs-boxed">
                <a className="tab">8.5 wide</a> 
                </div>
             
             </div>

              {/* shoeSize section start*/}
                
                </div>
                </div>
                  
              
          

            
        </div>
    );
};

export default RelatedCategories;