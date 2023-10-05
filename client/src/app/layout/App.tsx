import Catalog from "../../features/catalog/Catalog";
import Header from "../../features/catalog/Header";
import { Container, CssBaseline } from "@mui/material";

function App() {
  
    
    

  return (
    <>
    <div className="app">
      <CssBaseline />
      <Header />
      <Container>
        <Catalog/>
      </Container>
      

    </div>
    </>
  )
}

export default App
