(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"51b7":function(t,e,s){},"558d":function(t,e,s){"use strict";var a=s("ce47"),o=s.n(a);o.a},"6d75":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"register-content"}},[s("h1",[t._v("注册")]),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"register-option"},[s("label",[t._v("昵称")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"loginInput",attrs:{type:"text",name:"Emali"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"register-option"},[s("label",[t._v("邮箱")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"loginInput",attrs:{type:"email",name:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"register-option"},[s("label",[t._v("密码")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"loginInput",attrs:{type:"password",name:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"register-option"},[s("label",[t._v("重复密码")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"loginInput",attrs:{type:"password",name:"Password2"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"register-option"},[s("label",[t._v("联系方式")]),s("div",[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.user.contact,callback:function(e){t.$set(t.user,"contact",e)},expression:"user.contact"}},t._l(t.contact,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"register-option"},[s("label",[t._v("联系方式账号")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.contactAccount,expression:"user.contactAccount"}],staticClass:"loginInput",attrs:{type:"text",name:"contactAccount"},domProps:{value:t.user.contactAccount},on:{input:function(e){e.target.composing||t.$set(t.user,"contactAccount",e.target.value)}}})])])])],1),s("el-button",{attrs:{id:"register"},on:{click:t.userRegister}},[t._v("确认注册")])],1)},o=[],n={name:"register",data:function(){return{contact:[{value:"QQ",label:"QQ"},{value:"微信",label:"微信"},{value:"Telegram",label:"Telegram"},{value:"Facebook",label:"Facebook"}],user:{name:"",email:"",password:"",contact:"",contactAccount:""},password2:""}},methods:{userRegister:function(){this.user.password===this.password2?this.submitRegister():this.open("","两次密码输入不一致")},open:function(t,e){this.$alert(e,t,{confirmButtonText:"确定"})},open2:function(t,e){var s=this;this.$alert(e,t,{confirmButtonText:"确定",callback:function(){s.$router.push("/auth/login")}})},submitRegister:function(){var t=this;this.$axios.post("/register",this.user).then((function(e){console.log(e),t.open2()})).catch((function(e){console.log(e),t.open2("注册成功","点击确定跳转至登录")}))}}},i=n,r=(s("558d"),s("2877")),l=Object(r["a"])(i,a,o,!1,null,"086b6a6a",null);e["default"]=l.exports},bd01:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login-content"}},[s("h1",[t._v("登录")]),s("div",{staticClass:"login-option"},[s("label",[t._v("邮箱")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"loginInput",attrs:{type:"text",name:"Emali"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})])]),s("div",{staticClass:"login-option"},[s("label",[t._v("密码")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"loginInput",attrs:{type:"password",name:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})])]),s("el-button",{attrs:{id:"login"},on:{click:t.userLogin}},[t._v("确认登陆")])],1)},o=[],n={name:"login",data:function(){return{user:{email:"",password:""}}},methods:{userLogin:function(){var t=this;this.$axios.post("/login",{email:this.user.email,password:this.user.password}).then((function(e){console.log(e),t.$store.commit("LOGIN_IN","yyy"),t.$router.push("/user/panel")})).catch((function(t){console.log(t)}))}}},i=n,r=(s("de39"),s("2877")),l=Object(r["a"])(i,a,o,!1,null,"599d3cc8",null);e["default"]=l.exports},ce47:function(t,e,s){},de39:function(t,e,s){"use strict";var a=s("51b7"),o=s.n(a);o.a}}]);
//# sourceMappingURL=auth.41c2f30f.js.map