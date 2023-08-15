import ButtonLink from 'components/ButtonLink'

const CallToActionButton = ({
  buttonLabel,
  buttonDestination,
  buttonAlign = 'left',
}) => {
  const alignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }
  return (
    <div className={alignMap[buttonAlign]}>
      <ButtonLink label={buttonLabel} destination={buttonDestination} />
    </div>
  )
}

export default CallToActionButton
