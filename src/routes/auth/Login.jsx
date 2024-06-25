import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "..//..//context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { setIsAuth } = useContext(AuthContext);
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://987cb3fcb3eb9832.mokky.dev/auth",
        data
      );
      console.log(response.data);
      if (response.status === 201) {
        setIsAuth(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user-info", response.data.data);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleData = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log(email);
    console.log(password);
    const data = {
      email,
      password
    };
    postData(data);
  };

  return (
    <div className="flex justify-center items-center flex-col mt-4 h-screen">
      <h1 className="p-8 font-bold text-[20px]">Войти</h1>
      <form
        onSubmit={handleData}
        className="flex flex-col justify-center items-center gap-3 w-[350px] border-[1px]  rounded-xl p-5 sm:p-8 hover:shadow-xl hover:shadow-gray-200 mt-[100px] border-gray-300"
      >
        <div className="w-full flex flex-col gap-3">
          <h1 className="font-semibold">Полное имя</h1>
          <input
            className="  border-[1px] border-gray-300 p-2 rounded-xl w-full"
            type="email"
            placeholder="sobaka@gmail.com"
            name="email"
          />
        </div>
        <div className="w-full flex flex-col gap-3 ">
          <h1 className="font-semibold">Пароль</h1>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded-xl w-full"
            type="password"
            placeholder="*********"
            name="password"
          />
        </div>
        <p>{error}</p>
        <button className="w-full bg-red-500 text-white rounded-md p-2">
          Войти
        </button>
        <Link
          to={"/register"}
          className="text-center w-full border-2 border-red-600 text-red-600 font-semibold rounded-md p-2"
        >
          Регистрация
        </Link>
      </form>
    </div>
  );
};

export default Login;
