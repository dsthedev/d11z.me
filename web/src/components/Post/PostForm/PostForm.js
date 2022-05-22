import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form
        onSubmit={onSubmit}
        error={props.error}
        className="flex flex-col text-left"
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="isSticky"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sticky?
        </Label>

        <CheckboxField
          name="isSticky"
          defaultChecked={props.post?.isSticky}
          className="p-1 mb-2 border-2 border-zinc-300"
          errorClassName="p-1 mb-2 border-2 border-zinc-300 p-1 mb-2 border-2 border-zinc-300-error"
        />

        <FieldError name="isSticky" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="p-1 mb-2 border-2 border-zinc-300"
          errorClassName="p-1 mb-2 border-2 border-zinc-300 p-1 mb-2 border-2 border-zinc-300-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.post?.slug}
          className="p-1 mb-2 border-2 border-zinc-300"
          errorClassName="p-1 mb-2 border-2 border-zinc-300 p-1 mb-2 border-2 border-zinc-300-error"
          validation={{ required: true }}
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextAreaField
          name="body"
          defaultValue={props.post?.body}
          className="p-1 mb-2 border-2 border-zinc-300"
          errorClassName="p-1 mb-2 border-2 border-zinc-300 p-1 mb-2 border-2 border-zinc-300-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
