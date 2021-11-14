import { connect } from "react-redux";
import Header from "../components/Header";
// import { COLOR } from "../Constants";

import { BsGear, BsHeartFill, BsMessenger, BsPersonPlusFill, BsStarFill } from 'react-icons/bs';

import '../styles.css'

const Screen3 = ({ company }) => {

    const headerLeft = () => <>
        <div className='col-4 p-2'>
            <img className='p-2' src={company.image} alt='company' style={{ width: '100%', height: undefined, aspectRatio: '1' }} />
            <div className='d-flex justify-content-center'>
                <div className='col-auto p-1'><BsGear /></div>
                <div className='col-auto p-2'><h6>Edit your profile</h6></div>
            </div>
        </div>
        <div className='col-5 offset-1 p-5'>
            <div className='row'>
                <h3>{company.name}</h3>
                <h6 className='color-lightgray'>Type of product company sells</h6>
            </div>
            <div className='row justify-content-around'>
                <div className='col-auto row'>
                    <div className='col-auto rounded-circle' style={{ backgroundColor: company.color, aspectRatio: '1' }}></div>
                    <div className='col-auto'>{company.type}</div>
                </div>
                <div className='col-auto'>
                    <h6>{company.details.country}</h6>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='row justify-content-center'>
                <button className='col-8 btn m-2' style={{ backgroundColor: 'blue', color: 'white' }}>MESSAGE</button>
                <button className='col-2 btn m-2 p-1 border border-secondary' style={{ color: 'gray' }}><BsPersonPlusFill /></button>
            </div>
        </div>
    </>

    const headerRight = () => <>
        <div className='row justify-content-center text-start mb-4 mt-4'>
            <div className='col-auto p-4'>
                <h2>{company.rating}</h2>
                RATING
            </div>
            <div className='col-auto p-0 m-0 background-lightgray' style={{ width: '2px', }}></div>
            <div className='col-auto p-4'>
                <h2>{company.connections}</h2>
                CONNECTIONS
            </div>
            <div className='col-auto p-0 m-0 background-lightgray' style={{ width: '2px', }}></div>
            <div className='col-auto p-4'>
                <h2>{company.views}</h2>
                VIEWS
            </div>
        </div>
        <div className='row mt-4'>
            <h3><b>This profile is on people's mind.</b></h3>
            <h6>Its been viewed over 100+ times in the past month.</h6>
        </div>
    </>

    const header = () => <>
        <div className='container-fluid p-0 m-0 text-center background-verylightgray'>
            <div className='row p-4 m-0'>
                <div className='col row ps-5'>
                    {headerLeft()}
                </div>
                <div className='col'>
                    {headerRight()}
                </div>
            </div>
        </div>
    </>

    const rowWithTwoCols = (name, value, color) => <>
        <div className='row p-2'>
            <div className='col-4' style={{ color: 'gray' }}>{name}</div>
            <div className='col-7' style={{ color: (color ? color : 'black') }}><b>{value}</b></div>
        </div>
    </>

    const creditRiskMeter = (color, text) => <>
        <div className='row p-1 ps-4'>
            <div className='col-auto rounded-circle border border-dark' style={{ backgroundColor: color, aspectRatio: '1' }}></div>
            <div className='col'>{text}</div>
        </div>
    </>

    const companyDetails = () => <>
        <div className='container-fluid'>
            <div className='row justify-content-between border p-2 m-0'>
                <div className='col-auto'><b>Detailed Information on {company.name}</b></div>
                <div className='col-auto row'>
                    <div className='col'><BsMessenger /></div>
                    <div className='col-auto p-0 m-0 background-lightgray' style={{ width: '2px', }}></div>
                    <div className='col'><BsHeartFill /></div>
                </div>
            </div>
            <div className='row border p-0 m-0'>
                <div className='col-6 p-3 text-start'>
                    {rowWithTwoCols('Company name', company.name, 'blue')}
                    {rowWithTwoCols('Country', company.details.country, 'blue')}
                    {rowWithTwoCols('Year Established', company.details.yearEstablished, 'blue')}
                    {rowWithTwoCols('Address', company.details.address, 'blue')}
                    {rowWithTwoCols('Phone Number', company.details.phoneNumber)}
                    {rowWithTwoCols('Website', company.details.website)}
                    {rowWithTwoCols('Type of Industry', company.type)}
                    {rowWithTwoCols('Point of Sales', company.details.pos)}
                    {rowWithTwoCols('Business Activity', company.details.activity)}
                    {rowWithTwoCols('No. of Employees', company.details.noOfEmp)}
                    {rowWithTwoCols('Banks you work with', company.details.bankWorkWith)}
                    {rowWithTwoCols('Currency', company.details.currency)}
                    {rowWithTwoCols('Existing Clients', company.details.existingClients)}
                </div>
                <div className='col-6 p-2' style={{ background: 'linear-gradient(rgba(0, 255, 255, 0.5), transparent)' }}>
                    <div className='row text-center p-2 mt-4'>
                        <h4><b>Credit check of this company</b></h4>
                        This method will check the single invoice co database for a company with provided single invoice co ID.
                    </div>
                    <div className='row justify-content-center p-2 mt-5'>
                        <button className='btn rounded col-8' disabled={true} style={{ backgroundColor: 'green', color: 'white' }} >{company.details.credit}</button>
                    </div>
                    <div className='row text-center p-2 mt-4'>
                        The color range returned will depend on your policy. Our sandbox environment has a set of default colors.
                    </div>
                    <>
                        {creditRiskMeter('transparent', 'No result available')}
                        {creditRiskMeter('green', 'Excellent Credit Risk')}
                        {creditRiskMeter('yellow', 'Good Credit Risk')}
                        {creditRiskMeter('orange', 'Medium Credit Risk')}
                        {creditRiskMeter('black', 'Unmeasureable')}
                    </>
                </div>
            </div>
        </div>
    </>

    const accountHolder = () => <>
        <div className='container-fluid'>
            <div className='row justify-content-between border p-2 m-0'>
                <div className='col-auto'><b>Account Holder</b></div>
                <div className='col-auto'><BsMessenger /></div>
            </div>
            <div className='row col border p-3 m-0'>
                <div className='row'>
                    <div className='col'>
                        <img className='border border-primary border-3 rounded p-1 m-0 rounded-2' src={`${company.accountDetails.image}`} alt='user' style={{ width: '100%', height: undefined, aspectRatio: '0.9', backgroundColor: 'white' }} />
                    </div>
                    <div className='col p-3'>
                        <h4 style={{ color: 'blue' }}>{company.accountDetails.name}</h4>
                        <h6 style={{ color: 'gray' }}>{company.accountDetails.jobPosition}</h6>
                    </div>
                </div>
                <div className='p-2'>
                    {rowWithTwoCols('Phone number', company.accountDetails.phoneNumber)}
                    {rowWithTwoCols('Email', company.accountDetails.mail)}
                    {rowWithTwoCols('Linkedin', company.accountDetails.linkedin)}
                    {rowWithTwoCols('Skype ID', company.accountDetails.skypeID)}
                </div>
            </div>
            <div className='row m-0 p-2 d-flex'>
                <div className='col-auto p-1'><BsGear /></div>
                <div className='col-auto p-2'><h6>Edit your company details</h6></div>
            </div>
        </div>
    </>

    const body = () => <>
        <div className='container-fluid p-5 m-2'>
            <div className='row justify-content-between' style={{ color: 'blue' }}>
                <div className='col-auto'>
                    <h2>Company's details</h2>
                </div>
                <div className='col-auto align-self-center' style={{ color: 'purple' }}>
                    <h6>RATE THIS COMPANY <BsStarFill /></h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-8 m-0 p-2'>
                    {companyDetails()}
                </div>
                <div className='col-4 m-0 p-2'>
                    {accountHolder()}
                </div>
            </div>
        </div>
    </>

    return (
        <>
            <Header screen={3} />
            {header()}
            {body()}
        </>
    )
};

const mapStateToProps = (state) => ({
    company: state.companies[0],
})

export default connect(mapStateToProps)(Screen3);