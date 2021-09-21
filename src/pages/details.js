import NavbarItem from "../components/navbar";
import Footer from "../components/footer";
import "../css/details.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { ACTION_GET_DETAIL_PRODUCT, deletePrd } from "../redux/action/product";


const Details = () => {
  const dispatch = useDispatch()
  const history = useHistory()
    const params =  useParams()
    const id = params.id
    const product = useSelector((store) => store.product)
    const productDtl = product.detail[0]
    useEffect(() => {
        dispatch(ACTION_GET_DETAIL_PRODUCT(id))
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
   
  return (
    <div>
      <div className="border-bottom navbarDetails">
        <NavbarItem />
      </div>
      <section className="container-fluid details">
       
        <div className="row justify-content-lg-between infoDeliv">
          <div className="col-lg-4 ms-lg-5 mt-lg-5 mt-3 left">
            {/* <img src={`http://localhost:8800/upload/${image}`} alt="detail"/>            */}
          </div>
          <div className="col-lg-7 col-12 mt-2 mt-4 right">
            <div className="row infoProd">
              <h1 className="fw-bold col-lg-8 text-center titleProduct">{productDtl.product}</h1>
              <p className="mt-5 col-lg-8 description">{productDtl.description}</p>
              <div className="col-lg-8 mt-lg-5 mt-5 handleAdd">
                <div className="btn-group-vertical">
                  <button type="button"  className="btn add">edit</button>
                  <button type="button" onClick={()=>deleteProduct(productDtl.id)} className="btn ask mt-4">delete</button>
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