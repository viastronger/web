<template>
  <footer>
    <section class="footer">
      <img src="@/assets/images/footer/footer_bg.png" alt="" />
      <div class="phone-box">
        <img src="@/assets/images/footer/phone.png" alt="" />
        {{ contactNumber }}
      </div>
      <div class="ewm-box">
        <img src="@/assets/images/footer/weixin_ewm.jpg" alt="" />
        <img src="@/assets/images/footer/service_ewm.jpg" alt="" />
      </div>
      <TheMap class="map"></TheMap>
    </section>

    <section class="bot-link">
      <div class="left">
        <img src="@/assets/images/logo/logo_light.png" alt="" />
        <div class="copyright">Copyright © 2022-2029 All Rights Reserved.</div>
        <div class="record">
          <img
            class="security"
            src="@/assets/images/footer/publicSecurityLogo.png"
            alt=""
          />
          <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2022023635号 </a>
          <span> | </span>
          <a href="http://cyberpolice.mps.gov.cn/" target="_blank">
            浙公网安备 33011002016623号
          </a>
        </div>
      </div>

      <div class="right">
        <ul>
          <li>
            <div class="title">相关网站</div>
            <div class="link">
              <a href="https://xgl-train.yilife.cn/home" target="_blank">香格里培训 </a>
            </div>
            <!-- <div class="link">珅昕陪护</div> -->
            <!-- <div class="link">颐挚科技</div> -->
          </li>
          <li>
            <div class="title">小程序</div>
            <div class="icon-row">
              <el-popover placement="top-start" width="200" trigger="hover">
                <div class="popover-box">
                  <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                  关注挚护易小程序
                </div>
                <template #reference>
                  <div class="icon-row">
                    <img class="icon" src="@/assets/images/footer/01.png" alt="" />
                    挚护易
                  </div>
                </template>
              </el-popover>
            </div>
            <div class="icon-row">
              <el-popover placement="top-start" width="200" trigger="hover" disabled>
                <div class="popover-box">
                  <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                  关注挚护帮小程序
                </div>
                <template #reference>
                  <div class="icon-row">
                    <img class="icon" src="@/assets/images/footer/01.png" alt="" />
                    挚护帮
                  </div>
                </template>
              </el-popover>
            </div>
          </li>
          <li>
            <div class="title" style="padding-left: 60px; text-align: left">关注我们</div>
            <div class="icon-box">
              <div class="item">
                <el-popover placement="top-start" width="200" trigger="hover" disabled>
                  <div class="popover-box">
                    <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                    关注官方微信
                  </div>
                  <template #reference>
                    <img class="icon" src="@/assets/images/footer/02.png" alt="" />
                  </template>
                </el-popover>
              </div>
              <div class="item">
                <el-popover placement="top-start" width="200" trigger="hover" disabled>
                  <div class="popover-box">
                    <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                    关注官方大众点评
                  </div>
                  <template #reference>
                    <img class="icon" src="@/assets/images/footer/03.png" alt="" />
                  </template>
                </el-popover>
              </div>
              <div class="item">
                <el-popover placement="top-start" width="200" trigger="hover" disabled>
                  <div class="popover-box">
                    <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                    关注官方小红书
                  </div>
                  <template #reference>
                    <img class="icon" src="@/assets/images/footer/07.png" alt="" />
                  </template>
                </el-popover>
              </div>
              <div class="item">
                <el-popover placement="top-start" width="200" trigger="hover" disabled>
                  <div class="popover-box">
                    <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                    关注官方微博
                  </div>
                  <template #reference>
                    <img class="icon" src="@/assets/images/footer/06.png" alt="" />
                  </template>
                </el-popover>
              </div>
              <div class="item">
                <el-popover placement="top-start" width="200" trigger="hover" disabled>
                  <div class="popover-box">
                    <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                    关注官方抖音
                  </div>
                  <template #reference>
                    <img class="icon" src="@/assets/images/footer/04.png" alt="" />
                  </template>
                </el-popover>
              </div>
              <div class="item">
                <el-popover placement="top-start" width="200" trigger="hover" disabled>
                  <div class="popover-box">
                    <img class="icon" src="@/assets/images/footer/ewm.png" alt="" />
                    关注官方快手
                  </div>
                  <template #reference>
                    <img class="icon" src="@/assets/images/footer/08.png" alt="" />
                  </template>
                </el-popover>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { contactNumber } from "@/config/constants";
