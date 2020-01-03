---
layout: page
title: "Point Operator"
permalink: /computer/vision/image/processing/point-operator/
---

The simplest kinds of image processing transforms are point operators, where each output pixel's value depends on only the corresponding input pixel value.

[PIXEL TRANSFORM](#pixel-transform)<br />
&nbsp;&nbsp;[MULTIPLICATION AND ADDITION - LINEAR](#pixel-transform-multiplication-addition)<br />
&nbsp;&nbsp;[LINEAR BLEND - LINEAR](#pixel-transform-linear-blend)<br />
&nbsp;&nbsp;[GAMMA CORRECTION - NON-LINEAR](#pixel-transform-gamma-correction)<br />

<a name="pixel-transform"></a>
## PIXEL TRANSFORM

A general image processing operator is a function that takes one or more input images and produces an output image. In continuous domain, this can be denoted as

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>g</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>h</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>f</mi>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mi>x</mi>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(x) = h(f(x))</annotation>
 </semantics>
</math>

where <math><mi>x</mi></math> is in the n-dimensional domain of the functions and the function <math><mi>f</mi></math> and <math><mi>g</mi></math> operate over some range, which can either be scalar or vector. For discrete images, the domain consists of a finite number of pixel locations, <math><semantics><mrow><mi>x</mi><mo stretchy="false">=</mo><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>i</mi><mi>,</mi><mi>j</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, and we can write

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>g</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mi>i</mi>
       <mi>,</mi>
       <mi>i</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>h</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>f</mi>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mrow>
         <mi>i</mi>
         <mi>,</mi>
         <mi>j</mi>
        </mrow>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(i, i) = h(f(i,j))</annotation>
 </semantics>
</math>

<a name="pixel-transform-multiplication-addition"></a>
### MULTIPLICATION AND ADDITION WITH A CONSTANT

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>g</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>α</mi>
   </mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">+</mo>
    <mi>β</mi>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(x) = %alpha f(x) + %beta</annotation>
 </semantics>
</math>

The parameters <math><semantics><mrow><mi>α</mi><mo stretchy="false">&gt;</mo><mn>0</mn></mrow></semantics></math> and <math><semantics><mi>β</mi></semantics></math> are often called the gain and bias parameters; sometimes these parameters are said to control contrast and brightness, respectively. The bias and gain parameters can also be spatially varying.

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>g</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>α</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mi>x</mi>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">+</mo>
    <mi>b</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mi>x</mi>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(x)=%alpha(x)f(x)+b(x)</annotation>
 </semantics>
</math>

e.g., when simulating the graded density filter used by photographers to selectively darken the sky or when model vignetting in an optical system.

> Multiplication gain is a linear operation, since it obeys the superposition principle,
>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>h</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <msub>
        <mi>f</mi>
        <mn>0</mn>
       </msub>
       <mo stretchy="false">+</mo>
       <msub>
        <mi>f</mi>
        <mn>1</mn>
       </msub>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>h</mi>
   </mrow>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <msub>
       <mi>f</mi>
       <mn>0</mn>
      </msub>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">+</mo>
    <mi>h</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <msub>
      <mi>f</mi>
      <mn>1</mn>
     </msub>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">h(f_0 + f_1) = h(f_0) + h(f_1)</annotation>
 </semantics>
</math>

__INPUT__

<img id="multiplication-addition-input" src="/assets/images/first.jpg">

__OUTPUT__

<canvas id="multiplication-addition-output" width="0" height="0" style="border: 1px solid #000000;"></canvas>

_multiplication_

<input id="multiplication-addition-control-multiplication" type="range" min="0" max="100" value="100">

_addition_

<input id="multiplication-addition-control-addition" type="range" min="0" max="255" value="0">

<script type="text/javascript">
  function multiplication_addition_init() {
    let output = document.getElementById('multiplication-addition-output');
    let input = document.getElementById('multiplication-addition-input');
    console.log(input.clientWidth);
    output.width = input.clientWidth;
    output.height = input.clientHeight;

    let alpha = 1.0;
    let beta = 0;

    document.getElementById('multiplication-addition-control-multiplication')
            .addEventListener('change', (event) => {
              dispatch(() => {
                let o = document.getElementById('multiplication-addition-control-multiplication');
                let max = parseInt(o.max);
                let value = parseInt(o.value);
                alpha = value / max;
                console.log(alpha);
                let image = cv.imread('multiplication-addition-input');
                cv.addWeighted(image, alpha, image, beta/256, -1, image);
                cv.imshow('multiplication-addition-output',image);
                image.delete();
              });
            });

    document.getElementById('multiplication-addition-control-addition')
            .addEventListener('change', (event) => {
              dispatch(() => {
                let o = document.getElementById('multiplication-addition-control-addition');
                let value = parseInt(o.value);
                beta = value;
                console.log(beta);
                let image = cv.imread('multiplication-addition-input');
                cv.addWeighted(image, alpha, image, beta/256, -1, image);
                cv.imshow('multiplication-addition-output',image);
                image.delete();
              });
            });
  }

  multiplication_addition_init();
</script>

> - [chaning the contrast and brightness - using c/c++](https://github.com/iticworld/dev/tree/master/opencv/changing-the-contrast-and-brightness-of-an-image)
> - [changing the contrast and brightness of an image](https://docs.opencv.org/4.2.0/d3/dc1/tutorial_basic_linear_transform.html)

<a name="pixel-transform-linear-blend"></a>
### LINEAR BLEND

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>g</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mn>1</mn>
       <mo stretchy="false">−</mo>
       <mi>α</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
   </mrow>
   <msub>
    <mi>f</mi>
    <mn>0</mn>
   </msub>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">+</mo>
    <mi>α</mi>
   </mrow>
   <msub>
    <mi>f</mi>
    <mn>1</mn>
   </msub>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mi>x</mi>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(x)=(1-%alpha)f_0(x) + %alpha f_1(x)</annotation>
 </semantics>
</math>

By varying <math><semantics><mi>α</mi></semantics></math> from <math><semantics><mrow><mn>0</mn><mo stretchy="false">→</mo><mn>1</mn></mrow></semantics></math>, this operator can be used to perform a temporal cross-dissolve between two images or videos.

<a name="pixel-transform-gamma-correction"></a>
### GAMMA CORRECTION

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>g</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <msup>
     <mrow>
      <mo fence="true" stretchy="true">|</mo>
      <mrow>
       <mrow>
        <mi>f</mi>
        <mrow>
         <mo fence="true" stretchy="false">(</mo>
         <mrow>
          <mi>x</mi>
         </mrow>
         <mo fence="true" stretchy="false">)</mo>
        </mrow>
       </mrow>
      </mrow>
      <mo fence="true" stretchy="true">|</mo>
     </mrow>
     <mrow>
      <mn>1</mn>
      <mo stretchy="false">/</mo>
      <mi>γ</mi>
     </mrow>
    </msup>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(x) = left lline f(x) right rline ^ { 1/%gamma }</annotation>
 </semantics>
</math>

where a gamma value of <math><semantics><mrow><mi>γ</mi><mo stretchy="false">≈</mo><mn>2.2</mn></mrow></semantics></math> is a reasonable fit for most digital cameras.


| radiance | 광휘, 찬란한 빛, 빛 |
| vignette | 흐리게 하다, 정확하게 묘사한 것, 장식 무늬, 비네트 |
| vignetting | 비네트 인화, 주변부의 감광 |
| spatial | 공간의, 공간적인. 장소의 |
| multiplicative | 증가하는, 증식력이 있는, 배수사 |
| superposition | 겹쳐 놓음, 중첩, 위에 놓는 것 |
| invariant | 불변의, 불변식, 변함없는 |
| dyadic | 두 부분의, 한 쌍의, 2가 원소의 |
