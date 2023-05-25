

import React, {useState,useEffect} from "react";
import axios from "axios";


export default function AllPoduct(){

    const [products, setProducts] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
const deleteProduct= async(id)=> {
    axios.delete(`http://127.0.0.1:8000/api/products/
    ${id}`)
      .then(response => {
        setResponseMessage(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, [responseMessage]);

      if (!products) {
        return <div className="flex items-center justify-center h-screen">
        <div className="w-20 h-20 border-l-2 border-[#1a5cff] rounded-full animate-spin" />
      </div>}
    return(
        <section className="container bg-gray-100">
            
            <div class="block relative mx-20 pt-2 ">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
                

                <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen  flex  bg-gray-100 font-sans overflow-hidden">
            <div class="w-full ">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Product</th>
                                <th class="py-3 px-6 text-left">Quantity</th>
                                <th class="py-3 px-6 text-center">Catigory</th>
                                <th class="py-3 px-6 text-center">Price</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                        {products.map(product => ( 
                               <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                       
                                        <span class="font-bold">{product.title}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left font-bold">
                              
                                        
                                        <span>{product.quantity} </span>
                                    
                                </td>
                                <td class="py-3 px-6 text-center font-bold">
                                
                                <span>{product.catigory} </span>
                                    
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full font-bold">{product.price}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <button onClick={()=>deleteProduct(product.id)} class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                            
                                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </section>
    )




}