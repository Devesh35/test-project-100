import { useState } from "react";
import { useNavigate } from "react-router";

import logo192 from '../images/logo192.png'
import '../styles.css';

function Header({ screen }) {

    const [state, setState] = useState({ text: "" })

    const handleChange = e => setState({ text: e.target.value })

    const nav = useNavigate();

    const handleClick = clicked => nav(`/${clicked}`)

    const screenSwitch = (index) => <>
        <h5 className='clickable col p-0 m-0' onClick={() => handleClick(index)} style={{ color: (screen === index ? 'blue' : 'black') }}>Screen {index} </h5>
    </>

    return (
        <>
            <div className='container-fluid border p-3'>
                <div className='row text-center align-middle'>
                    <div className='col-2 d-flex justify-content-center' style={{ minWidth: '250px' }}>
                        <img src={logo192} alt={'Logo'} style={{ width: '30px', height: '30px', marginInlineEnd: '10px' }} />
                        <h5>React-test-app</h5>
                    </div>
                    <div className='col row' style={{ marginInline: '30px' }}>
                        <input type='text' placeholder='I am looking for...' onChange={handleChange} value={state.text} color='black' />
                    </div>
                    <div className='col-4 row row-cols-5 d-flex justify-content-center' style={{ minWidth: '550px' }}>
                        {screenSwitch(1)}
                        {screenSwitch(2)}
                        {screenSwitch(3)}
                        {screenSwitch(4)}
                        {screenSwitch(5)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;