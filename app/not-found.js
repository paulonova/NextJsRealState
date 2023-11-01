import ButtonLink from 'components/ButtonLink';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-16">
      <h2 className="text-5xl">404 - Not Found</h2>
      <p className="mt-5">Could not find requested resource</p>
      <ButtonLink label="Return Home" destination="/" />
    </div>
  );
}
