import { Page } from 'components/Page'
import { getPageStaticProps } from 'utils/getPageStaticProps'

/**
 * Estou substituindo
 * export default Home=(props)=>{
 * return(
 *  <div>
 *      <MainMenu
 *        item: {props.mainMenu}
 *        callToActionDestination:{props.callToActionDestination}
 *         callToActionLabel:{props.callToActionLabel}
 *      />
 *  </div>
 * )
 * }
 */

export default Page

export const getStaticProps = getPageStaticProps
