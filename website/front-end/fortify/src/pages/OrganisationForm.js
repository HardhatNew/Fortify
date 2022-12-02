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

const OrganisationForm = () => {
  return (
  <>
  <div className='center'>
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
  </div>

  <div className='center2'>
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
  </div>

  </>
  )
}
export default OrganisationForm
