import React from 'react';
import NavbarCompponent from "./components/NavbarComponent/NavbarComponent";
import Home from "./pages/Home.js";
import Footer from "./components/FooterComponent/Footer.js";
import Container from "./components/Container/ContainerComponent";
function App() {
  return (
     <div className="main">
       <header>
            <NavbarCompponent/>
       </header>
       <main>
          <Home/>
       </main>
       <footer>
          <Container>
              <Footer/>
          </Container>
       </footer>
     </div>
  );
}

export default App;
