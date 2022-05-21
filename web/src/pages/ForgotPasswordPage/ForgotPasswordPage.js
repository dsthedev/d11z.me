import { useEffect, useRef } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

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
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="p-4 mx-auto max-w-prose">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="text-3xl text-center">
              <h2>
                Forgot Password
              </h2>
            </header>

            <div className="max-w-40">
              <div className="flex flex-col">
                <Form onSubmit={onSubmit} className="flex flex-col">
                  <div className="text-left">
                    <Label
                      name="username"
                      className="rw-label"
                      errorClassName="rw-label rw-label-error"
                    >
                      Username
                    </Label>
                    <TextField
                      name="username"
                      className="mb-2 p-2 border-b-2 border-b-slate-800"
                      errorClassName="mb-2 p-2 border-b-2 border-b-slate-800 mb-2 p-2 border-b-2 border-b-slate-800-error"
                      ref={usernameRef}
                      validation={{
                        required: true,
                      }}
                    />

                    <FieldError name="username" className="rw-field-error" />
                  </div>

                  <div className="">
                    <Submit className="px-4 py-1 hover:text-amber-800">Submit</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ForgotPasswordPage
