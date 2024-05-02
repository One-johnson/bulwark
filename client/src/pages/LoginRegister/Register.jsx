import { FiLock } from "react-icons/fi";
import Logo from "../../images/school.png";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/register", {
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      navigateTo("/");

      //clear the form
      setEmail("");
      setUserName("");
      setPassword("");
    });
  };
  return (
    <div className="flex h-screen">
      <div className="w-4/5 bg-violet-300 flex justify-center">
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="Logo" className="" />
        </div>
      </div>
      <div className="w-2/5 bg-violet-900 flex justify-center items-center relative">
        <div className="max-w-lg w-full p-6 bg-white rounded-xl mx-8 shadow-xl">
          <div className="flex items-center justify-center text-violet-900 mb-6">
            <FiLock className="inline-block mr-4 w-7 h-7" />
            <h2 className="text-3xl font-bold">Admin Portal</h2>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
                placeholder="Enter your email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
                placeholder="Enter your username"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
                placeholder="Enter your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-violet-800 text-white py-2 px-4 rounded-lg w-full hover:bg-violet-900 transition duration-300 
              mt-5 font-bold text-lg mb-3"
              onClick={createUser}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
