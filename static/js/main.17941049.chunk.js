(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(4),o=n(5),s=n(7),i=n(6),u=n(1),d=n(0),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={key:""},e.hendleKeyboard=function(t){e.setState({key:t.key})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.hendleKeyboard)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.hendleKeyboard)}},{key:"render",value:function(){var e=this.state.key;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(u.Component);n(13);r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.17941049.chunk.js.map