import TheMap from "@/components/TheMap.vue";
import { debounce } from "lodash-es";

const radio = 1920 / 1115;
const ewmBoxWidthRadio = 1065 / 1920;
const ewmBoxHeightRadio = 324 / 1115;
const ewmBoxTopRadio = 285 / 1115;
const mapBottomRadio = 60 / 1115;
const mapWidthRadio = 1070 / 1920;
const mapHeightRadio = 237 / 1115;

const footerHeight = ref("1115px");
const ewmBoxWidth = ref("1065px");
const ewmBoxHeight = ref("324px");
const ewmBoxTop = ref("285px");
const mapBottom = ref("60px");
const mapWidth = ref("1070px");
const mapHeight = ref("237px");

onMounted(() => {
  setTimeout(resizeSetHeight, 300);
  window.addEventListener("resize", resizeSetHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeSetHeight);
});

const resizeSetHeight = debounce(() => {
  const { clientWidth, clientHeight } = document.querySelector(".footer");

  const height = clientWidth / radio;
  footerHeight.value = height + "px";

  ewmBoxHeight.value = height * ewmBoxHeightRadio + "px";
  ewmBoxWidth.value = clientWidth * ewmBoxWidthRadio + "px";
  ewmBoxTop.value = clientHeight * ewmBoxTopRadio + "px";

  mapBottom.value = clientHeight * mapBottomRadio + "px";
  mapWidth.value = clientWidth * mapWidthRadio + "px";
  mapHeight.value = clientHeight * mapHeightRadio + "px";
}, 300);
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  .phone-box {
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      width: 2rem;
      height: 2rem;
    }
  }
  .ewm-box {
    position: absolute;
    top: v-bind(ewmBoxTop);
    left: 50%;
    transform: translateX(-50%);
    width: v-bind(ewmBoxWidth);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    img {
      width: v-bind(ewmBoxHeight);
      height: v-bind(ewmBoxHeight);
    }
  }

  .map {
    position: absolute;
    bottom: v-bind(mapBottom);
    left: 50%;
    width: v-bind(mapWidth);
    height: v-bind(mapHeight);
    transform: translateX(-50%);
  }
}

.bot-link {
  padding: 70px 0;
  background-color: #1f2329;
  display: flex;
  justify-content: center;
  .bot-container {
    margin: 0 auto;
  }
  .left {
    text-align: left;
    color: #85878a;
    width: 390px;
    a {
      color: #85878a;
    }
    img {
      width: 132px;
    }
    .copyright {
      margin: 10px 0 8px;
    }
    .record {
      display: flex;
      align-items: center;
      span {
        margin: 0 2px;
      }
    }
    .security {
      margin-right: 2px;
      width: 18px;
      height: 18px;
    }
  }

  .right {
    font-size: 16px;
    ul {
      display: flex;
      .title {
        color: #797c7f;
        margin-bottom: 15px;
      }
      li {
        margin-top: 15px;
        // border-left: 1px solid rgba(255, 255, 255, 0.4);
        text-align: center;
        width: 240px;
        font-size: 15px;
        position: relative;
        &:last-child {
          width: fit-content;
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 3px;
          width: 1px;
          background-color: rgba(255, 255, 255, 0.4);
          height: calc(100% - 8px);
        }

        .link {
          color: #d3d4d5;
          a {
            color: #d3d4d5;
          }
          & + .link {
            margin-top: 8px;
          }
        }

        .icon-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d3d4d5;
          cursor: pointer;
          & + .icon-row {
            margin-top: 6px;
          }
          .icon {
            width: 26px;
            height: 26px;
            margin-right: 10px;
          }
        }
        .icon-box {
          padding-left: 60px;
          display: flex;
          margin-top: 30px;
          .item {
            & + .item {
              margin-left: 15px;
            }
            .icon {
              width: 31px;
              height: 31px;
            }
          }
        }
        .icon {
          cursor: pointer;
        }
      }
    }
  }
}

.bot-title {
  padding: 20px 0;
  font-size: 30px;
  background-color: rgba(217, 217, 217, 0.6);
  font-family: HarmonyOS_Sans_SC_Medium;
  color: #fff;
  font-style: italic;
}
</style>
<style lang="scss">
.popover-box {
  text-align: center;
  color: #1f2329;
  font-size: 14px;
  img {
    margin: 0 auto 10px;
    width: 120px;
    height: 120px;
  }
}
</style>
