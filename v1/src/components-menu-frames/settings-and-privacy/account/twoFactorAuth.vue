<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuMultiRadioItem from '../../../components-menu-props/menuMultiRadioItem.vue'
export default {
  name: 'checkupTwoFactor',
  components: {
    menuTitle,
    menuMultiRadioItem
  },
  data: function () {
    return {
      header: 'Two-factor authentication',
      securityItemsName: 'security',
      securityItems: [
        {itemId: 'privacy-checkup-security-auth-app', itemName: 'Authentication App'},
        {itemId: 'privacy-checkup-security-auth-message', itemName: 'Text message'},
        {itemId: 'privacy-checkup-security-auth-key', itemName: 'Security key'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Help protect your account</h2>
    <p>If we notice an attempted login from a device or browser we don't recognise, we'll ask for your password and a verification code.</p>
    <h2>Select a security method</h2>
    <menu-multi-radio-item :radio-items="securityItems"
                           :radio-name="securityItemsName"
    ></menu-multi-radio-item>
    <div class="bottom-nav">
      <button @click="$router.push('MissingFeature')"
              id="privacy-checkup-secure-two-factor-next-button"
              class="content-button path-node">Continue</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.frame-inner h2{
  font-size: 3.5rem;
}

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.bottom-nav{
  top: 8vh;
  border-top: solid 1px #939393;
  position: relative;
  width: 98%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  z-index: 1;
}

.content-button {
  width: 100%;
  margin: 2vh auto;
  background: #3C8BFF;
  color: #ffffff;
}

.content-button:active{
  background: #0c56c9;
}

.blocked-list-link p{
  align-self: center;
  font-size: 2.6rem;
}

.blocked-list-link p:active{
  color: #0c56c9;
}
.list-element {
  display: grid;
  grid-template-columns: 1fr 5fr;
}


</style>