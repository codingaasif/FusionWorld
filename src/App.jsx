import ProductRouter from "./router/productRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <ProductRouter />
    </div>
  );
};

export default App;
