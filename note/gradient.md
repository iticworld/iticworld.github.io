---
layout: page
title: "GRADIENT"
permalink: /note/gradient/
---

https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient



https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient



The gradient stores all the partial derivative information of a multivariable function.

The gradient of a scalar-valued multi-variable function <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mi>,</mi><mi>y</mi><mi>,</mi><mn>...</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><annotation encoding="StarMath 5.0">f(x, y, ...)</annotation></semantics></math>, denoted <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi></mrow><annotation encoding="StarMath 5.0">nabla f</annotation></semantics></math>, packages all its partial derivative information into a vector:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mo stretchy="false">∇</mo>
   <mrow>
    <mi>f</mi>
    <mo stretchy="false">=</mo>
    <mrow>
     <mo fence="true" stretchy="true">[</mo>
     <mrow>
      <mtable>
       <mtr>
        <mtd>
         <mfrac>
          <mrow>
           <mi>δ</mi>
           <mi>f</mi>
          </mrow>
          <mrow>
           <mi>δ</mi>
           <mi>x</mi>
          </mrow>
         </mfrac>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <mfrac>
          <mrow>
           <mi>δ</mi>
           <mi>f</mi>
          </mrow>
          <mrow>
           <mi>δ</mi>
           <mi>y</mi>
          </mrow>
         </mfrac>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <mn>...</mn>
        </mtd>
       </mtr>
      </mtable>
     </mrow>
     <mo fence="true" stretchy="true">]</mo>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math>

In particular, this means <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi></mrow><annotation encoding="StarMath 5.0">nabla f</annotation></semantics></math> is vector-valued function.

If you imagine standing at a point <math><semantics><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><msub><mi>x</mi><mn>0</mn></msub><mi>,</mi><msub><mi>y</mi><mn>0</mn></msub><mi>,</mi><mn>...</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></semantics></math> in the input space of <math><mi>f</mi></math>, the vector <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><msub><mi>x</mi><mn>0</mn></msub><mi>,</mi><msub><mi>y</mi><mn>0</mn></msub><mi>,</mi><mn>...</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> tells you which direction you should travel to increase the value of <math><mi>f</mi></math> most rapidly.

These gradient vectors are also perpendicular to the contour lines of <math><mi>f</mi></math>.

After learning that functions with a multidimensional input have partial derivatives, you might wonder what the full derivative of such a function is. In the case of scalar-valued multivariable functions, meaning those with a multidimensional input but a one-dimensional output, the answer is the gradient.

> 다중입력값에도 1차원의 출력값으로 표현할 수 있도록 하는 것이 바로 GRADIENT 입니다.

----

## DEFINITION

The gradient of a function <math><mi>f</mi></math>, denoted as <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi></mrow></semantics></math>, is the collection of all its partial derivatives into a vector.

![gradient](/assets/images/note/841d347c7b6bf9a7ea4c31f6b6d9379a865105d0.svg)

> https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient



## EXAMPLE

### TWO DIMENSIONAL

If <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mi>,</mi><mi>y</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy="false">−</mo><mi mathvariant="italic">xy</mi></mrow></mrow></mrow></semantics></math>, which of the following represents <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi></mrow></semantics></math>?

> Notice, <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi></mrow></semantics></math> is a vector-valued function, specifially one with a two dimensional input and a two-dimensional output. This means it can be nicely visualized with a vector field. That vector field lives in the input space of <math><mi>f</mi></math>, which is the <math><mi>xy</mi></math> plane.
>
> This vector field is often called the gradient field of <math><mi>f</mi></math>.

![gradient field](/assets/images/note/7de2cd20f24e355ae89202a8c590c033938c997e.svg)

Why are the vectors in this vector field so small along the upward diagonal stripe in the middle of the <math><mi>xy</mi></math> plane?

The vector field is defined by the gradient:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mo stretchy="false">∇</mo>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mi>x</mi>
       <mi>,</mi>
       <mi>y</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mrow>
     <mo fence="true" stretchy="true">[</mo>
     <mrow>
      <mtable>
       <mtr>
        <mtd>
         <mrow>
          <mn>2</mn>
          <mrow>
           <mi>x</mi>
           <mo stretchy="false">−</mo>
           <mi>y</mi>
          </mrow>
         </mrow>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <mrow>
          <mo stretchy="false">−</mo>
          <mi>x</mi>
         </mrow>
        </mtd>
       </mtr>
      </mtable>
     </mrow>
     <mo fence="true" stretchy="true">]</mo>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math>

