<template>
  <h1>DynamicForm</h1>
  <CustomForm :value="formSchema"></CustomForm>
</template>

<script>
import CustomForm from "@/components/CustomForm.vue";
export default {
  components: { CustomForm },
  data() {
    return {
      formSchema: {
        fields: [
          {
            label: "Your Name",
            name: "name",
            as: "input",
          },
          {
            label: "Your Email",
            name: "email",
            as: "input",
          },
          {
            label: "Your Password",
            name: "password",
            as: "input",
          },
          {
            label: "Favorite Drink",
            name: "drink",
            as: "select",
            children: [
              {
                tag: "option",
                value: "",
                text: "",
              },
              {
                tag: "option",
                value: "coffee",
                text: "Coffeee",
              },
              {
                tag: "option",
                value: "tea",
                text: "Tea",
              },
              {
                tag: "option",
                value: "coke",
                text: "Coke",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
