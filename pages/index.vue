<template>
  <div class="container">
    <input type="text" v-model="test" />
    <!-- propsの呼び出し方法は、キャメルケースではなくケバブケース -->
    <!-- このようにonClickをon-clickに直さないと動作しない -->
    <MethodsButton
      btnName="送信"
      btnColor="blue"
      btnType="round"
      btnSize="small"
      :on-click="testMessage"
    />
  </div>
</template>

<script>
import MethodsButton from '@/components/Atoms/MethodsButton';
export default {
  components: {
    MethodsButton,
  },
  data() {
    return {
      test: '',
    };
  },
  methods: {
    testMessage() {
      console.log(this.test);
    },
  },
};
</script>

<style></style>
