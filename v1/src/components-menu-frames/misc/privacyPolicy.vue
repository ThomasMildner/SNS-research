<script>
import menuTitle from '../../components-menu-props/menuTitle.vue';
export default {
  name: "privacyPolicy",
  components: {
    menuTitle
  },
  data: function() {
    return{
      header: 'Privacy Policy'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Declaration of consent</h2>
    <div>
      <p>The aim of this study is to gain an understanding of how interface structures of menus impact user experience</p>
      <ul>
        <li>You are free to withdraw at any time without providing any reason. If you withdraw, your data will be fully deleted. In this case, following Prolific's guidlines, you may be entitled to a decreased payment depending on the time you left the study.</li>
        <li>To ensure participants only take part once in this study, we will record you public IP Address and geolocation. This information only used for this reason and will not be shared with others and only used for verification. All data will be fully anonymised with no option to trace it back to you as a person.</li>
        <li>We intend publishing academic research papers based on findings from this study. Anonymised and de-identified data will, therefore, be stored for at least 4 years, as required by most major publishing venues.</li>
        <li>All data will be processed and stored in accordance with GDPR and the Bremen Data Protection Act. </li>
        <li>All data will be anonymised and data relevant to your participation will only be accessible by contacting milder@uni-bremen.de using your Prolific ID. This is only possible before the data is fully anonymised. Then, all links between your personal and your data will be destroyed.</li>
      </ul>
    </div>
  </div>
</div>
</template>


<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}
</style>