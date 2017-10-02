<template>
  <div>
    <p>基本卡片</p>
    <mv-card class="blue-grey darken-1" style="width: 256px;" headerClassname="white-text">
      <template slot="header">卡片标题</template>
      <p class="white-text">我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <div slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </div>
    </mv-card>

    <p>图像卡片</p>
    <mv-card type="card" :image="image" style="width: 300px;">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <div slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </div>
    </mv-card>
    <mv-card type="image" :image="image" style="width: 300px;">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <div slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </div>
    </mv-card>

    <p>FABs in Cards</p>
    <mv-card type="image" :image="image" style="width: 300px;" :fab="true">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
    </mv-card>

    <mv-card :image="image" style="width: 300px;" :fab="true" fab-size="large">
      <div slot="header">卡片标题</div>
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
    </mv-card>

    <p>Horizontal Card</p>
    <mv-card horizontal :image="require('../../document/assets/horizontal-card.jpg')" style="width: 300px;">
      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
      <template slot="action">
        <a href="#">这是一个链接</a>
      </template>
    </mv-card>

    <p>Card Reveal</p>
    <mv-card :image="image" style="width: 320px;" reveal>
      <template slot="header">卡片标题</template>
      <p><a href="#">这是一个链接</a></p>
      <p slot="revealBody">Here is some more information about this product that is only revealed once clicked on.</p>
    </mv-card>

    <mv-card :image="image" style="width: 320px;" reveal sticky>
      <template slot="header">卡片标题</template>
      <p><a href="#">这是一个链接</a></p>
      <p slot="revealBody">Here is some more information about this product that is only revealed once clicked on.</p>
      <div slot="action">
        <a href="#">这是一个链接</a>
        <a href="#">这是一个链接</a>
      </div>
    </mv-card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        image: require('../../document/assets/card.jpg')
      }
    }
  }
</script>
