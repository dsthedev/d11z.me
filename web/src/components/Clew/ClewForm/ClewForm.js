import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ClewForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.clew?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error} className="flex flex-col">
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="for"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          For
        </Label>

        <TextField
          name="for"
          defaultValue={props.clew?.for}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="for" className="rw-field-error" />

        <Label
          name="username"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Username
        </Label>

        <TextField
          name="username"
          defaultValue={props.clew?.username}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="username" className="rw-field-error" />

        <Label
          name="email"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.clew?.email}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="hint"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Hint
        </Label>

        <TextField
          name="hint"
          defaultValue={props.clew?.hint}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hint" className="rw-field-error" />

        <Label
          name="symbols"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Symbols
        </Label>

        <TextField
          name="symbols"
          defaultValue={props.clew?.symbols}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="symbols" className="rw-field-error" />

        <Label
          name="context"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Context
        </Label>

        <TextField
          name="context"
          defaultValue={props.clew?.context}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="context" className="rw-field-error" />

        <Label
          name="loginURL"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Login url
        </Label>

        <TextField
          name="loginURL"
          defaultValue={props.clew?.loginURL}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="loginURL" className="rw-field-error" />

        <Label
          name="licenseKey"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          License key
        </Label>

        <TextField
          name="licenseKey"
          defaultValue={props.clew?.licenseKey}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="licenseKey" className="rw-field-error" />

        <Label
          name="notes"
          className="font-bold"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.clew?.notes}
          className="p-2 mb-2 border-2 border-slate-300 hover:border-slate-500"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="block px-3 py-2 text-white bg-green-600 hover:bg-green-800"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClewForm
