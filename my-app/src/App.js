import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newproduct from './Newproduct';
import Allproducts from './Allproducts';
import Showpro from './Showpro'
import Editpro from './Editpro'
import './App.css';






function App() {



  
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path='/product' element={<Allproducts />} />
          <Route path='/Product/new' element={<Newproduct />} />
          <Route path='/Product/Showpro/:id' element={<Showpro />} />
          <Route path='/Product/Edit' element={< Editpro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
