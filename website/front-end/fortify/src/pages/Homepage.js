import GetHelp from '../component/homepage/GetHelp'
import HPCarousels from '../component/homepage/HPCarousels'
import SecurityE from '../component/homepage/SecurityE'
import SecurityStatistics from '../component/homepage/SecurityStatistics'
import SecurityVideo from '../component/homepage/SecurityVideo'

const Homepage = () => {
  return (
    <>
      <HPCarousels />
      <br />
      <SecurityE />
      <SecurityVideo />
      <SecurityStatistics />
      <GetHelp />
    </>
  )
}
export default Homepage
