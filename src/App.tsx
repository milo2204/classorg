import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/Navbar';

function App() {
  return (
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
       {/*<div className='flex-grow-1'>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="home" element={<HomePage/>}/>
          <Route path="search" element={<SearchBooksPage/>} />
          <Route path="checkout/:bookId" element={<BookCheckoutPage/>} />
          <SecureRoute path='/shelf' component={ShelfPage} />
          <SecureRoute path='/messages' component={MessagesPage} />
          <SecureRoute path='/admin' component={ManageLibraryPage} /> 
        </Routes>
      </div>
      <Footer/> */}
    </div>
  );
}

export default App;
