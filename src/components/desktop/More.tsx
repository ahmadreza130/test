import React from "react";
import image from "../../assets/test.jpg";
const More = () => {
  return (
    <div className="col-lg-3 ms-3" id="more">
      <h6>ارتباطات خود را گسترش دهید</h6>

      <div className=" d-flex">
        <button className=" mt-4 me-3" >connect</button>
        <div className="  mt-3 me-3" >
          <h6 id="name">karim</h6>
          <p>developer</p>
        </div>
        <img  src={image} alt="none" />
      </div>
      <div className=" d-flex">
        <button className=" mt-4 me-3" >connect</button>
        <div className=" mt-3 me-3" >
          <h6 id="name">karim</h6>
          <p>developer</p>
        </div>
        <img  src={image} alt="none" />
      </div>
      <div className=" d-flex">
        <button className=" mt-4 me-3" >connect</button>
        <div className=" mt-3 me-3" >
          <h6 id="name">karim</h6>
          <p>developer</p>
        </div>
        <img  src={image} alt="none" />
      </div>
        
      <hr  />

      <button id="butbut">بیشتر</button>
    </div>
  );
};

export default More;
