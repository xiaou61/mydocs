import p from"./FlipItem.29211056.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as a,o as d,c as h,d as o,p as f,m as A,a as m}from"./app.c5b3201b.js";function l(t=new Date){const s=t.getHours(),n=t.getMinutes(),i=t.getSeconds();return[...c(s),...c(n),...c(i)]}function c(t){return t>=10?(""+t).split("").map(s=>Number(s)):[0,t]}const v={components:{FlipItem:p},data(){return{timeArr:l()}},mounted(){this.startTimer()},beforeDestroy(){this.stopTimer()},methods:{startTimer(){this.stopTimer(),this.timer=setTimeout(()=>{this.timeArr=l(),this.startTimer()},1e3)},stopTimer(){clearTimeout(this.timer)}}},u=t=>(f("data-v-304e4267"),t=t(),A(),t),T={class:"clock-container"},k=u(()=>m("div",{class:"colon"},null,-1)),g=u(()=>m("div",{class:"colon"},null,-1));function I(t,s,n,i,e,x){const r=a("flip-item");return d(),h("div",T,[o(r,{total:2,current:e.timeArr[0]},null,8,["current"]),o(r,{total:9,current:e.timeArr[1]},null,8,["current"]),k,o(r,{total:5,current:e.timeArr[2]},null,8,["current"]),o(r,{total:9,current:e.timeArr[3]},null,8,["current"]),g,o(r,{total:5,current:e.timeArr[4]},null,8,["current"]),o(r,{total:9,current:e.timeArr[5]},null,8,["current"])])}const y=_(v,[["render",I],["__scopeId","data-v-304e4267"],["__file","FlipClock.vue"]]);export{y as default};
