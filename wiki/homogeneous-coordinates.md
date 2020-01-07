---
layout: page
title: "HOMOGENEOUS COORDINATES"
permalink: /wiki/homogenous-coordinates/
---

## HOMOGENEOUS COORDINATES

유클리안 공간에서 설명 가능한 기하나 그래픽을 투영공간에서도 설명하고 계산할 수 있도록 해주는 좌표계입니다.

유클리안 공간에서 평행하는 두 선분은 영원히 만나지 않습니다. 하지만 투영 공간에서는 이 두 선분은 눈으로부터 멀어질수록 가까워져서 만나게 됩니다. 두 공간은 서로 다릅니다. 그렇기 때문에 유클리안 공간에서 묘사한 기하나 그래픽을 투영 공간에서 다루기 위해서는 유클리안 공간에서 정의한 기하를 변형하여야 투영공간에서도 사용할 수 있습니다. 즉, 유클리안 공간에서 정의한 기하를 투영공간에서 사용하기 위해 제안된 것이 동차좌표입니다.

2차원 유클리안 공간에서 정의한 (X, Y) 를 투영공간에서 사용하기 위해서 X=x/w 그리고 Y=y/w 가 되는 x, y, w 를 (x, y, w) 좌표로 표현하는 것입니다.

(1, 2) => (1, 2, 1)
(1, 2) => (2, 4, 2)
(1, 2) => (3, 6, 3)
...
(1, 2) => (3w, 6w, w)

호모지니어스 좌표계에서 w가 0에 수렴한다는 것은 유클리안 공간에서 정의한 (x/w, y/w) 가 (∞, ∞) 이 된다는 것입니다.

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mrow>
       <mn>1</mn>
       <mo stretchy="false">/</mo>
       <mi>w</mi>
      </mrow>
      <mi>,</mi>
      <mrow>
       <mn>2</mn>
       <mo stretchy="false">/</mo>
       <mi>w</mi>
      </mrow>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mo stretchy="false">=</mo>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mrow>
       <munder>
        <mi>lim</mi>
        <mrow>
         <mi>x</mi>
         <mo stretchy="false">→</mo>
         <mn>0</mn>
        </mrow>
       </munder>
       <mrow>
        <mn>1</mn>
        <mo stretchy="false">/</mo>
        <mi>w</mi>
       </mrow>
      </mrow>
      <mi>,</mi>
      <mrow>
       <munder>
        <mi>lim</mi>
        <mrow>
         <mi>x</mi>
         <mo stretchy="false">→</mo>
         <mn>0</mn>
        </mrow>
       </munder>
       <mrow>
        <mn>2</mn>
        <mo stretchy="false">/</mo>
        <mi>w</mi>
       </mrow>
      </mrow>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mo stretchy="false">=</mo>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi mathvariant="normal">∞</mi>
      <mi>,</mi>
      <mi mathvariant="normal">∞</mi>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">(1/w, 2/w) = ( lim from { x-&gt;0 } {1/w}, lim from { x-&gt;0 } {2/w} ) = ( %infinite, %infinite )</annotation>
 </semantics>
</math>

Homogeneous coordinates are scale invariant.





### PROBLEM: TWO PARALLEL LINES CAN INTERSECT.



유클리안 공간에서 평행하는 두 선분은 영원히 교차하지 않습니다. 하지만, 투영 공간에서는 평행하는 선분은 교차합니다.

유클리안 공간에서 묘사한 2차원 혹은 3차원 기하를 투영 공간에서 다루는 것은 쉬운 일은 아닙니다.

두 평행하는 선분이 존재하면 유클리디안 공간에서는 두 선분은 영원히 만날 수 없지만, 투영 공간에서는 두 선번은 교차합니다.

즉, 유클리안 공간에서 묘사하는 기하를 투영공간에서 묘사할 수 있도록 제안된 것이 바로 HOMOGENEOU COORDINATES 입니다.



[그림] 2차원 유클리안 공간에서 평행하는 두 선분을 보여주자.

유클리안 공간에서 정의한 기하나 그래픽을 투영 공간에서 다루는 것은 쉬운 일은 아닙니다.

HOMOGENEOUS COORDINATES 는 유클리안 공간에서 정의한 그래픽과 기하를 투영 공간에서 계산할 수 있도록 해줍니다.
호모지니어스 좌표계는 N 차원 좌표계를 N+1의 숫자로 표현하는 방법입니다.

