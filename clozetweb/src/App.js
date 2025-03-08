
import './App.css';

import React from "react";
import Login from './components/login/login';

import SignUp from './components/signUp/signUp';

import {  BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Home from './pages/home/home';
// import Dashboard from './pages/dashboard/dashboard';
// import TransectionReport from './pages/transectionrp/transection';
// import StoresReport from './pages/storesreport/storereport';
// import ExpenseReport from './pages/expensereport/expensereport';
// import EmployeeRole from './pages/employeerole/employeerole';
// import AddNewEmployee from './pages/addnewemployee/addnewemployee';
// import EmployeeList from './pages/employeelist/employeelist';
// import StoreConfig from './pages/storeconfig/storeconfig';
// import MyShop from './pages/myshop/myshop';
// import MyWallet from './pages/mywallet/mywallet';
// import BankInfo from './pages/bankinfo/bankinfo';
// import Withdraw from './pages/withdraw_req/withdraw';
// import CollectCash from './pages/collectedcash/cashcollect';
// import DeliveryEarn from './pages/deliveryearn/deliveryearn';
// import Coupons from './pages/coupons/coupons';
// import Banners from './pages/banners/banners';
// import AllOrder from './pages/allorders/allorder';
// import Newsale from './pages/newsale/newsale';








function App() {
 
  
  return (
    <>
    
   <BrowserRouter>
  
   
  <Home/>
    
   
      
       <ToastContainer/>
      
       </BrowserRouter>
     
    </>
  );
}

export default App;
