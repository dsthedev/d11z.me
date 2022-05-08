import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const RateForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.rate?.id)
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
          name="value"
          className="label"
          errorClassName="label label-error"
        >
          Value
        </Label>

        <TextField
          name="value"
          defaultValue={props.rate?.value}
          className="input"
          errorClassName="input input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="value" className="field-error" />

        <Label
          name="currency"
          className="label"
          errorClassName="label label-error"
        >
          Currency
        </Label>

        <TextField
          name="currency"
          defaultValue={props.rate?.currency}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="currency" className="field-error" />

        <Label name="name" className="label" errorClassName="label label-error">
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.rate?.name}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="name" className="field-error" />

        <Label name="type" className="label" errorClassName="label label-error">
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.rate?.type}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="field-error" />

        <Label
          name="material"
          className="label"
          errorClassName="label label-error"
        >
          Material
        </Label>

        <TextField
          name="material"
          defaultValue={props.rate?.material}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="material" className="field-error" />

        <Label
          name="modifiers"
          className="label"
          errorClassName="label label-error"
        >
          Modifiers
        </Label>

        <TextField
          name="modifiers"
          defaultValue={props.rate?.modifiers}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="modifiers" className="field-error" />

        <Label name="unit" className="label" errorClassName="label label-error">
          Unit
        </Label>

        <TextField
          name="unit"
          defaultValue={props.rate?.unit}
          className="input"
          errorClassName="input input-error"
          validation={{ required: true }}
        />

        <FieldError name="unit" className="field-error" />

        <Label
          name="description"
          className="label"
          errorClassName="label label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.rate?.description}
          className="input"
          errorClassName="input input-error"
        />

        <FieldError name="description" className="field-error" />

        <div className="button-group">
          <Submit disabled={props.loading} className="button button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RateForm
