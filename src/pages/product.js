import { useState, useEffect, createContext } from "react";
import { useHistory} from "react-router-dom";
import NavbarItem from "../components/navbar";
import CardPrd from '../components/CardPrd'
import Footer from "../components/footer";
import "../css/product.css";
import axios from "axios";


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

  const data = [
    {
      id: "p1",
      name: "Veggie tomato mix",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%202.png?raw=true",
      size: ["R","L", "XL"],
      price: 34000,
      stock: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo eos dolorum tempora quisquam, expedita aliquam inventore labore consectetur incidunt consequuntur deleniti a facilis voluptatibus assumenda reprehenderit iste perspiciatis! Enim perferendis magnam modi labore, ducimus sapiente officia dicta eos sunt!",
      discount: 10,
      category: "foods",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p2",
      name: "Hazelnut Latte",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2022.png?raw=true",
      size: ["R","L", "XL"],
      price: 25000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt? Quidem ex eius cum, commodi inventore ab magnam! Hic veritatis velit, quisquam odit, recusandae perferendis eum, tempora omnis quidem repudiandae maxime reiciendis voluptatibus enim nihil mollitia unde pariatur in voluptatum?",
      stock: 23,
      discount: 0,
      category: "Non Coffee",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p3",
      name: "Summer fried rice",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%202%20(1).png?raw=true",
      size: ["R","L", "XL"],
      price: 32000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt? Quidem ex eius cum, commodi inventore ab magnam! Hic veritatis velit, quisquam odit, recusandae perferendis eum, tempora omnis quidem repudiandae maxime reiciendis voluptatibus enim nihil mollitia unde pariatur in voluptatum?",
      stock: 12,
      discount: 13,
      category: "Foods",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p4",
      name: "Cold Brew",
      image:"https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2022%20(1).png?raw=true",
      size: ["R","L", "XL"],
      price: 30000,
      description: "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.",
      stock: 23,
      discount: 0,
      category: "Coffee",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p1",
      name: "Veggie tomato mix",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%202.png?raw=true",
      size: ["R","L", "XL"],
      price: 34000,
      stock: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo eos dolorum tempora quisquam, expedita aliquam inventore labore consectetur incidunt consequuntur deleniti a facilis voluptatibus assumenda reprehenderit iste perspiciatis! Enim perferendis magnam modi labore, ducimus sapiente officia dicta eos sunt!",
      discount: 10,
      category: "foods",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p2",
      name: "Hazelnut Latte",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2022.png?raw=true",
      size: ["R","L", "XL"],
      price: 25000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt? Quidem ex eius cum, commodi inventore ab magnam! Hic veritatis velit, quisquam odit, recusandae perferendis eum, tempora omnis quidem repudiandae maxime reiciendis voluptatibus enim nihil mollitia unde pariatur in voluptatum?",
      stock: 23,
      discount: 0,
      category: "Non Coffee",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p3",
      name: "Summer fried rice",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%202%20(1).png?raw=true",
      size: ["R","L", "XL"],
      price: 32000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt? Quidem ex eius cum, commodi inventore ab magnam! Hic veritatis velit, quisquam odit, recusandae perferendis eum, tempora omnis quidem repudiandae maxime reiciendis voluptatibus enim nihil mollitia unde pariatur in voluptatum?",
      stock: 12,
      discount: 13,
      category: "Foods",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p4",
      name: "Cold Brew",
      image:"https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2022%20(1).png?raw=true",
      size: ["R","L", "XL"],
      price: 30000,
      description: "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.",
      stock: 23,
      discount: 0,
      category: "Coffee",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p1",
      name: "Veggie tomato mix",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%202.png?raw=true",
      size: ["R","L", "XL"],
      price: 34000,
      stock: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo eos dolorum tempora quisquam, expedita aliquam inventore labore consectetur incidunt consequuntur deleniti a facilis voluptatibus assumenda reprehenderit iste perspiciatis! Enim perferendis magnam modi labore, ducimus sapiente officia dicta eos sunt!",
      discount: 10,
      category: "foods",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p2",
      name: "Hazelnut Latte",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2022.png?raw=true",
      size: ["R","L", "XL"],
      price: 25000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt? Quidem ex eius cum, commodi inventore ab magnam! Hic veritatis velit, quisquam odit, recusandae perferendis eum, tempora omnis quidem repudiandae maxime reiciendis voluptatibus enim nihil mollitia unde pariatur in voluptatum?",
      stock: 23,
      discount: 0,
      category: "Non Coffee",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p3",
      name: "Summer fried rice",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%202%20(1).png?raw=true",
      size: ["R","L", "XL"],
      price: 32000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt? Quidem ex eius cum, commodi inventore ab magnam! Hic veritatis velit, quisquam odit, recusandae perferendis eum, tempora omnis quidem repudiandae maxime reiciendis voluptatibus enim nihil mollitia unde pariatur in voluptatum?",
      stock: 12,
      discount: 13,
      category: "Foods",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },
    {
      id: "p4",
      name: "Cold Brew",
      image:"https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2022%20(1).png?raw=true",
      size: ["R","L", "XL"],
      price: 30000,
      description: "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.",
      stock: 23,
      discount: 0,
      category: "Coffee",
      delivery_days: "Monday to Friday",
      delivery_time: "1 - 3PM",
    },

  ]

  const [products, setProducts] = useState(data);

  const history = useHistory()
 
  useEffect(()=> {
   
      setProducts(data)
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    axios.get('http://localhost:8800/product')
    .then((response)=>{
      console.log(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  

  const handleDetails = (id)=>{
    history.push(`/details/${id}`)
    // eslint-disable-next-line array-callback-return
    products.map((e) => {
      if (e.id === id) {
        const detailsPoducts = JSON.stringify(e)
        localStorage.setItem("details", detailsPoducts )
      }
    })
  }

  
  
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
                  <div key={i} id={e.id} className="card mb-3 mx-md-2 mx-2 rounded">
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
              <DataContext.Provider value={products}>
                <CardPrd handleDetails={handleDetails}/>
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