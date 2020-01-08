---
layout: page
title: "GEOMETRIC PRIMITIVES AND TRANSFORMATIONS"
permalink: /computer/vision/image/formation/geometric-primitives-and-transformations/
---

### GEOMETRIC PRIMITIVES

___Geometric primitives form the basic building blocks used to describe three-dimensional shapes.___

__TWO DIMENSIONAL POINTS__

Two dimensional points (pixel coordinates in an image) can be denoted using a pair of values,

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>x</mi>
   <mo stretchy="false">=</mo>
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
   <mo stretchy="false">∈</mo>
   <msup>
    <mi mathvariant="normal">ℝ</mi>
    <mn>2</mn>
   </msup>
  </mrow>
 </semantics>
</math>

, or alternatively,

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mstyle mathvariant="bold">
    <mi>x</mi>
   </mstyle>
   <mo stretchy="false">=</mo>
   <mrow>
    <mo fence="true" stretchy="true">[</mo>
    <mrow>
     <mtable>
      <mtr>
       <mtd>
        <mi>x</mi>
       </mtd>
      </mtr>
      <mtr>
       <mtd>
        <mi>y</mi>
       </mtd>
      </mtr>
     </mtable>
    </mrow>
    <mo fence="true" stretchy="true">]</mo>
   </mrow>
  </mrow>
 </semantics>
</math>

Two dimensional points can also be represented using homogeneous coordinates, where vectors that differ only by scale are considered to be equivalent.


two dimensional projective space
homogeneous coordinates
