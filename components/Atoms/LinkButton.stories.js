import LinkButton from './LinkButton.vue';

export default {
  title: 'Components/Atoms/LinkButton',
  component: 'LinkButton',
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
  components: { LinkButton },
  props: Object.keys(argTypes),
  template: "<LinkButton :btnName='btnName' :to='to' v-bind='$props' />",
});

export const Primary = Template.bind({});
Primary.args = {
  btnName: 'ボタン①',
  link: '/',
  btnColor: 'olive',
  btnType: 'normal',
  btnSize: 'xlarge',
  isIcon: true,
  iconType: 'fas',
  iconName: 'arrow-right',
};
Primary.storyName = 'ノーマルボタン';

export const Secondary = Template.bind({});
Secondary.args = {
  btnName: 'ボタン②',
  link: '/',
  btnColor: 'blue',
  btnType: 'rounded-corners',
  btnSize: 'large',
};
Secondary.storyName = '角丸ボタン';

export const Tertiary = Template.bind({});
Tertiary.args = {
  btnName: 'ボタン③',
  link: '/',
  btnColor: 'orange',
  btnType: 'round',
  btnSize: 'medium',
};
Tertiary.storyName = '丸ボタン';

// export const Quaternary = Template.bind({});
// export const Quinary = Template.bind({});
// export const Senary = Template.bind({});
// export const Septenary	 = Template.bind({});
// export const Octonary = Template.bind({});
// export const Novenary = Template.bind({});
// export const Decenary = Template.bind({});
