import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="grid grid-cols-1">
            <div>
 <img className="mx-auto object-cover w-full lg:w-1/2" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />

            </div>
            
           

           <Link to= '/'>
           <button >Back to Home</button>
           </Link>
            
        </div>
    );
};

export default ErrorPage;