2차원 호모니지어스 좌표를 만드는 것은 간단히, w 란 변수를 좌표계에 추가하는 것입니다. 즉, (x, y) 는 (xw, yw, w) 로 표현하는 것입니다.

x, y 가 무한대로 간다는 거

유클리안 공간에서 정의한 점 (X, Y) 를 (X/w, y/w, w) 로 표현하여





In Euclidean space (geometry), two parallel lines on the same plane cannot intersect, or cannot meet each other forever. It is a common sense that everyone is familiar with.

However, it is not true any more in projective space, for example, the train railroad on the side picture becomes narrower while it moves far away from eyes. Finally, the two parallel rails meet at the horizon, which is a point at infinity.

Euclidean space (or Cartesian space) describe out two/three dimensional geometry so well, but they are not sufficient to handle the projective space (Actually, Euclidean geometry is a subset of projective geometry). The Cartesian coordinates of a two dimensional point can be expressed as (x, y).

What if this point goes far away to infinity? The point at infinity would be (∞,∞) and it becomes meaningless in Euclidean space. The parallel lines should meet at infinity in projective space, but cannot do in Euclidean space. Mathematicians have discovered a way to solve this issue.

### SOLUTION: HOMOGENEOUS COORDINATES

Homogeneous coordinates, introduced by August Fedinand Mobius, make calculations of graphics and geometry possible in projective space. Homogeneous coordinates are a way of representing n-dimensional coordinates with n + 1 numbers.

To make two dimensional homogeneous coordinates, we simply add an additional variable w, into existing coordinates. Therefore, a point in Cartesian coordinates, (X, Y) becomes (x, y, w) in homogeneous coordinate. And X and Y in Cartesian are re-expressed with x, y and w in Homogeneous as;

X = x/w
Y = y/w

For instance, a point in Cartesian (1, 2) becomses (1, 2, 1) in Homogeneous.
If a point, (1, 2), moves toward infinity, it becomes (∞, ∞) in Cartesian coordinates. And it becomes (1, 2, 0) in Homogeneous coordinates, because of (1/0, 2/0) = (∞, ∞). Notice that we can express the point at infinity without using "∞".

### WHY IS CALLED HOMOGENEOUS?

As mentioned before, in order to convert from homogeneous coordinates (x, y, w) to cartesian coordinates, we simply divide x and y by w:


<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>x</mi>
      <mi>,</mi>
      <mi>y</mi>
      <mi>,</mi>
      <mi>w</mi>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mo stretchy="false">=</mo>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mfrac>
       <mi>x</mi>
       <mi>w</mi>
      </mfrac>
      <mi>,</mi>
      <mfrac>
       <mi>y</mi>
       <mi>w</mi>
      </mfrac>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">( x, y, w ) = ( x over w, y over w )</annotation>
 </semantics>
</math>

Converting Homogeneous to Cartesian, we can find an important fact. Let's see the following example;

Homogeneous coordinates are scale invariant.

### PROOF - TWO PARALLEL LINES CAN INTERSECT.

Consider the following linear system in Euclidean space;

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi mathvariant="italic">Ax</mi>
    <mo stretchy="false">+</mo>
    <mi mathvariant="italic">By</mi>
    <mo stretchy="false">+</mo>
    <mi>C</mi>
   </mrow>
   <mo stretchy="false">=</mo>
   <mn>0</mn>
  </mrow>
  <annotation encoding="StarMath 5.0">Ax + By + C = 0</annotation>
 </semantics>
</math>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi mathvariant="italic">Ax</mi>
    <mo stretchy="false">+</mo>
    <mi mathvariant="italic">By</mi>
    <mo stretchy="false">+</mo>
    <mi>D</mi>
   </mrow>
   <mo stretchy="false">=</mo>
   <mn>0</mn>
  </mrow>
  <annotation encoding="StarMath 5.0">Ax + By + C = 0</annotation>
 </semantics>
</math>

And we know that there is no solution for above equations because of

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>C</mi>
   <mo stretchy="false">≠</mo>
   <mi>D</mi>
  </mrow>
  <annotation encoding="StarMath 5.0">C &lt;&gt; D</annotation>
 </semantics>
</math>

If

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>C</mi>
   <mo stretchy="false">=</mo>
   <mi>D</mi>
  </mrow>
  <annotation encoding="StarMath 5.0">C = D</annotation>
 </semantics>
</math>

then two lines are identical (overlapped).

Let's rewrite the equations for projective space by replacig x and y to x/w and y/w respectively.




http://www.songho.ca/math/homogeneous/homogeneous.html
