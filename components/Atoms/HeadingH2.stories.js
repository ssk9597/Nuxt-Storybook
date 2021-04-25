import HeadingH2 from "./HeadingH2.vue";

export default {
  title: "Components/Atoms/HeadingH2",
  component: "HeadingH2"
};

const Template = (args, { argTypes }) => ({
  components: { HeadingH2 },
  props: Object.keys(argTypes),
  template: "<HeadingH2 :title='title' :className='className' />"
})

export const Primary = Template.bind({});
Primary.args = { title: "見出し2です", className: "el-lv2Heading" };
Primary.storyName = "見出し2デザイン①";

export const Secondary = Template.bind({});
Secondary.args = { title: "見出し2です", className: "el-lv2Heading-2"};
Secondary.storyName = "見出し2デザイン②";