import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import TopNavBar from "./components/TopNavBar";

function App() {
  const [mode, setMode] = useState(true);
  const body = document.querySelector('body');

  function handleMode(){
    setMode(!mode);
    if(mode){
      body?.classList.remove('from-slate-100', 'to-slate-300');
      body?.classList.add('from-gray-800', 'to-gray-900');
    }else{
      body?.classList.add('from-slate-100', 'to-slate-300');
      body?.classList.remove('from-gray-800', 'to-gray-900');
    }
  }
  return (
    <>
      <TopNavBar
        mode={ mode }
        handleMode={ handleMode }
      />
      <Header
        mode={ mode }
      />
      <Profile
        mode={ mode }
      />
    </>
  );
}

export default App
