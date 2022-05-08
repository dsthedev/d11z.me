import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import FutureImperfectSingleLayout from '../FutureImperfectSingleLayout/FutureImperfectSingleLayout'

const RatesLayout = ({ children }) => {
  return (
    <FutureImperfectSingleLayout>
      <section className="post">
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <header>
          <div className="title">
            <h1>
              <Link to={routes.rates()} className="link">
                Rates
              </Link>
            </h1>
          </div>
          <div className="meta">
            <Link to={routes.newRate()} className="button small">
              New Rate
            </Link>
          </div>
        </header>
        <main className="main">{children}</main>
      </section>
    </FutureImperfectSingleLayout>
  )
}

export default RatesLayout
