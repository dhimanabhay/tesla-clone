import Homesection from "../../components/homesection/Homesection"
import Homevideo from "../../components/homevideo/Homevideo"
import modelSImage from "../../components/images/home_item/modelS.jpg"

import "./home.css"
const Home = () => {
  return (
    <>
      <Homevideo />
      <Homesection header="Model S" description="View Inventory" backgroundImage={modelSImage}/>
    </>

  )
}

export default Home
 