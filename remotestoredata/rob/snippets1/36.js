{"js":"var path;\nfor (var i=1; i<50; i++) {\n  var p = SimplePath.pathFromEditor(i);\n  if (p == null)\n    break;\n  path = SimplePath.combinePaths(\n    p, path);\n}\nlog(path)\nSimplePath.clearHilited();\nSimplePath.clearColors();\nSimplePath.getElementsByPath (\n  path,\n  null,\n  function (elem, i) {\n    SimplePath.hiliteElem(elem, i);\n  }\n);\n","name":"test path","num":36}