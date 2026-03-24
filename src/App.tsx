import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CurrencyProvider } from "./app/components/CurrencyProvider";

export default function App() {
  return (
    <CurrencyProvider>
      <RouterProvider router={router} />
    </CurrencyProvider>
  );
}
