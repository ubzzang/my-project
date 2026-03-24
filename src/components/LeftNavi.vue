<template>
  <div class="left-navi">
    <h2 class="current-page">{{menuStore.currentDepth1Title}}</h2>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.id"
          :class="[item.iconName, 'menu', { active: currentMenuId === item.id }]">
          <div class="menu-content" @click="toggleMenu(item)">
            <div class="link-inner">
              <img :src="getIconUrl(item)" class="menu-icon">
              <p>{{ item.title }}</p>
            </div>
          </div>

          <transition name="slide">
            <ul class="sub-menu" v-if="item.children.length > 0 && currentMenuId === item.id">
              <li v-for="sub in item.children" :key="sub.title">
                <RouterLink :to="sub.path" v-slot="{ isActive }">
                  <div class="sub-link-content" :class="{ active: isActive }">
                    <img :src="isActive ? '/icons/menu-arrow-active.svg' : '/icons/menu-arrow.svg'" alt="서브 화살표"
                      class="sub-arrow-icon">
                    <span>{{ sub.title }}</span>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'; 
import { useMenuStore } from '@/stores/menu'; 

const menuStore = useMenuStore(); 
const currentMenuId = ref(null);

// 1뎁스별 메뉴 목록
const allMenus = {
  1: [ // 대시보드
    { id: 1, title: '대시보드 메뉴1', iconName: 'menu01', children: [] },
  ],
  2: [ // 고객 관리
    { id: 1, title: '고객 목록', iconName: 'menu01', children: [] },
  ],
  3: [ // 인사관리 시스템 (기존 menuItems 내용)
    { id: 1, title: '근태 관리', iconName: 'menu01', children: [{ title: "출퇴근 현황", path: "/sub/page1" }, { title: "연차 신청", path: "/sub/page2" }] },
    { id: 2, title: '구매 관리', iconName: 'menu02', children: [] },
    { id: 3, title: '직원 관리', iconName: 'menu03', children: [{ title: "인사기록카드", path: "/3-1" }] },
    { id: 4, title: '휴가 관리', iconName: 'menu04', children: [] },
    { id: 5, title: '통계', iconName: 'menu05', children: [] },
    { id: 6, title: '구매 관리', iconName: 'menu06', children: [] },
    { id: 7, title: '설정', iconName: 'menu07', children: [] },
  ],
  4: [ // 리포트 분석
    { id: 1, title: '리포트 목록', iconName: 'menu01', children: [] },
  ],
  5: [ // 시스템 관리
    { id: 1, title: '시스템 설정', iconName: 'menu01', children: [] },
  ],
}

const menuItems = computed(() => allMenus[menuStore.currentDepth1Id] ?? [])

// 아이콘 경로 반환
const getIconUrl = (item) => {
  if (!item || !item.iconName) return '';
  const isActive = currentMenuId.value === item.id;
  const suffix = isActive ? '-active' : '';
  return `/icons/${item.iconName}${suffix}.svg`;
};

// 메뉴 toggle event
const toggleMenu = (item) => {
  if (item.children && item.children.length > 0) {
    currentMenuId.value = currentMenuId.value === item.id ? null : item.id;
  } else {
    currentMenuId.value = item.id;
  }
};
</script>