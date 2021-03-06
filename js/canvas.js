var stage = new Konva.Stage({
    container: "container",
    width: 1000,
    height: 600
});
var backgroundLayer = new Konva.Layer();
stage.add(backgroundLayer);
var innerCircle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 125,
    stroke: "#334C8B",
    dash: [7, 4]
});
var middleCircle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 137,
    stroke: "#D4D9E6",
    dash: [5, 3]
});
var outterCircle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 216,
    stroke: "#D4D9E6",
    dash: [5, 3]
});
var innerGroup = new Konva.Group();
var ring = new Konva.Ring({
    x: stage.width() / 2,
    y: stage.height() / 2,
    innerRadius: 65,
    outerRadius: 90,
    fill: "#E6E8EF",
    opacity: .8 //注意:设置透明度使用的是opacity
        //        stroke : "red"//stroke是对圆环的两条边同时描边,这里我们不需要的
        //在这里ring圆环是单独的一个shape形状
});
var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 65,
    fill: "#2B3565"
});
var innerText = new Konva.Text({
    x: stage.width() / 2 - 90,
    y: stage.height() / 2 - 10,
    fontSize: 23,
    fontFamily: "宋体",
    fontStyle: "bold",
    fill: "white",
    text: "web全栈",
    align: "center",
    width: 180

});
backgroundLayer.add(innerCircle);
backgroundLayer.add(middleCircle);
backgroundLayer.add(outterCircle);
innerGroup.add(circle);
innerGroup.add(ring);
innerGroup.add(innerText);
backgroundLayer.add(innerGroup);
backgroundLayer.draw();

//整个stage分为backgroundLayer和animateLayer两个图层
//backgroundLayer图层用来存放固定不变的图形,animateLayer主要用来存放运动的图形
//animateLayer图层存放了两个group:innerAniamteGroup和outerAnimateGroup
//innerAnimateGroup用来存放里层运动的图形,outerAnimateGroup用来存放外层运动的图形
var animateLayer = new Konva.Layer();
stage.add(animateLayer);
var innerAnimateGroup = new Konva.Group({
    x: stage.width() / 2,
    y: stage.height() / 2
});
//新建一个innerAnimateGroup,他的坐标在页面的中心位置
//在innerAnimateGroup里面新建四个group,这四个group位于内圆的圆弧上,这四个group顺时针旋转
var innerGroup1 = new MyGroup({
    x: 125 * Math.cos(45 * Math.PI / 180),
    y: 125 * Math.sin(45 * Math.PI / 180),
    innerRadius: 35,
    outerRadius: 47,
    innerFill: "#F7828C",
    textContent: "Node.js"
});
var innerGroup2 = new MyGroup({
    x: 125 * Math.cos(135 * Math.PI / 180),
    y: 125 * Math.sin(135 * Math.PI / 180),
    innerRadius: 35,
    outerRadius: 47,
    innerFill: "#99CEE9",
    textContent: "HTML5",
});
var innerGroup3 = new MyGroup({
    x: 125 * Math.cos(225 * Math.PI / 180),
    y: 125 * Math.sin(225 * Math.PI / 180),
    innerRadius: 35,
    outerRadius: 47,
    innerFill: "#BAE8C4",
    textContent: "CSS3"
});
var innerGroup4 = new MyGroup({
    x: 125 * Math.cos(315 * Math.PI / 180),
    y: 125 * Math.sin(315 * Math.PI / 180),
    innerRadius: 35,
    outerRadius: 47,
    innerFill: "#CF84F1",
    textContent: "jQuery"

});
innerGroup1.addToGroupOrLayer(innerAnimateGroup);
innerGroup2.addToGroupOrLayer(innerAnimateGroup);
innerGroup3.addToGroupOrLayer(innerAnimateGroup);
innerGroup4.addToGroupOrLayer(innerAnimateGroup);
animateLayer.add(innerAnimateGroup);

