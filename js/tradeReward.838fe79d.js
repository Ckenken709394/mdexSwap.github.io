(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tradeReward"],{"0518":function(t,e,n){},"0caa":function(t,e,n){},1182:function(t,e,n){"use strict";n("2786")},2786:function(t,e,n){},"4fad":function(t,e,n){var a=n("23e7"),s=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"865d":function(t,e,n){"use strict";n("0518")},ebca:function(t,e,n){"use strict";n("0caa")},fc00:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wind—mining",class:[t.chainName,t.getLanguage]},[n("title-banner",{attrs:{trading_userReward:t.userReward,trading_options:t.options,trading_totalReward:t.totalReward},on:{"on-withdrawal":t.Withdrawal}}),n("div",{staticClass:"wind—mining__banner h5-wind—mining-banner"}),n("div",{staticClass:"wind-mining__content"},[n("div",{staticClass:"wind-mining__content-header-bg"}),n("div",{staticClass:"wind-mining__content-header"},[n("selete-table",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==t.chainName,expression:"chainName=='Bsc'"}],attrs:{showCheck:!1,list:t.listNameBsc,inputText:t.isPC?t.$t("search"):t.$t("searchText")},on:{"change-list":t.onList,"change-input":function(e){t.searchValue=e}}}),n("selete-table",{directives:[{name:"show",rawName:"v-show",value:"Heco"==t.chainName,expression:"chainName=='Heco'"}],attrs:{showCheck:!1,list:t.listNameHeco,inputText:t.isPC?t.$t("search"):t.$t("searchText")},on:{"change-list":t.onList,"change-input":function(e){t.searchValue=e}}}),t.isPC?t._e():n("trading-h5-table-title",{attrs:{sortType:t.sortType,sortSide:t.sortSide},on:{sort:t.onh5Sort}})],1),t.isPC?t._e():n("div",[t._l(t.dataList,(function(e,a){return n("trading-h5-table",{key:a,attrs:{item:e},on:{click:function(n){return t.openLink(e)},onclick:function(n){return t.openLink(e)}}})})),0==t.dataList.length?n("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()],2),t.isPC?n("el-table",{staticClass:"el-table-class",staticStyle:{width:"100%"},attrs:{data:t.dataList,"row-key":"pid"},on:{"sort-change":t.sortChange,"row-click":t.openLink}},[n("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("span",{staticClass:"da-span"},[t._v(" "+t._s(t.$t("Trades"))+" ")])]}},{key:"default",fn:function(e){return[n("div",{staticClass:"item-title"},[n("div",{staticClass:"Trades-one"},[n("img",{staticClass:"img1",attrs:{src:t.getImg(e.row)}})]),n("div",{staticClass:"min-btn"},[n("p",[n("span",{staticClass:"new-text-span"},[t._v(t._s(e.row.base_name?e.row.base_name:e.row.pair_name))])])])])]}}],null,!1,2678068037)}),n("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[n("span",{staticClass:"da-span"},[n("h5sort",{attrs:{name:t.$t("CurrentTotalAwards"),sortType:t.sortType,sortSide:t.sortSide,num:"2"},on:{sort:t.onh5Sort}})],1)]}},{key:"default",fn:function(e){return[n("span",{staticClass:"td-span"},[n("CountUp",{attrs:{endVal:Number(e.row.alloc_mdx_amt/1e18)}}),t._v(" MDX ")],1)]}}],null,!1,4234952694)}),n("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[n("span",{staticClass:"da-span"},[n("h5sort",{attrs:{name:t.$t("TotalTransactionAmount"),sortType:t.sortType,sortSide:t.sortSide,num:"3"},on:{sort:t.onh5Sort}})],1)]}},{key:"default",fn:function(e){return[n("span",{staticClass:"td-span"},[t._v(t._s(t.mobileUnit)+" "),t._v(" $"),n("CountUp",{attrs:{options:t.mobileCountUpOptions,endVal:Number(e.row.total_quantity/1e18)}})],1)]}}],null,!1,740328839)}),n("el-table-column",{attrs:{label:"APY"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("span",{staticClass:"da-span"},[n("h5sort",{attrs:{name:t.$t("CurrentTransactionVolume"),sortType:t.sortType,sortSide:t.sortSide,num:"4"},on:{sort:t.onh5Sort}})],1)]}},{key:"default",fn:function(e){return[n("span",{staticClass:"td-span"},[t._v(" "+t._s(t.mobileUnit)+" "),t._v(" $"),n("CountUp",{attrs:{options:t.mobileCountUpOptions,endVal:Number(e.row.pool_quantity/1e18)}})],1)]}}],null,!1,867286650)}),n("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(e){return[n("span",{staticClass:"da-span"},[n("h5sort",{attrs:{name:t.$t("PersonalTurnover"),sortType:t.sortType,sortSide:t.sortSide,num:"5"},on:{sort:t.onh5Sort}})],1)]}},{key:"default",fn:function(e){return[n("span",{staticClass:"td-span"},[t._v(" "+t._s(t.mobileUnit)+" "),n("CountUp",{attrs:{endVal:t.rewardList[e.row.pool_id]?t.rewardList[e.row.pool_id].userMint:0}}),t._v(" "+t._s(t.unit)+" ")],1)]}}],null,!1,1016016950)}),n("el-table-column",{attrs:{label:""},scopedSlots:t._u([{key:"header",fn:function(e){return[n("span",{staticClass:"da-span"},[n("h5sort",{attrs:{name:t.$t("PersonalReward"),sortType:t.sortType,sortSide:t.sortSide,num:"6"},on:{sort:t.onh5Sort}})],1)]}},{key:"default",fn:function(e){return[n("span",{staticClass:"td-span"},[t._v(" "+t._s(t.mobileUnit)+" "),n("CountUp",{attrs:{endVal:Number(t.rewardList[e.row.pool_id]?t.rewardList[e.row.pool_id].userReward:0)}}),t._v("MDX ")],1)]}}],null,!1,3031717408)}),n("div",{staticClass:"empty",attrs:{slot:"empty"},slot:"empty"},[n("span",[t._v(t._s(t.$t("NoData")))])])],1):t._e()],1),n("apply-tip")],1)},s=[];function r(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,s=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done);a=!0)if(n.push(i.value),e&&n.length===e)break}catch(c){s=!0,r=c}finally{try{a||null==o["return"]||o["return"]()}finally{if(s)throw r}}return n}}var o=n("06c5");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return r(t)||i(t,e)||Object(o["a"])(t,e)||c()}var u=n("5530"),d=n("1da1"),p=(n("b64b"),n("159b"),n("a9e3"),n("caad"),n("2532"),n("4fad"),n("b0c0"),n("25f0"),n("99af"),n("b680"),n("96cf"),n("aa95")),m=n("9029"),h=n("837b"),f=n("ed08"),b=n("6deb"),_=n("e150"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tradingH5TableTitle between"},[n("div",{staticClass:"item"},[n("span",[t._v(" "+t._s(t.$t("Trades")))])]),n("div",{staticClass:"item"},[n("p",[n("h5sort",{attrs:{name:t.$t("CurrentTotalAwards"),sortType:t.sortType,sortSide:t.sortSide,num:"2"},on:{sort:t.sort}})],1)]),n("div",{staticClass:"item "},[n("p",[n("h5sort",{attrs:{name:t.$t("TotalTransactionAmount"),sortType:t.sortType,sortSide:t.sortSide,num:"3"},on:{sort:t.sort}})],1),n("p",[n("h5sort",{attrs:{name:t.$t("CurrentTransactionVolume"),sortType:t.sortType,sortSide:t.sortSide,num:"4"},on:{sort:t.sort}})],1)]),n("div",{staticClass:"item"},[n("p",[n("h5sort",{attrs:{name:t.$t("PersonalTurnover"),sortType:t.sortType,sortSide:t.sortSide,num:"5"},on:{sort:t.sort}})],1),n("p",[n("h5sort",{attrs:{name:t.$t("PersonalReward"),sortType:t.sortType,sortSide:t.sortSide,num:"6"},on:{sort:t.sort}})],1)])])},y=[],C=n("1d12"),g={name:"tradingH5TableTitle",data:function(){return{listAct:0,listItemAct:0,searchValue:"",listItem:[]}},components:{h5sort:C["a"]},props:{sortType:{type:String,default:"1"},sortSide:{type:String,default:"1"}},beforeMount:function(){},methods:{sort:function(t,e,n){this.$emit("sort",t,e,n)}}},T=g,S=(n("ebca"),n("2877")),$=Object(S["a"])(T,w,y,!1,null,"28b2386f",null),k=$.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"h5TableTitle between",class:t.chainName,on:{click:t.onitem}},[n("div",{staticClass:"item"},[n("p",[t._v(" "+t._s(t.item.base_name?t.item.base_name:t.item.pair_name))])]),n("div",{staticClass:"item"},[n("p",[n("CountUp",{attrs:{endVal:Number(t.item.alloc_mdx_amt/1e18)}}),t._v("MDX ")],1)]),n("div",{staticClass:"item"},[n("p",[t._v(t._s(t.mobileUnit)),n("CountUp",{attrs:{endVal:Number(t.item.total_quantity/1e18),options:t.mobileCountUpOptions}}),t._v(t._s(t.unit))],1),n("p",[t._v(" "+t._s(t.mobileUnit)),n("CountUp",{attrs:{endVal:Number(t.item.pool_quantity/1e18),options:t.mobileCountUpOptions}}),t._v(t._s(t.unit))],1)]),n("div",{staticClass:"item"},[n("p",[t._v(t._s(t.mobileUnit)),n("CountUp",{attrs:{endVal:Number(t.rewardList[t.item.pool_id]?t.rewardList[t.item.pool_id].userMint:0)}}),t._v(t._s(t.unit))],1),n("p",[n("CountUp",{attrs:{endVal:Number(t.rewardList[t.item.pool_id]?t.rewardList[t.item.pool_id].userReward:0)}}),t._v("MDX")],1)])])},U=[],O=n("2a5e"),N={name:"h5Table",data:function(){return{listAct:0,listItemAct:0,searchValue:"",listItem:[],per:"",after:"",earned:"",mobileUnit:m["isMobile"]?"$":"",unit:m["isMobile"]?"":"USDT"}},props:{item:{type:Object,default:function(){}},show:{type:Boolean,default:!1}},beforeMount:function(){},mounted:function(){},computed:{chainName:function(){return this.$store.state.chainName},isShow:function(){return!this.show||0!==this.PersonalIncome},mobileCountUpOptions:function(){var t=this;return{formattingFn:function(e){var n=1e4,a=1e8;return"M"!=t.$t("unitM")&&"B"!=t.$t("unitB")||(n=1e6,a=1e9),e>a?Object(f["g"])(Object(f["c"])(e,a),2)+t.$t("unitB"):e>n?Object(f["g"])(Object(f["c"])(e,n),2)+t.$t("unitM"):e.toLocaleString()}}},rewardList:function(){return this.$store.state.reward.rewardList}},methods:{getformatFloat:function(){return Object(O["a"])(this.PersonalIncome,4)},onitem:function(){this.$emit("onclick")}}},M=N,A=(n("865d"),Object(S["a"])(M,L,U,!1,null,"047dca24",null)),j=A.exports,x=n("d816"),R=null,D=null,V={name:"tradeReward",components:{TitleBanner:p["a"],Button:b["a"],SeleteTable:_["a"],"trading-h5-table-title":k,"trading-h5-table":j,h5sort:C["a"],ApplyTip:x["a"]},data:function(){return{tab:1,sortType:"1",sortSide:"1",tvlAmount:0,select:"",mobileUnit:m["isMobile"]?"$":"",unit:m["isMobile"]?"":"USDT",liquidityApys:{},classifyArr:[],classifyActive:"all",searchValue:"",userMessage:{},myContract:null,tokenJson:{},totalReward:0,userReward:0,options:{decimalPlaces:4}}},beforeCreate:function(){var t=this;this.$store.dispatch("reward/getTradeList"),D=setInterval((function(){t.$store.dispatch("reward/getTradeList")}),9e3)},created:function(){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},filters:{},watch:{tradelist:{immediate:!0,handler:function(t){if(t){if(0===this.classifyArr.length){var e={},n=["WHT","MDX","USDT","HBTC","HUSD","ETH"];n.forEach((function(t){e[t]=""}));var a=Object.keys(e);this.classifyArr=a}if(0===Object.keys(this.userMessage).length&&t.length){var s={};t.forEach((function(t){s[t.pid]={userReward:"0",userMint:"0"}})),this.userMessage=s,this.myContract&&this.getUserMessage()}}}}},computed:{listNameHeco:function(){return[{name:this.$t("all"),show:!0},{name:"WHT",show:!1},{name:"MDX",show:!1},{name:"USDT",show:!1},{name:"HBTC",show:!1},{name:"HUSD",show:!1},{name:"ETH",show:!1}]},listNameBsc:function(){return[{name:this.$t("all"),show:!0},{name:"USDT",show:!1},{name:"ETH",show:!1},{name:"BNB",show:!1},{name:"MDX",show:!1}]},mobileCountUpOptions:function(){var t=this;return{formattingFn:function(e){var n=1e4,a=1e8;return"M"!=t.$t("unitM")&&"B"!=t.$t("unitB")||(n=1e6,a=1e9),e>a?Object(f["g"])(Object(f["c"])(e,a),2)+t.$t("unitB"):e>n?Object(f["g"])(Object(f["c"])(e,n),2)+t.$t("unitM"):e.toLocaleString()}}},chainName:function(){return this.setClassifyActive("all"),this.$store.state.chainName},isPC:function(){return this.$store.getters.isPC},chainId:function(){return this.$store.state.chainId},coinConfig:function(){return h["a"][this.chainId]},tradelist:function(){return this.$store.state.reward.tradelist},rewardList:function(){return this.$store.state.reward.rewardList},miningContract:function(){return this.$store.state.reward.miningContract},dataList:function(){var t=this,e=this.tradelist,n=[],a=0,s=0;if(0==e.length)return[];e.forEach((function(e){var a=t.liquidityApys[e.pid],s=Object(u["a"])(Object(u["a"])(Object(u["a"])({},{}),e),{poolList__alloc_point:a?a.alloc_point:0,poolList__alloc_mdx_amt:a?a.alloc_mdx_amt/1e18:0,poolList__total_quantity:a?a.total_quantity/1e18:0,poolList__pool_quantity:a?a.pool_quantity/1e18:0});n.push(s)}));var r="pool_apy";switch(this.sortType){case"1":r="fee_refund";break;case"2":r="alloc_mdx_amt";break;case"3":r="total_quantity";break;case"4":r="pool_quantity";break;case"5":r="poolList__pool_quantity";break;case"6":r="poolList__pool_quantity";break;default:r="pool_apy"}var i=[];n.forEach((function(e){a+=Number(e.alloc_mdx_amt/1e18),(1!==t.tab||"all"===t.classifyActive||e.pair_name.includes(t.classifyActive))&&(0===t.searchValue.length||e.pair_name.includes(t.searchValue.toLocaleUpperCase()))&&i.push(e)}));for(var o=0,c=Object.entries(this.rewardList);o<c.length;o++){var d=l(c[o],2),p=(d[0],d[1]);s+=p.userReward}return this.userReward=s,this.totalReward=a,i.sort(this.compare(r)),i}},methods:{onChenck:function(t){this.boolChenck=t},onTable:function(t){this.toPool(t)},onList:function(t){var e=t.item,n=t.index,a=0===n?"all":e.name;this.setClassifyActive(a)},onh5Sort:function(t){this.setSort(t)},sortChange:function(t){var e=t.prop;t.order;this.setSort(e.toString())},getImg:function(t){return this.globalGetImgUrl(t.pair)},openLink:function(t){window.open("https://".concat(56==this.chainId?"bsc":"ht",".mdex.com/#/swap?inputCurrency=").concat(t.token0,"&outputCurrency=").concat(t.token1),"_blank")},initWeb3:function(){},getUserMessage:function(){},Withdrawal:function(){var t=this,e=this.miningContract,n="Withdrawal ".concat(this.userReward," MDX"),a=this.$overalltip({type:"loading",msg:n}),s=this.$store.state.account.address||this.$store.state.boardRoom.account;e.methods.takerWithdraw().send({from:s}).then((function(){a.close();var e="".concat(n," Success");R=t.$overalltip({type:"success",msg:e}),t.$store.dispatch("reward/getTradeList")})).catch((function(e){a.close();var s="".concat(n," Error");R=t.$overalltip({type:"error",msg:s})}))},fukData:function(t){var e=1*t;return e>1e8?"".concat((e/1e8).toFixed(2),"亿元"):e>1e4?"".concat((e/1e4).toFixed(2),"万"):e.toFixed(2)},setTab:function(){this.tab!==v&&(this.tab=v,this.sortType="1",this.sortSide="1",this.searchValue="",this.classifyActive="all")},setClassifyActive:function(t){this.classifyActive=t},compare:function(t){var e=this;return function(n,a){var s=n[t],r=a[t];return"0"===e.sortSide?s-r:"1"===e.sortSide?r-s:void 0}},setSort:function(t,e){this.sortType!==t?(this.sortType=t,this.sortSide="1"):this.sortSide="1"===this.sortSide?"0":"1"},selectItem:function(t){this.select=t}},beforeDestroy:function(){R&&R.close(),clearInterval(D)}},I=V,B=(n("1182"),Object(S["a"])(I,a,s,!1,null,"a2f6339e",null));e["default"]=B.exports}}]);