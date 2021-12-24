import Header from "./componentes/Header"
import Homepage from "./componentes/Homepage"
import Footer from "./componentes/Footer"
import LoginComp from "./componentes/LoginComp";
export function Home() {
  return (
    <div className="App">
    <Header/>
    <Homepage/>
    <Footer/>
    </div>
  );
}

export function Login() {
  return (
    <div className="App">
    <Header/>
    <LoginComp/>
    <Footer/>
    </div>
  );
}
