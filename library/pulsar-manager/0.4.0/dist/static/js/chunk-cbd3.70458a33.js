(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cbd3"],{"2Ayc":function(e,t,r){"use strict";r.d(t,"e",function(){return a}),r.d(t,"d",function(){return n}),r.d(t,"h",function(){return c}),r.d(t,"i",function(){return o}),r.d(t,"b",function(){return u}),r.d(t,"g",function(){return d}),r.d(t,"f",function(){return m}),r.d(t,"a",function(){return p}),r.d(t,"j",function(){return h}),r.d(t,"c",function(){return f});var s=r("t3Un"),i="/admin/v2",l="/pulsar-manager/admin/v2";function a(e){return Object(s.a)({url:l+"/clusters",method:"get",params:{query:e}})}function n(e){return Object(s.a)({headers:{"x-pulsar-cluster":e},url:i+"/clusters/"+e,method:"get"})}function c(e,t){return Object(s.a)({headers:{"x-pulsar-cluster":e},url:i+"/clusters/"+e,method:"put",data:t})}function o(e,t){return Object(s.a)({headers:{"x-pulsar-cluster":e},url:i+"/clusters/"+e,method:"post",data:t})}function u(e){return Object(s.a)({headers:{"x-pulsar-cluster":e},url:i+"/clusters/"+e,method:"delete"})}function d(e){return Object(s.a)({headers:{"x-pulsar-cluster":e},url:i+"/clusters/"+e+"/failureDomains",method:"get"})}function m(e,t){return Object(s.a)({headers:{"x-pulsar-cluster":e},url:i+"/clusters/"+e+"/failureDomains/"+t,method:"get"})}function p(e,t,r){return Object(s.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:i+"/clusters/"+e+"/failureDomains/"+t,method:"post",data:r})}function h(e,t,r){return Object(s.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:i+"/clusters/"+e+"/failureDomains/"+t,method:"post",data:r})}function f(e,t){return Object(s.a)({headers:{"Content-Type":"application/json","x-pulsar-cluster":e},url:i+"/clusters/"+e+"/failureDomains/"+t,method:"post"})}},Y5bG:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),Math.easeInOutQuad=function(e,t,r,s){return(e/=s/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t};var s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function i(e,t,r){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,l=e-i,a=0;t=void 0===t?500:t;!function e(){a+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(a,i,l,t)),a<t?s(e):r&&"function"==typeof r&&r()}()}},Yfch:function(e,t,r){"use strict";function s(e){return void 0===e||null===e||""===e}function i(e,t){return function(r,s,i){if(s&&0!==s.length||!t)try{if(new URL(s).protocol!==e)return void i(new Error("Please input an `"+e+"` service URL"));i()}catch(e){i(new Error("Please input a valid service URL"))}else i()}}function l(e){var t=e.charAt(e.length-1),r=e.substring(0,e.length-1);switch(t){case"k":case"K":return 1024*Number(r);case"m":case"M":return 1024*Number(r)*1024;case"g":case"G":return 1024*Number(r)*1024*1024;case"t":case"T":return 1024*Number(r)*1024*1024*1024;default:return Number(e)}}r.d(t,"a",function(){return s}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return l})},fTTq:function(e,t,r){"use strict";var s=r("mksO");r.n(s).a},jUE0:function(e,t,r){},mksO:function(e,t,r){},"uP+0":function(e,t,r){"use strict";r.r(t);var s=r("P2sY"),i=r.n(s),l=r("2Ayc"),a=(r("jUE0"),{bind:function(e,t){e.addEventListener("click",function(r){var s=i()({},t.value),l=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),a=l.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var n=a.getBoundingClientRect(),c=a.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":((c=document.createElement("span")).className="waves-ripple",c.style.height=c.style.width=Math.max(n.width,n.height)+"px",a.appendChild(c)),l.type){case"center":c.style.top=n.height/2-c.offsetHeight/2+"px",c.style.left=n.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(r.pageY-n.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(r.pageX-n.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=l.color,c.className="waves-ripple z-active",!1}},!1)}}),n=function(e){e.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(n)),a.install=n;var c=a,o=r("Mz3J"),u=r("+n5z"),d=r("Yfch"),m=r("Grqa"),p={name:"Clusters",components:{Pagination:o.a,jsonEditor:u.a,MdInput:m.a},directives:{waves:c},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]}},data:function(){return{tableKey:0,list:null,localList:[],peerClustersListOptions:[],domainNamesListOptions:[],searchList:[],total:0,listLoading:!0,jsonValue:{},listQuery:{cluster:"",page:1,limit:10},currentCluster:"",currentCommand:"",temp:{cluster:"",serviceUrl:"",serviceUrlTls:"",brokerServiceUrl:"",brokerServiceUrlTls:"",peerClusters:[],domainNames:"",brokerList:"",domainName:""},dialogFormVisible:!1,dialogStatus:"",textMap:{delete:this.$i18n.t("cluster.deleteCluster"),create:this.$i18n.t("cluster.addCluster")},dialogPvVisible:!1,rules:{cluster:[{required:!0,message:this.$i18n.t("cluster.clusterNameIsRequired"),trigger:"change"}],serviceUrl:[{required:!0,message:this.$i18n.t("cluster.serviceUrlIsRequired"),trigger:"change"},{validator:Object(d.b)("http:",!1),trigger:"blur"}],serviceUrlTls:[{validator:Object(d.b)("https:",!0),trigger:"blur"}],brokerServiceUrl:[{required:!0,message:this.$i18n.t("cluster.serviceUrlIsRequired"),trigger:"change"},{validator:Object(d.b)("pulsar:",!1),trigger:"blur"}],brokerServiceUrlTls:[{validator:Object(d.b)("pulsar+ssl:",!0),trigger:"blur"}],domainName:[{required:!0,message:"domainName is required",trigger:"change"}],domainNames:[{required:!0,message:"domainNames is required",trigger:"change"}]},deleteClusterMessage:this.$i18n.t("cluster.deleteClusterMessage")}},created:function(){this.getClusters()},methods:{getClusters:function(){var e=this;this.localList.length>0?setTimeout(function(){e.localPaging()},500):(this.listLoading=!0,Object(l.e)(this.listQuery).then(function(t){for(var r=0;r<t.data.data.length;r++)e.localList.push({cluster:t.data.data[r].cluster,brokers:t.data.data[r].brokers,serviceUrl:t.data.data[r].serviceUrl,brokerServiceUrl:t.data.data[r].brokerServiceUrl});e.total=e.localList.length,e.list=e.localList.slice((e.listQuery.page-1)*e.listQuery.limit,e.listQuery.limit*e.listQuery.page),setTimeout(function(){e.listLoading=!1},1500)}))},localPaging:function(){if(this.listLoading=!0,Object(d.a)(this.listQuery.cluster))this.total=this.localList.length,this.list=this.localList.slice((this.listQuery.page-1)*this.listQuery.limit,this.listQuery.limit*this.listQuery.page);else{this.searchList=[];for(var e=0;e<this.localList.length;e++)-1!==this.localList[e].cluster.indexOf(this.listQuery.cluster)&&this.searchList.push(this.localList[e]);this.total=this.searchList.length,this.list=this.searchList.slice((this.listQuery.page-1)*this.listQuery.limit,this.listQuery.limit*this.listQuery.page)}this.listLoading=!1},handleGetConfig:function(e){var t=this;this.temp=i()({},e),Object(l.d)(this.temp.cluster).then(function(e){t.jsonValue={serviceUrl:e.data.serviceUrl,serviceUrlTls:e.data.serviceUrlTls,brokerServiceUrl:e.data.brokerServiceUrl,brokerServiceUrlTsl:e.data.brokerServiceUrlTls}})},handleFilter:function(){this.listQuery.page=1,this.getClusters()},resetTemp:function(){this.temp={cluster:"",serviceUrl:"",serviceUrlTls:"",brokerServiceUrl:"",brokerServiceUrlTls:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.temp.clearValidate()})},createData:function(){var e=this;Object(l.h)(this.temp.cluster,this.temp).then(function(t){e.dialogFormVisible=!1,e.localList=[],e.getClusters(),e.$notify({title:"success",message:e.$i18n.t("cluster.addClusterSuccessNotification"),type:"success",duration:2e3})})},handleOptions:function(){var e=this;this.$refs.temp.validate(function(t){if(t)switch(e.dialogStatus){case"create":e.createData()}})},handleCommand:function(e){if(this.currentCluster.length<=0)this.$notify({title:"error",message:"Please select any cluster in table",type:"error",duration:2e3});else switch(this.currentCommand=e,this.currentCommand){case"domain-name-create":this.handleDomainNameCreate()}},handleDelete:function(e){this.dialogStatus="delete",this.dialogFormVisible=!0,this.temp.cluster=e.cluster},deleteCluster:function(){var e=this;Object(l.b)(this.temp.cluster).then(function(t){e.$notify({title:"success",message:e.$i18n.t("cluster.deleteClusterSuccessNotification"),type:"success",duration:2e3}),e.dialogFormVisible=!1,e.localList=[],e.getClusters()})}}},h=(r("fTTq"),r("KHd+")),f=Object(h.a)(p,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("cluster.searchClusters")},nativeOn:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.cluster,callback:function(t){e.$set(e.listQuery,"cluster",t)},expression:"listQuery.cluster"}}),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}})],1),e._v(" "),r("el-row",{attrs:{gutter:24}},[r("el-col",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24},xl:{span:24}}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:e.$t("cluster.name"),"min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("router-link",{staticClass:"link-type",attrs:{to:"/management/clusters/"+t.row.cluster+"/cluster?tab=config"}},[r("span",[e._v(e._s(t.row.cluster))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("broker.brokerNumber"),"min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("router-link",{staticClass:"link-type",attrs:{to:"/management/clusters/"+t.row.cluster+"/cluster?tab=brokers"}},[r("span",[e._v(e._s(t.row.brokers))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("cluster.serviceUrl"),"min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!==t.row.brokerServiceUrl?r("span",[r("i",{staticClass:"el-icon-sort",staticStyle:{"margin-right":"2px"}}),e._v(" "),r("router-link",{staticClass:"link-type",attrs:{to:"/management/clusters/"+t.row.cluster+"/cluster?tab=brokers"}},[e._v("\n                "+e._s(t.row.brokerServiceUrl)+"\n              ")])],1):e._e(),e._v(" "),r("br"),e._v(" "),""!==t.row.serviceUrl?r("span",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"2px"}}),e._v(" "),r("router-link",{staticClass:"link-type",attrs:{to:"/management/clusters/"+t.row.cluster+"/cluster?tab=config"}},[e._v("\n                "+e._s(t.row.serviceUrl)+"\n              ")])],1):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"240","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("router-link",{attrs:{to:"/management/clusters/"+t.row.cluster+"/cluster?tab=config"}},[r("el-button",{staticClass:"el-icon-edit-outline",attrs:{type:"primary",size:"small"}},[e._v(e._s(e.$t("table.edit")))])],1)]}}])})],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"temp",staticStyle:{"margin-left":"30%","margin-right":"10%"},attrs:{rules:e.rules,model:e.temp,"label-position":"top"}},["create"===e.dialogStatus?r("div",[r("el-form-item",{attrs:{label:e.$t("cluster.name"),prop:"cluster"}},[r("el-input",{model:{value:e.temp.cluster,callback:function(t){e.$set(e.temp,"cluster",t)},expression:"temp.cluster"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cluster.webServiceUrlPrefix"),prop:"serviceUrl"}},[r("el-input",{attrs:{placeholder:"http://"},model:{value:e.temp.serviceUrl,callback:function(t){e.$set(e.temp,"serviceUrl",t)},expression:"temp.serviceUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cluster.webServiceUrlTlsPrefix"),prop:"serviceUrlTls"}},[r("el-input",{attrs:{placeholder:"https://"},model:{value:e.temp.serviceUrlTls,callback:function(t){e.$set(e.temp,"serviceUrlTls",t)},expression:"temp.serviceUrlTls"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cluster.brokerServiceUrlPrefix"),prop:"brokerServiceUrl"}},[r("el-input",{attrs:{placeholder:"pulsar://"},model:{value:e.temp.brokerServiceUrl,callback:function(t){e.$set(e.temp,"brokerServiceUrl",t)},expression:"temp.brokerServiceUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cluster.brokerServiceUrlTlsPrefix"),prop:"brokerServiceUrlTls"}},[r("el-input",{attrs:{placeholder:"pulsar+ssl://"},model:{value:e.temp.brokerServiceUrlTls,callback:function(t){e.$set(e.temp,"brokerServiceUrlTls",t)},expression:"temp.brokerServiceUrlTls"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleOptions()}}},[e._v(e._s(e.$t("table.confirm")))]),e._v(" "),r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))])],1)],1):e._e(),e._v(" "),"delete"===e.dialogStatus?r("div",[r("el-form-item",[r("h4",[e._v(e._s(e.deleteClusterMessage))])]),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deleteCluster()}}},[e._v(e._s(e.$t("table.confirm")))]),e._v(" "),r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))])],1)],1):e._e()])],1)],1)},[],!1,null,null,null);f.options.__file="index.vue";t.default=f.exports}}]);