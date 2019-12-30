---
layout: page
title: "A Threshold Selection Method from Gray-Level Histograms"
permalink: /computer/vision/paper/a-threshold-selection-method-from-gray-level-histograms/
---

_NOBUYUKI OTSU_

[Abstract](#abstract)
[Introduction](#introduction)
[Formulation](#formulation)

## <a name="abstract" style="color: #000000;">Abstract</a>

A nonparametric and unsupervised method of automatic threshold selection for picture segmentation is presented. An optimal threshold is selected by the discriminant criterion, namely, so as to maximize the separability of the resultant classes in gray levels. The procedure is very simple, utilizing only the zeroth- and first-order cumulatie moments of the gray level histogram. It is straightforward to extend the method to multithreshold problems. Several experimental results are also presented to support the validity of the method.

## <a name="introduction" style="color: #000000;">Introduction</a>

It is important in picture processing to select an adequate threshold of gray level for extracting objects from their background. A variety of techniques have been proposed in this regard. In ideal case, the histogram has a deep and sharp valley between two peaks representing objects and background, respectively, so that the threshold can be chosen at the bottom of this valley. However, for most real pictures, it is often difficult to detect the valley bottom precisely, especially in such cases as when the valley is flat and broad, imbued with noise, or when the two peaks are extremely unequal in height, often producing no traceable valley. There have been some techniques proposed in order to overcome these difficulties. They are, for example, the "valley sharpening technique", which restricts the histogram to the pixels with large absolute values of derivative (Laplacian or gradient), and the "difference histogram method", which selects the threshold at the gray level with the maximal amount of difference. These utilize information concerning neighboring pixels (or edges) in the original picture to modify the histogram so as to make it useful for thresholding. Another class of methods deals directly with gray level histogram by parametric techniques. For example, the histogram is approximated in the least square sense by a sum of Gaussian distributions, and statistical decision procedures are applied. However, such a method requires considerably tedious and sometimes unstable calculations. Moreover, in many cases, the Gaussian distributions turn out to be a meager approximation of the real modes.

In any event, no "goodness" of threshold has been evaluated in most of the methods so far proposed. This would imply that it could be the right way of deriving an optimal thresholding method to establish an apprpriate criterion for evaluating the "goodness" of threshold from a more general standpoint.

In this correpondence, our discussion will be confined to the elementary case of threshold selection where only the gray level histogram suffices without other a prior knowledge. It is not only important as a standard technique in picture processing, but also essential for unsupversied decision problems in pattern recognition. A new method is proposed from the viewpoint of discrimiant analysis; it directly approaches the feasibility of evaluating the "goodness" of threshold and automatically selecting an optimal threshold.

화상 분할을 위한 비모수적이며 비지도적으로 자동 임계 값을 선택하는 방법을 제시합니다.
그레이 레벨을 기준으로 분리성을 최대화하여 분류하는 판별 기준으로 선택된 최적희 임계 값입니다.
과정은 그레이 레벨 히스토그램에서 0번째 그리고 1번째 누적 모멘트 값을 활용하는 것으로 매우 간단합니다.
이 방법은 멀티 임계값 문제를 풀기 위한 방법으로 바로 확장할 수 있습니다.
이 방법의 유효성을 뒷받침하기 위해 여러 실험적인 결과가 제시됩니다.

사진의 배경에서 객체를 추출하기 위하여 그레이 레빌의 적절한 입계값을 선택하는 것은 이미지 프로세싱에서 중요합니다. 이와 관련된 다양한 기술들이 제안되었습니다.
이상적인 경우, 히스토그램은 배경과 물체 사이에 깊고 날카로운 계곡을 가지고 있기에 기 계곡의 바닥 값을 선택할 수 있습니다.
그러나 대부분의 실제 사진에서는 정확하게 계곡의 바닥 값을 정하는 것은 어렵습니다. 특히나 계곡이 평평하고 넓거나
잡음이 발생했거나, 두 봉우리의 높이가 극도로 같지 않을 경우 계곡을 추적하는 것은 어렵습니다.
이 어려움을 극복하기 위해 제안된 몇몇 기술들이 있습니다.
예를 들어, 라플라이시안 혹은 그래디언트 미분 계수의 절대 값이 큰 픽셀로 제한하는 "vally sharpening technique"이나 차이의 크기를 최대화하는 그레이 레벨을 임계값으로 선택하는 "difference histogram method" 등이 있습니다.
이 방법들은 원본 이미지에서 유용한 임계값을 만들기 위해서 히스토그램의 값을 변경하기 위해 관심았는 이웃 픽셀 정보를 활용합니다.
다른 종류의 방법들은 파라메트릭 기법에 의해 그레이 레벨 히스토그램을 직접 처리합니다.
예를 들어 히스토그램은 가우시안 분포의 합에 의해 최소 제급으로 근사되고 통계적 의사 결정 절차가 적용됩니다.
그러나 그와 같은 방법들은 현저히 지루하거나 가끔 계산이 부정확합니다.
게다가 많은 경우 가우시안 분포는 실제 적용에서 매우 빈약한 근사치로 확인되었습니다.
어찌했건, 지금까지 제안된 대부분의 방법은 양호하다고 평가되지 않습니다.
보다 일반적인 관점에서 양호다고 평가되는 적절한 임계값 설정 방법을 수립하기 위한 최적의 임계 값을 도출하는 올바른 방법일 수 있음을 의미합니다.
이 보고서는 다른 선행되는 지식 없이 그레이 레빌 히스토그램만으로 충분한 임계값 선택의 기본 경우로 제한할 것입니다. 이것은 이미지 프로세싱의 표준작업으로도 중요하며, 패턴인식의 비지도 의사결정 문제에서도 필수적입니다.
이 새로운 방법은 판별 분석의 관점을 보여줄 것입니다. 즉 최적의 임계값을 자동으로 선택하고 임계 값의 좋음을 판별하기 위한 가능성에 직접적인 접근입니다.

## <a name="formulation" style="color: #000000;">Formulation</a>

Let the pixels of a given picture be represented in <math><mi>L</mi></math> gray levels 

| discriminant    | 판별 수단, 판별식 |
| criterion       | 기준, 평가, 심사, 조건, 자격 |
| separability    | 분리성, 분리가능, 나눌 수 있음 |
| utilize         | ...을 이용하다. 활용하다 |
| straightforward | 직접의, 솔직한, 똑바로 |
| adequate        | 적당한, 충분한, 부족하지 않은 |
| regard          | 관련되다. 간주하다. 여기다. 보다. 생각하다. |
| in this regard  | 이와 관련하여 |
| imbued          | 침투한, 물든 |
| restricts       | 제한하다. 규제, 금지하자. 제약, 통제 |
| parametric      | 한계의, 파라미터의, 모수의 |
| tedious         | 지루한, 장황한 |
| considerably    | 많이, 상당히, 현저히 |
| meager          | 빈약한, 메마른, 결핍한 |
| standpoint      | 관점, 입장 견지 |
| correpondence   | 대응, 일치, 서신, 보고, 통신문 |
| discussion      | 논의, 토론, 심의 |
| confined        | 국한, 제한된, 갇힌, 수감, 묶인 |
| suffice         | 충분하다, 만족시키다. 족하다. |
| elementary      | 기본적인, 기초적인, 초보의 |
