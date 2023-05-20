import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center text-center mt-4">
        <div>
        <h1 className="text-3xl">Oops! Something went wrong.</h1>

<Link to="/">
  <button className="btn btn-primary mt-4">Back to Home</button>
</Link>
        </div>
      </div>
      <div>
        <img
          className="mx-auto object-cover w-full "
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
          alt=""
        />
      </div>

      
    </div>
  );
};

export default ErrorPage;
