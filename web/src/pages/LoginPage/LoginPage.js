import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="p-4 mx-auto max-w-prose">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="text-3xl text-center">
              <h2>Enter Credentials</h2>
            </header>

            <div className="max-w-40">
              <div className="flex flex-col">
                <Form onSubmit={onSubmit} className="flex flex-col">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
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

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
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

                  <div className="text-center">
                    <Submit className=" border-2 border-stone-400 hover:border-stone-800 text-2xl px-8 py-1 my-2 hover:text-amber-800">
                      Login
                    </Submit>
                  </div>

                  <div className="text-center">
                    <Link
                      to={routes.forgotPassword()}
                      className="text-sm text-stone-600 mt-6"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FieldError name="password" className="rw-field-error" />
                </Form>
              </div>
            </div>
          </div>
          <div className="my-4 text-center">
            <span>Don&apos;t have an account?</span>{' '}
            <Link
              to={routes.signup()}
              className="px-4 py-1 hover:text-amber-800"
            >
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
