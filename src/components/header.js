import React from 'react'


class Header extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#4285F4'}}className='h-40vh  tc'>
                <h1 >Hi, I'm Fola.</h1>
                <p className='tc'>Ameteur Chef</p>
                <p className='tc strike'>Professional Father</p>
                <p className=' tc'>Amateur Father</p>
                <p className='tc'>And PROFESSIONAL Developer</p>
            </div>

        )
    }
}

export default Header
