import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeRoutes from './routes/HomeRoutes'
import LoginRoutes from './routes/LoginRoutes'
import { Context } from './context/Context'
import { useContext } from 'react'
function App() {
  const { token } = useContext(Context)
  if (token) {
    return <HomeRoutes />
  }
  else {
    return <LoginRoutes />
  }
}

export default App
