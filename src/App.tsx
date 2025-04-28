
import SideBarComplete from "./components/layout/SideBarComplete"

import { AppRouter } from "@/router"


function App() {
  return (
    <>
      <SideBarComplete>
        <AppRouter/>
      </SideBarComplete>
    </>
  )
}

export default App
