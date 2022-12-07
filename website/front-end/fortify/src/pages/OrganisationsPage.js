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
          <Card border="success" className="bg-success">
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
              <div className="TCDesc">
                <p>Use Web Application</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.UWAHardening}
                  status="disabled"
                />
              </div>
              <div className="TCDesc">
                <p>Restrict Administrative</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.RAPrivileges}
                  status="disabled"
                />
              </div>
              <div className="TCDesc">
                <p>Patch Operating System</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.PatchOS}
                  status="disabled"
                />
              </div>
              <div className="TCDesc">
                <p>Multi-factor Authentication</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.multiFactorAuth}
                  status="disabled"
                />
              </div>
              <div className="TCDesc">
                <p>Regular Backups</p>
                <StarRating
                  ratingValue={organization.assessmentSummary.backups}
                  status="disabled"
                />
              </div>
            </Card.Body>

            <Card.Footer className="text-muted">
              <a href="#/" className="btn btn-light">
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
