import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="authorId"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>

        <NumberField
          name="authorId"
          defaultValue={props.post?.authorId}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="authorId" className="rw-field-error" />

        <Label
          name="parentId"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Parent id
        </Label>

        <NumberField
          name="parentId"
          defaultValue={props.post?.parentId}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="parentId" className="rw-field-error" />

        <Label
          name="postType"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Post type
        </Label>

        <TextField
          name="postType"
          defaultValue={props.post?.postType}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="postType" className="rw-field-error" />

        <Label
          name="isSticky"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Is sticky
        </Label>

        <CheckboxField
          name="isSticky"
          defaultChecked={props.post?.isSticky}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isSticky" className="rw-field-error" />

        <Label
          name="pStatus"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          P status
        </Label>

        <TextField
          name="pStatus"
          defaultValue={props.post?.pStatus}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pStatus" className="rw-field-error" />

        <Label
          name="title"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="slug"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.post?.slug}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="body"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextField
          name="body"
          defaultValue={props.post?.body}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
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
