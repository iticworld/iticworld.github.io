---
layout: page
title: "OPENGL"
permalink: /opengl/
---

### 3.1.1. GEOMETRIC OBJECTS

Our fundamental geometric object is a point. In a three-dimensional geometric system, a point is a location in space. The only property that a point possesses is that point's location; a mathematical point has neither a size nor a shape.

Points are useful in specifying geometric objects but are not sufficient by themselves. We need real numbers to specify quantities such as the distance between two points. Real numbers - and complex numbers, which we will use occasionally - are examples of scalars. Scalars are objects that obey a set of rules that are abstractions of the operations of ordinary arithmetic. Thus, addition and multiplication and defined and obey the usual rules such as commutivity and associativity. Every scalar has multiplicative and additive inverses, which implicitly define subtraction and division.

We need one additional type - the vector - to allow us to work with directions. Physicists and mathematicians use the term vector for any quantity with direction and magnitude. Physical quantities, such as velocity and force, are vectors. A vector does not, however, have a fixed location in space.

![Figure 3.1. Directed line segment that connects points.](/assets/images/opengl/figure.3.1.png)

![Figure 3.2. Identical vectors](/assets/images/opengl/figure.3.2.png)

In computer graphics, we often connect points with directed line segments, as shown in Figure 3.1. A directed line segment has both magnitude - its length - and direction - its orientation - and thus is a vector. Because vectors have no fixed position, the directed line segments shown in Figure 3.2 are identical because they have the same direction and magnitude. We will often use the terms vector and directed line segment synonymously.

![Figure 3.3.1. Parallel line segments.](/assets/images/opengl/figure.3.3.1.png)

![Figure 3.3.2. Parallel line segments.](/assets/images/opengl/figure.3.3.2.png)

Vectors can have their lengths altered by real numbers. Thus, in Figure 3.3.1 line segment A has the same direction as line segment B, but B has twice the length that A has, so we can write B = 2A. We can also combine directed line segments by the head-to-tail rule, as shown in Figure 3.3.2). Here, we connect the head of vector A to the tail of vector C to form a new vector D, whose magnitude and direction are determined by the line segment from the tail of A to the head of C. We call this new vector, D, the sum of A and C and write D = A + C. Because vectors have no fixed positions, we can move any two vectors as necessary to form their sum graphically. Note that we have described two fundamental operations: the addition of two vectors and the multiplication of a vector by a scalar.

If we consider two directed line segments, A and E, as shown in Figure 3.4, with the same length but opposite directions, their sum as defined by the head-to-tail addition has no length. This sum forms a special vector called the zero vector, which we denote 0, that has a magnitude of zero. Because it has no length, the orientation of this vector is undefined. We say that E is the inverse of A and we can write E = -A. Using inverses of vectors, scalar-vector expressions such as A + 2B -3C make sense.

Although we can multiply a vector expressions by a scalar to change its length, there are no obvious sensible operations between two points that produce another point. Nor are there operations between a point and a scalar that produced a point. There is, however, an operation between points and directed line segments (vectors), as illustrated in Figure 3.5. We can use a directed line segment to move from one point to another. We call this operation point-vector addition, and it produces a new point. We write this operation as P = Q + v. We can see that the vector v displaces the point Q to the new location P.

Looking at things slightly differently, any two points define a directed line segment or vector from one point to the second. We call this operation point-point subtraction, and we can write it as v = P - Q. Because vectors can be multiplied by scalars, some expressions involving scalars, vectors, and points make sense, such as P + 3v, or 2P - Q + 3v (because it can be written as P + (P - Q) + 3v, a sum of a point and a vector), wherease others, such as P + 3Q - v, don not.
