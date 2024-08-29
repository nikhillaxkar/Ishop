import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainContext = createContext(); // Export MainContext

const Main = (props) => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const categoryBaseUrl = process.env.REACT_APP_API_CATEGORY_URL;
  const colorBaseUrl = process.env.REACT_APP_API_COLOR_URL;
   console.log("main:",colorBaseUrl);
   console.log(process.env)

  const [loaderToggle,setLoaderToggle]=useState(false);
  const notify = (msg,flag) => toast(msg,{type:flag});
  const fetchCategory=async ()=>{
    const response=await fetch (apiBaseUrl + categoryBaseUrl);
    const data=await response.json();
    return data;
  }

  const fetchCategoryById=async (id)=>{
    const response=await fetch (apiBaseUrl + categoryBaseUrl + "/"+id);
    
    const data=await response.json();
    return data;
  }
  return (
    <MainContext.Provider value={{setLoaderToggle, apiBaseUrl, categoryBaseUrl,colorBaseUrl ,notify,fetchCategory,fetchCategoryById}}>
        <ToastContainer />
        <div className='loader' style={{
          display:loaderToggle ? 'flex' : 'none'
        }}>
          <h1>Loading.....</h1>
        </div>
      {props.children}
    </MainContext.Provider>
  );
};

export default Main;
