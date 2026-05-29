# semiconductor-AI-model
# AI-Based Band Gap Predictor for Semiconductor Materials

머신러닝을 활용하여 반도체 소재의 밴드갭 에너지를 예측하는 프로그램입니다.

## 프로젝트 소개

이 프로젝트는 화학식과 원소의 물성 데이터를 바탕으로 반도체 후보 물질의 밴드갭 에너지를 예측합니다.  
밴드갭은 반도체의 전기적·광학적 특성을 결정하는 중요한 값으로, 전력반도체, LED, 태양전지, 포토다이오드 등 다양한 반도체 소자와 관련됩니다.

## 주요 기능

- 화학식 기반 원소 특징 추출
- 밴드갭 에너지 예측
- 머신러닝 회귀 모델 비교
- 반도체 후보 소재의 활용 가능성 판단

## 사용 모델

- Ridge Regression
- Random Forest Regressor
- Gradient Boosting Regressor

## 사용 기술

- Python
- scikit-learn
- pandas
- numpy
- matplotlib

## 반도체와의 관련성

본 프로그램은 반도체 칩을 직접 설계하거나 제조하는 프로그램은 아닙니다.  
대신 반도체 소재의 핵심 물성인 밴드갭 에너지를 예측하여, 어떤 물질이 반도체 소재로 적합한지 판단하는 데 도움을 주는 AI 기반 소재 탐색 프로그램입니다.

## 기존 방식과의 차이점

기존에는 반도체 소재의 밴드갭을 확인하기 위해 실험 측정이나 DFT 계산이 필요했습니다.  
하지만 실험과 정밀 계산은 시간과 비용이 많이 들 수 있습니다.  
본 프로젝트는 머신러닝을 활용하여 정밀 계산이나 실험 전에 후보 물질의 밴드갭을 빠르게 예측하는 1차 선별 도구를 목표로 합니다.

## 한계점

- 실제 연구 수준의 대규모 데이터셋보다 정확도는 낮을 수 있습니다.
- 결정 구조, 온도, 실험 조건 등은 모두 반영하지 못합니다.
- 예측값은 최종 판단이 아니라 후보 물질 선별을 위한 참고값입니다.

## 참고 선행연구

- Feature-Assisted Machine Learning for Predicting Band Gaps of Binary Semiconductors
- Prediction of Experimental Bandgap via Machine Learning with Transfer Learning Techniques
