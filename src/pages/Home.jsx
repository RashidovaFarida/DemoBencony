import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import book from '../data/book';
import { useCart } from 'react-use-cart' ;


const Home =()=> {
  

    return (
      <>
      <div id="carouselExampleControls"  className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active slOne pt-5">

        <div className=' slOnePart  ' >
          <div className='d-flex justify-content-end flex-column pt-5 align-items-center'>
          <h1 className=''>Featured Books of the <span> September</span></h1>
          <button className='btn btn-warning p-2 mt-5'>See more</button>
          </div>
        </div>
        </div>
        <div className="carousel-item slOne  slOnePart pt-5">
        <div className=' slOnePart ' >
          <div className='d-flex justify-content-end flex-column pt-5 align-items-center'>
          <h1 className=''>Best seller <span> 2022</span></h1>
          <button className='btn btn-warning p-2 mt-5'>See more</button>
          </div>
        </div>
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-img" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-img" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className='homeSec '>
      <div className='homeSecOne d-flex justify-content-between  ps-5 pe-5 align-items-center '>
        <h2> Featured Categories </h2>
       <h6> <Link className="styleLink" to="/categories">All Categories <i className="fa-solid fa-chevron-right"></i><i className="fa-solid fa-chevron-right"></i> </Link></h6>
      </div>
      <div className='homeSecTwo'>
        <div className="container">
          <div className="row">
          {book[1].map((fd, i) => (
          <CardOne
          icon={fd.icon}
          title={fd.title}
          card={fd.card}
          cardtitle={fd.cardTitle}
            
            />
        ))}
          </div>
        </div>
      </div>
    </div>
    <div className='homeSec2 '>
      <div className='homeSec2One d-flex justify-content-between  ps-5 pe-5 align-items-center '>
        <h2> Bestselling Books </h2>
       <h6> <Link className="styleLink" to="/categories">View All <i className="fa-solid fa-chevron-right"></i><i className="fa-solid fa-chevron-right"></i> </Link></h6>
      </div>
      <div className='homeSec2Two '>
        <div className="container">
          <div className="row">
           
            {book[0].map((fd) => (
          <BookCard
          img={fd.img}
          text={fd.text}
          name={fd.name}
          author={fd.author}
          price={fd.price} 
          books= {fd}
            />
        ))}
             
            
         
          </div>
        </div>
      </div>
    </div>
    <div className="Sectwo d-flex justfy-content-center flex-column align-items-center  pt-5 ">
      <div className='Sectwo1  pt-5'>
        <h1>Featured Books</h1>
      </div>
      <div className='Sectwo2 pt-5 '>
     
      <Link to="#" className='p-5 styleLink' aria-current="page"  >Featured</Link>
      <Link to="#"   className='p-5 styleLink '  >On Sale</Link>
      <Link to="#"   className='p-5 styleLink ' >Most Viewed</Link>
    
      </div>
     
      <div className='pt-5'>
    <div className='container '>
      <div className="row ">
      {book[2].map((fd) => (
      <BookCard
      img={fd.img}
      text={fd.text}
      name={fd.name}
      author={fd.author}
      price={fd.price} 
      books= {fd}
        />
    ))}
      </div>
    </div>

  </div>
    </div>
    </>
    )
  }
export default Home



const CardOne=(props)=>{
  return(
    <div className="col-md-3  ">
            <div className={props.card} >
            <div className="card-body ps-5  ">
              <h5 className={props.cardtitle}>{props.icon}</h5>
              <h6 className="card-subtitle mb-2 text-muted mt-2">
               <Link to="#" className='styleLink size2 ' > {props.title}</Link>
                </h6>
                <p className="card-text">Shop now</p>
              
            </div>
              </div>
            </div>
  )
}

const BookCard =(props)=>{
  const {addItem}= useCart();
  return(
    <div className="col-md-3  mb-">
    <div className="card">
  <img src={props.img} className="card-img-top imgWidth ms-3 pe-2 pt-3" alt="..." />
  <div className="card-body actionDiv">
    <p className=" red card-text">{props.text}</p>
    <h5 className='card-title'>{props.name}</h5>
    <p>{props.author}</p>
    <h2>{props.price}</h2>
  <div className='addSec d-none justify-content-between align-items-center ' id='addSec'>
    <button className='btn' onClick={()=>addItem(props.books)}> Add to Cart</button>
    <p className='likeSize  pe-2 pt-'><i class="fa-regular fa-heart"></i></p>
        </div>
    </div>
  </div>
  </div>
  )
}

