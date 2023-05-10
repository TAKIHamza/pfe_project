import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const Login=()=>{
  const [showModal, setShowModal] = useState(false); //pour le module
  const [email,setEmail] = useState(""); 
  const [password,setPassword] = useState("");

    return(
        
        
        <div className=" bg-white/90 lg:bg-[url(https://images.pexels.com/photos/7130464/pexels-photo-7130464.jpeg)]  bg-cover    bg-center  bg-no-repeat w-full h-screen">
      
         <div className="relative pt-10"> 
         <form action="" class=" rounded-lg py-14 px-5 w-screen bg-white/90 lg:bg-white/90  space-y-10 lg:w-2/6  mx-auto lg:backdrop-blur  dark:text-white">
        
         <h1 className="text-3xl font-semibold text-center text-green-400 pb-14">
                   Sign in
                </h1>

         <div>
           <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
             <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your email or user name" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
           </div>
         </div>
 
         <div >
           <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
             <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
           </div>
          
         </div>
 
         <div class="flex flex-col items-center">
         
         <button type="reset" class=" w-max p-3">
             <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password ?</span>
           </button>

         
           <button
             class="w-80 rounded-full my-6 bg-green-500 lg:w-96 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-green-600 focus:bg-sky-600 active:bg-sky-800"
             onClick={() => setShowModal(true)} type="button"
            >
             <span class="text-base font-semibold text-white dark:text-gray-900">Login</span>
           </button>
          
           <button href="#" type="reset" class="-ml-3 w-max p-3">
             <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create new account</span>
           </button>
         </div>
       </form>
       </div>

 {/* le module       */}

 {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {/* Hi the email is {email} and the password is {password} */}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                
                  <Link to={"/backoffice"} > 
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Ok
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) };

  </div>




    );
}
export default Login