<template>
  <div class="inner detail">
    <div class="area pd0">
      <div class="visual">
        <div class="left">UI/UX 디자인 이미지</div>
        <div class="right">
          <h2>UI/UX 디자이너</h2>
          <p>UI(User Interface), UX(User Experience) 디자인은 시각화되는 작업과 사용자가 서비스 등을 직접적 혹은 간접적으로 느끼는 반응과 행동들과 같은 경험을 총체적으로 설계하는 일이다.</p>
        </div>
      </div>
      <div class="area_bx_infor">
        <h2 class="tit large">관련 강의 교과목이<br/><b class="txt_point_line">6개</b> 검색되었어요</h2>
        <div class="col3 bx_infor">
          <div class="col">
            <span>전공기초</span>
            <strong><b>2</b>개</strong>
          </div>
          <div class="col">
            <span>전공선택</span>
            <strong><b>1</b>개</strong>
          </div>
          <div class="col">
            <span>전공필수</span>
            <strong><b>3</b>개</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit">추천교과목</h2>
        <model-select 
          :options="options"
          v-model="item"
          placeholder="선택하세요.">
         </model-select>
      </div>
      <div class="bx_filt">
        <div class="btns">
          <div class="btn on">전체</div>
          <div class="btn">1학점</div>
          <div class="btn">2학점</div>
          <div class="btn">3학점</div>
        </div>
      </div>
      <div class="area_bx_subject">
        <div class="bx_subject_item">
          <router-link :to="{name: 'CourseView'}">
            <div class="subject_top">
              <h3>UX 디자인 방법론</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 장경국</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'CourseView'}">
            <div class="subject_top">
              <h3>UX 디자인 사례분석</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 장경국</span>
            </div>
          </router-link>
        </div>
        <div class="bx_subject_item">
          <router-link :to="{name: 'CourseView'}">
            <div class="subject_top">
              <h3>HCI개론(인터랙션디자인 이해)</h3>
              <button class="btn btn_arrow">더보기</button>
            </div>
            <div class="area_subject_cont">
              <ul class="subject_cont">
                <li>전공필수</li>
                <li class="grades">3학점</li>
                <li>3학년</li>
              </ul>
              <span>교수진 : 장경국</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ModelSelect } from 'vue-search-select'

  export default {
    data () {
      return {
        options: [
          { value: '전공기초', text: '전공기초' },
          { value: '전공선택', text: '전공선택' },
          { value: '전공필수', text: '전공필수' },
        ],
        item: {
          value: '',
          text: ''
        },
      }
    },
    methods: {
      reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        this.item = this.options[0]
      },
    },
    components: {
      ModelSelect
    }
  }
</script>