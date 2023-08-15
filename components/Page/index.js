import BlockRenderer from 'components/BlockRenderer'
import MainMenu from 'components/Menu'

export const Page = ({
  blocks,
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
