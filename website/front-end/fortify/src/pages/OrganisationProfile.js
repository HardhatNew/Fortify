// author DAVID Wang
//date

/* 
More details goes here....
what the from about 
what supposed to do
*/
import React from 'react'
import '../component/Organisation/style.css'
import Envelope from '../images/envelope-fill.svg'
import Phone from '../images/phone-fill.svg'
import Telephone from '../images/telephone.png'
import SmileyFace from '../images/emoji-smile.png'
// import useParams to fetch the data from the url
import { useParams } from 'react-router'
import organizations from '../component/Organisation/data/organisationInfo'
//import star component
import StarRating from '../component/Organisation/StarRating'
const OrganisationProfile = () => {
  const { organizationId } = useParams()
  const organization = organizations.find(
    (organization) => organization.name === organizationId,
  )

  return (
    <>
      <div className="row">
        <div className="column">
          <table>
            <tr>
              <td>
                <div className="Card">
                  <div className="upperContainer">
                    <div className="imageContainer">
                      <img
                        src={require(`../component/Organisation/data/images/${organization.imageURL}`)}
                        alt=""
                        height="150px"
                        width="300px"
                      />
                    </div>
                  </div>
                  <div className="lowerContainer">
                    <h3> {organization.name} </h3>
                    <h4> {organization.address} </h4>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Card2">
                  <div className="upperContainer2 ">
                    <img src={Telephone} alt="Telephone" />
                    <h3 className="inlineposition"> Contacts</h3>
                    <div className="lowerContainer">
                      <br />
                      <img src={Envelope} alt="Envelope" />
                      <h3 className="inlineposition smalltext">
                        {organization.contacts.email}
                      </h3>
                      <br />
                      <br />
                      <img src={Phone} alt="telephone" />
                      <h3 className="inlineposition smalltext">
                        {organization.contacts.phoneNumber}
                      </h3>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div className="column">
          <table>
            <tr>
              <td>
                <div className="center3">
                  <div className="Card3">
                    <div className="upperContainer2 ">
                      <img src={SmileyFace} alt="SmileyFace" />
                      <h3 className="inlineposition"> About Us</h3>
                      <div className="lowerContainer">
                        <br />
                        <h3 className="aboutus">{organization.aboutUs}</h3>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div className="column">
          <table>
            <tr>
              <td>
                <div className="Card4">
                  <div className="upperContainer3 ">
                    <img src={SmileyFace} alt="SmileyFace" />
                    <h3 className="inlineposition"> Assessment Summary</h3>

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
                        ratingValue={
                          organization.assessmentSummary.pathApplications
                        }
                        status="disabled"
                      />
                    </div>
                    <div className="TCDesc">
                      <p>Configure Microsoft office</p>
                      <StarRating
                        ratingValue={
                          organization.assessmentSummary.configureM365
                        }
                        status="disabled"
                      />
                    </div>
                    <div className="TCDesc">
                      <p>Use Web Application</p>
                      <StarRating
                        ratingValue={
                          organization.assessmentSummary.UWAHardening
                        }
                        status="disabled"
                      />
                    </div>
                    <div className="TCDesc">
                      <p>Restrict Administrative</p>
                      <StarRating
                        ratingValue={
                          organization.assessmentSummary.RAPrivileges
                        }
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
                        ratingValue={
                          organization.assessmentSummary.multiFactorAuth
                        }
                        status="disabled"
                      />
                    </div>
                    <div className="TCDesc"></div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
export default OrganisationProfile
