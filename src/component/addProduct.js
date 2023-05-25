

import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddPoduct(){

    const navigate = useNavigate();

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [recapitulatif,setRecapitulatif] = useState('')
    const [catigory,setCatigory] = useState('')
    const [price,setPrice] = useState(0)
    const [image, setImage] = useState('')
    

    const changeHandler = (e)=>{
        setImage(e.target.files[0]);
       
  
    }

    const createProduct = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)
        formData.append('recap', recapitulatif)
        formData.append('price', price)
        formData.append('catigory', catigory)
        formData.append('quantity', 10)
        formData.append('cartQuantity', 0)
        formData.append('agreId', 1)

        console.log(formData)
        await axios.post('http://127.0.0.1:8000/api/products', formData)
        .then(({data})=>{
            console.log(data.message)
            navigate('/')
        }).catch(({response})=>{
            if (response.status == 422) {
                console.log(response.data.errors)
            } else {
                console.log(response.data.message)
            }
        })
    }

    return(
        <div className="container w- justify-center  ">
           
              

    <form onSubmit={createProduct} className="p-10 ">

                                    
    <div class=" md:w-4/6 flex flex-col">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Title :</label>
          <div class="mt-2">
            <input type="text" value={title}
                    onChange={(e)=>{setTitle(e.target.value)}} 
                    name="title"   class="block w-full rounded-md border-0 p-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          </div>
        </div>

    <div class="col-span-full py-10">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo </label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
        
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  {/* <span>Upload a file</span> */}
                  <input id="file-upload" onChange={changeHandler} name="file-upload" type="file" class=""/>
                </label>

              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
       </div>

       <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Recapitulatif</label>
          <div class="mt-2">
            <textarea  name="récapitulatif" rows="3"  value={recapitulatif}
                       onChange={(e) => { setRecapitulatif(e.target.value) }} 
                       class="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

    <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div class="mt-2">
            <textarea  name="description" rows="3"  value={description}
                       onChange={(e) => { setDescription(e.target.value) }} 
                       class="block w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

        <div class=" w-96 flex flex-col">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">price :</label>
          <div class="mt-2">
            <input type="text" value={price}
                    onChange={(e)=>{setPrice(e.target.value)}} 
                    name="title"   class="block w-full rounded-md border-0 p-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <label for="countries" class="block my-4 text-sm font-medium text-gray-900 dark:text-white">Select a catigory</label>
         <select value={catigory}
         onChange={(e)=>{setCatigory(e.target.value)}}  
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>catigorys</option>
              <option value="rf">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
</select>
   

                                    <div className="ml-60  my-10 justify-end">
                                        <button type="submit" className="bg-blue-500 w-20">  Save</button>
                                    </div>

                                </form>




           

        </div>
    )




}