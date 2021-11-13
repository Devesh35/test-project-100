import { useState } from "react";
import { useNavigate } from "react-router";

import logo192 from '../images/logo192.png'
import '../styles.css';
import './styles.css';

function Header({ screen }) {

    const [state, setState] = useState({ text: "" })

    const handleChange = e => setState({ text: e.target.value })

    const nav = useNavigate();

    const handleClick = clicked => nav(`/${clicked}`)

    return (
        <>
            <div className='container-fluid border p-3'>
                <div className='row text-center align-middle'>
                    <div className='col-2 flex-justify' style={{ minWidth: '250px' }}>
                        <img src={logo192} alt={'Logo'} style={{ width: '30px', height: '30px', marginInlineEnd: '10px' }} />
                        <h5>React-test-app</h5>
                    </div>
                    <div className='col row' style={{ marginInline: '30px' }}>
                        <input type='text' placeholder='I am looking for...' onChange={handleChange} value={state.text} color='black' />
                    </div>
                    <div className='col-4' style={{ display: 'flex', minWidth: '550px' }}>
                        <h5 className='clickable' onClick={() => handleClick(1)} style={{ color: (screen === 1 ? 'blue' : 'black') }}>Screen 1 </h5>
                        <h5 className='clickable' onClick={() => handleClick(2)} style={{ color: (screen === 2 ? 'blue' : 'black') }}>Screen 2 </h5>
                        <h5 className='clickable' onClick={() => handleClick(3)} style={{ color: (screen === 3 ? 'blue' : 'black') }}>Screen 3 </h5>
                        <h5 className='clickable' onClick={() => handleClick(4)} style={{ color: (screen === 4 ? 'blue' : 'black') }}>Screen 4 </h5>
                        <h5 className='clickable' onClick={() => handleClick(5)} style={{ color: (screen === 5 ? 'blue' : 'black'), marginInlineEnd: '10px' }}>Screen 5 </h5>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;