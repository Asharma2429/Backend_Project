import React from "react";
import pro from "../image/IMG-20230531-WA0034.jpg"
import product from "../image/IMG-20230531-WA0043.jpg"
import products from "../image/IMG-20230531-WA0036.jpg"
function AboutProducts()
{
    return(
        <>
        <div className="pro">
            <div className="container">
            <div className="center-box">
          <p className="tagp">AWESOME PRODUCTS</p>
          <br />
          <h1>Featured Products</h1>
          <br />
          <p className="ptag">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi molestias eaque minus officia <br /> quam accusantium optio a? Corrupti praesentium minima cum consequuntur <br /> ratione a, quod obcaecati magnam atque molestias inventore"</p>
                    </div>


                <div className="pro-in">
                    <div className="left-box">
                        <img src={pro} alt="pro" />

                    </div>

                    <div className="right-box">
                        <h2>About This Products</h2>
                        <h1>01.</h1>
                        <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem architecto natus eveniet veniam reprehenderit praesentium. Quidem ratione eaque neque quod labore at! Praesentium fugiat ipsum qui, cum libero reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique obcaecati sapiente perspiciatis quidem nesciunt placeat tempore totam quasi harum provident fugit, natus dolor animi laborum nemo sunt inventore veniam quas!</p>
                        {/* <br /> */}
                        <p className="textp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti blanditiis molestias magnam eveniet repellat asperiores quasi assumenda nisi hic molestiae, quos iste reprehenderit numquam iusto sapiente. Autem, ipsa deleniti?</p>

                        <h3>Price:</h3>
                        <p className="money"><del>$269.00</del>$169.00</p>

                        <div className="btn">
                        <button className="view">VIEW DETAILS</button>
                        <button className="cart">ADD TO CART</button>
                        </div>

                    </div>

                    


                </div>







                <div className="pro-in1">
                   

                    <div className="left">
                        <h2>About This Products</h2>
                        <h1>02.</h1>
                        <p className="ptextp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem architecto natus eveniet veniam reprehenderit praesentium. Quidem ratione eaque neque quod labore at! Praesentium fugiat ipsum qui, cum libero reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique obcaecati sapiente perspiciatis quidem nesciunt placeat tempore totam quasi harum provident fugit, natus dolor animi laborum nemo sunt inventore veniam quas!</p>
                        {/* <br /> */}
                        <p className="textptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti blanditiis molestias magnam eveniet repellat asperiores quasi assumenda nisi hic molestiae, quos iste reprehenderit numquam iusto sapiente. Autem, ipsa deleniti?</p>

                        <h3>Price:</h3>
                        <p className="money"><del>$269.00</del>$169.00</p>

                        <div className="button">
                        <button className="views">VIEW DETAILS</button>
                        <button className="carts">ADD TO CART</button>
                        </div>

                    </div>


                     <div className="right">
                        <img src={product} alt="product" />

                    </div>

                    


                </div>

                <div className="pro-in">
                    <div className="left-box">
                        <img src={products} alt="pro" />

                    </div>

                    <div className="right-box">
                        <h2>About This Products</h2>
                        <h1>03.</h1>
                        <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem architecto natus eveniet veniam reprehenderit praesentium. Quidem ratione eaque neque quod labore at! Praesentium fugiat ipsum qui, cum libero reprehenderit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique obcaecati sapiente perspiciatis quidem nesciunt placeat tempore totam quasi harum provident fugit, natus dolor animi laborum nemo sunt inventore veniam quas!</p>
                        {/* <br /> */}
                        <p className="textp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti blanditiis molestias magnam eveniet repellat asperiores quasi assumenda nisi hic molestiae, quos iste reprehenderit numquam iusto sapiente. Autem, ipsa deleniti?</p>

                        <h3>Price:</h3>
                        <p className="money"><del>$269.00</del>$169.00</p>

                        <div className="btn">
                        <button className="view">VIEW DETAILS</button>
                        <button className="cart">ADD TO CART</button>
                        </div>

                    </div>

                    


                </div>


            </div>

        </div>
        
        </>
    )
}
export{AboutProducts}