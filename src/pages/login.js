import Footer from "../components/footer";
import "../css/login.css";

const Login = () => {
    return(
        <div>
        
            <div class="row">
                <div class="img col-lg-6" >
                    <img src="https://github.com/aliefabdussalam/week5/blob/main/login/img/robert-bye-95vx5QVl9x4-unsplash%202.png?raw=true" alt=""></img>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <section class="content">
                    <div class="navbar">
                    <div class="logo">
                  <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true" alt="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true"></img>
                  <h1>Coffee Shop</h1>
                    </div>
                    <div class="action-login">
                    <p> Login </p>
                    </div>
                    </div>
                    <div class="form">
                <div class="input_email">
                      <h1>Email Adress :</h1>
                      <input class="form-control col-10 mx-auto" type="text" placeholder="Email adress" aria-label=".form-control-lg example"></input>
                </div>
                <div class="password">
                    <h1>Password :</h1>
                    <input class="form-control col-10 mx-auto" type="password" placeholder="Enter your password" aria-label=".form-control-lg example"></input>
                </div>
                <div class="forgot_password" >
                    <h1 href="">Forgot password?</h1>  
                </div>
            </div>
            <div class="d-grid gap-2 col-11 mx-auto">
                <button class="btn btn-secondary" type="button">Login</button>
                <button class="btn google btn-secondary" type="button">Login with Google</button>
                <p class="dont">Don’t have an account?</p>
                <button class="btn signbtn btn-secondary" type="button">Sign up here</button>
              </div>
                    </section>
                </div>
              
        </div>
        <Footer />
        </div>
    )
}

export default Login