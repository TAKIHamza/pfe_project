
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Backoffice() {

    

//     const [products, setProducts] = useState([])
    

//     useEffect(() => {
//         fetchProducts();
//     }, [])

//     const fetchProducts = async () => {
//         await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {setProducts(data)}) 
//     }

//     const deleteProduct = async (id) => {
//         await axios.delete('http://127.0.0.1:8000/api/products/' + id)
//             .then(({ data }) => {
//                 console.log(data.message)
//                 fetchProducts();
//             }).catch(({ response: { data } }) => {
//                 console.log(data.message)
//             })
//     }

   

 

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="conl-12">
//                     <Link className="btn btn-primary mb-2 float-end" to={"/product/create"}>Create</Link>
//                     <div className="col-12">
                       

//                         <table className="table">
//                             <thead>
//                                 <tr> 
//                                     <th scope="col">Title</th>
//                                     <th scope="col">Description</th>
//                                     <th scope="col">Image</th>
//                                     <th scope="col">Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     products.length > 0 && (
//                                         products.map((row,key)=>(
//                                             <tr key={key}> 
//                                                 <td>{row.title}</td>
//                                                 <td>{row.description}</td>
//                                                 <td>
//                                                     <img width="100px" src={`http://127.0.0.1:8000/storage/product/image/${row.image }`} /> 
//                                                 </td>
//                                                 <td>
//                                                     <Link className="btn btn-success mb-2 float-end" to={`/product/edit/${row.id}`}>Edit</Link>
//                                                 </td>
//                                                 <td>
//                                                     <button className="btn btn-danger" onClick={() => deleteProduct(row.id)}>  Delete</button>
//                                                     </td>
//                                             </tr> 
//                                         ))
//                                     )
//                                 }
                               
//                             </tbody>
//                         </table>



//                     </div>
//                 </div>

//             </div>

//         </div>
//     )




// }

import AddPoduct from "../component/addProduct";


import React, { useState } from 'react';
import AllPoduct from "../component/allProducts";

const Backoffice = () => {
    const [sideBar, setSideBar] = useState(true);
    const [indexOfComponentToShow,setIndexOfComponentToShow]=useState(0);
    const toggleSideBar = () => {
      setSideBar(!sideBar);
    };
  
    return (
      <section className="flex  ">
         <button
            className="fixed top-4 left-4 lg:hidden  bg-gray-700 px-4 py-2 rounded text-white focus:outline-none"
            onClick={toggleSideBar}
          >
            {sideBar ? 'Close' : 'Open'} Menu
          </button>
        <nav
          className={`bg-gray-900 text-white fixed w-60 min-h-screen transition-all duration-300 ease-in-out ${
            sideBar ? 'ml-0' : '-ml-60'
          }`}
        >
          {/* Contenu de la barre de navigation */}
          <nav className="flex flex-col justify-center items-center gap-8 py-4">
            <button onClick={()=>setIndexOfComponentToShow(0)}>Add Product</button>
            <button onClick={()=>setIndexOfComponentToShow(1)}>Products</button>
          </nav>
         
        </nav>
        <div className="md:ml-60 transition-all w-5/6 ">
        { indexOfComponentToShow ==0 && <AddPoduct></AddPoduct>}
        { indexOfComponentToShow ==1 && <AllPoduct></AllPoduct>}
        </div>
      </section>
    );
  };
export default Backoffice
