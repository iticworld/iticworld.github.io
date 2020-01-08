---
layout: post
title: "[OPENCV/TUTORIAL] SMOOTHING IMAGES"
permalink: /opencv/tutorial/smoothing-images/
---

DRAFT

## SMOOTHING(BLURRING)

Smoothing is a simple and frequently used image processing operation.

There are many reasons for smoothing.

- reduce noise

To perform a smoothing operation we will apply a filter to our image. The most common type of filters are linear, in which an output pixel's value is determined as a weighted sum of input pixel value.

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
       <mi>j</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mrow>
     <munderover>
      <mo stretchy="false">∑</mo>
      <mrow>
       <mi>k</mi>
       <mi>,</mi>
       <mi>l</mi>
      </mrow>
      <mrow/>
     </munderover>
     <mrow>
      <mi>f</mi>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mrow>
         <mrow>
          <mi>i</mi>
          <mo stretchy="false">+</mo>
          <mi>k</mi>
         </mrow>
         <mi>,</mi>
         <mrow>
          <mi>j</mi>
          <mo stretchy="false">+</mo>
          <mi>l</mi>
         </mrow>
        </mrow>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mrow>
         <mi>k</mi>
         <mi>,</mi>
         <mi>l</mi>
        </mrow>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
     </mrow>
    </mrow>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">g(i, j) = sum from {k, l} to { } { f(i + k, j + l) h(k, l) }</annotation>
 </semantics>
</math>
