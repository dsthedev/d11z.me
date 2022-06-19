import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="p-4 mx-auto max-w-prose">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="text-3xl text-center">
              <h2>Signup Page</h2>
            </header>

            <div className="max-w-40">
              <div className="flex flex-col">
                <Form onSubmit={onSubmit} className="flex flex-col">
                  <TextField
                    name="username"
                    className="mb-2 p-2 border-b-2 border-b-slate-800"
                    errorClassName="mb-2 p-2 border-b-2 border-b-slate-800 mb-2 p-2 border-b-2 border-b-slate-800-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />
                  <Label
                    name="username"
                    className="p-1 mt-2 mx-4"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>

                  <FieldError name="username" className="rw-field-error" />

                  <PasswordField
                    name="password"
                    className="mb-2 p-2 border-b-2 border-b-slate-800"
                    errorClassName="mb-2 p-2 border-b-2 border-b-slate-800 mb-2 p-2 border-b-2 border-b-slate-800-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <Label
                    name="password"
                    className="p-1 mt-2 mx-4"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>

                  <FieldError name="password" className="rw-field-error" />

                  <div className="text-center">
                    <Submit className="text-2xl px-4 py-1 my-4 hover:text-amber-800">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="my-4 text-center">
            <span>Already have an account?</span>{' '}
            <Link
              to={routes.login()}
              className="px-4 py-1 hover:text-amber-800"
            >
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
