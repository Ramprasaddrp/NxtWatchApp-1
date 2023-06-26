import Loader from 'react-loader-spinner'
import LoaderContainer from './StyledComponents'

const LoaderBox = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
  </LoaderContainer>
)

export default LoaderBox