//新建一个outerAnimateGroup,他的坐标在页面的中心位置
//在outerAnimateGroup里面新建五个group,这五个group位于外圆的圆弧上,这五个group逆时针旋转
var outerAnimateGroup = new Konva.Group({
    x: stage.width() / 2,
    y: stage.height() / 2
});
var outerGroup1 = new MyGroup({
    x: 216 * Math.cos(72 * Math.PI / 180), //设置outerAnimateGroup中的group组的坐标,group位于外圆的圆弧上
    y: 216 * Math.sin(72 * Math.PI / 180),
    innerRadius: 40,
    outerRadius: 50,
    innerFill: "#82BBCF",
    textContent: "WebApp",
});
var outerGroup2 = new MyGroup({
    x: 216 * Math.cos(144 * Math.PI / 180),
    y: 216 * Math.sin(144 * Math.PI / 180),
    innerRadius: 40,
    outerRadius: 50,
    innerFill: "#CD2D82",
    textContent: "Angular.js"
});
var outerGroup3 = new MyGroup({
    x: 216 * Math.cos(216 * Math.PI / 180),
    y: 216 * Math.sin(216 * Math.PI / 180),
    innerRadius: 40,
    outerRadius: 50,
    innerFill: "#E87296",
    textContent: "React.js"
});
var outerGroup4 = new MyGroup({
    x: 216 * Math.cos(288 * Math.PI / 180),
    y: 216 * Math.sin(288 * Math.PI / 180),
    innerRadius: 40,
    outerRadius: 50,
    innerFill: "#EDF174",
    textContent: "Canvas"
});
var outerGroup5 = new MyGroup({
    x: 216 * Math.cos(360 * Math.PI / 180),
    y: 216 * Math.sin(360 * Math.PI / 180),
    innerRadius: 40,
    outerRadius: 50,
    innerFill: "#72B0FB",
    textContent: "Vue.js"
});
animateLayer.add(outerAnimateGroup);
outerGroup1.addToGroupOrLayer(outerAnimateGroup);
outerGroup2.addToGroupOrLayer(outerAnimateGroup);
outerGroup3.addToGroupOrLayer(outerAnimateGroup);
outerGroup4.addToGroupOrLayer(outerAnimateGroup);
outerGroup5.addToGroupOrLayer(outerAnimateGroup);
animateLayer.draw();

var framePerSecond = 20; //设置动画的帧数,每秒钟执行的帧数
var animation = new Konva.Animation(function(frame) {
    //公式,计算每frame.timeDiff毫秒内执行的动画的帧数,frame.timeDiff相当于setInterval中的时间间隔
    var angle = frame.timeDiff * framePerSecond / 1000;
    //innerAnimateGroup顺时针旋转的同时(他的坐标在页面的中心,所以是围绕页面的中心旋转的),
    // 它里面的内圆圆弧上的四个group同时围绕自己的圆心逆时针旋转相同的角度(四个group的坐标都在内圆的圆弧上,而不是在页面的中心)
    //这样实现的效果就是四个圆围绕页面中心旋转,同时由于自己围绕自己的圆心逆向旋转相同的角度,所以里面的字体的角度保持不变
    //rotate()中使用的是角度而不是弧度
    innerAnimateGroup.rotate(angle);
    //getChildren()获取innerAnimateGroup里面的四个子group,返回的是数组,使用each()来遍历这四个group,
    // each()是Konva中提供的方法,用来遍历Konva中的数组,只有Konva中的数组才可以用.注意item元素对象在前,index元素对象索引在后.
    innerAnimateGroup.getChildren().each(function(item, index) {
        item.rotate(-angle);
    });
    //道理和innerAnimateGroup相同
    outerAnimateGroup.rotate(-angle); //getChildren()获取对象所有的子元素,注意:在each方法里面,item在前index在后
    outerAnimateGroup.getChildren().each(function(item, index) {
        item.rotate(angle);
    });
}, animateLayer);
animation.start();
//设置animateLayer图层的onmouseover和onmouseout事件,当鼠标移入的时候动画的帧数变低,动画变慢
//当鼠标移出的时候动画的帧数恢复,动画恢复原速度
//只有当鼠标移入到具体的圆环上面时,事件才会触发,镂空的部分不会触发事件.所以,layer只包含了我们填充的图形,他们之间的部分不算layer的成分,可以看作是镂空的
