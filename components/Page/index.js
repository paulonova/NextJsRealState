import BlockRenderer from '@components/BlockRenderer'
import MainMenu from '@components/Menu'

const Page = ({
  mainMenuItems,
  callToActionLabel,
  callToActionDestination,
}) => {
  return (
    <div>
      <MainMenu
        items={mainMenuItems}
        callToActionLabel={callToActionLabel}
        callToActionDestination={callToActionDestination}
      />
      <BlockRenderer blocks={blocks} />
    </div>
  )
}

export default Page
