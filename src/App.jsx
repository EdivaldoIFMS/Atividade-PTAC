import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import NewsDetails from './components/NewsDetails'
import MenuVertical from './components/MenuVertical'
import Cabecario from './components/Cabecario'
import Cabecario2 from './components/Cabecario2'
import Footer from './components/Footer'
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='grid-container'>
      <MenuVertical />
        <Cabecario/>
          <Footer />
				<Routes>
					<Route path='/' element={<News />} />
					<Route path=':idNoticia' element={<NewsDetails />} />
         
				</Routes>
			</div>
		</BrowserRouter>

	);
}

export default App;