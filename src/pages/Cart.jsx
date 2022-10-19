import React, { Component } from 'react';
import { useCart } from 'react-use-cart';
 const Cart=()=> {
  const{
    cartTotal, 
    emptyCart,
    isEmpty,
    updateItemQuantity,
    removeItem,
    items
  }=useCart();
  if(isEmpty) return <div className="container d-flex justify-content-center  align-items-center">
  <img src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif  " width="500"alt="" />
  </div>

    return (
      <div className="container">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity </th>
      <th scope="col">Del</th>
   


    </tr>
  </thead>
  <tbody>
   {items.map((fdItem,i)=>{
    return(
      
      <tr key={fdItem.id}>
      <th scope="row">{i+1}</th>
      <td><img src={fdItem.img }  width="60" alt="" /></td>
      <td>{`${fdItem.name }: ${fdItem.author }`}</td>
      <td>{fdItem.price*fdItem.quantity}$</td>
      <td> 
        <button className='btn btn-danger btn-xs' onClick={()=>updateItemQuantity(fdItem.id,fdItem.quantity - 1)}>-</button>
        <span className='  mx-2'> {fdItem.quantity }</span>
        <button className='btn btn-success btn-xs' onClick={()=>updateItemQuantity(fdItem.id,fdItem.quantity + 1)}>+</button>
      </td>
      <td>
        <button onClick={()=>removeItem(fdItem.id )} className='btn btn-danger btn-xs'>X</button>
      </td>
    </tr>
    )
   })}
   
  </tbody>
</table>
<div className='container'>
  <div className='d-flex justify-content-between '>
<button className='btn btn-warning btn-xs ' onClick={()=> {emptyCart()}}> Clear</button>
<button  className='btn btn-success  btn-xs ' > Pay </button>
     </div>
  </div>
<p className='pt-5 ' > Total price: {cartTotal} </p>
</div>
    )
  }


export default Cart