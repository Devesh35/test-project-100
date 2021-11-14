import React from 'react'

import '../styles.css'

function Footer() {

    const footerCol = (heading, list) => <>
        <div>
            <div className='footer-col'>
                <h6><b>{heading}</b></h6>
                {list.map((li, i) => <div key={`${li}-${i}`}>{li}</div>)}
            </div>
        </div>
    </>

    return (
        <>
            <div className='footer'>
                {footerCol('Using Easy', 'Features|Pricing|Support'.split('|'))}
                {footerCol('Products', 'Match|Quboid'.split('|'))}
                {footerCol('Company', 'Blog|About|Press Resources|Contact'.split('|'))}
                {footerCol('Legal', 'Privacy|Security|Terms of services|Policies'.split('|'))}
                {footerCol('Connect', 'Facebook|Linkedin|YouTube|Newsletter'.split('|'))}
            </div>
        </>
    )
}

export default Footer