For a vector to be small, both its x and y components must be small. The x component of each vector is 2x - y, which is zero along the line y = 2x. Therefore all vectors close to that line will have a small horizontal component.

The y component of each vector is -x. This value is small whenever the point (x, y) is close to the y axis.

Therefore, the points which are both near the line y = 2x and near the y axis will have small vectors attached to them, as is the case in this circled region above.

As we will see in just a bit, the fact that the gradient vectors are small in this region corresponds with the fact that there graph of f(x, y) is relatively flat over this region.

## INTERPRETING THE GRADIENT

In each example above, we pictured <math><semantics><mrow><mo stretchy="false">∇</mo><mi>f</mi></mrow></semantics></math> as a vector field, but how do we interpret these vector fields?

More concretely, let's think about the case where the input of <math><mi>f</mi></math> is two dimensional. The gradient turns each input point <math><semantics><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><msub><mi>x</mi><mn>0</mn></msub><mi>,</mi><msub><mi>y</mi><mn>0</mn></msub></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></semantics></math> into the vector

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mo stretchy="false">∇</mo>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <msub>
        <mi>x</mi>
        <mn>0</mn>
       </msub>
       <mi>,</mi>
       <msub>
        <mi>y</mi>
        <mn>0</mn>
       </msub>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mrow>
     <mo fence="true" stretchy="true">[</mo>
     <mrow>
      <mtable>
       <mtr>
        <mtd>
         <mrow>
          <mfrac>
           <mrow>
            <mi>δ</mi>
            <mi>f</mi>
           </mrow>
           <mrow>
            <mi>δ</mi>
            <mi>x</mi>
           </mrow>
          </mfrac>
          <mrow>
           <mo fence="true" stretchy="false">(</mo>
           <mrow>
            <mrow>
             <msub>
              <mi>x</mi>
              <mn>0</mn>
             </msub>
             <mi>,</mi>
             <msub>
              <mi>y</mi>
              <mn>0</mn>
             </msub>
            </mrow>
           </mrow>
           <mo fence="true" stretchy="false">)</mo>
          </mrow>
         </mrow>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <mrow>
          <mfrac>
           <mrow>
            <mi>δ</mi>
            <mi>f</mi>
           </mrow>
           <mrow>
            <mi>δ</mi>
            <mi>y</mi>
           </mrow>
          </mfrac>
          <mrow>
           <mo fence="true" stretchy="false">(</mo>
           <mrow>
            <mrow>
             <msub>
              <mi>x</mi>
              <mn>0</mn>
             </msub>
             <mi>,</mi>
             <msub>
              <mi>y</mi>
              <mn>0</mn>
             </msub>
            </mrow>
           </mrow>
           <mo fence="true" stretchy="false">)</mo>
          </mrow>
         </mrow>
        </mtd>
       </mtr>
      </mtable>
     </mrow>
     <mo fence="true" stretchy="true">]</mo>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math>

What does that vector tell use about the behaviour of the function around the point <math><semantics><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><msub><mi>x</mi><mn>0</mn></msub><mi>,</mi><msub><mi>y</mi><mn>0</mn></msub></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></semantics></math>?

![gra](/assets/images/note/7980cfd5fbfe1ac2ab08c16bbd0951447619b135.png)

Think of the graph of f as a hilly terrain. If you are standing on the part of the graph directly above or below the point <math><semantics><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><msub><mi>x</mi><mn>0</mn></msub><mi>,</mi><msub><mi>y</mi><mn>0</mn></msub></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></semantics></math>, the slope of the hill depends on which direction you walk. For example, if you step straight in the positive x direction, the slope is

| perpendicular   | 수직의 |
| perpendicular slope | 급경사면 |
| contour         | 윤곽 |
| differentiation | 미분 |
| derivative | 도함수 |
| concretely | 구체적으로 |
