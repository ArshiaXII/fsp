
import Carausel from "./components/carausel/index";
import Products from "./components/products";
import TypeList from "./components/typeList/index";


export default function Home() {
  return (
<div className="relative bg-customLightGray">

  <Carausel />
  <TypeList />
  <Products />
</div>
  )
}
