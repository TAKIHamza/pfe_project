import Footer from "../component/footer";
import NavBarr from "../component/Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Home=()=>{
  const [products, setProducts] = useState(null);
  const [cartProduct, setCartProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalpice] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  
  const addProductToCart = (productToAdd) => {
    // Check if the product already exists in the cart
    const productIndex = cartProduct.findIndex(product => product.id === productToAdd.id);
    
    // If the product not exists in the cart, update its quantity
    if (productIndex == -1) {
      setCartProduct([...cartProduct, productToAdd]);
    }
  }
  const RemoveProductfromCart = (ProductToRemove) => {
    setTotalpice(totalPrice-ProductToRemove.price*ProductToRemove.cartQuantity)
    const newProducts = cartProduct.filter(item => item.id !== ProductToRemove.id);
    setCartProduct(newProducts );
  };
  
  
  useEffect(() => {
    
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if(isFocused && searchTerm!=''){
    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);}
    else setSearchResults([]);
  }, [products, searchTerm,isFocused]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  //-------------------------- for commands--------------------------------------

  const [commands, setCommands] = useState([]);

  // Function to handle adding a product to the command array
  const addProductToCommand = () => {
    setCommands([]);
    cartProduct.map((product) => {
      if(product.quantity>0){
      const newCommand = {
        id_produit: product.id,
        quantite: product.cartQuantity,
        id_Agre : product.agreId,
        id_client : 1
  
      };
      setCommands((prevCommands) => [...prevCommands, newCommand]);}
    });
  };
  const submitCommands = async () => {
    try {
      const token =localStorage.getItem('token'); // Replace with your own function to retrieve the token from the store
  
      const senderInfo = {
        address: address, 
        phoneNumber: phoneNumber 
      };
      addProductToCommand();
      const response = await axios.post('http://127.0.0.1:8000/api/commands', { commands, senderInfo } 
      //{
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${token}`
        // }
      // }
      );
  
      if (response.status === 200) {
        // Command array successfully submitted
        console.log('Commands submitted successfully');
        setCheckout(false)
      } else {
        // Handle error case
        console.error('Failed to submit commands');
      }
    } catch (error) {
      // Handle any exceptions that occur during the submission
      console.error('Error occurred while submitting commands:', error);
    }
  };


/* -------------------to show loading ------------------------------ */


  if (!products) {
    return <div className="flex items-center justify-center h-screen">
    <div className="w-20 h-20 border-l-2 border-[#1a5cff] rounded-full animate-spin" />
  </div>
  }



//------------------------- to show checkout page --------------------------
  if(checkout) return  <>


  
  <div className=" mx-auto p-4">
     
     <button
       onClick={()=>setCheckout(false)}
       className=" text-black px-2 py-2 rounded flex flex-row"
     >
               <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="w-6 h-6 "
       >
         <path d="M15 18l-6-6 6-6" />
       </svg>
       Go Back
     </button>
   </div>
  <div className="max-w-6xl mx-auto p-4  ">
  <div className=" flex flex-col lg:my-2 w-full lg:flex-row lg:gap-20">
  <div className="w-full lg:w-2/5 mb-3 lg:mb-0">
    <label className=" mb-2 " htmlFor="address">
      Address:
    </label>
    <input
      type="text"
      id="address"
      value={address}
      onChange={handleAddressChange}
      className="border rounded px-2 py-1 w-full "
    />
  </div>
  <div >
    <label className=" mb-2" htmlFor="phoneNumber">
      Phone Number:
    </label>
    <input
      type="text"
      id="phoneNumber"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      className="border rounded px-2 py-1 w-full"
    />
  </div>
  <div className="mt-5">
  <p className="font-bold text-lg text-green-300"> Total Price  <span className="font-bold text-base text-black"> : {totalPrice} DH</span></p>
</div>
  </div>
  
  <div className="overflow-x-auto mt-4">
    <table className="w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        
        {  cartProduct.map((product) => (
          <tr key={product.id}>
            <td className="border px-4 py-2 flex flex-row">
              <img src={`http://127.0.0.1:8000/storage/product/image/${product.image }`} alt="Product" className="h-10 w-10" />
                <span className="ml-4 text-base">{product.title}</span>
            </td>
            <td className="border px-4 py-2">{product.cartQuantity}</td>
            <td className="border px-4 py-2">{product.price} DH</td>
            <td className="border px-4 py-2 text-center "
            > <button  onClick={()=>RemoveProductfromCart(product)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-8 mr-2 text-red-500">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                      </svg>
                                      
        </button></td>
          </tr>
          
        ))}
      </tbody>
    </table>
    
  </div>
  <button
    onClick={submitCommands}
    className="absolute right-28 lg:right-32 bottom-10 z-50 mt-4 bg-green-500 text-white px-4 py-2 rounded"
  >
    Validate Command
  </button>
</div>
</>

// ----------------------------------------------------------------------------------

  return (
    < div className=" bg-gray-000" >
    <NavBarr/>

    {/* ------------------------search------------------- --------------- */}

    <div className=" flex items-center justify-center w-full bg-[url(https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]  bg-cover    bg-center  bg-no-repeat  h-screen  ">
    <div class="w-full max-w-screen-xl justify-center mx-auto px-6">
        <div class="flex justify-center pt-60 ">
            <div class="w-full max-w-xl " onFocus={handleFocus}
        onBlur={handleBlur} >
                
                   
      <input
        type="text"
        placeholder="Search..."

        className={`p-2 border  border-gray-300 rounded-full w-full h-11 ${
          isFocused ? 'shadow-red-300 border border-red-400 ' : ''
        }`}
        value={searchTerm}
        onChange={handleInputChange}
        
      />

      <ul className="mt-4 h-80 overflow-y-auto overflow-hidden bottom-0 lg:mx-3">
        {searchResults.map(item => (
         
         <div className=" w-full  flex flex-row rounded-md border border-gray-200 bg-white">
         
         <div className=" h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={`http://127.0.0.1:8000/storage/product/image/${item.image }`}
                                    alt="image of product"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
         <div className=" my-auto ml-5 ">

         <p className=" text-base font-bold ">{item.title}</p>
        
         <p className="text-base mt-4 ">{item.price} DH</p>

         </div>
         </div>
    
        ))}
      </ul>
    
            </div>
        </div>
    </div>
</div>

  <dive >

 {/* -------------------open cart button ------------------------------------------ */}

 <button onClick={()=>setOpen(true)} 
 className=" top-1/2 right-2 fixed bg-amber-400 backdrop-blur h-16 w-12 rounded-full">
  {cartProduct.length}
  <svg
  
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 ml-2 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        color="#fd3412"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>


</button>

 {/* ------------------- cart (à modifier )---------------------------------------------------- */}

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className=" sticky-0 h-full z-40 fixed" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartProduct.map((product) => (
                          
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={`http://127.0.0.1:8000/storage/product/image/${product.image }`}
                                    alt="image of product"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.title}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex justify-between bg-gray-300 h-9 w-20 rounded-lg">
                                      <button className="text-4xl pl-2 " onClick={()=>{product.cartQuantity >0 && setTotalpice( totalPrice-product.price ) ; product.cartQuantity >0 &&product.cartQuantity--;}}>
                                        -
                                      </button>
                                      <p className=" text-black">{product.cartQuantity}</p>
                                      <button className="text-2xl pr-1 " onClick={()=>{setTotalpice(totalPrice+product.price); product.cartQuantity++; }}>
                                        +
                                      </button>
                                     </div>

                                    <div className="flex">
                                      <button
                                       onClick={()=>RemoveProductfromCart(product)}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <button
                          onClick={()=>{totalPrice!=0 && setCheckout(true)}}
                          className="flex items-center justify-center w-11/12 mx-auto rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </dive>
    

 {/* ------------------- fetch data as cards --------------------------------------------- */}


    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {products.map(product => (
          <div className="max-w-xs mx-auto w-72 bg-white rounded-lg overflow-hidden shadow-lg  hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <div style={{ backgroundImage:  `url(http://127.0.0.1:8000/storage/product/image/${product.image })` }} className='h-52 m-4 bg-contain bg-center bg-no-repeat '>

          <Link to={`products/${product.id}`} className="text-gray-500 flex  justify-end top-0 hover:scale-105">
            <svg width={34} height={34} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#8e8c7f" />
                <path
                           d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z"
                          fill= "#8e8c7f"
                          />
                </svg>
    
            </Link>
          </div> 
          <div className='h-28 pl-2'>
            <p className="text-gray-900 text-base font-bold  uppercase mt-1">{product.title}</p>
            <p className="text-gray-600 text-sm mt-1">{product.price}$</p>
          </div>
          <div className="flex items-center justify-center bottom-0 lg:py-5 bg-white">
            
            <button onClick={()=>addProductToCart(product)} className="hover:scale-105">
                 <svg width={34} height={34} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z"
                          fill="#1F2937"
                      />
                  </svg>
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>

 {/* -------------------------------footer------------------------------ */}
    
       <Footer/>
       </div>
  );
}

    

export default Home