import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import '../pages/pages.css'
const FullPageScroll = () => {
  return (
    <Fullpage className='pages-container'>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className='ps'>
          <h1>Screen 1</h1>
        </FullpageSection>
        <FullpageSection className='ps'>
          <h1>Screen 2</h1>
        </FullpageSection>
        <FullpageSection className='ps'>
          <h1>Screen 3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}
export default FullPageScroll
