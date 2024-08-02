import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RewardDetail from './components/RewardDetail'
import { RecoilRoot } from 'recoil'

// first import libraries and then components.

function App() {
// why empty line???
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
