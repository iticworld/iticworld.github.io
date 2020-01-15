---
layout: page
title: "VECTOR SPACE"
permalink: /wiki/space/vector/
---

A vector space, in addition to scalars, contains a second type of entity: vectors. Vectors have two operations defined: vector-vector addition and scalar-vector multiplication. Let <math><semantics><mi>u</mi></semantics></math>, <math><semantics><mi>v</mi></semantics></math>, <math><semantics><mi>w</mi></semantics></math> denote vectors in a vector space <math><semantics><mi>V</mi></semantics></math>. Vector addition is defined to be closed <math><semantics><mrow><mrow><mrow><mi>u</mi><mo stretchy="false">+</mo><mi>v</mi></mrow><mo stretchy="false">∈</mo><mi>V</mi></mrow><mi>,</mi><mi>u</mi><mi>,</mi><mrow><mi>v</mi><mo stretchy="false">∈</mo><mi>V</mi></mrow></mrow></semantics></math>, commutative <math><semantics><mrow><mrow><mi>u</mi><mo stretchy="false">+</mo><mi>v</mi></mrow><mo stretchy="false">=</mo><mrow><mi>v</mi><mo stretchy="false">+</mo><mi>u</mi></mrow></mrow></semantics></math>, and associative <math><semantics><mrow><mrow><mi>u</mi><mo stretchy="false">+</mo><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>v</mi><mo stretchy="false">+</mo><mi>w</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><mo stretchy="false">=</mo><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>u</mi><mo stretchy="false">+</mo><mi>v</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">+</mo><mi>w</mi></mrow></mrow></semantics></math>.

There is a special vector (the zero vector) 0 defined such that <math><semantics><mrow><mi>u</mi><mo stretchy="false">∈</mo><mi>V</mi></mrow></semantics></math>:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>u</mi>
    <mo stretchy="false">+</mo>
    <mstyle mathvariant="bold">
     <mn>0</mn>
    </mstyle>
   </mrow>
   <mo stretchy="false">=</mo>
   <mi>u</mi>
  </mrow>
 </semantics>
</math>

Every vector <math><semantics><mi>u</mi></semantics></math> has an additive inverse denoted by <math><semantics><mi>-u</mi></semantics></math> such that

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>u</mi>
    <mo stretchy="false">+</mo>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mo stretchy="false">−</mo>
       <mi>u</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
   </mrow>
   <mo stretchy="false">=</mo>
   <mn>0</mn>
  </mrow>
 </semantics>
</math>

Scalar-vector multiplication is defined such that, for any scalar <math><semantics><mi>α</mi></semantics></math> and any vector <math><semantics><mi>u</mi></semantics></math>, <math><semantics><mi>αu</mi></semantics></math> is a vector in <math><semantics><mi>V</mi></semantics></math>. The scalar-vector operation is distributive. Hence,

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>α</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mi>u</mi>
       <mo stretchy="false">+</mo>
       <mi>v</mi>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>α</mi>
   </mrow>
   <mrow>
    <mi>u</mi>
    <mo stretchy="false">+</mo>
    <mi>α</mi>
   </mrow>
   <mi>v</mi>
  </mrow>
 </semantics>
</math>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>α</mi>
      <mo stretchy="false">+</mo>
      <mi>β</mi>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mrow>
    <mi>u</mi>
    <mo stretchy="false">=</mo>
    <mi>α</mi>
   </mrow>
   <mrow>
    <mi>u</mi>
    <mo stretchy="false">+</mo>
    <mi>β</mi>
   </mrow>
   <mi>u</mi>
  </mrow>
 </semantics>
</math>

![figure b.1](/assets/images/wiki/space/figure.b.1.png)

__Figure B.1. Directed line segments__

The two examples of vector spaces that we use are geometric vectors (directed line segments) and the n-tuples of real numbers. Consider a set of directed line segments that we can picture as shown in Figure B.1. If our scalars are real numbers, then scalar-vector multiplication changes the length of a vector, but not that vector's direction (Figure B.2).

![figure b.2](/assets/images/wiki/space/figure.b.2.png)

__Figure B.2. Scalar-vector multiplication__

Vector-vector addition can be defined by the head-to-tail axiom, which we can visualize easily for the example of directed line segments. We form the vector <math><semantics><mrow><mi>u</mi><mo stretchy="false">+</mo><mi>v</mi></mrow></semantics></math> by connecting the head of <math><semantics><mi>u</mi></semantics></math> to the tail of <math><semantics><mi>v</mi></semantics></math>, as shown in Figure B.3. You should be able to verify that all the rules of a vector field are satisfied.

![figure b.3](/assets/images/wiki/space/figure.b.3.png)

__Figure B.3. Head-to-tail axiom for vectors__

