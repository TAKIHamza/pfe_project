import { useState } from "react";
const Formclient =()=>{
    
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [ville, setVille] = useState("");
    const [region, setRegion] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [c_password, setC_password] = useState("");
    const [messageErreur, setMessageErreur] = useState("");
    function validerSaisies() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
        if (!prenom || !nom || !ville || !region  || !password || !c_password ) {
          setMessageErreur("Veuillez remplir tous les champs");
          return false;
        }  else if (!email.match(emailRegex)) {
          setMessageErreur("Veuillez entrer une adresse e-mail valide");
          return false;
        } else if (!password.match(passwordRegex)) {
          setMessageErreur("Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial");
          return false;
        } else if (password!=c_password) {
            setMessageErreur("La confirmation du mot de passe ne correspond pas au mot de passe.");
            return false;
          }else {
          setMessageErreur("");
          return true;
        }
      }
      function sendData () {
       if(validerSaisies()){
       }
       }
    return(
     
    <div className="h-auto">
    <div className=" h-screen bg-white/90 rounded-lg lg:w-3/6 mx-auto pt-4  ">
       
        
            <div class="w-full  py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                    {messageErreur==""?<p>Enter your information to register</p>:<p className="text-red-600">{messageErreur}</p>}
                </div>
                <div>
                    
        <div  className="flex flex-row justify-between gap-8 p-4 lg:p-5 ">

                <div class=" w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={nom} onChange={(e)=>setNom(e.target.value)} type="text" placeholder="Nom" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>
                
                <div class=" w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={prenom} onChange={(e)=>setPrenom(e.target.value)} type="text" placeholder="Prénom" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>
            </div>

        <div  className="flex flex-row justify-between gap-8 p-4 lg:p-5">

                <div class="w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={ville} onChange={(e)=>setVille(e.target.value)} type="text" placeholder="Ville" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>
                
                <div class="w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={region} onChange={(e)=>setRegion(e.target.value)} type="text" placeholder="Region" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>
            </div>
    

         <div  className="flex flex-row justify-between gap-8 p-4 lg:p-5">

                <div class="w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Email" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>
            </div>


        <div  className="flex flex-row justify-between gap-8 p-4 lg:p-5">

                <div class="w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>

                <div class="w-52 relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input value={c_password} onChange={(e)=>setC_password(e.target.value)} type="password" placeholder="Confimer le mot de passe " class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                </div>
            </div>
       
            <div class="flex -mx-3">
                        <div class="w-full px-3 mt-12 lg:mt-20 ">
                            <button  onClick={sendData}
                            class="text-sm lg:text-base w-40 block lg:w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 = text-white rounded-full px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


        
        
    

    );
}
export default Formclient