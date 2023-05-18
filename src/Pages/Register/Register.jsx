
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';




const SignUp = () => {

    const {createUser, logOut} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;
        setError('');

        if(password !== confirm){
            setError('Your password did not match')
            return
        }else if(password.length < 6 ){
            setError('Password must be at least 6 characters or longer ')
            return
        }
      
        
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result => {
            const createdUser =result.user;
            console.log(createdUser)
            updateProfile(createdUser, {
                displayName : name, photoURL: photo
              });
            
            
                form.reset();
            Swal.fire(
              'Success!',
              'Your Account has been created! Please Login to continue.',
              'success'
            )
            logOut();
                navigate('/login');
        })
        .catch(error => console.log(error))
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            
           <img src="https://cdn.trendhunterstatic.com/thumbs/rideon-toy-cars.jpeg?auto=webp" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
            
             <form onSubmit={handleSignUp}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="url" name='photo' placeholder="Photo url" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
            
                <input type="submit" value="SignUp" className="btn btn-primary"/>
              </div>
              <p className='text-red-600 text-xl text-center'>{error}</p>
             </form>
             <p className='my-4 text-center'>Already a member ? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;