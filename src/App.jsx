import { BrowserRouter, Routes, Route } from 'react-router';


import { DashboardPage } from './pages/Dashboard'
import { MyCollection } from './pages/PokeCollection';
import { Details } from './pages/Detail';
import { Layout } from './pages/Layout';

import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL ?? '/'}>
      <Routes  >
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="my-collection" element={<MyCollection />} />
          <Route path="about" element={(<section className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10">
              <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokéball" className="w-40 h-40 rotate-12" />
            </div>

            <h2 className="text-3xl font-extrabold text-red-500 mb-4 text-center">Acerca de esta Pokédex</h2>

            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Esta es una Pokédex desarrollada con <span className="font-semibold text-blue-600">React</span> y <span className="font-semibold text-purple-600">Vite</span>,
              consumiendo datos en tiempo real desde la <span className="font-semibold text-yellow-600">PokéAPI</span>. El objetivo es combinar la práctica del desarrollo moderno
              con una experiencia divertida y visualmente agradable para explorar Pokémon.
            </p>

            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 font-medium rounded-full text-sm">
                #React ⚛️ #Vite ⚡ #PokéAPI 🎯
              </span>
            </div>
          </section>)} />
          <Route path="details/:pokeid" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
