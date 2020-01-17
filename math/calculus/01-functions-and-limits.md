---
layout: page
title: "1. FUNCTIONS AND LIMITS"
permalink: /calculus/functions-and-limits/
---

---
## FUNCTION

A __function__ <math><semantics><mi>f</mi></semantics></math> is a rule that assigns to each element <math><semantics><mi>x</mi></semantics></math> in a set <math><semantics><mi>D</mi></semantics></math> exactly one element, called <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, in a set <math><semantics><mi>E</mi></semantics></math>.

We usually consider functions for which the sets are sets <math><semantics><mi>D</mi></semantics></math> and <math><semantics><mi>E</mi></semantics></math> of real numbers. The set <math><semantics><mi>D</mi></semantics></math> is called the __domain__ of the function. The number <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> is the __value of <math><semantics><mstyle mathvariant="bold-italic"><mi>f</mi></mstyle></semantics></math> at <math><semantics><mstyle mathvariant="bold-italic"><mi>x</mi></mstyle></semantics></math>__ and is read "<math><semantics><mi>f</mi></semantics></math> of <math><semantics><mi>x</mi></semantics></math>". The __range__ of <math><semantics><mi>f</mi></semantics></math> is the set of all possible values of <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> as <math><semantics><mi>x</mi></semantics></math> varies throughout the domain. A symbol that represents arbitrary number in the domain of a function <math><semantics><mi>f</mi></semantics></math> is called an __independent variable__. A symbol that represents a number in the range of <math><semantics><mi>f</mi></semantics></math> is called a __dependent variable__.

---

__Example:__ Sketch the graph and find the domain and range of each function.

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mn>2</mn>
   </mrow>
   <mrow>
    <mi>x</mi>
    <mo stretchy="false">−</mo>
    <mn>1</mn>
   </mrow>
  </mrow>
 </semantics>
</math>

<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <mi>x</mi>
     <mn>2</mn>
    </msup>
   </mrow>
  </mrow>
 </semantics>
</math>

---

__Example:__ If <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mn>2</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy="false">−</mo><mn>5</mn></mrow><mrow><mi>x</mi><mo stretchy="false">+</mo><mn>1</mn></mrow></mrow></semantics></math> and <math><semantics><mrow><mi>h</mi><mo stretchy="false">≠</mo><mn>0</mn></mrow></semantics></math>, evaluate <math><semantics><mfrac><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>a</mi><mo stretchy="false">+</mo><mi>h</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">−</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>a</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><mi>h</mi></mfrac></semantics></math>.

---

__Example:__ Find the domain of each function.

<math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msqrt><mrow><mi>x</mi><mo stretchy="false">+</mo><mn>2</mn></mrow></msqrt></mrow></mrow></semantics></math>

<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mfrac>
     <mn>1</mn>
     <mrow>
      <msup>
       <mi>x</mi>
       <mn>2</mn>
      </msup>
      <mo stretchy="false">−</mo>
      <mi>x</mi>
     </mrow>
    </mfrac>
   </mrow>
  </mrow>
 </semantics>
</math>

---

### PIECEWISE DEFINED FUNCTION

---

