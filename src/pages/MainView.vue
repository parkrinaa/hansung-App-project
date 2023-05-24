<template>
  <div class="inner main">
    <section class="area pt0 pr0">
      <h2 class="tit">ICT융합디자인학과의<br/><b class="txt_point_line">다양한 정보</b>를 확인해보세요</h2>
      <swiper
        :slidesPerView="2.5"
        :spaceBetween="10"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="animate__animated animate__fadeInDown animate__faster">
          <router-link :to="{name: 'IntroductView'}">
            <dl class="bx_list cap">
              <dt>학과소개</dt>
              <dd>학과비전</dd>
              <dd>졸업요건</dd>
            </dl>
          </router-link>
        </swiper-slide>
        <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-1s">
          <router-link :to="{name: 'RplView'}">
            <dl class="bx_list file">
              <dt>RPL</dt>
              <dd>신청가능 교과목</dd>
              <dd>신청절차</dd>
            </dl>
          </router-link>
        </swiper-slide>
        <swiper-slide class="animate__animated animate__fadeInDown animate__faster animate__delay-2s">
          <router-link :to="{name: 'DetailView'}">
            <dl class="bx_list trophy">
              <dt>교수진 소개</dt>
              <dd>교수진 소개</dd>
              <dd>프로필</dd>
            </dl>
          </router-link>
        </swiper-slide>
      </swiper>
    </section>
    <section class="area">
      <h2 class="tit">관심 진로 방향을 선택해<br/><b class="txt_point_line">관련도 높은 강의 교과목</b>을 확인해보세요</h2>
      <div class="search_bar">
        <input type="search" v-model="search" placeholder="검색어를 입력하세요." onfocus="this.placeholder = ''" class="ipt">
      </div>
      <ul>
        <li v-for="item in filterProducts" v-bind:key="item.id" class="bx_lecture_list">
          <router-link :to="{name: 'DetailView'}">
            <div class="tit">
              {{ item.name }}
            </div>
            <div class="tit_sub">
              {{ item.sub }}
            </div> 
          </router-link>
        </li>
      </ul>
      <div class="no_search">
        <p>검색결과가 없습니다.</p>
      </div>
    </section>
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
      search: '',
      products: [
        {
          name: 'UI/UX 디자인',
          sub: 'UI(User Interface), UX(User Experience) 디자인은',
          vegan: false,
          'value': 'ui_ux_design'
        },
        {
          name: '3D그래픽 디자인',
          sub: '영화, TV또는 비디오 게임 제작의 캐릭터, 풍경, 배경 및 기',
          vegan: false
        },
        {
          name: '편집 디자인',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          vegan: false
        },
        {
          name: '모션 그래픽',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          vegan: true
        },
        {
          name: '영상 그래픽',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          vegan: true
        },
        {
          name: '영상 편집',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          vegan: true
        },
        {
          name: '모션 그래픽',
          sub: '사진, 그림, 글자 형태 등을 조정하고 편집합니다. 유인물을',
          vegan: true
        },
      ],
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
