# 사다리 타기

[프로젝트 확인하기](
https://aaxx98.github.io/javascript-study/ladder/home.html)

---
## 1. HTML
- #### home.html
  초기 화면입니다. 참가자 수, 참가자 목록, 결과 목록을 입력할 수 있습니다.
  입력 후 시작 버튼을 누르면 result.html로 이동합니다.
- #### result.html
  참가자 수에 맞게 랜덤한 사다리가 그려집니다.
  확인 버튼을 누르면 결과를 확인할 수 있습니다.

---
## 2. CSS
- #### style.css
  home.html의 css 파일입니다.
- #### result.css
  result.html의 css 파일입니다.

---
## 3. JS
- #### app.js
  home.html의 입력폼을 동적으로 관리합니다.
  화면이동 전 SessessionStorage에 입력 데이터를 저장합니다.
- #### result.js
  사다리를 그립니다. table을 그리고 td의 border-bottom을 랜덤하게 표시합니다. td의 border-bottom이 다리 역할을 합니다.
- #### modal.js
  result.html에서 modal 창을 띄워 결과를 보여줍니다.
