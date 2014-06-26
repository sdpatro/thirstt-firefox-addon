console.log("inject-moz.js initialized.....");

// Main frame attributes
var iframe_thirstt = document.createElement("div");
iframe_thirstt.setAttribute("id","thirsttFrame")
iframe_thirstt.setAttribute("frameborder", "0");
iframe_thirstt.className = "off";
document.body.appendChild(iframe_thirstt);   // Adding the frame to the body
setStyle("thirsttFrame","off");
