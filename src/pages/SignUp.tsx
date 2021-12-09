import React, { useState, useContext } from "react";
import { SetUserContext } from "../Store";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useContext(SetUserContext);
  const [inputValues, setInputValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValues.email !== "" && inputValues.password !== "") {
      setUser({
        email: inputValues.email,
        password: inputValues.password,
        loggedIn: false,
        posts:[]
      });
      navigate("/", { replace: true });
    } else {
      alert("لطفا فرم را کامل کنید");
    }
  };

  return (
    <div id="signForm">
      <form>
        <h3 className="mb-5">ثبت نام</h3>
        <br />
        <input
        className="inpt"
          type="email"
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        />
        <br />
        <input
                className="inpt"

          placeholder="password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
        />
        <br />
        <button className=" but text-light" onClick={register}>
          ثبت نام
        </button>
        <br />
        عضو هستم
        <br />
        <button className=" but bg-white">
          <Link className="lnk " to="/">
            ورود
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
