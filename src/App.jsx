import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'


function App() {


  return (

    <div>
      < Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
    </div>
  )

}

export default App
