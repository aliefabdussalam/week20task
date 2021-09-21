import { useState, useEffect, createContext } from "react";
import NavbarItem from "../components/navbar";
import CardPrd from '../components/CardPrd'
import Footer from "../components/footer";
import "../css/product.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ACTION_GET_ALL_PRODUCT } from "../redux/action/product";
import { Button, Modal } from "bootstrap";
require('dotenv').config();

export const DataContext = createContext()

const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const [promo, setPromo] = useState([
    {
      id: "pc1",
      image:
      "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2046.png?raw=true",
        name: "HAPPY MOTHER’S DAY!",
      description: "Get one of our favorite menu for free!",
    },
    {
      id: "pc2",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2043.png?raw=true",
      name: "Get a cup of coffee for free on sunday morning",
      description: "Only at 7 to 9 AM",
    },
    {
      id: "pc3",
      image:
      "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2046.png?raw=true",
      name: "HAPPY MOTHER’S DAY!",
      description: "Get one of our favorite menu for free!",
    },
    {
      id: "pc4",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2045.png?raw=true",
      name: "HAPPY HALLOWEEN!",
      description:
        "Do you like chicken wings? Get 1 free only if you buy pinky promise",
    },
  ]);

 
  const dispatch = useDispatch()
    const product = useSelector((state) => state.product)

  

  useEffect(()=>{
   dispatch(ACTION_GET_ALL_PRODUCT(product))
   console.log(product)
  }, [])

    
  return (
    <div>
      <div className="navbarProducts border-bottom">
        <NavbarItem />
      </div>
      <section className="container-fluid promo">
        <div className="row">
          <div className="col-lg-4 border-end cardPromo">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 pt-4 text-center d-none d-lg-block d-xl-none">
                <h4>Promo Today</h4>
                <small>
                  Coupons will be updated every weeks. Check them out !
                </small>
              </div>
              <div className="row d-md-flex flex-md-column d-flex flex-column justify-content-lg-center align-items-lg-center col-lg-10 pt-5 testiCard">                
                {promo.map((e, i) => (
                  <div key={i} id={e.id} className="card mb-3 mx-md-2 mx-2">
                    <div className="row g-0">
                      <div className="col-md-4 col-4">
                        <img
                          src={e.image}
                          style={{ margin: "5px"}}
                          alt="pict"
                        />
                      </div>
                      <div className="col-md-8 col-8">
                        <div className="card-body ps-0">
                          <p className="card-text fw-bold fs-6">
                            {e.name}
                            <br />
                            <small className="text fw-normal">
                              {e.description}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row justify-content-center align-items-center ms-lg-0 ms-md-0 ms-2">
                  <button className="btn rounded-pill fw-bold fs-6 mt-5 p-3 apply">
                    Apply Coupon
                  </button>
                </div>

                <div className="row justify-content-lg-center align-content-lg-center ms-lg-5 mt-lg-5 ps-md-5 align-items-md-center pb-md-5 mt-4 terms">
                  <p className="fw-bold ps-lg-1 titleTerms">Terms and Condition</p>
                  <ol className="row d-flex align-items-lg-center ms-lg-5 ms-md-5 ms-3">
                    <li>You can only apply 1 coupon per day </li>
                    <li>It only for dine in </li>
                    <li>Buy 1 get 1 only for new user</li>
                    <li>Should make member card to apply coupon</li>
                  </ol>
              </div>
          </div>

          <div className="col-lg-7 col-md-12 product">
            

            <div className="container-fluid mt-lg-5 mt-md-5 ms-lg-5 ms-md-0 menuProduct">
              
              <div className="row itemProduct">
              <DataContext.Provider >
                <CardPrd />
              </DataContext.Provider>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footProducts">
          <Footer />
      </footer>
      
    </div>
  );
};

export default Products;