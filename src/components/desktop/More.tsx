import React from "react";
import image from "../../assets/test.jpg";
const More = () => {
  return (
  
      <div id="more">
        <h6>ارتباطات خود را گسترش دهید</h6>

        <div>
          <img src={image} alt="none" />
          <h6 id="name">karim</h6>
          <p>developer</p>
          <button>connect</button>
        </div>
        <div>
          <img src={image} alt="none" />
          <h6 id="name">karim</h6>
          <p>developer</p>
          <button>connect</button>
        </div>
        <div>
          <img src={image} alt="none" />
          <h6 id="name">karim</h6>
          <p>developer</p>
          <button>connect</button> 
        </div>
       <hr className=" w-100 "/>
       
       <button id="x">بیشتر</button>
      </div>
      
    
  );
};

export default More;
