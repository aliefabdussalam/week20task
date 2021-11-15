import NavbarItem from "../components/navbar";
import Footer from "../components/footer";
import "../css/details.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ACTION_GET_DETAIL_PRODUCT, deletePrd } from "../redux/action/product";


const Details = () => {
  const dispatch = useDispatch()
  const history = useHistory()
    const params =  useParams()
    const id = params.id
    const product = useSelector((store) => store.product)
    const [details, setDetails] = useState([]);
    const handleEdit = (id) => {
      history.push(`/edit/${id}`);
    };
    useEffect(() => {
      const productDtl = product.all

      // eslint-disable-next-line array-callback-return
      const fill = productDtl.filter((e) =>
        // eslint-disable-next-line eqeqeq
        e.id == id ?  e : undefined
      );
      setDetails(fill[0])
    }, []);
  
    const deleteProduct = (id) => {
      deletePrd(id).then((response) => {
        alert("succes")
        history.push('/product')
    }).catch((err) => {
        alert('hanya admin')
        console.log(err)
    }) 
    }
    const loginStatus = localStorage.getItem('isLogin')
    console.log(loginStatus)
  return (
    <div>
      <div className="border-bottom navbarDetails">
      <NavbarItem  isLogin= {loginStatus} />
      </div>
      <section className="container-fluid details">
       
        <div className="row justify-content-lg-between infoDeliv">
          <div className="col-lg-4 ms-lg-5 mt-lg-5 mt-3 left">
            <img src={`http://localhost:8800/upload/${details.image}`} alt="detail"/>           
          </div>
          <div className="col-lg-7 col-12 mt-2 mt-4 right">
            <div className="row infoProd">
              <h1 className="fw-bold col-lg-8 text-center titleProduct">{details.product}</h1>
              <p className="mt-5 col-lg-8 description">{details.description}</p>
              <div className="col-lg-8 mt-lg-5 mt-5 handleAdd">
                <div className="btn-group-vertical">
                  <button type="button"  className="btn add" onClick={() => handleEdit(details.id)}>edit</button>
                  <button type="button" onClick={()=>deleteProduct(details.id)} className="btn ask mt-4">delete</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

     

      <footer className="footDetails">
          <Footer />
      </footer>
    </div>
  );
};

export default Details;