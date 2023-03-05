import React from 'react'
import {
  Card,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';


const ProjectStrap = (props) => {

  return (
    <div className="container">
      <Row>
        <Col sm="4">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <Card body>
            <CardTitle tag="h5">
              Special Title Treatment
          </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
          </CardText>
            <Row>
              <Col>
                <Button>
                  Go somewhere
          </Button>
                <Button>
                  Go somewhere
          </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="4">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <Card body>
            <CardTitle tag="h5">
              Special Title Treatment
          </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
          </CardText>
            <Row>
              <Col>
                <Button>
                  Go somewhere
          </Button>
                <Button>
                  Go somewhere
          </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="4">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <Card body>
            <CardTitle tag="h5">
              Special Title Treatment
          </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
          </CardText>
            <Row>
              <Col>
                <Button>
                  Go somewhere
          </Button>
                <Button>
                  Go somewhere
          </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectStrap;