import Menu from '../Menu/menu'
import Login from '../../Login/Login'
import Listablocos from '../../SAE/Listablocos/ListaBlocos'

import { useState } from 'react'

function Home() {


   const [logged, setLogged] = useState();
   return (
      <>
         <Menu /><Listablocos />
      </>
   )
}

export default Home