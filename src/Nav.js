import { Link } from 'react-router-dom';
import React from 'react';


const Nav = () =>{
  return (
    <div>
    <nav>
      <h1>LiveInk</h1>
      <Link to = '/'>Home</Link>
      <Link to = {`/frame`}>Test your Tattoo</Link>
    </nav>
    </div>
  );
};

export default Nav;
