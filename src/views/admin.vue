<template>
  <div id="admin"> 
        <div class="child_router">
           <aside>
             <ul class="nav_list">
               <li v-for="(item,index) in $router.options.routes">
                  <router-link :to="{path:item.path}">
                    {{ item.alias }}
                  </router-link>
                  <i>></i>
                  <div class="child_span">
                    <router-link :to="{path:item.path+'/'+child.path}" v-for="child in item.children">{{ child.alias }}</router-link>
                  </div>
               </li>
             </ul>
           </aside>
           <section>
              <router-view></router-view> 
           </section>
        </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
    
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
#admin{
  width: 1226px;
  height: 465px;
  margin: 10px auto;
    .child_router{
       width: 100%;
       height: 100%;
       display: flex;
       justify-content: space-start;
       margin:0 auto;
         aside{
           width: 210px;
           height: 100%;
           background: rgba(0,0,0,0.5);
             .nav_list{
               width: 210px;
               height: 100%;
               margin: 0;
               padding: 0;
                  li{
                     list-style: none;
                     width: 100%;
                     height: 35px;
                     position: relative;
                     margin: 10px 0 0 0;
                     line-height: 35px;
                     display:flex;
                     justify-content:space-between;
                      i{
                        color:rgba(255,255,255,0.5);
                        margin:0 10px 0 0;
                        font-size:20px;
                        cursor:pointer;
                        font-weight:600;
                      }
                       .child_span{
                          width: 300px;
                          height: auto;
                          position: absolute;
                          left: 210px;
                          top: -7px;
                          display: none;
                            a{
                              width: 100%;
                              height: 40px;
                              cursor: pointer;
                              background: #fff;
                              line-height: 40px;
                              display: block;
                              margin: 5px 0 0 0;
                              color:#000;
                            }
                       }
                  }
                  li:nth-of-type(1){
                    display: none;
                  }
                  li:hover{
                    background: #ff6700;
                  }
                  li:hover .child_span{
                    display: block
                  }
                  a{
                    text-decoration: none;
                    color:#fff;
                    margin:0 0 0 10px;
                  }
             }
         }
         section{
          width: 100%;
          height: 100%;
          background: url(../assets/1.jpg);
          background-size:cover;
         }
    }
}
</style>