import React, { useEffect, useState } from 'react';
import "./RelatedCategories.css"

const RelatedCategories = () => {
    const [shoe, setShoe]= useState({});
    const [color1, setColor1]= useState(' Blue');
    const [discountPrice, setDiscountPrice]= useState('21.41');
    const [oldPrice, setOldPrice]= useState('38.22');
    console.log(shoe);

    // priceDiscount

     const shoe1DiscountedPrice = shoe?.variation?.skus?.[0].price?.discounted;
     const shoe2DiscountedPrice = shoe?.variation?.skus?.[1].price?.discounted;
     const shoe3DiscountedPrice = shoe?.variation?.skus?.[2].price?.discounted;

    //  priceOld
    const shoe1OldPrice = shoe?.variation?.skus?.[0].price?.old;
    const shoe2OldPrice = shoe?.variation?.skus?.[1].price?.old;
    const shoe3OldPrice = shoe?.variation?.skus?.[2].price?.old;
     
      console.log(shoe1OldPrice);
    // thumbNail
    const img1= shoe?.gallery?.[0]?.url;
    const img2= shoe?.gallery?.[1]?.url;
    const img3= shoe?.gallery?.[2]?.url;

    // ShoeSize
    
    const mainImg = document.getElementById('mainImg');
    // const thumbImg = document.getElementById('thumbImg');
    // const thumbImgBox = document.getElementById('thumbImgBox');
    
    

    const changePicture1 =()=>{
        mainImg.src = img1;
        setColor1('Blue');
        // mainPrice.innerText = shoe1DiscountedPrice;
        setDiscountPrice(shoe1DiscountedPrice);
        setOldPrice(shoe1OldPrice);
        
    }
    const changePicture2 =()=>{
        mainImg.src = img2;
        setColor1('Blue-White')
        setDiscountPrice(shoe2DiscountedPrice);
        setOldPrice(shoe2OldPrice);

    }
    const changePicture3 =()=>{
        mainImg.src = img3;
        setColor1('Black');
        setDiscountPrice(shoe3DiscountedPrice);
        setOldPrice(shoe3OldPrice);
        // mainPrice.innerText = shoe3DiscountedPrice;

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
                    <h2 id='mainPrice' className="card-title">Price: {discountPrice} <span className='line-through'>{oldPrice}</span>  </h2>
                    <p id='mainColor' className='card-title'>
                     Color: {color1} </p>

    {/* ThumbNail section start*/}
                         <div className='grid grid-cols-6 gap-4'>
                         <div className='thumbImgBox'>
                       <img tabIndex="1" onClick={changePicture1} id='thumbImg' className='w-32 h-20' src={img1} alt="" />
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

              {/* shoeSize section End*/}
                
                </div>
                </div>
                  
              
          

            
        </div>
    );
};

export default RelatedCategories;