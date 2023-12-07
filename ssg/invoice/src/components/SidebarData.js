import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Cookies from 'js-cookie';

const clientId = process.env.REACT_APP_CLIENTID;
const API_URL = process.env.REACT_APP_API_URL;

const onSuccess = () => {
  // alert("Logout made successfully");
  Cookies.remove('token');
  console.log("Logged Out...");
  window.location.href = "/";
};

const onFailure = () => {
  console.log("Handle failure cases");
  alert("Logout failed");
};

export const SidebarData = [
  {
    title: 'DashBoard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'TAC',
  //   path: '/reports',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Apply Invoice',
    path: '/Apply',
    icon: <FaIcons.FaFileInvoice />,
    cName: 'nav-text'
  },
  {
    title:'Logout',
    path:'/',
    icon:<FaIcons.FaSignOutAlt/>,
    cName:'nav-text logout',
    class:'logout',
    onClick: () => {
      clientId && onSuccess && onFailure(clientId, onSuccess, onFailure);
    }
  }
];
