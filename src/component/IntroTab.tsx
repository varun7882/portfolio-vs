import Row  from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import profileImage from "../resource/images/dp.jpg"
import "../resource/style/introTab.css"

export default function IntroTab() {
    return (
        <Container>
        <Row>
            <Col md={3}>
                  <img src={profileImage} alt="this is me" className="profileimg"></img>
            </Col>
            <Col md={9} className="textProp">
              
                    This is my description. Some guy trying to do some things.<br/>
                    High in motivation so much so that is borders on unrealism and naivety.
                    This application is made in react. Waiting for my wife to give me UI for this. 
                    Meanwhile I will be working on some other react exercise to understand stateManagement 
                    in react.
            </Col>
        </Row>
      </Container>
    )
  }