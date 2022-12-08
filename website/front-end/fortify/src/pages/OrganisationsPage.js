import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import organizations from '../component/Organisation/data/organisationInfo'
import StarRating from '../component/Organisation/StarRating'
const OrganisationsPage = () => {
  return (
    <Row xs={1} md={3} className="m-2 g-4">
      {organizations.map((organization) => (
        <Col key={organization.id}>
          <Card
            border="success"
            className="bg-success"
            style={{ width: 'auto' }}
          >
            <Card.Img
              className="cardImg"
              variant="top"
              src={require(`../component/Organisation/data/images/${organization.imageURL}`)}
            />
            <Card.Body>
              <Card.Title className="cardTitle">{organization.name}</Card.Title>
              <Card.Text className="cardText">{organization.aboutUs}</Card.Text>

              <div className="TCDesc">
                <p>Application Control</p>
                <StarRating
                  ratingValue={
                    organization.assessmentSummary.applicationControl
                  }
                  status="disabled"
                />
              </div>
              <div className="TCDesc">
                <p>Patch applications</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.pathApplications}
                  status="disabled"
                />
              </div>
              <div className="TCDesc">
                <p>Configure Microsoft office</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.configureM365}
                  status="disabled"
                />
              </div>
            </Card.Body>

            <Card.Footer className="text-muted">
              <a
                href={`/organizations/${organization.name}`}
                className="btn btn-light"
              >
                More Info...
              </a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
export default OrganisationsPage
