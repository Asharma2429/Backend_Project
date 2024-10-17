import React, { useEffect, useState } from "react";
import image from "../image/wired-outline-332-loader-3.gif"
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";


function Api() {




  const {addItem}=useCart()
  let [dataa, setdataa] = useState([]);
  const [update,setupdate]=useState([]);

  useEffect(() => {
    Fill();
  }, []);

const click=()=>
{
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Item added successfully"
  });
}

const wish=()=>
{
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item added to wish list",
    showConfirmButton: false,
    timer: 1500
  });
}



  const Fill = async () => {
    const reserve = await fetch("https://fakestoreapi.com/products");
    const data = await reserve.json();
    setdataa(data);
    setupdate(data);
  
  };
  function filter(e)
  {
    const filterdata=dataa.filter(dataa=>dataa.category==e)
    setupdate(filterdata)
  }

 

  return (
    <>
      <div className="items">
        <div className="container">

          <div className="heading" id="heading">
            <h1>Products</h1>
          </div>

          <div className="buttons" id="buttons">
              <button onClick={()=>setupdate(dataa)}>All</button>
              <button onClick={()=>filter("women's clothing")}>Women's</button>
              <button onClick={()=>filter("men's clothing")}>Men's</button>
              <button onClick={()=>filter("jewelery")}>Jewellery</button>
              <button onClick={()=>filter("electronics")}>Electronics</button>
            </div>
            
          <div className="products">

           

            {dataa.length > 0 ? (
              <>
                {update.map((item) => {
                  return (
                    <>
                      <div className="item-1" id="item-1" >
                        <div className="title">{item.title}</div>

                        <div className="photo">
                          <img src={item.image} alt="" />
                        </div>

                        <div className="discription">{item.description}</div>

                        <div className="price">
                          <h4>
                            Rating : {item.rating.rate}
                            <span>
                            
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
      

                            </span>
                          </h4>
                          <h4> Count : {item.rating.count}</h4>
                          
                          <div className="money">
                          <h4>Price : $ {item.price}</h4>
                       </div>






                          <div className="a">

                          <button className="cart-btn"  onClick={() =>{ addItem(item) ; click() } } >Add To Cart</button>

                         <button className="b" onClick={() =>{ addItem(item) ; click()} } > 
                          <i class="fa-solid fa-cart-shopping "></i> 
                         </button>
                          


                          
                          <button className="wishlist" onClick={wish}>Add to wishlist</button>
                          <button className="c"   onClick={wish}>
                          <i class="fa-solid fa-heart"></i>
                            </button>
                          
                         
                          </div>








                           {/* //not in use */}


                        </div>

                      </div>
                    </>
                  );
                })}
              </>
            ) : 
            <>
            <div className="load">
              <img src={image} alt="image" className="loadimg" />
            </div>

            </>

            }
          </div>
        </div>
      </div>
    </>
  );
}
export {Api};
