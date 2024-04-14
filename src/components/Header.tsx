import { useState } from 'react';
import imgHeader from '/public/img/hero.png';
type HeaderType = {
    mode: boolean
}

function Header({ mode } : HeaderType ){
    const [move, setMove] = useState(false);
    function handleMove(){
        setMove(true);
        setTimeout(() => {
            setMove(false);
        }, 1000);        
    }

    return (
        <header className={`h-56 md:w-11/12 max-w-7xl mx-auto flex items-center justify-center ${mode ? 'bg-indigo-100' : 'bg-gradient-to-r from-gray-900 to-gray-800'}`}>
            <img 
                className={`w-32 transition-all ${move ? 'translate-x-20 -translate-y-20 opacity-0' : '-translate-x-10 translate-y-10 opacity-100'}`} src={ imgHeader } alt="imagen header" onClick={ handleMove }
            />
        </header>
    )
}

export default Header;