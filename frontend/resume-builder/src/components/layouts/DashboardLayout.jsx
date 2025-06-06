import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';

const DashboardLayout = ({activeMenu, children}) => {

    const {user, loading} = useContext(UserContext);
    
    if (loading) {
      return <div className="text-center py-10">Loading...</div>; // or a spinner
    }

  return (
    <div>
        <Navbar activeMenu={activeMenu} />

        {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout;