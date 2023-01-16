import HeaderTop from "./components/header/header-top/index";
import HeaderCenter from "./components/header/header-center/index";
import HeaderBottom from "./components/header/header-bottom";

export default function Home() {
  return (
<div className="relative">
  <HeaderTop />
  <HeaderCenter />
  <HeaderBottom />
</div>
  )
}
