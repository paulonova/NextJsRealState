import Link from 'next/link'

const ButtonLink = ({ label, destination }) => {
  return (
    <Link href={destination} className="btn">
      {label}
    </Link>
  )
}

export default ButtonLink
