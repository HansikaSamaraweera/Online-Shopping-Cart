import React from 'react';
import c1 from "../images/c1.PNG"
import c2 from "../images/c2.PNG"
import c3 from "../images/c3.PNG"
import c4 from "../images/c4.PNG"
import b from "../images/b.PNG"
import c6 from "../images/c6.PNG"
import c7 from "../images/c7.PNG"
import c8 from "../images/c8.PNG"
import c9 from "../images/c9.PNG"
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow} from 'mdbreact';
import "../../admin.css";

const Offers = () => {
    return (
        <MDBRow className="pre-scrollable" id="ss">
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c1} waves />
                <MDBCardBody>
                    <MDBCardText>
                        High Neck Flare Hem Dress
                    </MDBCardText>
                    <MDBCardTitle> Offer Price:Rs.2990.00</MDBCardTitle>
                    <MDBCardText>
                       Rs.3850.00
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c2} waves />
                <MDBCardBody>
                    <MDBCardText>
                        Contrast Collar And Cuff Shirt
                    </MDBCardText>
                    <MDBCardTitle> Offer Price:Rs.1700.00</MDBCardTitle>
                    <MDBCardText>
                        Rs.2300.00
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c3} waves />
                <MDBCardBody>
                    <MDBCardText>
                        Printed Buttoned Down Dress
                    </MDBCardText>
                    <MDBCardTitle> Offer Price:Rs.2800.00</MDBCardTitle>
                    <MDBCardText>
                        Rs.3550.00
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c7} waves />
                <MDBCardBody>
                    <MDBCardText>
                        Sequin Top
                    </MDBCardText>
                    <MDBCardTitle> Offer Price:Rs.2800.00</MDBCardTitle>
                    <MDBCardText>
                        Rs.3500.00
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c8} waves />
                <MDBCardBody>
                    <MDBCardText>
                        Waist Gathered Dress
                    </MDBCardText>
                    <MDBCardTitle> Offer Price:Rs.2600.00</MDBCardTitle>
                    <MDBCardText>
                        Rs.3450.00
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" }}>
                <MDBCardImage className="img-fluid" src={c9} waves />
                <MDBCardBody>
                    <MDBCardText>
                        Contrast Detailing Work Wear Top
                    </MDBCardText>
                    <MDBCardTitle> Offer Price:Rs.1750.00</MDBCardTitle>
                    <MDBCardText>
                        Rs.2350.00
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "26rem" ,height:"15rem"}}>
                <MDBCardImage className="img-fluid" src={c4} waves />
            </MDBCard>
            <MDBCard style={{ width: "26rem",height:"15rem" }}>
                <MDBCardImage className="img-fluid" src={b} waves />
            </MDBCard>
            <MDBCard style={{ width: "26rem",height:"15rem" }}>
                <MDBCardImage className="img-fluid" src={c6} waves />
            </MDBCard>
        </MDBRow>


    )
}

export default Offers;