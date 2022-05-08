import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="form-error-wrapper"
          titleClassName="form-error-title"
          listClassName="form-error-list"
        />

        <Label
          name="title"
          className="label"
          errorClassName="label label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="field-error" />

        <Label name="body" className="label" errorClassName="label label-error">
          Body
        </Label>

        <TextField
          name="body"
          defaultValue={props.post?.body}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="field-error" />

        <div className="button-group">
          <Submit disabled={props.loading} className="button button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
