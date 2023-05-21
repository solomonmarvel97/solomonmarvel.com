<template>
  <div class="form-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :disabled="disabled"
      @input="$emit('update:value', $event.target.value)"
    />
    <button v-if="icon_right"></button>
  </div>
</template>

<script>
export default {
  props: {
    icon_left: {
      type: String,
    },
    icon_right: {
      type: String,
    },
    value: {
      type: String,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:value"]

};
</script>

<style scoped>
.form-input {
  padding: 10px;
  height: 42px;
  gap: 10px;
  align-items: center;
  border-radius: var(--border-radius);
  width: 100%;
}

.input--icon {
  object-fit: auto;
  height: 21px;
  width: 21px;
}

input {
  all: unset;
  width: 100%;
}

input::placeholder {
  color: #b7b7b7;
}
</style>
