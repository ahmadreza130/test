import React from "react";
import { BsPlusSquare } from "react-icons/bs";

const HashTag = () => {
  return (
    <div className="col-lg-3 offse" id="hashtag">
      <div id="head">
        <button>
          <BsPlusSquare  />
        </button>
        <p> هشتگ هایی که دنبال میکنید</p>
      </div>
      <hr />
      <div className="d-flex hash">
        <p>#work</p>
        <p>#hr</p>
        
        <p>userexperience</p>
      </div>

      <div className="d-flex hash">
        <p>#userinterface</p>
        <p>ui</p>
        <p>#digital</p>
      </div>
      <div className="d-flex hash">
        <p>#ux</p>
        <p>#freelace</p>
        <p>#business</p>
      </div>
    </div>
  );
};

export default HashTag;
