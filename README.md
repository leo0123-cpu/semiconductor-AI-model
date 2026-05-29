# 차세대 전력 반도체 밴드갭 예측기

`전체 버전.txt`의 Python 연구 코드를 GitHub Pages에서 바로 열 수 있는 정적 웹사이트로 옮긴 데모입니다.

## 파일 구성

- `index.html`: 웹사이트 화면 구조
- `styles.css`: 반응형 디자인과 결과 카드 스타일
- `app.js`: 화학식 파싱, 피처 계산, 밴드갭 근사 예측 로직
- `README.md`: 배포 안내

## 실행 방법

로컬에서는 `index.html` 파일을 브라우저로 열면 됩니다. 별도 서버, 패키지 설치, 빌드 과정이 필요 없습니다.

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다.
2. `index.html`, `styles.css`, `app.js`, `README.md`를 저장소 루트에 업로드합니다.
3. 저장소의 `Settings`로 이동합니다.
4. `Pages` 메뉴에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/root`를 선택하고 저장합니다.
6. 잠시 후 표시되는 GitHub Pages 주소로 접속합니다.

## 참고

이 웹 버전은 브라우저용 근사 예측 데모입니다. 원본 Python 코드의 scikit-learn, XGBoost, LightGBM 모델을 그대로 실행하지 않고, 내장 데이터와 피처 거리 기반 가중 평균으로 밴드갭을 추정합니다.
