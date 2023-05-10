import {React,useState,useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';


function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div className="flex items-center justify-center h-screen">
    <div className="w-20 h-20 border-l-2 border-[#1a5cff] rounded-full animate-spin" />
  </div>
      

  }

  return (
    


      
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">PODUCT NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        
        <p className="leading-relaxed my-5">{product.description}</p>
        
        <div className="flex my-8">
          <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
          
        </div>
      </div>
    </div>
  </div>
</section>
    

  );
}

export default ProductDetailPage;
