import React from 'react';
import Nav from "./Nav.js"
import Theme from "./Theme.js"




 const Layout = ({ children }) => (
  <>
    
    <Theme/>
    <Nav/>
    
    <div>
      <main>
        
        {children}
      </main>
    </div>
    
   
  </>
); 


export default Layout;