
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon } from 'mdbreact';

const BodyCard = () => {
  return (
      <div className='mt-5 p-5 m-5 tc '>
        <MDBRow className= 'd-flex justify-content-center m-5'>
            <MDBCol size="6" className=''>
                <MDBCard style={{ width: "40em" }}>
                    <MDBCardImage className="" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Project 1</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='primary' href="#">See It!  </MDBBtn>
                    <MDBBtn color="red">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <MDBIcon fab icon="github" size='2x' className="ml-1 m-2"/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="6" className=''>
                <MDBCard style={{ width: "40em" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Project 2</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='primary' href="#">See It!  </MDBBtn>
                    <MDBBtn color="red">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <MDBIcon fab icon="github" size='2x' className="ml-1 m-2"/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBRow className= 'd-flex justify-content-center m-5'>
            <MDBCol size="6" className=''>
                <MDBCard style={{ width: "40em" }}>
                    <MDBCardImage className="" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Project 3</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='primary' href="#">See It!  </MDBBtn>
                    <MDBBtn color="red">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <MDBIcon fab icon="github" size='2x' className="ml-1 m-2"/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="6" className=''>
                <MDBCard style={{ width: "40em" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Project 4</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='primary' href="#">See It!  </MDBBtn>
                    <MDBBtn color="red">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <MDBIcon fab icon="github" size='2x' className="ml-1 m-2"/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
       
            

      </div>
    
    
  )
}

export default BodyCard;