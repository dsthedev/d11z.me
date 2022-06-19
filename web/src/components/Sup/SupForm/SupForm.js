import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const SupForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.sup?.id)
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
          name="manufacturer"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Manufacturer
        </Label>

        <TextField
          name="manufacturer"
          defaultValue={props.sup?.manufacturer}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="manufacturer" className="rw-field-error" />

        <Label
          name="productRef"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Product ref
        </Label>

        <TextField
          name="productRef"
          defaultValue={props.sup?.productRef}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="productRef" className="rw-field-error" />

        <Label
          name="name"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.sup?.name}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="collection"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Collection
        </Label>

        <TextField
          name="collection"
          defaultValue={props.sup?.collection}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="collection" className="rw-field-error" />

        <Label
          name="type"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.sup?.type}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="categories"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Categories
        </Label>

        <TextField
          name="categories"
          defaultValue={props.sup?.categories}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="categories" className="rw-field-error" />

        <Label
          name="capsuleAmount"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Capsule amount
        </Label>

        <NumberField
          name="capsuleAmount"
          defaultValue={props.sup?.capsuleAmount}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="capsuleAmount" className="rw-field-error" />

        <Label
          name="servingSize"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Serving size
        </Label>

        <NumberField
          name="servingSize"
          defaultValue={props.sup?.servingSize}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="servingSize" className="rw-field-error" />

        <Label
          name="wMeal"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          W meal
        </Label>

        <CheckboxField
          name="wMeal"
          defaultChecked={props.sup?.wMeal}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="wMeal" className="rw-field-error" />

        <Label
          name="caution"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Caution
        </Label>

        <TextField
          name="caution"
          defaultValue={props.sup?.caution}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="caution" className="rw-field-error" />

        <Label
          name="ingredients"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Ingredients
        </Label>

        <TextField
          name="ingredients"
          defaultValue={props.sup?.ingredients}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="ingredients" className="rw-field-error" />

        <Label
          name="otherIngredients"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Other ingredients
        </Label>

        <TextField
          name="otherIngredients"
          defaultValue={props.sup?.otherIngredients}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="otherIngredients" className="rw-field-error" />

        <Label
          name="proprietaryBlend"
          className="p-1 mt-2 mx-4"
          errorClassName="rw-label rw-label-error"
        >
          Proprietary blend
        </Label>

        <TextField
          name="proprietaryBlend"
          defaultValue={props.sup?.proprietaryBlend}
          className="p-1 border-2 border-zinc-400 mb-6 mx-4"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="proprietaryBlend" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SupForm
