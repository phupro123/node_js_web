import "./single.scss";

import Sidebar from "../../../Components/admin/sidebar/Sidebar";
import Navbar from "../../../Components/admin/navbar/Navbar";
import Chart from "../../../Components/admin/chart/Chart";
import List from "../../../Components/admin/table/Table";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get1, getAllUsers, getOneUser } from "../../../redux/apiRequest";
import { getFull } from "../../../redux/apiOder";




const Single = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.login?.currentUser)
  const selectedOder = useSelector((state) => state.oder.full?.detail)
  const {orderId} = useParams()
  console.log(orderId)

 const a=selectedOder
 let plus = a?.reduce(function (total, currentValue) {
  return total + currentValue.product_id.price*currentValue.quantity
  }, 0);

  //Load trang
  useEffect(()=>{
     
    if(user?.accessToken){
      getFull(user?.accessToken,dispatch,orderId)
     // getAllUsers(user?.accessToken,dispatch)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 


  return (
    <div>
    {selectedOder? (
      <>
     <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
           
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={selectedOder[0]?.oder_id.customer_id.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{selectedOder[0].oder_id.customer_id?.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{selectedOder[0].oder_id.customer_id?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{selectedOder[0].oder_id.customer_id?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {selectedOder[0].oder_id?.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Receiver:</span>
                  <span className="itemValue">{selectedOder[0].oder_id?.receiver}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={selectedOder?.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                
                <div className="detailItem">
                  <span className="itemKey">Order Id:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id.buy_date}</span>
                </div>
                <h1 className="itemTitle">Total grant: {plus}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
      </div>
      </>
    ) : (    
      <>
  
    </>
    )}
    
    </div>
  );
};

export default Single;