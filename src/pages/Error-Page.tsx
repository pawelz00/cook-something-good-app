import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="container error-page">
        <p className="error-page-font">Something went wrong...</p>
        <p className="error-page-font">Go back to login page</p>
        <button className="error-page-button">Click!</button>
    </main>
  );
}