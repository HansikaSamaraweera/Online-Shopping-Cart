import React from 'react';
import c1 from "../images/c1.PNG"
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow} from 'mdbreact';

const Offers = () => {
    return (
        <MDBRow>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c1} waves />
                <MDBCardBody>
                    <MDBCardTitle>Rs.2900/=</MDBCardTitle>
                    <MDBCardText>
                        Offer Price:Rs.2140/=
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c1} waves />
                <MDBCardBody>
                    <MDBCardTitle>Rs.2900/=</MDBCardTitle>
                    <MDBCardText>
                        Offer Price:Rs.2140/=
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c1} waves />
                <MDBCardBody>
                    <MDBCardTitle>Rs.2900/=</MDBCardTitle>
                    <MDBCardText>
                        Offer Price:Rs.2140/=
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>

        </MDBRow>


    )
}

export default Offers;