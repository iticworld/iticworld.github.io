---
layout: page
title: "AFFINE SPACE"
permalink: /wiki/space/affine/
---

A vector space lacks any geometric concepts, such as location and distance. If we use the example of directed line segments as the natural vector space for our geometric problems, we get into difficulties because these vectors, just like the physicist's vectors, have magnitude and direction, but have no position. The vector shown in Figure B.4 are identical.

![figure b.4](/assets/images/wiki/space/figure.b.4.png)

__Figure B.4. Identical vectors__

If we think of this problem in terms of coordinate systems, we can express a vector in terms of a set of basis vectors that define a coordinate system. Figure B.5.1. shows three basis vectors emerging from a particular reference point, the origin. The location of the vectors in Figure B.5.2 is equally valid, however, because vectors have no position. In addition, we have no way to expression this special point, because our vector space has only vectors and scalars as its members.

![figure b.5.1](/assets/images/wiki/space/figure.b.5.1.png)

__Figure B.5.1. Coordinate System - Basis vectors located at the origin__

![figure b.5.2](/assets/images/wiki/space/figure.b.5.2.png)

__Figure B.5.1. Coordinate System - Arbitrary placement of basis vectors__

We can resolve this difficulty by introducing an affine space that adds a third type of entity - points - to a vector space. The points <math><semantics><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>P</mi><mi>,</mi><mi>Q</mi><mi>,</mi><mi>R</mi><mi>,</mi><mn>...</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></semantics></math> form a set. There is a single new operation, point-point subtraction, that yields a vector. Hence, if <math><semantics><mi>P</mi></semantics></math> and <math><semantics><mi>Q</mi></semantics></math> are any two points, the subtraction

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>v</mi>
   <mo stretchy="false">=</mo>
   <mrow>
    <mi>P</mi>
    <mo stretchy="false">−</mo>
    <mi>Q</mi>
   </mrow>
  </mrow>
 </semantics>
</math>

always yields a vector in <math><semantics><mi>V</mi></semantics></math>. Conversely, for every <math><semantics><mi>v</mi></semantics></math> and every <math><semantics><mi>P</mi></semantics></math>, we can find a <math><semantics><mi>Q</mi></semantics></math> such that the preceding relation holds. We can thus write

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>Q</mi>
   <mo stretchy="false">=</mo>
   <mrow>
    <mi>v</mi>
    <mo stretchy="false">+</mo>
    <mi>P</mi>
   </mrow>
  </mrow>
 </semantics>
</math>

defining a vector-point addition. A consequence of the head-to-tail axiom is that for any three points <math><semantics><mrow><mi>P</mi><mi>,</mi><mi>Q</mi><mi>,</mi><mi>R</mi></mrow></semantics></math>,

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mi>P</mi>
       <mo stretchy="false">−</mo>
       <mi>Q</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">+</mo>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mi>Q</mi>
       <mo stretchy="false">−</mo>
       <mi>R</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
   </mrow>
   <mo stretchy="false">=</mo>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>P</mi>
      <mo stretchy="false">−</mo>
      <mi>R</mi>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
 </semantics>
</math>

If we visualize the vector <math><semantics><mrow><mi>P</mi><mo stretchy="false">−</mo><mi>Q</mi></mrow></semantics></math> as the line segment from the point <math><semantics><mi>Q</mi></semantics></math> to the point <math><semantics><mi>P</mi></semantics></math>, using an arrow to denote direction, the head-to-tail axiom can be drawn as shown in Figure B.6.

![figure b.6](/assets/images/wiki/space/figure.b.6.png)

__Figure B.6. Head-to-tail axiom for points__

Various properties follow the affine geometry. Perphaps the most important is that if we use a frame, rather than a cooridnate system, we can specify both points and vectors in an affine space. A frame consist of a point <math><semantics><msub><mi>P</mi><mn>0</mn></msub></semantics></math>, and a set of vectors <math><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mi>,</mi><msub><mi>v</mi><mn>2</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>v</mi><mi>n</mi></msub></mrow></semantics></math> that defines a basis for the vector space. Given a frame, an arbitrary vector can be written uniquely as

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>v</mi>
    <mo stretchy="false">=</mo>
    <msub>
     <mi>α</mi>
     <mn>1</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>v</mi>
     <mn>1</mn>
    </msub>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>α</mi>
     <mn>2</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>v</mi>
     <mn>2</mn>
    </msub>
    <mo stretchy="false">+</mo>
    <mn>...</mn>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>α</mi>
     <mi>n</mi>
    </msub>
   </mrow>
   <msub>
    <mi>v</mi>
    <mi>n</mi>
   </msub>
  </mrow>
 </semantics>
</math>

and an arbitrary point can be written uniquely as

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>v</mi>
    <mo stretchy="false">=</mo>
    <msub>
     <mi>α</mi>
     <mn>1</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>v</mi>
     <mn>1</mn>
    </msub>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>α</mi>
     <mn>2</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>v</mi>
     <mn>2</mn>
    </msub>
    <mo stretchy="false">+</mo>
    <mn>...</mn>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>α</mi>
     <mi>n</mi>
    </msub>
   </mrow>
   <msub>
    <mi>v</mi>
    <mi>n</mi>
   </msub>
  </mrow>
 </semantics>
</math>

The two sets of scalars, <math><semantics><mrow><mo stretchy="false">{</mo><msub><mi>α</mi><mn>1</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>α</mi><mi>n</mi></msub><mo stretchy="false">}</mo></mrow></semantics></math> and <math><semantics><mrow><mo stretchy="false">{</mo><msub><mi>β</mi><mn>1</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>β</mi><mi>n</mi></msub><mo stretchy="false">}</mo></mrow></semantics></math>, give the representation of the vector and point, respectively, with each representation consisting of <math><semantics><mi>n</mi></semantics></math> scalars. We can regard the point <math><semantics><msub><mi>P</mi><mn>0</mn></msub></semantics></math> as the origin of the frame; all points are defined from this reference point.

If the origin never changes, we can worry about only those changes of frames corresponding to changes in coordinate systems. In computer graphics, however, we usually have to deal with making changes in frames and with representing objects in different frames. For example, we usually define our objects within a physical frame. The viewer, or camera, can be expressed in terms of this frame, but, as part of the image-creation process, it is to our advantage to express object positions with respect to the camera frame - a frame whose origin usually is located at the center of projection.
