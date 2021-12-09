import React, { useState, useContext } from "react";
import { SetUserContext, UserContext } from "../Store";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Login: React.FC = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);
  const [inputValues, setInputValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const checkLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValues.email !== "" && inputValues.password !== "") {
      if (
        inputValues.email === user.email &&
        inputValues.password === user.password
      ) {
        setUser({ ...user, loggedIn: true });
        navigate("/desktop", { replace: true });
      } else {
        alert("ایمیل یا رمز اشتباه است");
      }
    } else {
      alert("لطفا فرم را کامل کنید");
    }
  };

  return (
    <div  id="signForm">
      <form>
        <h3 className="mb-5">ورود</h3>
        <br />
        <input
        className="inpt"
          placeholder="Email"
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        />
        <br/>
        <input
        className="inpt"
          placeholder="password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
        />
         <br/>
        <button className=" but border-0 text-white" onClick={checkLogin}> ورود</button>
        <br/>
        عضو نیستم
        <br/>
        <button  className=" but bg-white ">
          <Link className="lnk" to="/signup">ثبت نام</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
