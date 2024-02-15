import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { privateRouter } from "./routes/private/PrivateRoutes";

function App() {
  const token = localStorage.getItem("jwt_token");
  return (
    <>
      {token ? (
        <RouterProvider router={privateRouter} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
