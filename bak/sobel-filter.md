SOBEL OPERATOR
==============

> https://en.wikipedia.org/wiki/Sobel_operator

- Edge detection
- Isotropic 3 x 3 Image Gradient Operator
- Discrete differentiation operator.

> The Sobel operator, sometimes called the Sobel–Feldman operator or Sobel filter, is used in image processing and computer vision, particularly within edge detection algorithms where it creates an image emphasising edges. It is named after Irwin Sobel and Gary Feldman, colleagues at the Stanford Artificial Intelligence Laboratory (SAIL). Sobel and Feldman presented the idea of an "Isotropic 3x3 Image Gradient Operator" at a talk at SAIL in 1968.[1] Technically, it is a discrete differentiation operator, computing an approximation of the gradient of the image intensity function. At each point in the image, the result of the Sobel–Feldman operator is either the corresponding gradient vector or the norm of this vector. The Sobel–Feldman operator is based on convolving the image with a small, separable, and integer-valued filter in the horizontal and vertical directions and is therefore relatively inexpensive in terms of computations. On the other hand, the gradient approximation that it produces is relatively crude, in particular for high-frequency variations in the image.


> https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient





It is named after Irwin Sobel and Gary Feldman, colleagues at the Stanford Artificial Intelligence Laboratory (SAIL). Sobel and Feldman presented the idea of an "Isotropic 3x3 Image Gradient Operator" at a talk at SAIL in 1968. Technically, it is a discrete differentiation operator, computing an approximation of the gradient of the image intensity function. At each point in the image, the result of the Sobel–Feldman operator is either the corresponding gradient vector or the norm of this vector. The Sobel–Feldman operator is based on convolving the image with a small, separable, and integer-valued filter in the horizontal and vertical directions and is therefore relatively inexpensive in terms of computations. On the other hand, the gradient approximation that it produces is relatively crude, in particular for high-frequency variations in the image.

1.



The Sobel operator, sometimes called the Sobel–Feldman operator or Sobel filter, is used in image processing and computer vision, particularly within edge detection algorithms where it creates an image emphasising edges.

Sobel and Feldman presented the idea of an "Isotropic 3x3 Image Gradient Operator" at a talk at SAIL in 1968.[1] Technically, it is a discrete differentiation operator, computing an approximation of the gradient of the image intensity function. At each point in the image, the result of the Sobel–Feldman operator is either the corresponding gradient vector or the norm of this vector. The Sobel–Feldman operator is based on convolving the image with a small, separable, and integer-valued filter in the horizontal and vertical directions and is therefore relatively inexpensive in terms of computations.

On the other hand, the gradient approximation that it produces is relatively crude, in particular for high-frequency variations in the image.

소벨 필터는 일반적으로 이미지의 가장자리를 강조하는 에지 검출과 관련된 이미지 처리에서 사용합니다.

Isotropic 3x3 Image Gradient Operator

그레이디언트 연산자

기울기(gradient 그레이디언트)란 벡터 미적분학에서 스칼라장의 최대의 증가율을 나타내는 벡터장을 뜻한다.

기울기를 나타내는 벡터장을 화살표로 표시할 때 화살표의 방향은 증가율이 최대가 되는 방향이며, 화살표의 크기는 증가율이 최대일 때의 증가율의 크기를 나타낸다.

어느 방안의 공간 온도 분포가 스칼라장 φ로 주어졌다고 가정한다. 이 때, 방안의 어느 한 점(x,y,z)에서의 온도는 φ(x,y,z)로 표시할 수 있다. (온도는 시간에 의해 변화하지 않는다고 가정) 이 경우에 어느 한 지점에서의 기울기는 온도가 가장 빨리 증가하는 방향과 그 증가율을 나타낸다.

이번에는 산이나 언덕을 가정해보자. 어떤 지점(x,y)에서의 높이를 H(x,y)로 표현하는 경우, 기울기는 가장 (위를 바라보는)경사가 가파른 방향과 그 경사의 크기를 나타낸다.

기울기를 이용해 다른 방향의 증가율을 구하려면 기울기와 그 방향의 단위 벡터의 내적을 취하면 된다.

기울기는 무회전성 벡터계이다. 즉, 기울기 벡터계에 대해 선적분을 구하면 결과값은 경로와 상관없이 시작점과 끝점에 따라서만 변화함을 뜻한다.

미분(differentiation), 도함수(derivative)


https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient
