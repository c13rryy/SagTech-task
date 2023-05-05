import React from "react";

import { useSelector } from "react-redux";


const HomePage = () => {



  const { user } = useSelector(state => state.auth);

  
  return (
    <React.Fragment>
        {user && <h1>Home</h1>}


     
        
    </React.Fragment>
  )
};

export default HomePage;