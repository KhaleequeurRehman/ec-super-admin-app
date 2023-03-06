import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import ForgotPassword from "./screens/ForgotPassword";
import CheckEmail  from "./screens/CheckEmail";
import PasswordReset from "./screens/PasswordReset";
import Error from './screens/Error';
import Layout from './screens/Layout';
import Dashboard from './screens/Dashboard';
import DeliveryActivity from './screens/DeliveryActivity';
import TrackOrder from './screens/TrackOrder';
// import OrderActivity from './screens/OrderActivity';
import OrderDetails from './screens/OrderDetails';
import FinancialReport from './screens/FinancialReport';
import Email from './screens/Email';
import { SingleOrder } from './screens/SingleOrder';
import { Subscription } from './screens/Subscription';
// import { SingleOrderHistory } from './screens/SingleOrder/Component/SingleOrderHistory/SingleOrderHistory';
import { EventSubscription } from './screens/EventSubscription';
import { Customer } from './screens/Customer';
import { Caterer } from './screens/Caterer';
import { Driver } from './screens/Driver';
import { SendNotification } from './screens/SendNotification';
import { ContentEditor } from './screens/ContentEditor';
import { ContentEditorGridCards } from './screens/ContentEditor/ContentEditorComp/ContentEditorGridCards/ContentEditorGridCards';
import { UserRole } from './screens/User/UserRole';
import { UserList } from './screens/User/UserList';
import { Settings } from './screens/Settings';
import { Inbox, InboxDataGridDetails } from './screens/Inbox';
import { useEffect } from 'react';
import Products from './screens/Products/Products';
import SubCuisine from './screens/Products/SubCuisine/SubCuisine';
import SubCuisines from './screens/Product/SubCuisine';
import FoodMenu from './screens/Products/FoodMenu/FoodMenu';
import Cusine from './screens/Product/Cuisine';
import FoodMenus from './screens/Product/FoodMenu';
import AddCuisine from './screens/Product/Cuisine/AddCuisine';
import AddFoodMenu from './screens/Product/FoodMenu/AddFoodMenu';
import OrderActivity from 'screens/OrderActivity/OrderActivity';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    if (token === null || token === "") navigate("/login");
  }, []);

  return (
    <Routes>
      {/* <Route index element={<Layout><Dashboard/></Layout>} /> */}
      <Route exact path='/' element={<Layout><Dashboard/></Layout>} />
      <Route exact path='/dashboard' element={<Layout><Dashboard/></Layout>} />
      {/* <Route exact path='/orderRequest' element={<Layout><p>Order Request</p></Layout>} /> */}
      {/* <Route exact path='/trackOrder' element={<Layout><TrackOrder/></Layout>} /> */}
      {/* <Route exact path='/orderRequest' element={<Layout><Dashboard/></Layout>} /> */}
      {/* <Route exact path='/orderDetails' element={<Layout><OrderDetails/></Layout>} /> */}
      <Route exact path='/order_Activity' element={<Layout><OrderActivity/></Layout>} />
      {/* <Route exact path='/trackOrder' element={<Layout><TrackOrder/></Layout>} /> */}
      <Route exact path='/delivery_Activity' element={<Layout><DeliveryActivity/></Layout>} />
      <Route exact path='/financial_Report' element={<FinancialReport/>} />
      <Route exact path='/email' element={<Email/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
      <Route path="/checkemail" element={<CheckEmail />} />
      <Route path="/passwordReset" element={<PasswordReset />} />
      <Route exact path='/single_order' element={<Layout><SingleOrder/></Layout>} />
      <Route exact path='/subscription' element={<Layout><Subscription/></Layout>} />
      {/* <Route exact path='/singleorderhistory' element={<Layout><SingleOrderHistory/></Layout>} /> */}
      <Route exact path='/customer' element={<Layout><Customer/></Layout>} />
      <Route exact path='/eventsubscription' element={<Layout><EventSubscription/></Layout>} />
      <Route exact path='/caterer' element={<Layout><Caterer/></Layout>} />
      <Route exact path='/driver' element={<Layout><Driver/></Layout>} />
      <Route exact path='/sendnotification' element={<Layout><SendNotification/></Layout>} />
      <Route exact path='/content_Editor' element={<Layout><ContentEditor/></Layout>} />
      <Route exact path='/contentcard' element={<Layout><ContentEditorGridCards/></Layout>} />
      <Route exact path='/userrole' element={<Layout><UserRole/></Layout>} />
      <Route exact path='/userlist' element={<Layout><UserList/></Layout>} />
      <Route exact path='/settings' element={<Layout><Settings/></Layout>} />
      <Route exact path='/inbox' element={<Layout><Inbox/></Layout>} />
      {/* <Route exact path='/helpCenter' element={<Layout><Dashboard/></Layout>} /> */}
      <Route path="/Products" element={<Products/>}/>
      {/* <Route path="/Sub_Cuisine" element={<SubCuisine/>}/> */}
      {/* <Route path="/Food_Menu" element={<FoodMenu/>}/> */}
      <Route path="/food_Menu" element={<FoodMenus/>}/>
      <Route path="/cuisine" element={<Cusine/>}/>
      <Route path="/sub_Cuisine" element={<SubCuisines/>}/>
      <Route path="/addCusine" element={<AddCuisine />}/>
      <Route path="/addFoodMenu" element={<AddFoodMenu />}/>
      <Route path='*' element={<Error/>} />
    </Routes>
    
  );
}

