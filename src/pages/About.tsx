export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
        About
      </h1>
      <p className="mt-4 text-neutral-600">
        This page lives at{' '}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
          /about
        </code>
        .
      </p>

      <div className="mt-8 flex gap-3">
        <a
          href="/home"
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Go to Home
        </a>
      </div>
    </section>
  )
}
