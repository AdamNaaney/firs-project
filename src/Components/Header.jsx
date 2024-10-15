import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-opacity-75 bg-primaryColor ">
      <h1 className="text-3xl font-bold">NoteMaster</h1>
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          {/* <li className="hover:text-gray-200">Features</li> */}
      <NavLink to='/add'><li className="hover:text-gray-200">Add Note</li> </NavLink> 
      
      <NavLink to='/notes'>

          <li className="hover:text-gray-200">Notes</li> </NavLink> 
          
        </ul>
       
       <NavLink to='/search'>
       <button className="bg-white text-teal-700 font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition-colors">
        
          Search
      </button>  
      </NavLink>
      </div>
    </header>
  );
};

export default Header;
