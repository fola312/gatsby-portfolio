import React from 'react';
import {MDBIcon, MDBTooltip, MDBBtn } from 'mdbreact';

class Tech extends React.Component {
    render() {
        return (
            <div className='mt-5 tc'>
                <h1 >A few of the technologies I dabble in</h1>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="html5" size='5x' className='m-3' /></MDBBtn>
                    <div>Html5</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="css3" size='5x' className='m-3' /></MDBBtn>
                    <div>CSS3</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="js-square" size='5x' className='m-3' /></MDBBtn>
                    <div>Javascript</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="bootstrap" size='5x' className='m-3' /></MDBBtn>
                    <div>Bootstrap</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="react" size='5x' className='m-3' /></MDBBtn>
                    <div>ReactJS</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon  icon="database" size='5x' className='m-3' /></MDBBtn>
                    <div>Database(postgres)</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="node" size='5x' className='m-3' /></MDBBtn>
                    <div>NodeJS</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="npm" size='5x' className='m-3' /></MDBBtn>
                    <div>NPM</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="sass" size='5x' className='m-3' /></MDBBtn>
                    <div>SASS</div>
                </MDBTooltip>
               
                
            </div>

        )
    }
}

export default Tech