import React, { useState } from 'react';
import Formclient from '../component/formclient';
import Formlivreur from '../component/formlivreur';
import Formagr from '../component/formagr';

const Singup = () => {
  const [selectedArticle, setSelectedArticle] = useState(1); // État pour garder une trace de l'article sélectionné

  const handleArticleClick = (articleId) => {
    setSelectedArticle(articleId);
  };


  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1621416954177-d2d51031d78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1621416953426-6cf6497af8ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1621416952734-2488f541e28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },

    
  ];

  
  return (
    <div  style={{ backgroundImage: " url(https://images.pexels.com/photos/7130464/pexels-photo-7130464.jpeg)" }} 
    className='h-auto bg-center bg-cover duration-500'>
      <div className="flex justify-center">
        {/* Titre des articles */}
        <h2
          className={`cursor-pointer p-4  hover:border-b-2 hover:border-white duration-100 ${
            selectedArticle === 0 ? 'border-b-2 border-blue-600 ' : ''
          }`}
          onClick={() => handleArticleClick(0)}
        >
          Livreur
        </h2>
        <h2
          className={`cursor-pointer p-4 hover:border-b-2 hover:border-white duration-100 ${
            selectedArticle === 1 ? 'border-b-2 border-blue-600' : ''
          }`}
          onClick={() => handleArticleClick(1)}
        >
          Client
        </h2>
        <h2
          className={`cursor-pointer p-4 hover:border-b-2 hover:border-white duration-100 ${
            selectedArticle === 2 ? 'border-b-2 border-blue-600' : ''
          }`}
          onClick={() => handleArticleClick(2)}
        >
          Agriculeur
        </h2>
      </div>
      {/* Texte affiché en dessous */}
      <div className="mt-4 text-center ">
        {selectedArticle === 0 && <Formlivreur/>}
        {selectedArticle === 1 && <Formclient/>}
        {selectedArticle === 2 && <Formagr/>}
      </div>
    </div>
  );
};

export default Singup;
