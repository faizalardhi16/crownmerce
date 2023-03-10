import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return(
    <h1>Hello Shopee</h1>
  )
}

function App() {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="signin" element={<Signin/>} />
      </Route>
    </Routes>
  )
}

export default App
