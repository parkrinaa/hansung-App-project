<template>
  <div class="inner rpl">
    <div class="area">
      <h2 class="tit"><b class="txt_point_line">선행경험학습인정제도 (RPL)</b></h2>
      <p>개인이 선행적으로 갖는 경험이나 사전학습결과를 대학이 제시하는 기준에 따라 증명함으로써 객관적이고 공식적인 절차를 통해 대학학점으로 평가 인정하는 제도입니다.</p>
      <ul class="circle">
        <li>단순 경력 년수가 아닌 교과목별로 설정된 평가기준을 충족하는 경우에만 인정됩니다.</li>
        <li>평가의 공정성을 위하여 외부위원을 포함한 학점인정위원회에서 평가를 진행합니다.</li>
      </ul>
    </div>
    <div class="area">
      <h2 class="tit"><b class="txt_point_line">신청방법</b></h2>
      <p>2022학년도 신입생부터 신청시기는 <strong>“1학년 1학기 1회”</strong>만 인정</p>
      <ul class="a_cont">
        <li class="animate__animated animate__fadeInDown animate__faster">
          <div class="right">
            <dl>
              <dt>인정 내용</dt>
              <dd>교육 및 훈련 경험</dd>
              <dd>자격증 및 수상 경험</dd>
              <dd>근무 경험</dd>
            </dl>
          </div>
        </li>
        <li class="animate__animated animate__fadeInDown animate__faster animate__delay-1s">
          <div class="right">
            <dl>
              <dt>인정 범위</dt>
              <dd>전체 학점의 25% 이내</dd>
            </dl>
          </div>
        </li>
        <li class="animate__animated animate__fadeInDown animate__faster animate__delay-2s">
          <dl>
            <dt>신청 방법</dt>
            <dd>온라인 : 미래플러스대학 홈페이지 - 학사안내 - 서류제출 - RPL서류제출</dd>
            <dd>온프라인 : 한성대학교 진리관 312호(미래플러스대학교학팀)</dd>
          </dl>
          <button type="button" class="btn" @click="$router.push({ name: 'MainView' })">온라인 제출하러 가기</button>
        </li>
        <li class="animate__animated animate__fadeInDown animate__faster animate__delay-3s">
          <p>제출 서류</p>
          <dl class="dl_check">
            <dt>공통 필수</dt>
            <dd>선행경험학습 학점인정신청서, 선행경험학습 포트폴리오, 자기평가 체크리스트, 서류준비 체크리스트</dd>
            <dt>교육 및 훈련</dt>
            <dd>교육 및 훈련 이수 증명서, 성적 및 학점취득증명서, 수업계획서/강의개요서</dd>
            <dt>자격증 및 수상</dt>
            <dd>자격증 및 수상 내역, 명장/숙련기술전수자 증명 서류</dd>
            <dt>근무경험</dt>
            <dd>경력증명서/재직증명서, 직무기술서</dd>
            <dt>기타</dt>
            <dd>교육훈련 결과 및 근무경험, 직무수행능력을 입증할 수 있는 사람</dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="area">
      <h2 class="tit"><b class="txt_point_line">제출서류다운</b></h2>
      
    </div>
  </div>
</template>