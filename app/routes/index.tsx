export default function Index() {
  return (
    <main className="bg-gray-900 min-h-screen pt-60 font-['Inter']">
      <article className="max-w-screen-md mx-auto">
        <h1 className="text-white text-2xl mb-2 font-semibold">
          Hi, my name is Michael.
        </h1>
        <p className="text-gray-300 text-md">
          I'm a JavaScript Engineer working at{' '}
          <a
            className="bg-[#5333ed] px-1 hover:bg-gray-300 hover:text-[#5333ed] transition-all font-semibold"
            href="https://kinsta.com/"
          >
            Kinsta
          </a>
          .
        </p>
      </article>
    </main>
  )
}
