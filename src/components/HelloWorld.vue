<template>
  <Form @submit="onSubmit">
    <p>名字</p>
    <Field name="name" type="name" :rules="validateName"></Field>
    <ErrorMessage name="name"></ErrorMessage>
    <p>信箱</p>
    <Field name="email" type="email" :rules="validateEmail"></Field>
    <ErrorMessage name="email"></ErrorMessage>
    <button>確認</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "HelloWorld",
  components: { Form, Field, ErrorMessage },
  props: {},
  data() {
    return {};
  },
  methods: {
    onSubmit(e) {
      console.log(e);
    },
    validateName(value) {
      if (value) {
        return true;
      }
      return "name 輸入空值";
    },
    validateEmail(value) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailRegex.test(value)) {
        return "e-mail非有效格式";
      }
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
