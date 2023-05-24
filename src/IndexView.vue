<template>
  <div class="ui_wrap">
    <header class="ui_header">
      <h1 class="ui_h1"><strong>한성대학교 학점관리 어플 프로젝트 - 퍼블 산출물</strong></h1>
      <span class="ui_span">사이즈 규격 : 360 x auto</span>
    </header>
    <div class="ui_area">
      <h3 class="ui_h3">메인</h3>
      <table class="ui_tbl">
        <colgroup>
          <col>
          <col width="150">
          <col width="150">
        </colgroup>
        <thead>
          <tr>
            <th>Title</th>
            <th>담당자</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><router-link :to="{name: 'LoginView'}" target="_blank" class="ui_link">스플래시</router-link></td>
            <td><span class="ui_label">RN</span><span>박리나</span></td>
            <td>23.03.28</td>
          </tr>
          <tr>
            <td><router-link :to="{name: 'MainView'}" target="_blank" class="ui_link">메인</router-link></td>
            <td><span class="ui_label">RN</span><span>박리나</span></td>
            <td>23.03.28</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ui_area">
      <h3 class="ui_h3">서브페이지</h3>
      <table class="ui_tbl">
        <colgroup>
          <col>
          <col width="150">
          <col width="150">
        </colgroup>
        <thead>
          <tr>
            <th>Title</th>
            <th>담당자</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><router-link :to="{name: 'DetailView'}" target="_blank" class="ui_link">추천교과목</router-link></td>
            <td><span class="ui_label">RN</span><span>박리나</span></td>
            <td>23.03.28</td>
          </tr>
          <tr>
            <td><router-link :to="{name: 'CourseView'}" target="_blank" class="ui_link">교과목상세</router-link></td>
            <td><span class="ui_label">RN</span><span>박리나</span></td>
            <td>23.03.28</td>
          </tr>
          <tr>
            <td><router-link :to="{name: 'IntroductView'}" target="_blank" class="ui_link">학과소개</router-link></td>
            <td><span class="ui_label">RN</span><span>박리나</span></td>
            <td>23.03.28</td>
          </tr>
          <tr>
            <td><router-link :to="{name: 'RplView'}" target="_blank" class="ui_link">RPL</router-link></td>
            <td><span class="ui_label">RN</span><span>박리나</span></td>
            <td>23.03.28</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- 해당 페이지에서만 쓰는 css -->
<style scoped v-if="true">
.ui_wrap{
  background-color:#eef4fb;
  color:#4a5b6d;
  font-size:12px;
  min-height:100vh;
  width:100%;
  padding: 30px 10px;
}
.ui_header{
  content:"";
  display:block;
  text-align:center;
  width:100%;
}
.ui_h1{
  line-height: 27px;
  margin-bottom: 10px;
}
.ui_span{
  display: block;
  margin-bottom: 30px;
}
.ui_container{
  margin:0 auto;
  padding:40px 15px;
  width:100%;
}
.ui_area{
  background-color:#fff;
  border-left:3px solid #256cb5;
  border-radius:5px;
  -webkit-box-shadow:0 .15rem 1.75rem #dde3ec;
  box-shadow:0 .15rem 1.75rem #dde3ec;
  padding:25px 25px 35px;
}
.ui_h3{
  margin: 10px 0;
}
@media (max-width:768px){
  .ui_area{
    padding:25px 3.44828% 35px;
  }
}
.ui_area+.ui_area{
  margin-top:20px;
}
.ui_tbl{
text-align:center;
width:100%;
}
.ui_tbl col:nth-child(2){
  width:150px;
}
@media (max-width:768px){
  .ui_tbl col:nth-child(2){
    width:50px;
  }
}
.ui_tbl col:last-child{
  display:table-column;
}
@media (max-width:768px){
  .ui_tbl col:last-child{
    display:none;
  }
}
.ui_tbl td,.ui_tbl th{
  height:38px;
  padding:5px;
}
.ui_tbl td{
  border-bottom:1px solid #ededed;
}
.ui_tbl td:first-child{
  padding-left:20px;
  text-align:left;
}
@media (max-width:768px){
  .ui_tbl td:first-child{
    padding-left:0;
  }
}
.ui_tbl td:last-child{
  display:table-cell;
}
@media (max-width:768px){
  .ui_tbl td:last-child{
    display:none;
  }
}
.ui_tbl th{
  background-color:#f7f7f9;
}
.ui_tbl th:last-child{
  display:table-cell;
}
@media (max-width:768px){
  .ui_tbl th:last-child{
    display:none;
  }
}
.ui_label{
  background-color:#45b9cc;
  border-radius:50%;
  color:#fff;
  display:inline-block;
  margin-right:5px;
  padding:5px 6px;
}
@media (max-width:768px){
  .ui_label{
    margin-right:0
  }
  .ui_label + span{
    display: none;
  }
}
</style>
