import FutureImperfectHeader from 'src/components/FutureImperfectHeader'
import FutureImperfectMenu from 'src/components/FutureImperfectMenu'
import FutureImperfectIntro from 'src/components/FutureImperfectIntro'
import FutureImperfectBlurb from 'src/components/FutureImperfectBlurb'
import FutureImperfectFooter from 'src/components/FutureImperfectFooter'

import 'src/main.css'

const FutureImperfectSingleLayout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <FutureImperfectHeader />

        <FutureImperfectMenu />

        <main id="main">
          {children}

          <FutureImperfectFooter></FutureImperfectFooter>
        </main>
      </div>
    </>
  )
}

export default FutureImperfectSingleLayout
