<script>
import menuTitle from '../../components-menu-props/menuTitle.vue';
export default {
  name: "adsInterestCategories",
  components: {
    menuTitle,
  },
  data: function () {
    return {
      header: 'Interest categories',
      buttonTextRemove: 'Remove',
      // Items from personal Facebook profile - Nov. 11th 2022
      categories:[
        {name: 'Online Shopping'},
        {name: 'Mobile game'},
        {name: 'Do it yourself (DIY)'},
        {name: 'Toys'},
        {name: 'Shoes'},
        {name: 'Jigsaw puzzle'},
        {name: 'Top (clothing)'},
        {name: 'Sustainable fashion'},
        {name: 'Hobbycraft'},
        {name: 'Swimsuit'},
        {name: 'Smartwatch'},
        {name: 'Shopping'},
        {name: 'Video games'},
        {name: 'Organic farming'},
        {name: 'Clothing'},
        {name: 'Agriculture'},
        {name: 'Sustainable clothing'},
        {name: 'Sweater'},
        {name: 'Smartphones'},
        {name: 'Hoodie'},
        {name: 'Boot'},
        {name: 'Sportswear (activewear'},
        {name: 'T-shirt'},
        {name: 'Coloring book'},
        {name: 'Hip hop fashion'},
        {name: 'Undergarment'},
        {name: 'Mobile phones'},
        {name: 'Shorts'},
        {name: 'Tablet computers'},
        {name: 'Crafts'},
        {name: 'Ethical consumerism'},
        {name: 'Shirts'},
        {name: 'Application software'},
        {name: 'DIY (magazine)'},
        {name: 'Creativity'},
        {name: 'Databases'},
        {name: 'Mobile device'},
        {name: 'Manufacturing'},
        {name: 'Software'},
        {name: 'Dress shirt'},
        {name: 'Games'},
        {name: 'Sweatpants'},
        {name: 'Sock'},
        {name: 'Western wear'},
        {name: 'American English'},
        {name: 'Swim briefs'},
        {name: 'Formal wear'},
        {name: 'Crop'},
        {name: 'Yarn'},
        {name: 'Mobile app'},
        {name: 'Tracksuit'},
        {name: 'Silk'},
        {name: 'Hosiery'},
        {name: 'British English'},
        {name: 'Textile industry'},
        {name: 'Textile'},
        {name: 'Punk fashion'},
        {name: 'Felt'},
        {name: 'Cotton'},
        {name: 'Chemical industry'},
        {name: 'Tradition'},
        {name: 'Tablecloth'},
        {name: 'Unisex'},
        {name: 'Seed'},
        {name: 'Knowledge'},
        {name: 'Social network'},
        {name: 'Fiber'},
        {name: '1990s in fashion'},
        {name: 'Sleeve'},
        {name: 'Email'},
        {name: '2010s in fashion'},
        {name: 'Globalization'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Removing yourself from an interest category prevents advertisers from reaching you by indicating that their ads should be shown to people in that specific interest category. It doesn't affect the number of ads you see overall. We may still show you adds related to these categories if we think these ads may be relevant to you.</p>
    <hr>
    <br>
    <div class="item-row"
         v-for="item in categories"
    >
      <p>{{item.name}}</p>
      <button :id="'interest-category-'+item.name"
              class="content-button path-node"
      >{{buttonTextRemove}}</button>
    </div>

  </div>
</div>
</template>

<style scoped>
.frame-inner{
  width: 95%;
  margin: 0 auto;
}

.item-row{
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding-bottom: 2vh;
}

.content-button{
  background: #e3e3e3;
  color: #282828;
  width: 100%;
}

.content-button:active {
  background: #939393;
}
</style>