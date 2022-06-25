export default function Index() {
  return (
    <main className="bg-gray-900 min-h-screen pt-20 md:pt-48 font-['Inter'] text-gray-300">
      <article className="max-w-screen-md mx-auto px-6">
        <h1 className="text-white text-3xl mb-4 font-semibold">
          Hi, my name is Michael.
        </h1>
        <p className="mb-12">
          I'm a{' '}
          <span className="bg-gray-700 px-2 py-0.5 rounded-md font-semibold">
            JavaScript Engineer
          </span>{' '}
          working at{' '}
          <a
            className="bg-[#5333ed] px-2 py-0.5 text-white hover:bg-white hover:text-[#5333ed] transition-all font-semibold rounded-md"
            href="https://kinsta.com/"
          >
            Kinsta
          </a>
          .
        </p>

        <img
          src="/img/cover.jpeg"
          alt="Michael in is element"
          className="mb-16 saturate-50"
        />
      </article>
    </main>
  )
}
