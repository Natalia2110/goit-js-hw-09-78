!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null;var n=function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),console.log("Start")};t.btnStart.addEventListener("click",n),t.btnStop.addEventListener("click",(function(){clearInterval(o),console.log("Stop")}))}();
//# sourceMappingURL=01-color-switcher.fdc63477.js.map
