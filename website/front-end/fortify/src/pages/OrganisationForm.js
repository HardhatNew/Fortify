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

const OrganisationForm = () => {
  return (
  <>
  <div className='row'>
    <div className='column'>
  <table>
    <tr>
      <td>
        <div className='Card'>
        <div className='upperContainer'>
          <div className='imageContainer'>
            <img src="https://logos-world.net/wp-content/uploads/2022/04/Coles-Supermarkets-Logo-1991.png" alt='' height="150px" width="300px" />
          </div>
        </div>
        <div className='lowerContainer'>
          <h3> Coles </h3>
          <h4> Victoria 3149 </h4>
        </div>
        </div>
      </td>
      </tr>

<tr>
  <td>
  <div className='Card2'>
  <div className='upperContainer2 '>
  <img src={Telephone} alt="Telephone" />
  <h3 className='inlineposition'> Contacts</h3>
    <div className='lowerContainer'>
    <br />
    <img src={Envelope} alt='Envelope'/>
    <h3 className='inlineposition smalltext'>coles@gmail.com</h3>
    <br />
    <br />
    <img src={Phone} alt='telephone'/>
    <h3 className='inlineposition smalltext'>0412402016</h3>
    </div>
  </div>
  </div>
  </td>
  </tr>
  </table>
</div>


<div className='column'>
<table>
  <tr>
    <td>
  <div className='center3'>
  <div className='Card3'>
  <div className='upperContainer2 '>
  <img src={SmileyFace} alt="SmileyFace" />
  <h3 className='inlineposition'> About Us</h3>
    <div className='lowerContainer'>
    <br />
    <h3 className='inlineposition smalltext'>Coles is a leading Australian retailer, with over 2,500 retail outlets nationally. Coles makes life easier for Australians by delivering quality, value and service. We process more than 20 million customer transactions each week, providing our customers with products from thousands of farmers and suppliers. </h3>
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
  </div>
  </>
  )
}
export default OrganisationForm
