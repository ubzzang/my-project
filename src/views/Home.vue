<template>
  <div class="home-content">
    <div class="info-wrap">
      <div class="profile-box">
        <img src="@/assets/images/profile.svg" alt="프로필" class="photo">
        <span class="tag tag02">경영지원팀</span>
        <p class="name">김아무</p>
        <div class="btn-wrap">
          <RouterLink class="btn-alarm">
            <img src="/icons/ico-alert.png" alt="알림">
            알림
          </RouterLink>
          <RouterLink class="btn-link">
            <img src="/icons/ico-note.svg" alt="">
          </RouterLink>
        </div>
      </div>
      <div class="bottom-box">
        <div class="noti-box">
          <div class="noti-title">
            <div class="txt">
              <img src="/icons/ico-noti.svg" alt="">
              <p>공지사항</p>
            </div>
            <div class="navi">
              <button><img src="/icons/noti-up.svg" alt=""></button>
              <button><img src="/icons/noti-down.svg" alt=""></button>
            </div>
          </div>
          <div class="noti-content">
            <p>모바일오피스 IOS 재설치 공지</p>
            <span>2026월 3월 23일</span>
          </div>
        </div>
        <div class="util-box">
          <RouterLink class="qk-link" to="/home">
            <img src="/icons/ico-qk01.png" />
            <p>전자 메일</p>
            <span><i><img src="/icons/ico-new.svg"></i>1</span>
          </RouterLink>
          <RouterLink class="qk-link" to="/home">
            <img src="/icons/ico-qk02.png" />
            <p>참조</p>
            <span>1</span>
          </RouterLink>
          <RouterLink class="qk-link" to="/home">
            <img src="/icons/ico-qk03.png" />
            <p>진행 중</p>
            <span>2</span>
          </RouterLink>
          <RouterLink class="qk-link" to="/home">
            <img src="/icons/ico-qk04.png" />
            <p>승인</p>
            <span>3</span>
          </RouterLink>
          <RouterLink class="qk-link" to="/home">
            <img src="/icons/ico-qk05.png" />
            <p>쪽지함</p>
            <span>1</span>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="card-wrap">
      <div class="card-box">
        <div class="card-title">
          <h2>카드 타이틀</h2>
          <nav class="tab-menu">
            <ul>
              <li v-for="tab in tabs" :key="tab.id">
                <button type="button" :class="{ active: currentTab4 === tab.id }" @click="currentTab4 = tab.id">
                  <p>{{ tab.title }}</p>
                  <span>{{ tab.count }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card-content">
          <table class="common-table">
            <thead>
              <tr>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-box">
        <div class="card-title">
          <h2>카드 타이틀</h2>
          <nav class="tab-menu">
            <ul>
              <li v-for="tab in tabs" :key="tab.id">
                <button type="button" :class="{ active: currentTab1 === tab.id }" @click="currentTab = tab.id">
                  <p>{{ tab.title }}</p>
                  <span>{{ tab.count }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card-content">
          <table class="common-table">
            <thead>
              <tr>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="tag tag02">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-box">
        <div class="card-title">
          <h2>카드 타이틀</h2>
          <nav class="tab-menu">
            <ul>
              <li v-for="tab in tabs" :key="tab.id">
                <button type="button" :class="{ active: currentTab2 === tab.id }" @click="currentTab = tab.id">
                  <p>{{ tab.title }}</p>
                  <span>{{ tab.count }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card-content">
          <table class="common-table">
            <thead>
              <tr>
                <td>타이틀</td>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="tag tag03">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-box">
        <div class="card-title">
          <h2>카드 타이틀</h2>
          <nav class="tab-menu">
            <ul>
              <li v-for="tab in tabs" :key="tab.id">
                <button type="button" :class="{ active: currentTab2 === tab.id }" @click="currentTab = tab.id">
                  <p>{{ tab.title }}</p>
                  <span>{{ tab.count }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card-content">
          <table class="common-table">
            <thead>
              <tr>
                <td>타이틀</td>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="tag tag03">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-box">
        <div class="card-title">
          <h2>카드 타이틀</h2>
          <nav class="tab-menu">
            <ul>
              <li v-for="tab in tabs" :key="tab.id">
                <button type="button" :class="{ active: currentTab2 === tab.id }" @click="currentTab = tab.id">
                  <p>{{ tab.title }}</p>
                  <span>{{ tab.count }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card-content">
          <table class="common-table">
            <thead>
              <tr>
                <td>타이틀</td>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
                <th>타이틀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="tag tag03">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
              <tr>
                <td><span class="tag tag01">태그 구분</span></td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
                <td>데이터</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 각각의 카드 탭
const currentTab1 = ref(1);
const currentTab2 = ref(1);
const currentTab4 = ref(1);

const tabs = [
  { id: 1, title: "전체", count: "5" },
  { id: 2, title: "조회", count: "3" },
  { id: 3, title: "미조회", count: "2" }
]
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>