webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\"> <div class=\\\"col-md-3\\\"> <span class=\\\"hipster img-fluid rounded\\\"></span> </div> <div class=\\\"col-md-9\\\"> <h1 class=\\\"display-4\\\" jhiTranslate=\\\"home.title\\\">Welcome to Viajato!</h1> <p class=\\\"lead\\\" jhiTranslate=\\\"home.subtitle\\\">This is your homepage</p> <div [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"alert alert-success\\\" *ngSwitchCase=\\\"true\\\"> <span id=\\\"home-logged-message\\\" *ngIf=\\\"account\\\" jhiTranslate=\\\"home.logged.message\\\" translateValues=\\\"{username: '{{account.login}}'}\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> <div class=\\\"alert alert-warning\\\" *ngSwitchCase=\\\"false\\\"> <span jhiTranslate=\\\"global.messages.info.authenticated.prefix\\\">If you want to </span> <a class=\\\"alert-link\\\" (click)=\\\"login()\\\" jhiTranslate=\\\"global.messages.info.authenticated.link\\\">sign in</a><span jhiTranslate=\\\"global.messages.info.authenticated.suffix\\\">, you can try the default accounts:<br/>- Administrator (login=\\\"admin\\\" and password=\\\"admin\\\") <br/>- User (login=\\\"user\\\" and password=\\\"user\\\").</span> </div> <div class=\\\"alert alert-warning\\\" *ngSwitchCase=\\\"false\\\"> <span jhiTranslate=\\\"global.messages.info.register.noaccount\\\">You don't have an account yet?</span>&nbsp; <a class=\\\"alert-link\\\" routerLink=\\\"register\\\" jhiTranslate=\\\"global.messages.info.register.link\\\">Register a new account</a> </div> </div> <p jhiTranslate=\\\"home.question\\\"> If you have any question on JHipster: </p> <ul> <li><a href=\\\"https://www.jhipster.tech/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" jhiTranslate=\\\"home.link.homepage\\\">JHipster homepage</a></li> <li><a href=\\\"http://stackoverflow.com/tags/jhipster/info\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" jhiTranslate=\\\"home.link.stackoverflow\\\">JHipster on Stack Overflow</a></li> <li><a href=\\\"https://github.com/jhipster/generator-jhipster/issues?state=open\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" jhiTranslate=\\\"home.link.bugtracker\\\">JHipster bug tracker</a></li> <li><a href=\\\"https://gitter.im/jhipster/generator-jhipster\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" jhiTranslate=\\\"home.link.chat\\\">JHipster public chat room</a></li> <li><a href=\\\"https://twitter.com/java_hipster\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" jhiTranslate=\\\"home.link.follow\\\">follow @java_hipster on Twitter</a></li> </ul> <p> <span jhiTranslate=\\\"home.like\\\">If you like JHipster, don't forget to give us a star on</span> <a href=\\\"https://github.com/jhipster/generator-jhipster\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" jhiTranslate=\\\"home.github\\\">GitHub</a>! </p> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD9kZjQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNmQUFzZixhQUFhLGVBQWUsRUFBRSxrQ0FBa0MsZUFBZSxpcUJBQWlxQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj4gPHNwYW4gY2xhc3M9XFxcImhpcHN0ZXIgaW1nLWZsdWlkIHJvdW5kZWRcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj4gPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS50aXRsZVxcXCI+V2VsY29tZSB0byBWaWFqYXRvITwvaDE+IDxwIGNsYXNzPVxcXCJsZWFkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUuc3VidGl0bGVcXFwiPlRoaXMgaXMgeW91ciBob21lcGFnZTwvcD4gPGRpdiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8c3BhbiBpZD1cXFwiaG9tZS1sb2dnZWQtbWVzc2FnZVxcXCIgKm5nSWY9XFxcImFjY291bnRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5sb2dnZWQubWVzc2FnZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7dXNlcm5hbWU6ICd7e2FjY291bnQubG9naW59fSd9XFxcIj4gWW91IGFyZSBsb2dnZWQgaW4gYXMgdXNlciBcXFwie3thY2NvdW50LmxvZ2lufX1cXFwiLiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5wcmVmaXhcXFwiPklmIHlvdSB3YW50IHRvIDwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5zdWZmaXhcXFwiPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLnJlZ2lzdGVyLm5vYWNjb3VudFxcXCI+WW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/PC9zcGFuPiZuYnNwOyA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8ucmVnaXN0ZXIubGlua1xcXCI+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvYT4gPC9kaXY+IDwvZGl2PiA8cCBqaGlUcmFuc2xhdGU9XFxcImhvbWUucXVlc3Rpb25cXFwiPiBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb24gb24gSkhpcHN0ZXI6IDwvcD4gPHVsPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuamhpcHN0ZXIudGVjaC9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5ob21lcGFnZVxcXCI+SkhpcHN0ZXIgaG9tZXBhZ2U8L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS90YWdzL2poaXBzdGVyL2luZm9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5zdGFja292ZXJmbG93XFxcIj5KSGlwc3RlciBvbiBTdGFjayBPdmVyZmxvdzwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2poaXBzdGVyL2dlbmVyYXRvci1qaGlwc3Rlci9pc3N1ZXM/c3RhdGU9b3BlblxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLmJ1Z3RyYWNrZXJcXFwiPkpIaXBzdGVyIGJ1ZyB0cmFja2VyPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwczovL2dpdHRlci5pbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5jaGF0XFxcIj5KSGlwc3RlciBwdWJsaWMgY2hhdCByb29tPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2phdmFfaGlwc3RlclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLmZvbGxvd1xcXCI+Zm9sbG93IEBqYXZhX2hpcHN0ZXIgb24gVHdpdHRlcjwvYT48L2xpPiA8L3VsPiA8cD4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJob21lLmxpa2VcXFwiPklmIHlvdSBsaWtlIEpIaXBzdGVyLCBkb24ndCBmb3JnZXQgdG8gZ2l2ZSB1cyBhIHN0YXIgb248L3NwYW4+IDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUuZ2l0aHViXFxcIj5HaXRIdWI8L2E+ISA8L3A+IDwvZGl2PiA8L2Rpdj4gXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/home.component.html\n");

/***/ })

})