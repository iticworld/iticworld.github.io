---
layout: page
title: "DATA STRUCTURE VISUALIZATION"
permalink: /project/data-structure-visualization/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js" type="text/javascript"></script>
<script src="/public/js/novemberizing.js"></script>

## RED BLACK TREE VISUALIZATION

A simple visualization of red black tree.

- [EMSCRIPTEN](https://emscripten.org/)
- [CHARTJS](https://www.chartjs.org/)
- [REPOSITORY](https://github.com/iticworld/dev/tree/master/project/data-structure-visualization)

<div id = "view"></div>

## HOW TO BUILD

```
wget https://github.com/iticworld/dev/blob/master/project/data-structure-visualization/novemberizing.js
emcc main.c node.c tree.c util.c -o red.black.tree.js -s "EXTRA_EXPORTED_RUNTIME_METHODS=['Pointer_stringify']"
```

### WHAT IS RED BLACK TREE

__Self balancing binary search tree__

- A node is either red or black.
- The root and leaves(nil) are black.
- If a node is red, then its children are black.
- All paths from a node to its nil descendants contain the same number of black nodes.

__The longest path is no more than twice the length of the shortest path.__

- insert node and color it red and fix violation
- delete node and check sibling node and fix violation

<script>
    novemberizing.chart.init();
    novemberizing.tree.show("{\"r\":[{\"x\":16,\"y\":5,\"v\":\"R(28)\"},{\"x\":56,\"y\":4,\"v\":\"R(88)\"},{\"x\":34,\"y\":2,\"v\":\"R(58)\"},{\"x\":3,\"y\":1,\"v\":\"R(7)\"},{\"x\":17,\"y\":1,\"v\":\"R(37)\"},{\"x\":21,\"y\":1,\"v\":\"R(41)\"},{\"x\":31,\"y\":1,\"v\":\"R(53)\"}],\"b\":[{\"x\":32,\"y\":6,\"v\":\"B(54)\"},{\"x\":48,\"y\":5,\"v\":\"B(76)\"},{\"x\":8,\"y\":4,\"v\":\"B(17)\"},{\"x\":24,\"y\":4,\"v\":\"B(45)\"},{\"x\":40,\"y\":4,\"v\":\"B(66)\"},{\"x\":4,\"y\":3,\"v\":\"B(8)\"},{\"x\":12,\"y\":3,\"v\":\"B(22)\"},{\"x\":20,\"y\":3,\"v\":\"B(40)\"},{\"x\":28,\"y\":3,\"v\":\"B(51)\"},{\"x\":36,\"y\":3,\"v\":\"B(60)\"},{\"x\":44,\"y\":3,\"v\":\"B(70)\"},{\"x\":52,\"y\":3,\"v\":\"B(84)\"},{\"x\":60,\"y\":3,\"v\":\"B(94)\"},{\"x\":2,\"y\":2,\"v\":\"B(6)\"},{\"x\":6,\"y\":2,\"v\":\"B(9)\"},{\"x\":10,\"y\":2,\"v\":\"B(19)\"},{\"x\":14,\"y\":2,\"v\":\"B(23)\"},{\"x\":18,\"y\":2,\"v\":\"B(38)\"},{\"x\":22,\"y\":2,\"v\":\"B(43)\"},{\"x\":26,\"y\":2,\"v\":\"B(49)\"},{\"x\":30,\"y\":2,\"v\":\"B(52)\"},{\"x\":50,\"y\":2,\"v\":\"B(83)\"},{\"x\":54,\"y\":2,\"v\":\"B(86)\"},{\"x\":58,\"y\":2,\"v\":\"B(91)\"},{\"x\":62,\"y\":2,\"v\":\"B(98)\"}],\"horizontal\":64,\"vertical\":6}", "red black tree", "view");
</script>
