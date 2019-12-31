---
layout: page
title: "GETTING STARTED WITH IMAGES"
permalink: /opencv/js/tutorial/getting-started-with-images/
---

_December 31, 2019_

## READING IMAGE

OPENCV JS 라이브러리를 사용하면 이미지나 캔버스 엘레먼트에서 매트(Mat) 객체를 쉽게 생성할 수 있습니다. `cv.imread` 함수를 이용하여 이미지를 매트(Mat) 객체로 생성하고 그 객체의 이름을 출력하는 예제입니다.

<script>
function getReadingImageOutput() {
  let source = cv.imread("example-reading-image");
  let output = document.getElementById('example-reading-image-output');
  output.innerHTML = source.constructor.name;
  source.delete();
}
</script>

__이미지__

<img id="example-reading-image" src="/assets/images/opencv/js/tutorial/getting-started-with-images/img_the_scream.jpg" style="border: 1px solid #000000; margin: 0px; padding: 0px;">

__결과__

<div id="example-reading-image-output">&nbsp;</div>

<button onclick="dispatch(getReadingImageOutput)">RUN</button>

__소스__

```js
let source = cv.imread("example-reading-image");
let output = document.getElementById('example-reading-image-output');
output.innerHTML = source.constructor.name;
source.delete();
```

## REFERENCE

### CV.IMREAD

이미지나 캔버스로 부터 이미지를 RGBA 순서의 매트<sup>Mat</sup> 객체를 생성하는 함수입니다. 즉, 이미지를 OPENCV 에서 처리할 수 있는 객체로 생성하는 함수입니다.

__SYNOPSIS__

```js
cv.imread(source): cv.Mat
```

__PARAMETERS__

| source | canvas element or id, or img element or id |

__RETURN__

mat with channels stored in RGBA order.

__NOTE__

Because canvas only support 8 bit RGBA image with continuous storage, the cv.Mat type is cv.CV_8UC4. It is different from native OpenCV because images returned and shown by the native imread and imshow have the channels stored in BGR order.

## DISPLAY AN IMAGE

__이미지__

<img id="example-display-image" src="/assets/images/opencv/js/tutorial/getting-started-with-images/img_the_scream.jpg" style="border: 1px solid #000000; margin: 0px; padding: 0px;">

__출력__

<canvas id="example-display-image-output" width="220" height="277" style="border: 1px solid #000000; margin: 0px; padding: 0px;"></canvas>

<script>
  function displayImageUsingOpenCV()
  {
    let source = cv.imread('example-display-image');
    cv.imshow('example-display-image-output', source);
    source.delete();
  }
</script>

<button onclick="displayImageUsingOpenCV()">RUN</button>

__SOURCE__

```js
let source = cv.imread('example-display-image');
cv.imshow('example-display-image-output', source);
source.delete();
```

## REFERENCE

### CV.IMSHOW

__SYNOPSIS__

```js
cv.imshow(canvas, mat)
```

__PARAMETERS__

| canvas | canvas element or id |
| mat    | mat to be shown      |

__NOTE__

- If the mat is 8 bit unsigned, it is displayed as is
- If the mat is 16 bit unsigned or 32 bit integer, the pixels are divided by 256. That is, the value range [0, 255 * 256] is mapped to [0, 255].
- If the mat is 32 bit floating point, the pixel values are multipled by 255. That is, the value range [0, 1] is mapped to [0, 255].

> - [Getting Started with images - OpenCV](https://docs.opencv.org/4.2.0/df/d24/tutorial_js_image_display.html)
