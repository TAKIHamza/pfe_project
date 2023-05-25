import {React,useState,useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link  } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1)
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/
    ${id}`)
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
    
<>
<div className=" mx-auto p-4">
     
      <button
        onClick={handleGoBack}
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
      
<section className=" text-gray-700 body-font overflow-hidden bg-white">
  <div className="container justify-center  mx-auto">
    <div className="lg:w-4/5 justify-center  mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-2/6 h-2/4 lg:mr-10 w-full object-cover object-center rounded border border-gray-200" src={`http://127.0.0.1:8000/storage/product/image/${product.image }`} />
      <div className="px-5 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500  tracking-widest">PODUCT NAME</h2>
        <h1 className="text-gray-900 text-lg md:text-3xl title-font font-medium mb-1">{product.title}</h1>
        
        <p className="leading-relaxed my-5">{product.recap}</p>
        
        <div className="flex my-8">
          <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
          
          
        </div>
        
        <h2 className="text-sm mb-3 title-font text-gray-500  tracking-widest">FARMER</h2>
   <div className="flex  space-y-6 space-x-9">
   <Link to="/">
		<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
		</Link>
    <div className="flex flex-col">
			<h4 className="text-lg font-semibold ">Leroy Jenkins</h4>
			
		</div>
	</div>

      </div>
    </div>
  </div>



 
 

  <div className='container mx-auto '>
  <ul class="flex flex-wrap lg:ml-14  text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
    <li class=" inline-block p-4 text-gray-800 bg-amber-100 rounded-t-lg active">
        
            Description
        
    </li>
    </ul>
    <p className='w-3/4 ml-16 py-10'>
      {product.description}
    </p>
    </div>
</section>
</>

  );
}

export default ProductDetailPage;
