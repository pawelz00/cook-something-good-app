import { Link } from "react-router-dom";

const NotFoundPage = () : JSX.Element => {
  return (
    <main className="container error-page">
        <p className="error-page-font">You shouldn't supposed to be here!</p>
        <p className="error-page-font">Go back to home page</p>
        <Link to="/">
          <button className="error-page-button">Click!</button> 
        </Link>
    </main>
  );
}

export default NotFoundPage;