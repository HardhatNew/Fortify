import Ratio from 'react-bootstrap/Ratio'

const SecurityVideo = () => {
  return (
    <div className="security_video">
      <Ratio aspectRatio="16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/inWWhr5tnEA?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Ratio>
    </div>
  )
}
export default SecurityVideo
