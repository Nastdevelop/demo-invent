import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
        404
      </h1>
      <p className="mt-4 text-neutral-600">Page not found.</p>
      <Link
        to="/home"
        className="mt-8 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        Back to Home
      </Link>
    </section>
  )
}
