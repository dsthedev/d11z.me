import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const BookmarkForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.bookmark?.id)
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
          name="url"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.bookmark?.url}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="name"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.bookmark?.name}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.bookmark?.description}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="isSticky"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Is sticky
        </Label>

        <CheckboxField
          name="isSticky"
          defaultChecked={props.bookmark?.isSticky}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isSticky" className="rw-field-error" />

        <Label
          name="keywords"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Keywords
        </Label>

        <TextField
          name="keywords"
          defaultValue={props.bookmark?.keywords}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="keywords" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BookmarkForm
