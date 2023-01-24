import './reset.css';
import './globals.css';
import './output.css';
import HeaderTop from './components/header/header-top/index';
import HeaderCenter from './components/header/header-center/index';
import HeaderBottom from './components/header/header-bottom/index';
import Footer from './components/footer/index';
import Products from '@/context/Products';
import Users from '@/context/User';

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >
        <Users>
          <Products>
            {/* Same as */}
            <>
              <HeaderTop />
              <HeaderCenter />
              <HeaderBottom />
            </>
            {children}
            <>
              <Footer />
            </>
          </Products>
        </Users>
      </body>
    </html>
  )
}
