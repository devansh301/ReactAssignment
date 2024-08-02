import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Dashboard from './pages/Dashboard'
import RewardDetail from './pages/RewardDetail'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/rewards/:id' element={<RewardDetail />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
