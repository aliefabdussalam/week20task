import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { INSERT } from "../redux/action/users";

const Signup = () => {
    const handleChange = (event)=>{
        this.setState({value: event.target.value});
      }

    const [form, setform] = useState({
        email:"",
        password:"",
        phoneNumber:"",
        fullname:"",
        gender:"",
        level:"",
    })
    const changeInput = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        // formdata.append("emailAddress", form.email)
        // formdata.append("password", form.password)
        // formdata.append("numberPhone", form.phoneNumber)
        // formdata.append("displayName", form.fullname)
        // formdata.append("gender", form.gender)
        // formdata.append("level", form.level)
        // console.log(formdata)
         INSERT(form)
        .then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }
    return(
        <div>
        
            <div class="row">
                <div class="img col-lg-6" >
                    <img 
                    src="https://github.com/aliefabdussalam/week5/blob/main/login/img/robert-bye-95vx5QVl9x4-unsplash%202.png?raw=true" 
                    alt="">
                    </img>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <section class="content">
                    <div class="navbar">
                    <div class="logo">
                  <img 
                  src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true" 
                  alt="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true">
                  </img>
                  <h1>Coffee Shop</h1>
                    </div>
                    <div class="action-login">
                    <p> Sign up </p>
                    </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                <div class="input_email">
                      <h5>Email Adress :</h5>
                      <input 
                      class="form-control col-10 mx-auto" 
                      type="text" 
                      onChange={changeInput} 
                      placeholder="Email adress" 
                      aria-label=".form-control-lg example" 
                      name='email' 
                      value={form.email}>
                      </input>
                </div>
                <div class="password">
                    <h5>Password :</h5>
                    <input 
                    class="form-control col-10 mx-auto" 
                    type="password" 
                    onChange={changeInput} 
                    placeholder="Enter your password" 
                    aria-label=".form-control-lg example" 
                    name='password'
                    value={form.password} >
                    </input>
                </div>
                <div class="input_email">
                    <h5>Phone Number :</h5>
                    <input 
                    class="form-control col-10 mx-auto" 
                    type="text" 
                    onChange={changeInput} 
                    placeholder="Phone Number" 
                    aria-label=".form-control-lg example" 
                    name='phoneNumber'
                    value={form.phoneNumber}>
                    </input>
                </div>
                <div class="input_email">
                    <h5>Name :</h5>
                    <input 
                    class="form-control col-10 mx-auto" 
                    type="text" 
                    onChange={changeInput} 
                    placeholder="fullname" 
                    aria-label=".form-control-lg example" 
                    name='fullname' 
                    value={form.fullname}>
                    </input>
                </div>
                <p> Gender :</p>
                <select class="form-select form-select-lg mb-3 mt-2" value={form.gender} name='gender' onChange={handleChange, changeInput}>
                    <option selected>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <p>Level :</p>
                <select class="form-select form-select-lg mb-3 mt-2" name='level' value={form.level} onChange={handleChange, changeInput}>
                    <option selected>Select</option>
                    <option value="1">user</option>
                    <option value="0">Admin</option>
                </select>
            </form>
            <div class="d-grid gap-2 col-11 mx-auto">
                <button class="btn btn-secondary" type="button" onClick={handleSubmit}>Sign up</button>
                <button class="btn google btn-secondary" type="button">Sign up with Google</button>
                <p class="dont">Already have an account?</p>
                <Link to='/login'>
                    <button class="btn signbtn btn-
                    secondary col-12" type="button">Login here</button>
                </Link>
              </div>
                    </section>
                </div>
              
        </div>
        <Footer />
        </div>
    )
}

export default Signup