export default App;





// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Login from './screens/Login/Login';
// import Error from './screens/Error';
// import Layout from './screens/Layout';
// import Dashboard from './screens/Dashboard';
// import Delivery from './screens/Delivery';
// import TrackOrder from './screens/TrackOrder';
// import DeliveryDetails from './screens/DeliveryDetails';
// import OrderDetails from './screens/OrderDetails';
// import { SingleOrder } from './screens/SingleOrder';
// import { Subscription } from './screens/Subscription';
// import { SingleOrderHistory } from './screens/SingleOrder/Component/SingleOrderHistory/SingleOrderHistory';
// import { EventSubscription } from './screens/EventSubscription';
// import { Customer } from './screens/Customer';
// import { Caterer } from './screens/Caterer';
// import { Driver } from './screens/Driver';
// import { SendNotification } from './screens/SendNotification';
// import { ContentEditor } from './screens/ContentEditor';
// import { ContentEditorGridCards } from './screens/ContentEditor/ContentEditorComp/ContentEditorGridCards/ContentEditorGridCards';
// import { UserRole } from './screens/User/UserRole';
// import { UserList } from './screens/User/UserList';
// import { Settings } from './screens/Settings';
// import { Inbox, InboxDataGridDetails } from './screens/Inbox';

// function App() {
//   return (
//     <Routes>
//       <Route index element={<Layout><Dashboard/></Layout>} />
//       <Route exact path='/dashboard' element={<Layout><Dashboard/></Layout>} />
//       <Route exact path='/orderDetails' element={<Layout><OrderDetails/></Layout>} />
//       <Route exact path='/deliveryDetails' element={<Layout><DeliveryDetails/></Layout>} />
//       <Route exact path='/trackOrder' element={<Layout><TrackOrder/></Layout>} />
//       <Route exact path='/delivery' element={<Layout><Delivery/></Layout>} />
//       <Route exact path='/login' element={<Login/>} />
//       <Route exact path='/singleorder' element={<Layout><SingleOrder/></Layout>} />
//       <Route exact path='/subscription' element={<Layout><Subscription/></Layout>} />
//       <Route exact path='/singleorderhistory' element={<Layout><SingleOrderHistory/></Layout>} />
//       <Route exact path='/customer' element={<Layout><Customer/></Layout>} />
//       <Route exact path='/eventsubscription' element={<Layout><EventSubscription/></Layout>} />
//       <Route exact path='/caterer' element={<Layout><Caterer/></Layout>} />
//       <Route exact path='/driver' element={<Layout><Driver/></Layout>} />
//       <Route exact path='/sendnotification' element={<Layout><SendNotification/></Layout>} />
//       <Route exact path='/contenteditor' element={<Layout><ContentEditor/></Layout>} />
//       <Route exact path='/contentcard' element={<Layout><ContentEditorGridCards/></Layout>} />
//       <Route exact path='/userrole' element={<Layout><UserRole/></Layout>} />
//       <Route exact path='/userlist' element={<Layout><UserList/></Layout>} />
//       <Route exact path='/settings' element={<Layout><Settings/></Layout>} />
//       <Route exact path='/inbox' element={<Layout><Inbox/></Layout>} />
//       <Route path='*' element={<Error/>} />
//     </Routes>
    
//   );
// }

// export default App;



