"use strict";(self.webpackChunkkrishadi_com=self.webpackChunkkrishadi_com||[]).push([[573],{653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(4848),o=n(8453),r=n(7465);const s={slug:"gee-greppo",title:"Google Earth Engine and Greppo",description:"Geospatial app with Google Earth Engine and\xa0Greppo",published:"3/20/2022",last_update:{date:"3/20/2022"},tags:["tutorials"]},a="Geospatial app with Google Earth Engine and\xa0Greppo",d={id:"gee-greppo",title:"Google Earth Engine and Greppo",description:"Geospatial app with Google Earth Engine and\xa0Greppo",source:"@site/posts/04-gee-greppo.md",sourceDirName:".",slug:"/gee-greppo",permalink:"/posts/gee-greppo",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Tutorials",permalink:"/posts/tags/tutorials",description:"Some general tutorials on stuff I have built or ones I like."}],version:"current",lastUpdatedAt:16477308e5,sidebarPosition:4,frontMatter:{slug:"gee-greppo",title:"Google Earth Engine and Greppo",description:"Geospatial app with Google Earth Engine and\xa0Greppo",published:"3/20/2022",last_update:{date:"3/20/2022"},tags:["tutorials"]},sidebar:"postsSidebar",previous:{title:"Greppo - a geospatial app framework",permalink:"/posts/greppo-introduction"}},h={},l=[{value:"Getting started",id:"getting-started",level:2},{value:"GEE Authentication and Initialisation",id:"gee-authentication-and-initialisation",level:2},{value:"Understanding GEE\u2019s client-server model",id:"understanding-gees-client-server-model",level:2},{value:"Client vs.\xa0Server",id:"client-vsserver",level:3},{value:"Lazy computational model (Deferred execution)",id:"lazy-computational-model-deferred-execution",level:3},{value:"Using Greppo with\xa0GEE",id:"using-greppo-withgee",level:2},{value:"So, how to use Greppo with\xa0GEE?",id:"so-how-to-use-greppo-withgee",level:3},{value:"End-to-end communication: complete\xa0web-app",id:"end-to-end-communication-completeweb-app",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"geospatial-app-with-google-earth-engine-andgreppo",children:"Geospatial app with Google Earth Engine and\xa0Greppo"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"March 3, 2022"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Using Google Earth Engine without a lot of JavaScript experience is hard. Greppo lets you overcome this in\xa0Python."})}),"\n"]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://cdn-images-1.medium.com/max/1600/1*HwMJZVVFtFmmrpWokqmoxg.gif",alt:"Final web app"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Figure: The final web-app using Greppo and GEE. Image by\xa0author."})})]}),"\n",(0,i.jsx)(t.p,{children:"Google Earth Engine is an amazing tool in a data scientists toolbox for working with geospatial data. However, building a web-app with the GEE code editor requires a steep learning curve. The JavaScript based app-creator requires a large investment of time for data scientists who are solely Python developers"}),"\n",(0,i.jsx)(t.p,{children:"Greppo is the perfect tool to bridge this gap."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"In this blog post I will be building a web-application with Greppo with a a popular GEE use-case with DEM(Digital Elevation Model). I will walk you through understanding the basics of GEE, the client-server model, how the API works and the GEE data model. With that background, the post will use Greppo to create an app using GEE\u2019s Python interface and highlight Greppo\u2019s mental model and easy to use interface."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["All the code here is in Python. They are ported from the GEE\u2019s sample JavaScript code in the ",(0,i.jsx)(t.a,{href:"https://developers.google.com/earth-engine/guides?hl=en",children:"documentation"})]})}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(t.p,{children:["Before we get started, you need to get access to Google Earth Engine. Follow the instruction ",(0,i.jsx)(t.a,{href:"https://earthengine.google.com/signup/",children:"here to signup"})," and get access."]}),"\n",(0,i.jsxs)(t.p,{children:["Here is a quick tutorial on Greppo and how to use it: ",(0,i.jsx)(t.a,{href:"https://towardsdatascience.com/build-a-geospatial-dashboard-in-python-using-greppo-60aff44ba6c9",children:"Build a geospatial dashboard in Python using Greppo"})]}),"\n",(0,i.jsxs)(t.p,{children:["Next, let\u2019s setup our Python environment to install the dependencies. To understand what Python environments are and how to set it up, ",(0,i.jsx)(t.a,{href:"https://krishadi.com/zettelkasten/python.html",children:"read this"}),". Install the following packages into the Python environment."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ pip install earthengine-api greppo\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The code for the web-app will go into ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"app.py,"})})," and the app is served and run through the command line using the command ",(0,i.jsx)(t.code,{children:"greppo serve app.py"}),"\xa0."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To run the ",(0,i.jsx)(t.code,{children:"greppo"})," command in the command line, you need to activate the python environment where greppo is installed. The file app.py can be renamed to anything, but be sure to be in the folder when you run the command ",(0,i.jsx)(t.code,{children:"greppo serve app.py"})," or in a relative folder structure ",(0,i.jsx)(t.code,{children:"greppo serve /demo/folder/app.py"}),"\xa0."]})}),"\n",(0,i.jsxs)(t.p,{children:["Greppo\u2019s GitHub repository: ",(0,i.jsx)(t.a,{href:"https://github.com/greppo-io/greppo",children:"https://github.com/greppo-io/greppo"})]}),"\n",(0,i.jsxs)(t.p,{children:["For any issues reach out to us on ",(0,i.jsx)(t.a,{href:"https://github.com/greppo-io/greppo",children:"GitHub"})," using \u2018issues\u2019 or in the ",(0,i.jsx)(t.a,{href:"https://discord.gg/RNJBjgh8gz",children:"Discord channel here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"gee-authentication-and-initialisation",children:"GEE Authentication and Initialisation"}),"\n",(0,i.jsxs)(t.p,{children:["To be able to use Google Earth Engine, you need to create a service account and get an access-key-file associated with that account. This will only take a few minutes, but make sure to follow the instructions properly. Follow the instructions ",(0,i.jsx)(t.a,{href:"https://developers.google.com/earth-engine/guides/service_account?hl=en",children:"here"}),". To use the service account and the key-file, use the following code to initialise."]}),"\n",(0,i.jsx)(r.A,{id:"b75ef65c43ea13eacac41fe660c54b80"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Make sure to keep the key-file.json in another location, preferably safely in the root folder of your computer and not commit it into a public repository."})}),"\n",(0,i.jsx)(t.h2,{id:"understanding-gees-client-server-model",children:"Understanding GEE\u2019s client-server model"}),"\n",(0,i.jsx)(t.p,{children:"As the developer docs of GEE puts it, Earth Engine is not like any GIS or geospatial tool you\u2019ve used before. GEE is primarily a cloud-platform, and all the processing is done in the cloud and not on your machine. The interactions with GEE that you will do are merely instructions that are translated and sent to GEE\u2019s cloud platform. To understand this better, we would have to go through GEE\u2019s Client vs. Server and its lazy computational model."}),"\n",(0,i.jsx)(t.h3,{id:"client-vsserver",children:(0,i.jsx)(t.a,{href:"https://developers.google.com/earth-engine/guides/client_server",children:"Client vs.\xa0Server"})}),"\n",(0,i.jsxs)(t.p,{children:["Let\u2019s start with what I mentioned before, ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"GEE is primarily a cloud-platform"})}),". It lets you do all the processing in the cloud. So, how do you access this processing-functions?"]}),"\n",(0,i.jsxs)(t.p,{children:["Here is where the ",(0,i.jsx)(t.code,{children:"earthengine-api"})," library comes to use. The Python package ",(0,i.jsx)(t.code,{children:"earthengine-api"})," provides objects to the client (which is you) that act as proxy to the server objects which is passed and processed in the cloud."]}),"\n",(0,i.jsxs)(t.p,{children:["To understand the client-server model better, let\u2019s take an example of a String variable in the client and a String variable in the server. On creating a String in the client and printing its type, we get the Python ",(0,i.jsx)(t.code,{children:"class str"})," object to represent a string. If we want to send a string to the server for use or manipulation in the cloud, we would use the ",(0,i.jsx)(t.code,{children:"ee.String"})," to wrap up the data in a proxy container which can be read in the server. To be more specific, the ",(0,i.jsx)(t.code,{children:"ee. objects"})," are an ",(0,i.jsx)(t.code,{children:"ee.computedObject"})," which is the parent class to the proxy objects."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:">> # Client side string\n>> client_string = 'I am a Python String object'\n>> print(type(client_string))\n<class 'str'>\n\n>> # Server side string\n>> server_string = ee.String('I am proxy ee String object!');\n>> print(type(server_string))\n<class 'ee.ee_string.String'>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The proxy objects do not contain any actual data or processing functions/algorithms. They are just handles for the objects on the server (cloud-platform), to merely convey the instructions that are to be executed in the server. Think of it as a way to communicate to the server using code, and to do that you need to wrap the data and instruction in a ",(0,i.jsx)(t.code,{children:"ee.computedObject"})," container of the specific type."]}),"\n",(0,i.jsxs)(t.p,{children:["This understanding becomes even more relevant when performing loops or using conditional statements on the data. To perform these, the instructions are to be sent to the server to execute them. To understand how these are implemented ",(0,i.jsx)(t.a,{href:"https://developers.google.com/earth-engine/guides/client_server",children:"check this page out"})," for more details."]}),"\n",(0,i.jsx)(t.h3,{id:"lazy-computational-model-deferred-execution",children:(0,i.jsx)(t.a,{href:"https://developers.google.com/earth-engine/guides/deferred_execution",children:"Lazy computational model (Deferred execution)"})}),"\n",(0,i.jsxs)(t.p,{children:["So, from the above we know that the ",(0,i.jsx)(t.code,{children:"earthengine-api"})," package is merely to send instructions to the server. So, how and when does the execution happen?"]}),"\n",(0,i.jsxs)(t.p,{children:["The client side library ",(0,i.jsx)(t.code,{children:"earthengine-api"})," compiles all the instructions into a JSON object and is sent to the server. However, this is not executed immediately. The execution is ",(0,i.jsx)(t.em,{children:"deferred"})," until there is a request for the result. The request for the result can be a ",(0,i.jsx)(t.code,{children:"print"})," statement, or the ",(0,i.jsx)(t.code,{children:"image"})," object to be displayed."]}),"\n",(0,i.jsx)(t.p,{children:"This on-demand computation as affects what is return to the client (you the user). The result from the earthengine-api is a url to the GEE tile server where the data is to be fetched. So, the images that are within the mentioned area of interest are selectively processed. The area of interest is determined by the zoom level and the center location of the map in the client display. And, as you move and zoom, the images are processed and sent to the client to be viewed. The images are thus computed lazily."}),"\n",(0,i.jsx)(t.h2,{id:"using-greppo-withgee",children:"Using Greppo with\xa0GEE"}),"\n",(0,i.jsxs)(t.p,{children:["Using Greppo to display and visualise Earth Engine image objects are fairly straight forward, all you need to use is: ",(0,i.jsx)(t.code,{children:"app.ee_layer()"}),". The basic data types where geospatial data is stored in GEE is in,"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Image"}),"\xa0: fundamental raster data type in Earth Engine."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ImageCollection"}),"\xa0: stack or time-series of images."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Geometry"}),"\xa0: fundamental vector data type in Earth Engine."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Feature"}),"\xa0: a ",(0,i.jsx)(t.code,{children:"Geometry"})," with attributes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"FeatureCollection"}),"\xa0: a set of ",(0,i.jsx)(t.code,{children:"Feature"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After understanding the client-server and lazy computational model of GEE, we can extrapolate that these data types are processed on demand, upon the request for its visualisation."}),"\n",(0,i.jsx)(t.h3,{id:"so-how-to-use-greppo-withgee",children:"So, how to use Greppo with\xa0GEE?"}),"\n",(0,i.jsxs)(t.p,{children:["It is best explained with an example. Let\u2019s start with the scaffolding of the app. You would first have to import the ",(0,i.jsx)(t.code,{children:"app"})," object from ",(0,i.jsx)(t.code,{children:"Greppo"})," as this will be your entry point to communicate with the frontend. You would then have to ",(0,i.jsx)(t.code,{children:"import ee"}),", authenticate yourself to Earth Engine and initialise your session with the credentials from your service account mentioned above."]}),"\n",(0,i.jsx)(r.A,{id:"02ba22e5623d3b40211f74a51a1b9a4b"}),"\n",(0,i.jsxs)(t.p,{children:["Next, let\u2019s start with selecting the dataset from the catalog. Here, we are using the ",(0,i.jsx)(t.code,{children:"USGS/SRTMGL1_003"})," to get the Digital Elevation map. We need to first get a land mask for all the values in the DEM image data greater than 0, for which we use ",(0,i.jsx)(t.code,{children:"dem.get(0)"}),". Next, we need to apply the mask on our DEM to only visualise the land, for which we use ",(0,i.jsx)(t.code,{children:"dem.updateMask(dem.gt(0))"})," and we assign the result as our ",(0,i.jsx)(t.code,{children:"ee_dem"})," to be visualised. Since all the data is stored as int16 (matrix of values between 32767 and -32768), we would have to visualise the matrix using a palette."]}),"\n",(0,i.jsxs)(t.p,{children:["To add a palette we create a visualisation parameter object containing the instruction for producing an RGM or greyscale image. Here we use a palette containing the ",(0,i.jsx)(t.code,{children:"Hex values:[\u2018006633\u2019, \u2018E5FFCC\u2019, \u2018662A00\u2019, \u2018D8D8D8\u2019, \u2018F5F5F5\u2019]"})," and map it linearly to the values corresponding to the ",(0,i.jsx)(t.code,{children:"min -> #006633"}),"and ",(0,i.jsx)(t.code,{children:"max -> #F5F5F5"}),"specified."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The data stored in the DEM is a raster, represented as a matrix and each cell contains the elevation in meters of the point representing the cell."})}),"\n",(0,i.jsxs)(t.p,{children:["To then visualise this map in the web-application using Greppo, all you need to use is ",(0,i.jsx)(t.code,{children:"app.ee_layer()"}),". The ",(0,i.jsx)(t.code,{children:"ee_object"})," is the earth engine image object, ",(0,i.jsx)(t.code,{children:"vis_param"})," is the visualisation parameter dictionary, ",(0,i.jsx)(t.code,{children:"name"})," corresponds to the unique identifier which will be used in the web-app frontend, and a ",(0,i.jsx)(t.code,{children:"description"})," is optional to provide additional direction to the app user. More on this can be found in the documentation ",(0,i.jsx)(t.a,{href:"https://docs.greppo.io/map-components/ee-layer.html",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"here"})})}),"."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://cdn-images-1.medium.com/max/1600/1*PsuigXZVNhFxLMhr26Bdag.png",alt:"Initial setup"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Figure: View of the web-app from the above step. Image by\xa0author."})})]}),"\n",(0,i.jsx)(t.h2,{id:"end-to-end-communication-completeweb-app",children:"End-to-end communication: complete\xa0web-app"}),"\n",(0,i.jsx)(t.p,{children:"So far we\u2019ve seen how to only visualise the earth engine object in Greppo. However, Greppo is capable of complex interaction between the frontend and backend. Let\u2019s use an example of finding the elevation of a point specified by the user. We\u2019ll be using three of Greppo\u2019s API features."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"app.display()"}),"\xa0: To display a text or markdown in the frontend."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"app.number()"}),"\xa0: A number input feature in the frontend for the user to enter a value. The variable to which it is bound in the backend will be updated to the value specified by the user."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"app.text()"}),"\xa0: A text input feature in the frontend for the user to enter a value. The variable to which it is bound in the backend will be updated to the value specified by the user."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Refer to the ",(0,i.jsx)(t.a,{href:"https://docs.greppo.io/index.html",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"documentation here"})})})," for more details."]}),"\n",(0,i.jsxs)(t.p,{children:["Let\u2019s start with using the ",(0,i.jsx)(t.code,{children:"app.display"})," (",(0,i.jsx)(t.code,{children:"name"})," is the unique identifier and the value is the text displayed which can be a multiline string) to display some text for guiding the web-app user. After which lets create two number inputs one each for the longitude and latitude of the point using ",(0,i.jsx)(t.code,{children:"app.number()"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"app.number()"})," takes in name, the identifier displayed on the frontend, and value, which is the default value for this element. Next let\u2019s also create a text input for getting the name of the point using ",(0,i.jsx)(t.code,{children:"app.text()"})," with ",(0,i.jsx)(t.code,{children:"name"})," and ",(0,i.jsx)(t.code,{children:"value"})," as mentioned for ",(0,i.jsx)(t.code,{children:"app.number()"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Using the latitude and longitude of the point, we can now create an earth engine Geometry object for the point with the visualisation parameters ",(0,i.jsx)(t.code,{children:"color: \u2018red\u2019"}),". We can now display this using the ",(0,i.jsx)(t.code,{children:"app.ee_layer()"})," as mentioned above."]}),"\n",(0,i.jsx)(r.A,{id:"a73e7f3496e3c4bbfd350f1be59a8b51"}),"\n",(0,i.jsxs)(t.p,{children:["To find the elevation of the point, we make use of the earth engine method ",(0,i.jsx)(t.code,{children:"sample"})," on the DEM object. We sample the point in the DEM to get the properties from the DEM. We take the first point from the output and use the\xa0",(0,i.jsx)(t.code,{children:".get"})," method to find the value associated with the property ",(0,i.jsx)(t.code,{children:"elevation"}),". And, finally we compose a multiline string to display the output."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["To center the map to a point and at a zoom level on the initial load, make use of ",(0,i.jsx)(t.code,{children:"app.map(center=[lat, lon], zoom=level)"}),"\xa0."]})}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://cdn-images-1.medium.com/max/1600/1*IZjMibr0FiHjY86vCXC4aQ.png",alt:"Greppo's interactive feature"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Figure: View of the web-app with the interaction feature. Image by\xa0author."})})]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["Our goal was to create a web-app completely in Python, using the data and computation feature of google earth engine and Greppo\u2019s web-app development library. We went through understanding the working of GEE, understood how to integrate Greppo with GEE. Learnt to use ",(0,i.jsx)(t.code,{children:"app.ee_layer()"}),", ",(0,i.jsx)(t.code,{children:"app.display()"}),", ",(0,i.jsx)(t.code,{children:"app.number()"})," and ",(0,i.jsx)(t.code,{children:"app.text()"})," to create a complete web-app that communicates end-to-end with the frontend and backend."]}),"\n",(0,i.jsxs)(t.p,{children:["All the files for the demo can be found here: ",(0,i.jsx)(t.a,{href:"https://github.com/greppo-io/greppo-demo/tree/main/ee-demo",children:"https://github.com/greppo-io/greppo-demo/tree/main/ee-demo"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Check out the ",(0,i.jsx)(t.a,{href:"https://github.com/greppo-io/greppo",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"GitHub repository: here"})})})," to be updated on the latest on Greppo. In case of bugs, issues or feature requests for your use-case reach out on the ",(0,i.jsx)(t.a,{href:"https://discord.gg/RNJBjgh8gz",children:"Discord channel"})," or open an issue on GitHub. Built something with Greppo? Post it GitHub."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["GitHub repository: ",(0,i.jsx)(t.a,{href:"https://github.com/greppo-io/greppo",children:"https://github.com/greppo-io/greppo"})]}),"\n",(0,i.jsxs)(t.li,{children:["Documentation: ",(0,i.jsx)(t.a,{href:"https://docs.greppo.io/",children:"https://docs.greppo.io/"})]}),"\n",(0,i.jsxs)(t.li,{children:["Website: ",(0,i.jsx)(t.a,{href:"https://greppo.io/",children:"https://greppo.io/"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Originally posted in ",(0,i.jsx)(t.a,{href:"https://www.kdnuggets.com/2022/03/building-geospatial-application-python-google-earth-engine-greppo.html",children:"KD Nuggets"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7465:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(6540),o=n(4848);class r extends i.PureComponent{componentDidMount(){this._updateIframeContent()}componentDidUpdate(e,t){this._updateIframeContent()}_defineUrl(){const{id:e,file:t}=this.props;return`https://gist.github.com/${e}.js${t?`?file=${t}`:""}`}_updateIframeContent(){const{id:e,file:t}=this.props,n=this.iframeNode;let i=n.document;n.contentDocument?i=n.contentDocument:n.contentWindow&&(i=n.contentWindow.document);const o=`<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body ${`onload="parent.document.getElementById('${t?`gist-${e}-${t}`:`gist-${e}`}').style.height=document.body.scrollHeight + 'px'"`}>${`<script type="text/javascript" src="${this._defineUrl()}"><\/script>`}</body></html>`;i.open(),i.writeln(o),i.close()}render(){const{id:e,file:t}=this.props;return(0,o.jsx)("iframe",{ref:e=>{this.iframeNode=e},width:"100%",frameBorder:0,id:t?`gist-${e}-${t}`:`gist-${e}`})}}const s=r},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);