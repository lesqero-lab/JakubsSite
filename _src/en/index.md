---
layout: layouts/home.liquid
title: Jakub Chrenko, Portfolio
jobTitle: Graphic Designer
personalDescription:  Hello i am jakub and i do some cool and pretty things, and here you can check them out, i studied at this cool school and ive been focusing on this type of projects and these are my favourite mediums, wow such interesting things. These are the people who i work with wow, crazy
---


<div class="row">
  {%- for post in collections.post -%}
    <div class="col-auto container mt-5" style="width:100%; max-width: 500px;">
    <div class="image-overlay">
      <img src={{post.data.cover}} class="img-fluid">
      <div class="overlay-effect"></div>
      <div class="overlay-text"><h1><strong><a href={{post.url}}>{{ post.data.title }}</a></strong></h1></div>
    </div>
    </div>               
  {%- endfor -%}
</div>
