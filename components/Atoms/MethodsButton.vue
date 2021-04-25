<template>
  <div>
    <button :class="classes" @click="onClick()">
      {{ btnName }}
      <span v-if="isIcon">
        <fa :class="{ icon: isIcon }" :icon="[iconType, iconName]" />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MethodsButton',
  props: {
    btnName: {
      type: String,
      required: true,
    },
    btnColor: {
      type: String,
      default: 'blue',
      validator: function (value) {
        return (
          [
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
          ].indexOf(value) !== -1
        );
      },
    },
    btnType: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return ['normal', 'rounded-corners', 'round'].indexOf(value) !== -1;
      },
    },
    btnSize: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large', 'xlarge'].indexOf(value) !== -1;
      },
    },
    isIcon: {
      type: Boolean,
      default: false,
      validator: function (value) {
        return [true, false].indexOf(value) !== -1;
      },
    },
    iconType: {
      type: String,
      required: false,
      validator: function (value) {
        return ['fas', 'fab', 'far'].indexOf(value) !== -1;
      },
    },
    iconName: {
      type: String,
      required: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        'el-btn': true,
        [`${this.btnColor}`]: true,
        [`el-btn-type-${this.btnType}`]: true,
        [`el-btn-size-${this.btnSize}`]: true,
        'icon-btn': this.isIcon,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
// 共通レイアウト
.el-btn {
  display: inline-block;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition: 0.25s;
  cursor: pointer;
}
// ボタンタイプ
.el-btn-type-normal {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
.el-btn-type-rounded-corners {
  border-radius: 10px;
}
.el-btn-type-round {
  border-radius: 50px;
}

// ボタンサイズ
.el-btn-size-small {
  font-size: 14px;
  padding: 10px 24px;
}
.el-btn-size-medium {
  font-size: 16px;
  padding: 12px 28px;
}
.el-btn-size-large {
  font-size: 18px;
  padding: 14px 32px;
}
.el-btn-size-xlarge {
  font-size: 20px;
  padding: 16px 36px;
  width: 250px;
  max-width: 100%;
}

//アイコン
.icon-btn {
  position: relative;
  padding-right: 2em;
  padding-left: 1.38em;
}
.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.83em;
  font-weight: 900;
}

//ボタンの色
.navy {
  background-color: #001f3f;
  border: 2px solid transparent;
  border-bottom-color: #000e1d;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #001f3f;
  }
}
.blue {
  background-color: #0074d9;
  border: 2px solid transparent;
  border-bottom-color: #0062b7;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #0074d9;
  }
}
.olive {
  background-color: #3d9970;
  border: 2px solid transparent;
  border-bottom-color: #33815e;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #3d9970;
  }
}
.green {
  background-color: #2ecc40;
  border: 2px solid transparent;
  border-bottom-color: #28b037;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #2ecc40;
  }
}
.orange {
  background-color: #ff851b;
  border: 2px solid transparent;
  border-bottom-color: #f87300;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #ff851b;
  }
}
.red {
  background-color: #ff4136;
  border: 2px solid transparent;
  border-bottom-color: #ff2114;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #ff4136;
  }
}
.maroon {
  background-color: #85144b;
  border: 2px solid transparent;
  border-bottom-color: #67103a;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #85144b;
  }
}
.fuchsia {
  background-color: #f012be;
  border: 2px solid transparent;
  border-bottom-color: #d30da6;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #f012be;
  }
}
.purple {
  background-color: #b10dc9;
  border: 2px solid transparent;
  border-bottom-color: #950ba9;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #b10dc9;
  }
}
.black {
  background-color: #111111;
  border: 2px solid transparent;
  border-bottom-color: #000;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #111111;
  }
}
.gray {
  background-color: #aaaaaa;
  border: 2px solid transparent;
  border-bottom-color: #999999;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #aaaaaa;
  }
}
</style>
