import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Header from "./components/Header"


const BASE_URL ="https://users-crud.academlo.tech"

function App() {
  const [isShowForm, setEIsShowForm] = useState(false)

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"

  axios.get(URL)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }
useEffect(() => {
  getAllUsers()
  
},[])


  return (
    <main className="font-sans"> 
      <Header /> 
      <Modal isShowForm={isShowForm}/>
    </main>
  )
}

export default App