The second example of a vector space is n-tuples of scalars - usually, real or complex numbers. Hence, a vector can be written as

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>v</mi>
   <mo stretchy="false">=</mo>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <msub>
       <mi>v</mi>
       <mn>1</mn>
      </msub>
      <mi>,</mi>
      <msub>
       <mi>v</mi>
       <mn>2</mn>
      </msub>
      <mi>,</mi>
      <mn>...</mn>
      <mi>,</mi>
      <msub>
       <mi>v</mi>
       <mi>n</mi>
      </msub>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
  </mrow>
 </semantics>
</math>

Scalar-vector multiplication and vector-vector addition are given by

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mtable>
   <mtr>
    <mtd>
     <mrow>
      <mrow>
       <mi>u</mi>
       <mo stretchy="false">+</mo>
       <mi>v</mi>
      </mrow>
      <mo stretchy="false">=</mo>
      <mrow>
       <mrow>
        <mo fence="true" stretchy="false">(</mo>
        <mrow>
         <mrow>
          <msub>
           <mi>u</mi>
           <mn>1</mn>
          </msub>
          <mi>,</mi>
          <msub>
           <mi>u</mi>
           <mn>2</mn>
          </msub>
          <mi>,</mi>
          <mn>...</mn>
          <mi>,</mi>
          <msub>
           <mi>u</mi>
           <mi>n</mi>
          </msub>
         </mrow>
        </mrow>
        <mo fence="true" stretchy="false">)</mo>
       </mrow>
       <mo stretchy="false">+</mo>
       <mrow>
        <mo fence="true" stretchy="false">(</mo>
        <mrow>
         <mrow>
          <msub>
           <mi>v</mi>
           <mn>1</mn>
          </msub>
          <mi>,</mi>
          <msub>
           <mi>v</mi>
           <mn>2</mn>
          </msub>
          <mi>,</mi>
          <mn>...</mn>
          <mi>,</mi>
          <msub>
           <mi>v</mi>
           <mi>n</mi>
          </msub>
         </mrow>
        </mrow>
        <mo fence="true" stretchy="false">)</mo>
       </mrow>
      </mrow>
     </mrow>
    </mtd>
   </mtr>
   <mtr>
    <mtd>
     <mrow>
      <mrow/>
      <mo stretchy="false">=</mo>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mrow>
         <mrow>
          <msub>
           <mi>u</mi>
           <mn>1</mn>
          </msub>
          <mo stretchy="false">+</mo>
          <msub>
           <mi>v</mi>
           <mn>1</mn>
          </msub>
         </mrow>
         <mi>,</mi>
         <mrow>
          <msub>
           <mi>u</mi>
           <mn>2</mn>
          </msub>
          <mo stretchy="false">+</mo>
          <msub>
           <mi>v</mi>
           <mn>2</mn>
          </msub>
         </mrow>
         <mi>,</mi>
         <mn>...</mn>
         <mi>,</mi>
         <mrow>
          <msub>
           <mi>u</mi>
           <mi>n</mi>
          </msub>
          <mo stretchy="false">+</mo>
          <msub>
           <mi>v</mi>
           <mi>n</mi>
          </msub>
         </mrow>
        </mrow>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
     </mrow>
    </mtd>
   </mtr>
  </mtable>
 </semantics>
</math>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>α</mi>
   <mrow>
    <mi>v</mi>
    <mo stretchy="false">=</mo>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mrow>
       <mi>α</mi>
       <msub>
        <mi>v</mi>
        <mn>1</mn>
       </msub>
       <mi>,</mi>
       <mi>α</mi>
       <msub>
        <mi>v</mi>
        <mn>2</mn>
       </msub>
       <mi>,</mi>
       <mn>...</mn>
       <mi>,</mi>
       <mi>α</mi>
       <msub>
        <mi>v</mi>
        <mi>n</mi>
       </msub>
      </mrow>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math>

This space is denoted <math><semantics><msup><mi mathvariant="normal">ℝ</mi><mi>n</mi></msup></semantics></math> and is the vector space in which we can manipulate vectors using matrix algebra.

In a vector space, the concepts of linear independence and basis are crucial. A linear combination of <math><semantics><mi>n</mi></semantics></math> vectors, <math><semantics><mrow><msub><mi>u</mi><mn>1</mn></msub><mi>,</mi><msub><mi>u</mi><mn>2</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>u</mi><mi>n</mi></msub></mrow></semantics></math> is a vector of the form

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>u</mi>
    <mo stretchy="false">=</mo>
    <msub>
     <mi>α</mi>
     <mn>1</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>u</mi>
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
     <mi>u</mi>
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
    <mi>u</mi>
    <mi>n</mi>
   </msub>
  </mrow>
 </semantics>
</math>

If the only set of scalars such that

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <msub>
    <mi>α</mi>
    <mn>1</mn>
   </msub>
   <mrow>
    <msub>
     <mi>u</mi>
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
     <mi>u</mi>
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
   <mrow>
    <msub>
     <mi>u</mi>
     <mi>n</mi>
    </msub>
    <mo stretchy="false">=</mo>
    <mn>0</mn>
   </mrow>
  </mrow>
 </semantics>
