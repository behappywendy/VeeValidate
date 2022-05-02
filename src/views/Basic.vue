<template>
  <h1>Basic_form</h1>
  <h2>Field validation</h2>
  <Form>
    <p>name</p>
    <Field name="name" :rules="isRequired" />
    <ErrorMessage name="name"></ErrorMessage>
    <p>password</p>
    <Field name="password" :rules="passwordRules" />
    <ErrorMessage name="password" />
  </Form>
  <hr />
  <h2>Form validation</h2>
  <Form :validation-schema="mySchema">
    <p>name</p>
    <Field name="name" />
    <p>email</p>
    <Field name="email" />
  </Form>
  <hr />
  <h2>Form validation</h2>
  <Form :validation-schema="yupSchema">
    <p>name</p>
    <Field name="name" />
    <p>email</p>
    <Field name="email" />
  </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      passwordRules: yup.string().required().min(8),
      mySchema: {
        email(value) {
          console.log("email", value);
        },
        name(value) {
          console.log("name", value);
        },
      },
      yupSchema: yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
    },
  },
};
</script>
