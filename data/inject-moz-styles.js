console.log("inject-moz-styles.js initialized.....");

function setStyle(element,state)
{
	switch(element)
	{
		case "thirsttFrame" : 	document.getElementById("thirsttFrame").setAttribute("style"," \
									width: 100%; \
									z-index:2147483635; \
									position:absolute; \
									top: 0px; \
									left: 0px; \
									box-shadow: 3px 3px 5px  #bdbdbd; \
									background-color: #ffffff; \
									margin: 0px; \
									padding-bottom: 200px; \
									visibility: hidden; \
									opacity: 0; \
									-webkit-transition: all 0.2s ease; \
								  	-moz-transition: all 0.2s ease; \
								  	-ms-transition: all 0.2s ease; \
								  	-o-transition: all 0.2s ease; \
								  	transition: all 0.2s ease; \
									");

								if (state == "on")
								{
									document.getElementById("thirsttFrame").setAttribute("style"," \
										visibility: visible; \
										opacity: 1.0;");
								}
	}
}