</math>

is

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <msub>
    <mi>α</mi>
    <mn>1</mn>
   </msub>
   <mo stretchy="false">=</mo>
   <msub>
    <mi>α</mi>
    <mn>2</mn>
   </msub>
   <mo stretchy="false">=</mo>
   <mn>...</mn>
   <mo stretchy="false">=</mo>
   <msub>
    <mi>α</mi>
    <mi>n</mi>
   </msub>
   <mo stretchy="false">=</mo>
   <mn>0</mn>
  </mrow>
 </semantics>
</math>

then the vectors are said to be linearly independent. The greatest number of linearly independent vectors that we can find in a space gives the dimension of the space. If a vector space has dimension <math><semantics><mi>n</mi></semantics></math>, any set of <math><semantics><mi>n</mi></semantics></math> linearly independent vectors form a basis. If <math><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mi>,</mi><msub><mi>v</mi><mn>2</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>v</mi><mi>n</mi></msub></mrow></semantics></math> is a basis for <math><semantics><mi>V</mi></semantics></math>, any vector <math><semantics><mi>v</mi></semantics></math> can be expressed uniquely in terms of the basis vectors as

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>v</mi>
    <mo stretchy="false">=</mo>
    <msub>
     <mi>β</mi>
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
     <mi>β</mi>
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
     <mi>β</mi>
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

The scalars <math><semantics><mrow><mo stretchy="false">{</mo><msub><mi>β</mi><mi>i</mi></msub><mo stretchy="false">}</mo></mrow></semantics></math> give the representation of <math><semantics><mi>v</mi></semantics></math> with respect to the basis <math><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mi>,</mi><msub><mi>v</mi><mn>2</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>v</mi><mi>n</mi></msub></mrow></semantics></math>.

If <math><semantics><mrow><msub><mi>w</mi><mn>1</mn></msub><mi>,</mi><msub><mi>w</mi><mn>2</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>w</mi><mi>n</mi></msub></mrow></semantics></math> is some other basis (the number of vectors in a basis in constant), there is a representation of <math><semantics><mi>v</mi></semantics></math> with respect to this basis; that is,

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mi>v</mi>
    <mo stretchy="false">=</mo>
    <msub>
     <mi>γ</mi>
     <mn>1</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>w</mi>
     <mn>1</mn>
    </msub>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>γ</mi>
     <mn>2</mn>
    </msub>
   </mrow>
   <mrow>
    <msub>
     <mi>w</mi>
     <mn>2</mn>
    </msub>
    <mo stretchy="false">+</mo>
    <mn>...</mn>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>γ</mi>
     <mi>n</mi>
    </msub>
   </mrow>
   <msub>
    <mi>w</mi>
    <mi>n</mi>
   </msub>
  </mrow>
 </semantics>
</math>

There exists an <math><semantics><mrow><mi>n</mi><mo stretchy="false">×</mo><mi>n</mi></mrow></semantics></math> matrix <math><semantics><mstyle mathvariant="bold"><mtext>M</mtext></mstyle></semantics></math> such that

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="true">[</mo>
     <mrow>
      <mtable>
       <mtr>
        <mtd>
         <msub>
          <mi>γ</mi>
          <mn>1</mn>
         </msub>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <msub>
          <mi>γ</mi>
          <mn>2</mn>
         </msub>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <mo stretchy="false">⋮</mo>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <msub>
          <mi>γ</mi>
          <mi>n</mi>
         </msub>
        </mtd>
       </mtr>
      </mtable>
     </mrow>
     <mo fence="true" stretchy="true">]</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mstyle mathvariant="bold">
     <mtext>M</mtext>
    </mstyle>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="true">[</mo>
    <mrow>
     <mtable>
      <mtr>
       <mtd>
        <msub>
         <mi>β</mi>
         <mn>1</mn>
        </msub>
       </mtd>
      </mtr>
      <mtr>
       <mtd>
        <msub>
         <mi>β</mi>
         <mn>2</mn>
        </msub>
       </mtd>
      </mtr>
      <mtr>
       <mtd>
        <mo stretchy="false">⋮</mo>
       </mtd>
      </mtr>
      <mtr>
       <mtd>
        <msub>
         <mi>β</mi>
         <mi>n</mi>
        </msub>
       </mtd>
      </mtr>
     </mtable>
    </mrow>
    <mo fence="true" stretchy="true">]</mo>
   </mrow>
  </mrow>
 </semantics>
</math>

This matrix gives a way of changing representations through a simple linear transformation involving only scalar operations for carrying out matrix multiplication. More generally, once we have a basis for a vector space, we can work only with representations. If the scalars are real numbers, then we can work with n-tuples of reals and use matrix algebra, instead of doing operations in the original abstract vector space.
