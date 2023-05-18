import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Login = () => {
  const {signIn} = useContext(AuthContext);
  
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            Swal.fire(
              'Success!',
              'Login successful!',
              'success'
            )
        })
        .catch(error => console.log(error));
}

    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            
           <img src="https://cdn.trendhunterstatic.com/thumbs/rideon-toy-cars.jpeg?auto=webp" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
             <form onSubmit={handleLogin}>
             
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
            
              <div className="form-control mt-6">
            
                <input type="submit" value="Login" className="btn btn-primary"/>
              </div>
             </form>
             <p className='my-4 text-center'>Do not have an account ? <Link className='text-orange-600 font-bold' to="/register">Register now!</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;