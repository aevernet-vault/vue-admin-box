import{d as o,C as s,q as a,M as e,x as t,y as l,o as r,c as i,k as c,p as f}from"./vendor.910582b6.js";import{b9 as d,u as n,cy as m,cx as p,cw as x,cv as u}from"./install.f743767a.js";import{d as b}from"./install.d08ad8ea.js";import{i as v,a as y}from"./install.cdc3d342.js";import"./dataSample.f45482cc.js";import"./labelHelper.1919236e.js";import"./installCommon.e6fb8a9d.js";import"./sliderMove.9fa02ce2.js";import"./RoamController.258ec694.js";for(var h=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],j=0;j<h.length;j++);const w={title:{text:"特性示例：渐变色 阴影 点击 缩放",subtext:"Feature Sample: Gradient Color, Shadow, Click, Zoom"},xAxis:{data:["点","击","柱","子","或","者","两","指","在","触","屏","上","滑","动","能","够","自","动","缩","放"],axisLabel:{inside:!0},textStyle:{color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{},textStyle:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",showBackground:!0,itemStyle:{color:new d(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new d(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:h}]};var S=o({setup(){const o=s(null);let t=null;return a((()=>{n([p,x,b,v,y,u]),t=m(o.value),t.setOption(w),e("resize",(()=>t.resize()))})),{dom:o}}});const k=f();t("data-v-7d9c48dc");const C={class:"layout-container"},L={ref:"dom",class:"chart"};l();const z=k(((o,s,a,e,t,l)=>(r(),i("div",C,[c("div",L,null,512)]))));S.render=z,S.__scopeId="data-v-7d9c48dc";export default S;
