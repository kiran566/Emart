import React from 'react'
import './App.css'
import Landingpage from './stores/pages/Landingpage';
import { Route,Routes } from 'react-router-dom';
import Mobiles from './stores/components/Mobiles';
import MobilePage from './stores/pages/MobilePage';
import ComputersPage from './stores/pages/ComputersPage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomanPage';
import WatchesPage from './stores/pages/WatchesPage';
import FurniturePage from './stores/pages/FurniturePage';
import AcPage from './stores/pages/AcPage';
import ElectronicsPage from './stores/pages/ElectronicsPage';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import MenSingle from './singles/MenSingle';
import WomanSingle from './singles/WomanSingle';
import WatchSingle from './singles/WatchSingle';
import FurnitureSingle from './singles/FurnitureSingle';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
         <Route path='/mobiles' element={<MobilePage/>}></Route>
        <Route path='/computers' element={<ComputersPage/>}></Route>
        <Route path='/mens' element={<MenPage/>}></Route>
        <Route path='/womans' element={<WomanPage/>}></Route>
        <Route path='/watches' element={<WatchesPage/>}></Route>
        <Route path='/furniture' element={<FurniturePage/>}></Route>
         <Route path='/ac' element={<AcPage/>}></Route>
        <Route path='/electronics' element={<ElectronicsPage/>}></Route>
        <Route path='/mobiles/:id' element={<MobileSingle/>}></Route>
        <Route path='/computers/:id' element={<ComputerSingle/>}></Route>
         <Route path='/mens/:id' element={<MenSingle/>}></Route>
        <Route path='/womans/:id' element={<WomanSingle/>}></Route>
       <Route path='/watches/:id' element={<WatchSingle/>}></Route>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}></Route>














      </Routes>
    </div>
  )
}

export default App
