import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const TaxonomyForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.taxonomy?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.taxonomy?.name}
          className="p-2 mb-2 border-b-2 border-stone-400 "
          errorClassName="p-2 mb-2 border-b-2 border-stone-400  p-2 mb-2 border-b-2 border-stone-400 -error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.taxonomy?.slug}
          className="p-2 mb-2 border-b-2 border-stone-400 "
          errorClassName="p-2 mb-2 border-b-2 border-stone-400  p-2 mb-2 border-b-2 border-stone-400 -error"
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.taxonomy?.type}
          className="p-2 mb-2 border-b-2 border-stone-400 "
          errorClassName="p-2 mb-2 border-b-2 border-stone-400  p-2 mb-2 border-b-2 border-stone-400 -error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.taxonomy?.description}
          className="p-2 mb-2 border-b-2 border-stone-400 "
          errorClassName="p-2 mb-2 border-b-2 border-stone-400  p-2 mb-2 border-b-2 border-stone-400 -error"
        />

        <FieldError name="description" className="rw-field-error" />

        <div className="flex flex-row">
          <Submit
            disabled={props.loading}
            className="px-3 py-1 bg-slate-600 hover:bg-slate-800 text-slate-100"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaxonomyForm
