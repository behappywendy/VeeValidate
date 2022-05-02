<template>
  <h2>CustomForm</h2>
  <p>props:{{ value }}</p>
  <hr />
  <li v-for="field in value.fields" :key="field.name">{{ field }}</li>
  <hr />
  <Form>
    <div v-for="{ name, label, children, ...attrs } in value.fields" :key="name"
     class="wrap_input">
      <label :for="name">{{ label }}</label>
      <p>attrs:{{ attrs }}</p>
      <Field :name="name" :id="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component v-for="({ tag, text, ...childAttrs }, idx) in children" 
          :key="idx" :is="tag" v-bind="childAttrs">
            {{ text }}
          </component>
        </template>
      </Field>
    </div>

    <button>同意</button>
  </Form>
</template>

<script>
import { Form, Field } from "vee-validate";
export default {
  name: "CustomValue",
  props: {
    value: { type: Object, required: true },
  },
  components: { Form, Field },
};
</script>

<style scoped>
.wrap_input {
  margin-bottom: 20px;
}
</style>
