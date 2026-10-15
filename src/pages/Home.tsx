import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
        Home
      </h1>
      <p className="mt-4 text-neutral-600">
        Welcome to inventor-re. This page lives at{' '}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
          /home
        </code>
        .
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          to="/about"
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Go to About
        </Link>
        <Link
          to="/dashboard"
          className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
        >
          Go to Dashboard
        </Link>
      </div>
    </section>
  )
}
