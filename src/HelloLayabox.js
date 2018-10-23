//创建舞台，默认背景色是黑色的
Laya.init(750, 1334);

var txt = new Laya.Text();
// 设置文本高度
txt.width = 200;
txt.height = 300;
//设置文本内容
txt.text = "HELLO";
// 对齐
txt.align = "center";
txt.valign = "middle";
//设置文本颜色
txt.color = "#FF0000";
//设置文本字体大小，单位是像素
txt.fontSize = 66;
//设置字体描边
txt.stroke = 5;//描边为5像素
txt.strokeColor = "#FFFFFF";
//设置为粗体
txt.bold = true;
// 控制文字可滚动
txt.overflow = "scroll";//支持scroll接口
//设置文本的显示起点位置X,Y
// txt.pos(60,100);
//设置舞台背景色
Laya.stage.bgColor = '#23238E';
//将文本内容添加到舞台 
Laya.stage.addChild(txt);


