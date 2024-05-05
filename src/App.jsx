import { RouterProvider } from "react-router-dom"
import router from './routes/Router'
import Home from "./pages/home/Home"

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
