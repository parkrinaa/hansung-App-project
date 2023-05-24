<template>
  <div class="inner course">
    <div class="area">
      <div class="visual">
        <div class="right">
          <h2>UX 디자인 방법론</h2>
          <p>UI(User Interface), UX(User Experience) 디자인은<br />시각화되는 작업과 사용자가 서비스 등을 직접적 혹은 간접적으로<br />느끼는 반응과 행동들과 같은 경험을 총체적으로 설계하는 일이다. </p>
        </div>
        <ul class="subject_cont">
          <li>전공필수</li>
          <li class="grades">3학점</li>
          <li>3학년</li>
        </ul>
      </div>
      <button class="btn">장바구니 담기</button>
    </div>
    <div class="area pr0">
      <div class="a_top">
        <h2 class="tit">강의 수강자의<br/><b class="txt_point_line">UX방법론 결과물</b> 보기</h2>
        <button class="btn btn_arrow mr15">더보기</button>
      </div>
      <swiper
        :slidesPerView="2.5"
        :spaceBetween="10"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="animate__animated animate__fadeInDown animate__faster">
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list cap">
              <dt>BEST1</dt>
              <dd>3학년</dd>
              <dd>박리나</dd>
            </dl>
          </router-link>
        </swiper-slide>
        <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-1s">
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list file">
              <dt>BEST2</dt>
              <dd>3학년</dd>
              <dd>이채원</dd>
            </dl>
          </router-link>
        </swiper-slide>
        <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-2s">
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list trophy">
              <dt>BEST3</dt>
              <dd>2학년</dd>
              <dd>김정아</dd>
            </dl>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit"><b class="txt_point_line">강의 후기</b></h2>
        <button class="btn btn_arrow mr15">더보기</button>
      </div>
      <div class="area_bx_review">
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“이번 수업을 통해 많은 지식을 얻을 수 있었어요.<br />최고 최고!! 짱짱!! 또 듣고싶습니다!”</p>
          <span>- 3학년 박ㅇㅇ -</span>
        </div>
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“무대를 찢어 놓으셨다. 교수님 정말 사랑합니다.”</p>
          <span>- 3학년 최ㅇㅇ -</span>
        </div>
        <div class="bx_review">
          <div class="scope five">별 다섯개</div>
          <p>“UX방법론 수업듣고 UX디자이너로 취업 성공!<br />한성대학교 들어오길 잘했다!!”</p>
          <span>- 3학년 박ㅇㅇ -</span>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="a_top">
        <h2 class="tit">UX방법론 강의와<br /><b class="txt_point_line">비슷한 강의</b>둘러보기</h2>
      </div>
      <div class="area_bx_subject">
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
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
  }
  },
  computed: {
  filterProducts() {
    return this.products.filter(item => {
      return item.name.match(this.search)
    })
  },
},
};
</script>