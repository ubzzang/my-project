<template>
  <div class="topHeader">
    <RouterLink to="/home">
      <img src="@/assets/images/logo.svg" alt="로고">
    </RouterLink>
    <div class="search-box">
      <input type="text" placeholder="검색어를 입력하세요.">
      <button><img src="@/assets/icons/search.svg"/></button>
    </div>
    <div class="util-box">
      <a href="#">내 정보 수정</a>
      <div class="profile-box">
        <img src="@/assets/images/profile.svg" alt="프로필 사진">
        <div class="profile-txt">
          <p>김아무개</p>
          <span>관리자</span>
        </div>
      </div>
    </div>
  </div>
  <header class="bottomHeader" :class="theme">
    <a href="#" class="open-menu-btn">전체메뉴</a>
    <nav>
      <ul>
        <li v-for = "item in depth1Menus" :key="item.id">
          <RouterLink :to="item.path" @click="menuStore.setDepth1(item.id, item.title)">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();

const depth1Menus = [
  {id : 1, title : '대시보드', path : '/sub/page1'},
  {id : 2, title : '고객 관리', path: '/sub/page2'},
  {id : 3, title : '인사관리 시스템', path : '/sub/page3'},
  {id : 4, title : '리포트 분석', path : '/sub/page4'},
  {id : 5, title : '시스템 관리', path : '/sub/page5'}
]

defineProps({
  theme: {
    type: String,
    default: 'main'
  }
})
</script>

<style lang="css" scoped>
  .bottomHeader.sub{background: #fff; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0;}
  .bottomHeader.sub ul li{color: #314158;}
  .bottomHeader.sub .open-menu-btn{color: #314158; background: url('~@/assets/icons/menu_bl.svg') no-repeat left center;}
</style>
