import MethodsButton from './MethodsButton.vue';

export default {
  title: 'Components/Atoms/MethodsButton',
  component: 'MethodsButton',
  argTypes: {
    btnColor: {
      control: {
        type: 'select',
        options: [
          'navy',
          'blue',
          'olive',
          'green',
          'orange',
          'red',
          'maroon',
          'fuchsia',
          'purple',
          'black',
          'gray',
        ],
      },
    },
    btnType: { control: { type: 'select', options: ['normal', 'rounded-corners', 'round'] } },
    btnSize: { control: { type: 'select', options: ['small', 'medium', 'large', 'xlarge'] } },
    isIcon: { control: { type: 'select', options: [true, false] } },
    iconType: { control: { type: 'select', options: ['fas', 'far', 'fab'] } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { MethodsButton },
  props: Object.keys(argTypes),
  template: "<MethodsButton :btnName='btnName' v-bind='$props' />",
});

export const Primary = Template.bind({});
Primary.args = {
  btnName: 'ボタン①',
  btnColor: 'olive',
  btnType: 'normal',
  btnSize: 'xlarge',
  isIcon: true,
  iconType: 'fas',
  iconName: 'arrow-right',
  onClick: '',
};
Primary.storyName = 'ノーマルボタン';

export const Secondary = Template.bind({});
Secondary.args = {
  btnName: 'ボタン②',
  btnColor: 'blue',
  btnType: 'rounded-corners',
  btnSize: 'large',
  onClick: '',
};
Secondary.storyName = '角丸ボタン';

export const Tertiary = Template.bind({});
Tertiary.args = {
  btnName: 'ボタン③',
  btnColor: 'orange',
  btnType: 'round',
  btnSize: 'medium',
  onClick: '',
};
Tertiary.storyName = '丸ボタン';

// export const Quaternary = Template.bind({});
// export const Quinary = Template.bind({});
// export const Senary = Template.bind({});
// export const Septenary	 = Template.bind({});
// export const Octonary = Template.bind({});
// export const Novenary = Template.bind({});
// export const Decenary = Template.bind({});
