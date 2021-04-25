<template>
    <div>
        <h2 :class="className">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Heading2',
    props: {
        title: {
            type: String,
            required: true,
        },
        className: {
          type: String,
          required: true
        }
    },
};
</script>

<style lang="scss" scoped>
.el-lv2Heading {
    padding: 1.5rem; /*文字の上下 左右の余白*/
    font-size: 1.75rem;
    color: #111111; /*文字色*/
    background: #f4f4f4; /*背景色*/
    border-left: solid 5px #0074d9; /*左線*/
    border-bottom: solid 3px #d7d7d7; /*下線*/
    font-weight: bold;
}

.el-lv2Heading-2 {
  position: relative;
  font-size: 1.75rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;

  &::before {
    position: absolute;
    bottom: -5px;
    left: calc(50% - 30px);
    width: 60px;
    height: 5px;
    content: '';
    border-radius: 3px;
    background: #0074d9;
  }
}
</style>