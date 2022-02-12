import React from 'react'

const Home2 = ({ setCstaff}) => {

    const click = () => {
        setCstaff(1)
    }
    const click2 = () => {
        setCstaff(2)
    }

    return (
        <div className="content">
            <div className="container-fluid">
                <div className='row'>
                    <button className='btn btn-sm btn-success' onClick={click}>Change Staff</button>
                    <button className='btn btn-sm btn-success' onClick={click2}>Change Staff</button>
                    <h3>Staff222 Dashboard</h3>
                </div>
            </div>
        </div>
    )
}

export default Home2;
