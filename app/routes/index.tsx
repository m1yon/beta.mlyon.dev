import { Highlighted } from '~/components'

export default function Index() {
  return (
    <main className="min-h-screen pt-20 md:pt-48 font-['Inter'] text-gray-300 leading-8">
      <article className="max-w-screen-md mx-auto px-6">
        <h1 className="text-white text-3xl font-semibold">
          Hi, my name is Michael.
        </h1>
        <p className="mt-0">
          I'm a{' '}
          <Highlighted className="bg-gray-700">JavaScript Engineer</Highlighted>{' '}
          working at{' '}
          <Highlighted
            className="bg-[#5333ed] hover:text-[#5333ed] hover:bg-white"
            href="https://kinsta.com/"
          >
            Kinsta
          </Highlighted>
        </p>

        <img
          src="/img/cover.jpeg"
          alt="Michael in is element"
          className="saturate-50"
        />
        <p>
          I've built products ranging from{' '}
          <a href="https://www.prnewswire.com/news-releases/electronic-caregiver-releases-addi-2-0--a-highly-intelligent-and-engaging-platform-designed-to-deliver-value-based-care-built-on-aws-addi-provides-100x-scalability-to-meet-the-surging-demand-for-telehealth-301385791.html">
            remote patient monitoring
          </a>{' '}
          to{' '}
          <a href="https://www.krqe.com/health/coronavirus-new-mexico/new-mexico-company-creates-app-to-track-risks-in-covid-19-hotspots/">
            COVID tracking for professional athletes
          </a>{' '}
          to{' '}
          <a href="https://kinsta.com/">
            fully-fledged cloud hosting platforms
          </a>
          .
        </p>
        <p>My goal is to make the world a better place through software.</p>
      </article>
    </main>
  )
}