__Example:__ A function <math><semantics><mi>f</mi></semantics></math> is defined by

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <mo fence="true" stretchy="true">[</mo>
     <mrow>
      <mtable>
       <mtr>
        <mtd>
         <mrow>
          <mrow>
           <mn>1</mn>
           <mo stretchy="false">−</mo>
           <mi>x</mi>
          </mrow>
          <mi>,</mi>
          <mi mathvariant="italic">if</mi>
          <mrow>
           <mi>x</mi>
           <mo stretchy="false">≤</mo>
           <mn>1</mn>
          </mrow>
         </mrow>
        </mtd>
       </mtr>
       <mtr>
        <mtd>
         <mrow>
          <msup>
           <mi>x</mi>
           <mn>2</mn>
          </msup>
          <mi>,</mi>
          <mi mathvariant="italic">if</mi>
          <mrow>
           <mi>x</mi>
           <mo stretchy="false">&gt;</mo>
           <mrow>
            <mo stretchy="false">−</mo>
            <mn>1</mn>
           </mrow>
          </mrow>
         </mrow>
        </mtd>
       </mtr>
      </mtable>
     </mrow>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math><br />

Evaluate <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mo stretchy="false">−</mo><mn>2</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, and <math><semantics><mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mn>0</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> and sketch the graph.

---

__Example:__ Sketch the graph of the absolute value function <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><mo fence="true" stretchy="false">|</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">|</mo></mrow></mrow></mrow></semantics></math>.

---

### SYMMETRY

__EVEN FUNCTION__

If a function <math><semantics><mi>f</mi></semantics></math> satisfies <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mo stretchy="false">−</mo><mi>x</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> for every number <math><semantics><mi>x</mi></semantics></math> in its domain, then <math><semantics><mi>f</mi></semantics></math> is called an __even function__.

__ODD FUNCTION__

If a function <math><semantics><mi>f</mi></semantics></math> satisfies <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mo stretchy="false">−</mo><mi>x</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><mo stretchy="false">−</mo><mi>f</mi></mrow></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> for every number <math><semantics><mi>x</mi></semantics></math> in its domain, then <math><semantics><mi>f</mi></semantics></math> is called an __odd function__.

---

__Example:__ Determine whether each of the following functions is even, odd, or neither even nor odd.

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <msup>
      <mi>x</mi>
      <mn>5</mn>
     </msup>
     <mo stretchy="false">+</mo>
     <mi>x</mi>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math>

<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <mn>1</mn>
     <mo stretchy="false">−</mo>
     <msup>
      <mi>x</mi>
      <mn>4</mn>
     </msup>
    </mrow>
   </mrow>
  </mrow>
 </semantics>
</math>

<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mn>2</mn>
   </mrow>
   <mrow>
    <mi>x</mi>
    <mo stretchy="false">−</mo>
    <msup>
     <mi>x</mi>
     <mn>2</mn>
    </msup>
   </mrow>
  </mrow>
 </semantics>
</math>

---

### INCREASING AND DECREASING FUNCTIONS

A function <math><semantics><mi>f</mi></semantics></math> is called increasing on an interval if

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <msub>
       <mi>x</mi>
       <mn>1</mn>
      </msub>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">&lt;</mo>
    <mi>f</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <msub>
      <mi>x</mi>
      <mn>2</mn>
     </msub>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mi>,</mi>
   <mi mathvariant="italic">whenever</mi>
   <mrow>
    <msub>
     <mi>x</mi>
     <mn>1</mn>
    </msub>
    <mo stretchy="false">&lt;</mo>
    <msub>
     <mi>x</mi>
     <mn>2</mn>
    </msub>
   </mrow>
  </mrow>
 </semantics>
</math>

<br />

It is called decreasing on an interval if

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <msub>
       <mi>x</mi>
       <mn>1</mn>
      </msub>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">&gt;</mo>
    <mi>f</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <msub>
      <mi>x</mi>
      <mn>2</mn>
     </msub>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mi>,</mi>
   <mi mathvariant="italic">whenever</mi>
   <mrow>
    <msub>
     <mi>x</mi>
     <mn>1</mn>
    </msub>
    <mo stretchy="false">&lt;</mo>
    <msub>
     <mi>x</mi>
     <mn>2</mn>
    </msub>
   </mrow>
  </mrow>
 </semantics>
</math>

## MATHEMATICAL MODELS: A CATALOG OF ESSENTIAL FUNCTIONS

### LINEAR MODELS

When we say <math><semantics><mi>y</mi></semantics></math> is a linear function of <math><semantics><mi>x</mi></semantics></math>, we mean that the graph of the function is a line, so we can use the slope intercept form of the equation form of the equation of a line to write a formula for the function as

<math>
 <semantics>
  <mrow>
   <mrow>
    <mi>y</mi>
    <mo stretchy="false">=</mo>
    <mi>f</mi>
   </mrow>
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
     <mi mathvariant="italic">mx</mi>
     <mo stretchy="false">+</mo>
     <mi>b</mi>
    </mrow>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">y=f(x)=mx+b</annotation>
 </semantics>
</math>
<br />

where <math><semantics><mi>m</mi></semantics></math> is the slope of the line and <math><semantics><mi>b</mi></semantics></math> is the <math><semantics><mi>y</mi></semantics></math> intercept.

A characteristic feature of linear functions is that they grow at a constant rate.

### POLYNOMIALS

A function <math><semantics><mi>f</mi></semantics></math> is called a polynomial if

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <msub>
     <mi>a</mi>
     <mi>n</mi>
    </msub>
   </mrow>
   <mrow>
    <msup>
     <mi>x</mi>
     <mi>n</mi>
    </msup>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>a</mi>
     <mrow>
      <mi>n</mi>
      <mo stretchy="false">−</mo>
      <mn>1</mn>
     </mrow>
    </msub>
   </mrow>
   <mrow>
    <msup>
     <mi>x</mi>
     <mrow>
      <mi>n</mi>
      <mo stretchy="false">−</mo>
      <mn>1</mn>
     </mrow>
    </msup>
    <mo stretchy="false">+</mo>
    <mo stretchy="false">⋯</mo>
    <mo stretchy="false">+</mo>
    <msup>
     <mi>a</mi>
     <mn>2</mn>
    </msup>
   </mrow>
   <mrow>
    <msup>
     <mi>n</mi>
     <mn>2</mn>
    </msup>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>a</mi>
     <mn>1</mn>
    </msub>
   </mrow>
   <mrow>
    <mi>x</mi>
    <mo stretchy="false">+</mo>
    <msub>
     <mi>a</mi>
     <mn>0</mn>
    </msub>
   </mrow>
  </mrow>
 </semantics>
</math>
<br />

where <math><semantics><mi>n</mi></semantics></math> is a non-negative integer and the numbers <math><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>,</mi><msub><mi>a</mi><mn>1</mn></msub><mi>,</mi><msub><mi>a</mi><mn>2</mn></msub><mi>,</mi><mn>...</mn><mi>,</mi><msub><mi>a</mi><mi>n</mi></msub></mrow></semantics></math> are constants called the coefficients of the polynomial. The domain of any polynomial is <math><semantics><mrow><mi mathvariant="normal">ℝ</mi><mo stretchy="false">∈</mo><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mrow><mo stretchy="false">−</mo><mi mathvariant="normal">∞</mi></mrow><mi>,</mi><mi mathvariant="normal">∞</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>. If the leading coefficient <math><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy="false">≠</mo><mn>0</mn></mrow></semantics></math>, then the degree of the polynomial is <math><semantics><mi>n</mi></semantics></math>.

A polynomial of degree 1 is of the <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><mi mathvariant="italic">mx</mi><mo stretchy="false">+</mo><mi>b</mi></mrow></mrow></mrow></semantics></math> and so it is a linear function. A polynomial of degree 2 is of the form <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><msup><mi mathvariant="italic">ax</mi><mn>2</mn></msup><mo stretchy="false">+</mo><mi mathvariant="italic">bx</mi><mo stretchy="false">+</mo><mi>c</mi></mrow></mrow></mrow></semantics></math> and is called a quadratic function. Its graph is always a parabola obtained by shifting the parabola <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><msup><mi mathvariant="italic">ax</mi><mn>2</mn></msup></mrow></semantics></math>. The parabola opens upward if <math><semantics><mrow><mi>a</mi><mo stretchy="false">&gt;</mo><mn>0</mn></mrow></semantics></math> and downward <math><semantics><mrow><mi>a</mi><mo stretchy="false">&lt;</mo><mn>0</mn></mrow></semantics></math>.

A polynomial of degree 3 is of the form

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <msup>
      <mi mathvariant="italic">ax</mi>
      <mn>3</mn>
     </msup>
     <mo stretchy="false">+</mo>
     <msup>
      <mi mathvariant="italic">bx</mi>
      <mn>2</mn>
     </msup>
     <mo stretchy="false">+</mo>
     <mi mathvariant="italic">cx</mi>
     <mo stretchy="false">+</mo>
     <mi>d</mi>
    </mrow>
   </mrow>
   <mi>,</mi>
   <mrow>
    <mi>a</mi>
    <mo stretchy="false">≠</mo>
    <mn>0</mn>
   </mrow>
  </mrow>
 </semantics>
</math>

and is called a cubic function.

### POWER FUNCTIONS

A function of the form <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mrow></semantics></math>, where <math><semantics><mi>a</mi></semantics></math> is a constant, is called a power function.

__ROOT FUNCTION__

__RECIPROCAL FUNCTION__

### RATIONAL FUNCTIONS

A rational function <math><semantics><mi>f</mi></semantics></math> is a ratio of two polynomials:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mfrac>
     <mrow>
      <mi>g</mi>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mi>x</mi>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
     </mrow>
     <mrow>
      <mi>h</mi>
      <mrow>
       <mo fence="true" stretchy="false">(</mo>
       <mrow>
        <mi>x</mi>
       </mrow>
       <mo fence="true" stretchy="false">)</mo>
      </mrow>
     </mrow>
    </mfrac>
   </mrow>
  </mrow>
 </semantics>
</math>

where <math><semantics><mi>g</mi></semantics></math> and <math><semantics><mi>g</mi></semantics></math> are polynomials. The domain consists of all values of <math><semantics><mi>x</mi></semantics></math> such that <math><semantics><mrow><mi>h</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">≠</mo><mn>0</mn></mrow></mrow></semantics></math>.

### ALGEBRAIC FUNCTIONS

A function <math><semantics><mi>f</mi></semantics></math> is called an algebraic function if it can be constructed using algebraic operations (such as addition, substraction, multiplication, division, and taking roots) starting with polynomial.

### TRIGONOMETRIC FUNCTIONS

__Example:__ What is the domain of the function <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mfrac><mn>1</mn><mrow><mrow><mn>1</mn><mo stretchy="false">−</mo><mn>2</mn></mrow><mi>cos</mi><mi>x</mi></mrow></mfrac></mrow></mrow></semantics></math>?

### EXPONENTIAL FUNCTIONS

The exponential functions are the functions of the form <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msup><mi>a</mi><mi>x</mi></msup></mrow></mrow></semantics></math>, where the base <math><semantics><mi>a</mi></semantics></math> is a positive constant.

### LOGARITHMIC FUNCTION

The logarithmic function <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mi>log</mi></mrow><mmultiscripts><mi>x</mi><mprescripts/><mi>a</mi><none/></mmultiscripts></mrow></semantics></math>, where the base <math><semantics><mi>a</mi></semantics></math> is a positive constant, are the inverse functions of the exponential functions.

__Example:__ Classify the following functions as one of the types of functions that we have discussed.

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <mn>5</mn>
     <mi>x</mi>
    </msup>
   </mrow>
  </mrow>
 </semantics>
</math>
<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <mi>x</mi>
     <mn>5</mn>
    </msup>
   </mrow>
  </mrow>
 </semantics>
</math>
<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mfrac>
     <mrow>
      <mn>1</mn>
      <mo stretchy="false">+</mo>
      <mi>x</mi>
     </mrow>
     <mrow>
      <mn>1</mn>
      <mo stretchy="false">−</mo>
      <msqrt>
       <mi>x</mi>
      </msqrt>
     </mrow>
    </mfrac>
   </mrow>
  </mrow>
 </semantics>
</math>
<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
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
     <mn>1</mn>
     <mo stretchy="false">−</mo>
     <mi>x</mi>
     <mo stretchy="false">−</mo>
     <mn>5</mn>
    </mrow>
   </mrow>
   <msup>
    <mi>x</mi>
    <mn>4</mn>
   </msup>
  </mrow>
 </semantics>
</math>

## NEW FUNCTIONS FROM OLD FUNCTIONS

### TRANSFORMATION OF FUNCTIONS

__VERTICAL AND HORIZONTAL SHIFTS__

Suppose <math><semantics><mrow><mi>c</mi><mo stretchy="false">&gt;</mo><mn>0</mn></mrow></semantics></math>. To obtain the graph of

__Upward:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">+</mo><mi>c</mi></mrow></mrow></semantics></math>, shift the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><annotation encoding="StarMath 5.0">y=f(x)</annotation></semantics></math> a distance of <math><semantics><mi>c</mi></semantics></math> units upward.

__Downward:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">−</mo><mi>c</mi></mrow></mrow></semantics></math>, shift the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><annotation encoding="StarMath 5.0">y=f(x)</annotation></semantics></math> a distance of <math><semantics><mi>c</mi></semantics></math> units downward.

__Right:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mo stretchy="false">−</mo><mi>c</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, shift the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><annotation encoding="StarMath 5.0">y=f(x)</annotation></semantics></math> a distance of <math><semantics><mi>c</mi></semantics></math> units to the right.

__Left:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mo stretchy="false">+</mo><mi>c</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, shift the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><annotation encoding="StarMath 5.0">y=f(x)</annotation></semantics></math> a distance of <math><semantics><mi>c</mi></semantics></math> units to the left.

__VERTICAL AND HORIZONTAL STRETCHING AND REFLECTION__

Suppose <math><semantics><mrow><mi>c</mi><mo stretchy="false">&gt;</mo><mn>1</mn></mrow></semantics></math>. To obtain the graph of

__Vertically Stretch:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi mathvariant="italic">cf</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, stretch the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> vertically by a factor of <math><semantics><mi>c</mi></semantics></math>

__Vertically Shrink:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mn>1</mn><mo stretchy="false">/</mo><mi>c</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow><mi>f</mi><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, shrink the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> vertically by a factor of <math><semantics><mi>c</mi></semantics></math>

__Horizontally Shrink:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi mathvariant="italic">cx</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, shrink the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> horizontally by a factor of <math><semantics><mi>c</mi></semantics></math>.

__Horizontally Stretch:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mi>c</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, stretch the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> horizontally by a factor of <math><semantics><mi>c</mi></semantics></math>.

__Reflect x:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mrow><mo stretchy="false">−</mo><mi>f</mi></mrow></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, reflect the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> about the <math><semantics><mi>x</mi></semantics></math> axis.

__Reflect y:__ <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mo stretchy="false">−</mo><mi>x</mi></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, reflect the graph of <math><semantics><mrow><mrow><mi>y</mi><mo stretchy="false">=</mo><mi>f</mi></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math> about the <math><semantics><mi>y</mi></semantics></math> axis.

---

__Example:__ Given the graph of <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><msqrt><mi>x</mi></msqrt></mrow></semantics></math>, use transformations to graph <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><mrow><msqrt><mi>x</mi></msqrt><mo stretchy="false">−</mo><mn>2</mn></mrow></mrow></semantics></math>, <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><msqrt><mrow><mi>x</mi><mo stretchy="false">−</mo><mn>2</mn></mrow></msqrt></mrow></semantics></math>, <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><mrow><mo stretchy="false">−</mo><msqrt><mi>x</mi></msqrt></mrow></mrow></semantics></math>, and <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><msqrt><mrow><mo stretchy="false">−</mo><mi>x</mi></mrow></msqrt></mrow></semantics></math>.

__Example:__ Sketch the graph of the function <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy="false">+</mo><mn>6</mn></mrow></mrow><mrow><mi>x</mi><mo stretchy="false">+</mo><mn>10</mn></mrow></mrow></semantics></math>.

__Example:__ Sketch the graphs of the following functions.

<math>
 <semantics>
  <mrow>
   <mrow>
    <mi>y</mi>
    <mo stretchy="false">=</mo>
    <mi>sin</mi>
   </mrow>
   <mrow>
    <mn>2</mn>
    <mi>x</mi>
   </mrow>
  </mrow>
  <annotation encoding="StarMath 5.0">y=sin {2x }</annotation>
 </semantics>
</math>

<br />

<math>
 <semantics>
  <mrow>
   <mrow>
    <mi>y</mi>
    <mo stretchy="false">=</mo>
    <mrow>
     <mn>1</mn>
     <mo stretchy="false">−</mo>
     <mi>sin</mi>
    </mrow>
   </mrow>
   <mi>x</mi>
  </mrow>
 </semantics>
</math>

<br />

__Example 5:__ Sketch the graph of the function <math><semantics><mrow><mi>y</mi><mo stretchy="false">=</mo><mrow><mo fence="true" stretchy="false">|</mo><mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow><mo fence="true" stretchy="false">|</mo></mrow></mrow></semantics></math>.

### COMBINATION OF FUNCTION

Given two functions <math><semantics><mi>f</mi></semantics></math> and <math><semantics><mi>g</mi></semantics></math>, the composite function <math><semantics><mrow><mi>f</mi><mo stretchy="false">∘</mo><mi>g</mi></mrow></semantics></math> (also called the composition of <math><semantics><mi>f</mi></semantics></math> and <math><semantics><mi>g</mi></semantics></math>) is defined by

<math>
 <semantics>
  <mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>f</mi>
      <mo stretchy="false">∘</mo>
      <mi>g</mi>
     </mrow>
    </mrow>
    <mo fence="true" stretchy="false">)</mo>
   </mrow>
   <mrow>
    <mrow>
     <mo fence="true" stretchy="false">(</mo>
     <mrow>
      <mi>x</mi>
     </mrow>
     <mo fence="true" stretchy="false">)</mo>
    </mrow>
    <mo stretchy="false">=</mo>
    <mi>f</mi>
   </mrow>
   <mrow>
    <mo fence="true" stretchy="false">(</mo>
    <mrow>
     <mrow>
      <mi>g</mi>
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
 </semantics>
</math>
<br />

__Example:__ If <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mrow></semantics></math> and <math><semantics><mrow><mi>g</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><mi>x</mi><mo stretchy="false">−</mo><mn>3</mn></mrow></mrow></mrow></semantics></math>, find the composite functions <math><semantics><mrow><mi>f</mi><mo stretchy="false">∘</mo><mi>g</mi></mrow></semantics></math> and <math><semantics><mrow><mi>g</mi><mo stretchy="false">∘</mo><mi>f</mi></mrow></semantics></math>.

__Example:__ If <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msqrt><mi>x</mi></msqrt></mrow></mrow></semantics></math> and <math><semantics><mrow><mi>g</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">−</mo><mi>x</mi></mrow></msqrt></mrow></mrow></semantics></math>, find each of the following functions and their domains.

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mo stretchy="false">∘</mo>
   <mi>g</mi>
  </mrow>
 </semantics>
</math>
<br />

<math>
 <semantics>
  <mrow>
   <mi>g</mi>
   <mo stretchy="false">∘</mo>
   <mi>f</mi>
  </mrow>
 </semantics>
</math>
<br />

<math>
 <semantics>
  <mrow>
   <mi>f</mi>
   <mo stretchy="false">∘</mo>
   <mi>f</mi>
  </mrow>
 </semantics>
</math>
<br />

<math>
 <semantics>
  <mrow>
   <mi>g</mi>
   <mo stretchy="false">∘</mo>
   <mi>g</mi>
  </mrow>
 </semantics>
</math>
<br />

__Example:__ Find <math><semantics><mrow><mi>f</mi><mo stretchy="false">∘</mo><mi>g</mi><mo stretchy="false">∘</mo><mi>h</mi></mrow></semantics></math> if <math><semantics><mrow><mi>f</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><mi>x</mi><mo stretchy="false">/</mo><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mo stretchy="false">+</mo><mn>1</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></mrow></mrow></semantics></math>, <math><semantics><mrow><mi>g</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msup><mi>x</mi><mn>10</mn></msup></mrow></mrow></semantics></math>, and <math><semantics><mrow><mi>h</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><mrow><mi>x</mi><mo stretchy="false">+</mo><mn>3</mn></mrow></mrow></mrow></semantics></math>.

__Example:__ Given <math><semantics><mrow><mi>F</mi><mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mi>x</mi></mrow><mo fence="true" stretchy="false">)</mo></mrow><mo stretchy="false">=</mo><msup><mi>cos</mi><mn>2</mn></msup></mrow><mrow><mo fence="true" stretchy="false">(</mo><mrow><mrow><mi>x</mi><mo stretchy="false">+</mo><mn>9</mn></mrow></mrow><mo fence="true" stretchy="false">)</mo></mrow></mrow></semantics></math>, find functions <math><semantics><mi>f</mi></semantics></math>, <math><semantics><mi>g</mi></semantics></math>, and <math><semantics><mi>h</mi></semantics></math> such that <math><semantics><mrow><mi>f</mi><mo stretchy="false">∘</mo><mi>g</mi><mo stretchy="false">∘</mo><mi>h</mi></mrow></semantics></math>.

---

| vary | [다양하다. 달라지다. 다르다.](https://dic.daum.net/word/view.do?wordid=ekw000179867&supid=eku001608081) |
| arbitrary | [임의의, 독단적인, 제멋대로의](https://dic.daum.net/word/view.do?wordid=ekw000008622&q=arbitrary) |
| intercept | [요격하다. 방해. 가로채다](https://dic.daum.net/word/view.do?wordid=ekw000087205&q=intercept) |
