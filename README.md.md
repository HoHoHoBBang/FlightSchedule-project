---


---

<h3 id="프로젝트-항공편-상태-조회-웹-애플리케이션"><strong>프로젝트: 항공편 상태 조회 웹 애플리케이션</strong></h3>
<p><strong>프로젝트 개요:</strong></p>
<ul>
<li>공공 API를 통해 실시간으로 항공편의 상태를 조회하고, 항공편 번호, 항공사, 출발지, 도착지 및 탑승 게이트 정보를 제공합니다.</li>
<li>사용자 맞춤형 검색 필터 기능을 제공하며, 사용자 입력 시간 범위를 바탕으로 조회 범위를 설정할 수 있습니다.</li>
</ul>
<p><strong>기술 스택:</strong></p>
<ul>
<li><strong>Frontend</strong>: React, TypeScript, TailwindCSS, Context API</li>
<li><strong>Backend</strong>: Express.js, Node.js, Axios, dotenv</li>
<li><strong>API</strong>: 공공데이터포털 항공편 API 및 국제 공항 데이터 API</li>
</ul>
<p><strong>주요 역할 및 기여:</strong></p>
<ol>
<li>
<p><strong>React Context API를 이용한 전역 상태 관리</strong></p>
<ul>
<li>React Context API를 이용하여 전역 상태 관리를 구성하고, 항공편 상태 데이터를 중앙 집중형으로 관리하여 사용자 경험을 향상.</li>
</ul>
</li>
<li>
<p><strong>API 요청과 데이터 처리</strong></p>
<ul>
<li>백엔드에서 Axios와 Express를 사용해 공공 API와 연동, API 요청 쿼리를 통해 원하는 필터 조건에 맞는 데이터를 추출.</li>
<li>Node.js의 환경 변수 관리를 위해 <code>dotenv</code>를 활용하여 API 키와 같은 중요한 정보를 안전하게 관리.</li>
</ul>
</li>
<li>
<p><strong>효율적인 데이터 구조와 비동기 요청 처리</strong></p>
<ul>
<li>React <code>useEffect</code> Hook을 활용하여 필요한 데이터만 비동기적으로 가져오도록 최적화.</li>
<li><code>airlineData</code> 상태가 변경될 때 필요한 경우에만 <code>fetchFlightStatus</code> 함수를 호출하여 불필요한 데이터 요청을 줄이고 성능을 개선.</li>
</ul>
</li>
<li>
<p><strong>Multi Range Slider로 시간 필터링 구현</strong></p>
<ul>
<li>사용자가 선택한 시간 범위를 <code>stTime</code>과 <code>edTime</code>으로 Context에 저장하여 항공편 검색 범위로 사용.</li>
<li><code>MultiRangeSlider</code>의 입력값에 따른 실시간 데이터 업데이트를 통해 직관적인 시간 조정 인터페이스 제공.</li>
</ul>
</li>
<li>
<p><strong>CORS 설정 및 서버 구성</strong></p>
<ul>
<li>Express.js와 CORS 설정을 통해 프론트엔드와 백엔드 간의 원활한 통신을 보장.</li>
<li>로컬 환경에서 서버 실행 및 프론트엔드와의 연결 테스트 완료.</li>
<li>클라우드 호스팅 서비스를 이용하여 서버 배포 및 프론트 엔드와의 연결 테스트 완료.</li>
</ul>
</li>
</ol>
<p><strong>프로젝트 주요 성과:</strong></p>
<ul>
<li>공공 데이터 API와의 연동을 통해 실시간으로 정확한 항공편 정보를 제공.</li>
<li>컴포넌트 기반 UI와 전역 상태 관리를 통해 코드 유지보수성을 개선하고, 재사용 가능한 구조를 구축함.</li>
<li>시간 필터링과 페이지네이션을 도입하여 성능 최적화와 데이터 효율성을 확보.</li>
</ul>

