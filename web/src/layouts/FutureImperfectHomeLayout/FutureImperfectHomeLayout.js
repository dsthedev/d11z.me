import FutureImperfectHeader from 'src/components/FutureImperfectHeader'
import FutureImperfectMenu from 'src/components/FutureImperfectMenu'
import FutureImperfectIntro from 'src/components/FutureImperfectIntro'
import FutureImperfectBlurb from 'src/components/FutureImperfectBlurb'
import FutureImperfectFooter from 'src/components/FutureImperfectFooter'

import 'src/main.css'

const FutureImperfectHomeLayout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <FutureImperfectHeader />

        <FutureImperfectMenu />

        <main id="main">
          <FutureImperfectIntro></FutureImperfectIntro>

          {children}
        </main>

        <section id="sidebar">
          <FutureImperfectIntro></FutureImperfectIntro>

          <FutureImperfectBlurb></FutureImperfectBlurb>

          <FutureImperfectFooter></FutureImperfectFooter>
        </section>
      </div>
    </>
  )
}

export default FutureImperfectHomeLayout
