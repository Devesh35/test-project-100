import { useState } from 'react';
import { connect } from 'react-redux';
import { BsMenuButton, BsMessenger, BsHeartFill, BsGearFill } from 'react-icons/bs';

import Header from "../components/Header";
import { COLOR } from "../Constants";

import '../styles.css';

const Screen1 = ({ user, companies }) => {

    const iconContainerSize = '100px'
    const iconSize = '50px'

    const profileImageSize = '200px'

    const [companyIndex, setCompanyIndex] = useState(0)

    const imageStyle = { width: '100%', height: undefined, aspectRatio: '1', backgroundColor: 'white' }

    const notice = () => <>
        <div className='text-center border border-primary' style={{ backgroundColor: 'blue', color: 'white' }}>
            NOTICE: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
    </>

    const alignMiddle = (d) => <>
        <table className='h-100' >
            <tbody><tr><td className="align-middle">{d}</td></tr></tbody>
        </table>
    </>

    const userActions = (icon, text, number) => <>
        <div className='text-center justify-content-center' style={{ width: iconContainerSize }} key={text}>
            <div className='border border-primary border-2 rounded-circle p-4 m-0' style={{ width: iconContainerSize, height: iconContainerSize }}>{icon}</div>
            <div className='mt-2 p-0'>{text}</div>
            <div className='mt-2 p-0'><h4>{number}</h4></div>
        </div>
    </>

    const header = () => <>
        <div className='container-fluid row p-2 m-0 background-skyblue'>
            <div className='col row p-5 m-0'>
                <div className='col-4 d-flex flex-row-reverse' >
                    <img className='border border-primary border-3 rounded p-1 m-0' src={`${user.profile.image}`} alt='user' style={{ width: profileImageSize, height: profileImageSize, backgroundColor: 'white' }} />
                </div>
                <div className='col'>
                    {alignMiddle(
                        <>
                            <div><h4>Hello, <b>{user.profile.name}</b></h4></div>
                            <div>It's nice to see you again</div>
                        </>
                    )}
                </div>
            </div>
            <div className='col row p-4 mt-4 text-center'>
                <div className='col-2 offset-2'>{userActions(<BsMenuButton style={{ height: iconSize, width: iconSize }} />, 'New Entries', user.profile.entries)}</div>
                <div className='col-2'>{userActions(<BsMessenger style={{ height: iconSize, width: iconSize }} />, 'Messages', user.profile.messages)}</div>
                <div className='col-2'>{userActions(<BsHeartFill style={{ height: iconSize, width: iconSize }} />, 'Favorites', user.profile.favorites)}</div>
                <div className='col-2'>{userActions(<BsGearFill style={{ height: iconSize, width: iconSize }} />, 'Strength', user.profile.strength + '%')}</div>
            </div>
        </div>
    </>

    const displayProject = (p) => <>
        <div>
            <img className='p-1 mb-4' src={`${p.displayImage}`} alt='user' style={imageStyle} />
            <h2 className='p-1 m-0' style={{ height: '50px' }}><b>{p.name}</b></h2>
            <div style={{ height: '75px' }}>{p.shortDesc}</div>
            <button className='btn btn-primary rounded-3 w-50'>Edit</button>
        </div>
    </>

    const classname = 'border rounded background-verylightgray w-100'

    const displayProjectPlaceholder = () => <>
        <div>
            <div className={`p-1 mb-4 ${classname}`} style={{ ...imageStyle, backgroundColor: COLOR.veryLightGray }} />
            <div className={`p-1 m-1 ${classname}`} style={{ height: '40px', }} />
            <div className={`p-1 m-1 ${classname}`} style={{ height: '74px', }} />
            <div className='btn border rounded background-verylightgray w-50' style={{ height: '40px', }} />
        </div>
    </>

    const body = () => <>
        <div className='text-center m-0 p-5 border'>
            <h5 style={{ color: 'purple' }}>START USING REACT PLATFORM</h5>
            <h1 className='m-2 p-2' style={{ color: 'blue' }}>What do you want to do today?</h1>
            <h5 className='mb-5 p-1'>We made it easy for you to find your perfect match & possible buyer.</h5>
            <div className='container-fluid row text-center'>
                {user.projects.map(p => <div className='col-3 mt-5 p-1' key={p.id}>{displayProject(p)}</div>)}
                {[...Array(4 - (user.projects.length % 4))].map((x, i) => <div className='col-3 mt-5 p-1' key={i}>{displayProjectPlaceholder()}</div>)}
            </div>
        </div>
    </>

    const companyDisplayInfo = (name, info) => <>
        <div className='col h6'>{name}</div>
        <div className='col-auto'>{info}</div>
    </>

    const companyDisplay = (p) => <>
        <div className='container-fluid row' style={{ backgroundColor: 'white' }}>
            <div className='col-6 p-2 m-0 text-center'>
                <img className='row p-3 m-0 border rounded' src={`${p.image}`} alt='project' style={imageStyle} />
                <div className='row text-center w-100'><h3>{p.rating}</h3> <h6>RATING</h6></div>
            </div>
            <div className='col p-0 mt-3'>
                <div className='row p-0 m-0 pt-1 pb-1'><h4>{p.name}</h4></div>
                <div className='row p-1 m-0'>
                    <div className='col h6'>Acivity</div>
                    <div className='col-auto rounded-circle' style={{ backgroundColor: p.color, aspectRatio: '1' }}></div>
                    <div className='col-auto'>{p.type}</div>
                </div>
                <div className='row p-1 m-0'>
                    {companyDisplayInfo('Info1', p.info)}
                </div>
                <div className='row p-1 m-0'>
                    {companyDisplayInfo('Info2', p.info2)}
                </div>
                <div className='row p-1 m-0'>
                    {companyDisplayInfo('Date', p.date)}
                </div>
            </div>
        </div>
    </>

    const moveCompany = (by) => {
        const newNum = companyIndex + by
        if (newNum >= 0 && newNum < companies.length - 2)
            setCompanyIndex(newNum)
    }

    const footer = () => <>
        <div className='container-fluid p-5 m-0 background-lightgray'>
            <div className='row p-1 mb-4'>
                <div className='col-auto p-1 m-0 text-end'>
                    We suggest you to see
                </div>
                <div className='col'>
                    <div className=" dropdown">
                        <button className="col-12 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Nothing to select
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {/* <li><a className="dropdown-item" href={() => setDropdowm(1)}>Action</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className='col-1'>
                    <button className='col-12 btn btn-primary' >Top 10</button>
                </div>
                <div className='col-auto p-1 m-0' >
                    How to appear here?
                </div>
                <div className='col-2'>
                    <button className='btn col-12' style={{ backgroundColor: 'purple', color: 'white' }}>See all suggestions</button>
                </div>
            </div>

            <div className='row p-3 mt-4'>
                <div className='col-auto clickable' onClick={() => moveCompany(-1)}>
                    {alignMiddle(<h2 style={{ color: (companyIndex > 0 ? 'black' : COLOR.backgroundGray) }}>{'<'}</h2>)}
                </div>
                <div className='col'>{companyDisplay(companies[companyIndex])}</div>
                <div className='col'>{companyDisplay(companies[companyIndex + 1])}</div>
                <div className='col'>{companyDisplay(companies[companyIndex + 2])}</div>
                <div className='col-auto clickable' onClick={() => moveCompany(1)}>
                    {alignMiddle(<h2 style={{ color: (companyIndex < companies.length - 3 ? 'black' : COLOR.backgroundGray) }}>{'>'}</h2>)}
                </div>
            </div>

        </div>
    </>

    return (
        <>
            <Header screen={1} />
            {notice()}
            {header()}
            {body()}
            {footer()}
        </>
    )
};

const mapStateToProps = (state) => ({
    user: state.user,
    companies: state.companies,
})

export default connect(mapStateToProps)(Screen1);