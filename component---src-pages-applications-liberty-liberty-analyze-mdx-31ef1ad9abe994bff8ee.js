(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6BMD":function(A,e,a){"use strict";a.r(e),a.d(e,"Title",(function(){return r})),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var t=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}var n,r=function(){return Object(t.b)("span",null,"Modernizing runtimes with Liberty ",Object(t.b)("br",null)," ",Object(t.b)("h2",null,"Analyze existing applications"))},l={},s=(n="PageDescription",function(A){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(t.b)("div",A)}),p={Title:r,_frontmatter:l},c=o.a;function b(A){var e=A.components,a=function(A,e){if(null==A)return{};var a,t,o={},i=Object.keys(A);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(o[a]=A[a]);return o}(A,["components"]);return Object(t.b)(c,i({},p,a,{components:e,mdxType:"MDXLayout"}),Object(t.b)(s,{mdxType:"PageDescription"},Object(t.b)("p",null,"This section covers how to use ",Object(t.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/learn/ibm-transformation-advisor"}),"IBM Cloud Transformation Advisor")," to analyze an existing traditional WebSphere application.")),Object(t.b)("p",null,"For this scenario the WebSphere Liberty runtime is chosen as the target runtime and the intention is to migrate this application with minimal code changes. WebSphere Liberty is a fast, dynamic, and easy-to-use Java application server, built on the open source Open Liberty project. Ideal or the cloud, Liberty is a combination of IBM technology and open source software, with fast startup times (<2 seconds), no server restarts to pick up changes, and a simple XML configuration."),Object(t.b)("h2",null,"Summary"),Object(t.b)("p",null,"This section has the following steps:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Introduction to IBM Cloud Transformation Advisor")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Install IBM Cloud Transformation Advisor")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Download and run the Data Collector")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Upload and analyze the results")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Determine the migration/modernization path and next steps"))),Object(t.b)("h3",null,"Introduction to IBM Cloud Transformation Advisor"),Object(t.b)("p",null,"IBM Cloud Transformation Advisor helps you access, analyze and modernize middleware based apps into IBM Cloud(s). It categorizes Java EE apps and MQ queue managers as simple, medium and complex based on migration complexity and provides guidance for modernization. IBM Cloud Transformation Advisor can accelerate the process to move your on-premises apps to cloud, minimize migration errors and risks, and reduce time to market in five steps."),Object(t.b)("p",null,"You can use IBM Transformation Advisor for these activities:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Identify the Java EE programming models in an app"),Object(t.b)("li",{parentName:"ul"},"Determine the complexity of apps by reviewing a high-level inventory of the content and structure of each app"),Object(t.b)("li",{parentName:"ul"},"Highlight the Java EE programming model and WebSphere API differences between the profile types"),Object(t.b)("li",{parentName:"ul"},"Learn any Java EE specification implementation differences that might affect the app")),Object(t.b)("p",null,"The tool also provides suggestions for the right-fit IBM WebSphere Application Server edition and offers advice, practices, and potential solutions to move apps to WebSphere Liberty or to newer versions of WebSphere Application Server."),Object(t.b)("h2",null,"Install IBM Cloud Transformation Advisor"),Object(t.b)("p",null,"IBM Cloud Transformation Advisor is split in to two components (the ",Object(t.b)("inlineCode",{parentName:"p"},"analysis engine")," and the ",Object(t.b)("inlineCode",{parentName:"p"},"data collector"),"). You can choose to between installing the ",Object(t.b)("inlineCode",{parentName:"p"},"analysis engine")," in to an IBM Cloud Private Cluster or locally on a machine with Docker."),Object(t.b)("p",null,Object(t.b)("a",i({parentName:"p"},{href:"https://developer.ibm.com/recipes/tutorials/deploying-transformation-advisor-into-ibm-cloud-private/"}),"Installing IBM Cloud Transformation Advisor in to your IBM Cloud Private Cluster")),Object(t.b)("p",null,Object(t.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/tutorials/install-ibm-transformation-advisor-local"}),"Installing IBM Cloud Transformation Advisor Beta Edition locally")),Object(t.b)("h3",null,"Download the Data Collector"),Object(t.b)("p",null,"Once IBM Cloud Transformation Advisor is installed, it is necessary to create a new Workspace and Collection and then download the ",Object(t.b)("strong",{parentName:"p"},"Data Collector")," that will be used to examine the existing environment and applications."),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Open IBM Cloud Transformation Advisor in a browser and click the button to create a new ",Object(t.b)("strong",{parentName:"p"},"Workspace"),Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"977px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB66ujBUT/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDEBMR/9oACAEBAAEFAsmIxM5lHQr/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAgMAAAAAAAAAAAAAAAACkQAzAyAh/9oACAEBAAY/AqxU5jFSsVp//8QAGxAAAQQDAAAAAAAAAAAAAAAAAAEgIUFxweH/2gAIAQEAAT8hk0CwOInJsf/aAAwDAQACAAMAAAAQ6D//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCH/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qp//EACAQAAICAAYDAAAAAAAAAAAAAAERACEQMUFRYXHR4fD/2gAIAQEAAT8QJytDp+KLjYWPXEQ2fGkIYzI6luFth//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Home Page",title:"Home Page",src:"/archtech-playbook/static/e0124cc2a5769404898f33210872427a/fdd9e/workspace1.jpg",srcSet:["/archtech-playbook/static/e0124cc2a5769404898f33210872427a/69549/workspace1.jpg 288w","/archtech-playbook/static/e0124cc2a5769404898f33210872427a/473e3/workspace1.jpg 576w","/archtech-playbook/static/e0124cc2a5769404898f33210872427a/fdd9e/workspace1.jpg 977w"],sizes:"(max-width: 977px) 100vw, 977px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Enter a Workspace name such as ",Object(t.b)("inlineCode",{parentName:"p"},"CloudPak_for_Applications")," and click ",Object(t.b)("strong",{parentName:"p"},"Next"),Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"407px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB7tojBc//xAAWEAADAAAAAAAAAAAAAAAAAAARICH/2gAIAQEAAQUCWn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwFX/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BR//EABcQAAMBAAAAAAAAAAAAAAAAAAABICL/2gAIAQEABj8Cl6P/xAAbEAABBAMAAAAAAAAAAAAAAAAAARExYRAhQf/aAAgBAQABPyFZ6OavLzE0f//aAAwDAQACAAMAAAAQcz//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxBD/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QW//EABwQAQEAAgIDAAAAAAAAAAAAAAERACEQUTGRsf/aAAgBAQABPxCK+VwV2axE2+zk46lHCaHXjP/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Workspace",title:"Workspace",src:"/archtech-playbook/static/c5009fd88d4fd0304ea2cb7dfa94d039/8f1b9/workspace2.jpg",srcSet:["/archtech-playbook/static/c5009fd88d4fd0304ea2cb7dfa94d039/69549/workspace2.jpg 288w","/archtech-playbook/static/c5009fd88d4fd0304ea2cb7dfa94d039/8f1b9/workspace2.jpg 407w"],sizes:"(max-width: 407px) 100vw, 407px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Enter a Collection name such as ",Object(t.b)("inlineCode",{parentName:"p"},"WAS855_AppSrv01")," and click ",Object(t.b)("strong",{parentName:"p"},"Let’s go"),Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"406px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB7rcooZhP/8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAAyD/2gAIAQEAAQUCxY0CZ//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AVf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEgITL/2gAIAQEABj8ChTNH/8QAHBAAAQQDAQAAAAAAAAAAAAAAAQARIUEQMWGR/9oACAEBAAE/Ibv1PkgFwSprlvi//9oADAMBAAIAAwAAABB//wD/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QbhB//8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAECAQE/EArNe//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExUYGR0f/aAAgBAQABPxBqxtfKW4PZQ5t6WVFVGooGu48sctnxP//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Collection",title:"Collection",src:"/archtech-playbook/static/e7279a43ca6f9e742e4037229b0a81a1/d47be/workspace3.jpg",srcSet:["/archtech-playbook/static/e7279a43ca6f9e742e4037229b0a81a1/69549/workspace3.jpg 288w","/archtech-playbook/static/e7279a43ca6f9e742e4037229b0a81a1/d47be/workspace3.jpg 406w"],sizes:"(max-width: 406px) 100vw, 406px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"When the ",Object(t.b)("strong",{parentName:"p"},"No recommendations available")," page is displayed, click the ",Object(t.b)("strong",{parentName:"p"},"Data Collector")," button",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"296px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.7222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAe5na1LAiM90MZH/xAAYEAADAQEAAAAAAAAAAAAAAAABAhARAP/aAAgBAQABBQI8u3Y2kKpBmT//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAcEAABBAMBAAAAAAAAAAAAAAAAARAhQREgMoH/2gAIAQEABj8CJaimhcHSr5r/AP/EAB0QAQACAgIDAAAAAAAAAAAAAAEAERAxIVFhkfD/2gAIAQEAAT8hVCzntNecLzr2nxcNQ0UXYS6pOsEuANY//9oADAMBAAIAAwAAABCTEXP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAXEQEAAwAAAAAAAAAAAAAAAAAQAREx/9oACAECAQE/EIws/8QAIBABAAIBBAIDAAAAAAAAAAAAAQARMRAhUXFBgZGh8P/aAAgBAQABPxBKBaMGWO6w/DTzEp2vD6luPz1Gu4DpuOrmGowebDbBfuGOIApxEdle9P/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Collector",title:"Collector",src:"/archtech-playbook/static/729e299bb6618e2285700eb36d31a3ef/dfac9/collector.jpg",srcSet:["/archtech-playbook/static/729e299bb6618e2285700eb36d31a3ef/69549/collector.jpg 288w","/archtech-playbook/static/729e299bb6618e2285700eb36d31a3ef/dfac9/collector.jpg 296w"],sizes:"(max-width: 296px) 100vw, 296px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"When the ",Object(t.b)("strong",{parentName:"p"},"Data Collector")," page is displayed, select the ",Object(t.b)("strong",{parentName:"p"},"Source Operating System")," for your environment and click the ",Object(t.b)("strong",{parentName:"p"},"Download")," button to download the Data Collector.",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"599px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHt3UQov//EABgQAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAEBAAEFAuFuQiWf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAARAgIf/aAAgBAQAGPwKMC//EABsQAQACAgMAAAAAAAAAAAAAAAERcQAQITFB/9oACAEBAAE/IeBKxbgOjNaQkIJngCtf/9oADAMBAAIAAwAAABA0P//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/EIf/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMWEQ/9oACAEBAAE/ENzAw0UQpcfdhgdZyzCWQxQXdKvz/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Download",title:"Download",src:"/archtech-playbook/static/8b7ccc0f5687295413fde3d8f4816f54/53d01/download.jpg",srcSet:["/archtech-playbook/static/8b7ccc0f5687295413fde3d8f4816f54/69549/download.jpg 288w","/archtech-playbook/static/8b7ccc0f5687295413fde3d8f4816f54/473e3/download.jpg 576w","/archtech-playbook/static/8b7ccc0f5687295413fde3d8f4816f54/53d01/download.jpg 599w"],sizes:"(max-width: 599px) 100vw, 599px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(t.b)("p",{parentName:"li"},"This results in a file with a name similar to ",Object(t.b)("inlineCode",{parentName:"p"},"transformationadvisor-Linux_CloudPak_for_Applications_WAS855_AppSrv01.tgz")," being downloaded."))),Object(t.b)("h2",null,"Run the Data Collector"),Object(t.b)("p",null,"Upload the Data Collector zip file that was downloaded from IBM Cloud Transformation Advisor in the previous step to the machine that the WebSphere ND Deployment Manager or the Standalone WebSphere Application Server is installed. The directory used arbitrary."),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Navigate to the directory you uploaded the ",Object(t.b)("inlineCode",{parentName:"p"},"transformationadvisor-Linux_CloudPak_for_Applications_WAS855_AppSrv01.tgz")," file to and issue the following commands to extract the Data Collector:  "),Object(t.b)("pre",{parentName:"li"},Object(t.b)("code",i({parentName:"pre"},{className:"language-bash"}),"mkdir datacollector\ncd datacollector\nmv transformationadvisor-Linux_CloudPak_for_Applications_WAS855_AppSrv01.tgz .\ntar -zxvf transformationadvisor-Linux_CloudPak_for_Applications_WAS855_AppSrv01.tgz\ncd transformationadvisor-*\n"))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"It is necessary to modify the scan performed by the Data Collector to include the ",Object(t.b)("inlineCode",{parentName:"p"},"org.pwte")," package as the Data Collector doesn’t scan ",Object(t.b)("inlineCode",{parentName:"p"},"org.*")," packages by default. Open the ",Object(t.b)("inlineCode",{parentName:"p"},"conf/customCmd.properties")," file and modify it as shown below:  "),Object(t.b)("pre",{parentName:"li"},Object(t.b)("code",i({parentName:"pre"},{className:"language-bash"}),'evaluation=--evaluate --excludePackages=com.ibm,com.informix,com.microsoft,com.sybase,com.sun,java,javax,net,oracle,sqlj,_ibmjsp --includePackages=org.pwte\nmigration_liberty=--analyze --sourceAppServer=was855 --targetAppServer=liberty --targetCloud=dockerIBMCloud --includePackages=org.pwte --excludePackages=com.ibm,com.informix,com.microsoft,com.sybase,com.sun,java,javax,net,oracle,sqlj,_ibmjsp\nmigration_was=--analyze --sourceAppServer=was855 --targetAppServer=was90 --targetCloud=vmIBMCloud --includePackages=org.pwte --excludePackages=com.ibm,com.informix,com.microsoft,com.sybase,com.sun,java,javax,net,oracle,sqlj,_ibmjsp\n#inventory=--inventory --excludeFiles=".*/directory/LargeXMLFileName.xml"\n#featureList=--featureList --excludeFiles=".*/directory/LargeXMLFileName.xml"\n#java_opt=-Xmx2g\n'))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"The following command assumes that WebSphere Application Server v855 is installed to ",Object(t.b)("inlineCode",{parentName:"p"},"/opt/IBM/WebSphere/AppServer855")," with a ",Object(t.b)("strong",{parentName:"p"},"profile")," named ",Object(t.b)("inlineCode",{parentName:"p"},"AppSrv01")," and that the ",Object(t.b)("strong",{parentName:"p"},"administration user")," is ",Object(t.b)("inlineCode",{parentName:"p"},"wasadmin")," with a ",Object(t.b)("strong",{parentName:"p"},"password")," of ",Object(t.b)("inlineCode",{parentName:"p"},"wasadmin"),". Modify and issue the following command as necessary to execute the Data Collector against the WebSphere environment:  "),Object(t.b)("pre",{parentName:"li"},Object(t.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./bin/transformationadvisor -w /opt/IBM/WebSphere/AppServer855 -p AppSrv01 wasadmin wasadmin\n"))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"When prompted, accept the ",Object(t.b)("strong",{parentName:"p"},"license agreement"),". The Data Collection process will now start and will analyze all of the applications installed in the WebSphere Application Server environment and will also collect the related Java EE artifacts such as Data Sources and JMS definitions.")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"When the analysis is complete, the Data Collector will attempt to upload the collection results to IBM Cloud Transformation Advisor. If this is successful, you can skip to the ",Object(t.b)("strong",{parentName:"p"},"Analyze the Recommendations")," section. If not, you will receive an error at the end of Data Collection and will find a file named ",Object(t.b)("inlineCode",{parentName:"p"},"AppSrv01.zip")," in your current directory as shown below."),Object(t.b)("pre",{parentName:"li"},Object(t.b)("code",i({parentName:"pre"},{className:"language-bash"}),"~/datacollector/transformationadvisor-1.9.6# ls -la *.zip\n-rw-r--r-- 1 root root 625493 Jun 12 12:58 AppSrv01.zip\n")),Object(t.b)("p",{parentName:"li"},"Download this ",Object(t.b)("strong",{parentName:"p"},"Data Collector Results zip")," file ready for uploading to IBM Cloud Transformation Advisor in the next section"))),Object(t.b)("h3",null,"Upload the Data Collector results"),Object(t.b)("p",null,"In this section the results from the Data Collector will be uploaded to IBM Cloud Transformation Advisor."),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"In the IBM Cloud Transformation Advisor web browser session, click the ",Object(t.b)("strong",{parentName:"p"},"Recomendations")," link in the top left corner and then click the ",Object(t.b)("strong",{parentName:"p"},"Upload data")," button as shown below",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"306px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"126.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB7k3xHApJ2QaGkf/EABkQAAMBAQEAAAAAAAAAAAAAAAABAjEgIf/aAAgBAQABBQJkp816pmUx4tP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwEh/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BKf/EABgQAAMBAQAAAAAAAAAAAAAAAAAQISDh/9oACAEBAAY/AivipM//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhMRAgQVFx8P/aAAgBAQABPyFUQuVh7cN/Et8wazCKaS4jPt6a/9oADAMBAAIAAwAAABA7HfP/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QgE2f/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxAHIqGL/8QAHhABAAICAgMBAAAAAAAAAAAAAQARITEQcVFhofD/2gAIAQEAAT8QREpXAXVsZWeQ3wwucXjeCeX57l9lvVQQxdYtH5AFaqCt8hdZ3NnZNPXH/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Upload",title:"Upload",src:"/archtech-playbook/static/04cbb7fe0bd53c92b9d3cebc96e5a45b/419c4/upload1.jpg",srcSet:["/archtech-playbook/static/04cbb7fe0bd53c92b9d3cebc96e5a45b/69549/upload1.jpg 288w","/archtech-playbook/static/04cbb7fe0bd53c92b9d3cebc96e5a45b/419c4/upload1.jpg 306w"],sizes:"(max-width: 306px) 100vw, 306px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"When the ",Object(t.b)("strong",{parentName:"p"},"Upload data")," dialog is displayed, use the ",Object(t.b)("strong",{parentName:"p"},"Drop or Add File")," button to select the ",Object(t.b)("strong",{parentName:"p"},"Data Collector Results zip")," file that was downloaded in the previous section. Click ",Object(t.b)("strong",{parentName:"p"},"Upload"),Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"673px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98.2638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7kuCbQtgUH//xAAaEAACAgMAAAAAAAAAAAAAAAABEAIRABIx/9oACAEBAAEFAj20RkdZOl//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAWEAEBAQAAAAAAAAAAAAAAAAABICH/2gAIAQEABj8CjEn/xAAfEAEAAgEDBQAAAAAAAAAAAAABABExECFBUWFxkbH/2gAIAQEAAT8hQcIDt6hTxDW37FkldGG2iKrHiBRP/9oADAMBAAIAAwAAABBPyAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhQTEQUWGBkf/aAAgBAQABPxClWN0kVv1gBdPkdEYMqiXATytahpXbo5jlvBlUCvln/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Upload2",title:"Upload2",src:"/archtech-playbook/static/02610e0f2bbe79d9d0f57c303ebe87d6/45dc1/upload2.jpg",srcSet:["/archtech-playbook/static/02610e0f2bbe79d9d0f57c303ebe87d6/69549/upload2.jpg 288w","/archtech-playbook/static/02610e0f2bbe79d9d0f57c303ebe87d6/473e3/upload2.jpg 576w","/archtech-playbook/static/02610e0f2bbe79d9d0f57c303ebe87d6/45dc1/upload2.jpg 673w"],sizes:"(max-width: 673px) 100vw, 673px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(t.b)("p",{parentName:"li"},"After a few moments the upload of the data collector results will be completed."))),Object(t.b)("h2",null,"Analyze the Recommendations"),Object(t.b)("p",null,"Once the Data Collector Results have been uploaded to IBM Cloud Transformation Advisor a set of recommendations will be created and shown on the ",Object(t.b)("strong",{parentName:"p"},"Recommendations")," page. In this section the recommendations will be analyzed and interpreted."),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"The default recommendations are based on a target runtime of ",Object(t.b)("strong",{parentName:"p"},"Liberty on Private Cloud"),". The Data Collector analyzed all of the applications running on the traditional WebSphere profile a displays a row in the chart for each application.",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"818px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB26EB/8QAFRABAQAAAAAAAAAAAAAAAAAAACH/2gAIAQEAAQUCqq//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAAAEEH/2gAIAQEABj8CUP/EABgQAAIDAAAAAAAAAAAAAAAAAAERABCB/9oACAEBAAE/ISgKUxR//9oADAMBAAIAAwAAABD77//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhAAAgIDAAAAAAAAAAAAAAAAASEAEUFRYf/aAAgBAQABPxAzgKcyt3l2KQ9n/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tWAS",title:"tWAS",src:"/archtech-playbook/static/d66e24edc51e719080553e11b64f92d6/eed66/analysis1a.jpg",srcSet:["/archtech-playbook/static/d66e24edc51e719080553e11b64f92d6/69549/analysis1a.jpg 288w","/archtech-playbook/static/d66e24edc51e719080553e11b64f92d6/473e3/analysis1a.jpg 576w","/archtech-playbook/static/d66e24edc51e719080553e11b64f92d6/eed66/analysis1a.jpg 818w"],sizes:"(max-width: 818px) 100vw, 818px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(t.b)("br",{parentName:"p"}),"\n","In the case of the ",Object(t.b)("strong",{parentName:"p"},"CustomerOrderServicesApp.ear")," application, IBM Cloud Transformation Advisor has determined that the migration to WebSphere Traditional on Private Cloud is of ",Object(t.b)("strong",{parentName:"p"},"Moderate")," complexity and that there are two ",Object(t.b)("strong",{parentName:"p"},"Severe Issues")," that have been detected. Click on the ",Object(t.b)("strong",{parentName:"p"},"CustomerOrderServicesApp.ear")," application name to see more information.")),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"Review the analysis results and scroll down to the ",Object(t.b)("strong",{parentName:"p"},"Technology Issues")," section. Note that IBM Cloud Transformation Advisor has detected that there are issues with lookups for Enterprise JavaBeans and with accessing the Apache Wink APIs.",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"895px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3aFB/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEQ/9oACAEBAAE/IRz/2gAMAwEAAgADAAAAEHgv/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QJ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABgQAQADAQAAAAAAAAAAAAAAAAEAESEx/9oACAEBAAE/EBSi8litewO6z//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tWAS",title:"tWAS",src:"/archtech-playbook/static/253080581621b33efd3da261e42c9013/7308d/issues1a.jpg",srcSet:["/archtech-playbook/static/253080581621b33efd3da261e42c9013/69549/issues1a.jpg 288w","/archtech-playbook/static/253080581621b33efd3da261e42c9013/473e3/issues1a.jpg 576w","/archtech-playbook/static/253080581621b33efd3da261e42c9013/7308d/issues1a.jpg 895w"],sizes:"(max-width: 895px) 100vw, 895px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"In order to review the IBM Cloud Transformation Advisor results in more detail, scroll to the bottom of the analysis page and click on the ",Object(t.b)("strong",{parentName:"p"},"Analysis Report")," link",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"890px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"13.541666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3oFB/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oACAEBAAEFAkY//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGBAAAgMAAAAAAAAAAAAAAAAAABEBEEH/2gAIAQEAAT8hVEjD/9oADAMBAAIAAwAAABADz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABgQAQADAQAAAAAAAAAAAAAAAAEAESGR/9oACAEBAAE/EKFu9g117A1FJ//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Report",title:"Report",src:"/archtech-playbook/static/dd0042e2c1c89f91689d2d77abd70f06/4d28b/reports1.jpg",srcSet:["/archtech-playbook/static/dd0042e2c1c89f91689d2d77abd70f06/69549/reports1.jpg 288w","/archtech-playbook/static/dd0042e2c1c89f91689d2d77abd70f06/473e3/reports1.jpg 576w","/archtech-playbook/static/dd0042e2c1c89f91689d2d77abd70f06/4d28b/reports1.jpg 890w"],sizes:"(max-width: 890px) 100vw, 890px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"When the warning dialog is displayed, click ",Object(t.b)("strong",{parentName:"p"},"OK"),Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"502px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHuWkMD/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAQABBQKZUf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAQADAAAAAAAAAAAAAAAAAAABIEH/2gAIAQEABj8CZSX/xAAaEAACAwEBAAAAAAAAAAAAAAAAARExURBx/9oACAEBAAE/IYc0iHgWku+1n//aAAwDAQACAAMAAAAQjP8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBAAAgICAwAAAAAAAAAAAAAAAREAIRAxQWHx/9oACAEBAAE/EC6kcVPPgFs9DII2K+yTP//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Warning",title:"Warning",src:"/archtech-playbook/static/a775adb07106f4feb4e27be353ece239/d84d5/reports2.jpg",srcSet:["/archtech-playbook/static/a775adb07106f4feb4e27be353ece239/69549/reports2.jpg 288w","/archtech-playbook/static/a775adb07106f4feb4e27be353ece239/d84d5/reports2.jpg 502w"],sizes:"(max-width: 502px) 100vw, 502px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)("li",{parentName:"ol"},Object(t.b)("p",{parentName:"li"},"The ",Object(t.b)("strong",{parentName:"p"},"Detailed Migration Analysis Report")," will be displayed which show the results of the migration rules that were executed by the Data Collector and returned results. Scroll down to the ",Object(t.b)("strong",{parentName:"p"},"Severe Rules")," section and click on the ",Object(t.b)("strong",{parentName:"p"},"Show rule help")," link for each of the results. Review the recommendations.",Object(t.b)("br",{parentName:"p"}),"\n",Object(t.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"926px"}}),"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB2rAD/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAQABBQLBT//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABgQAQADAQAAAAAAAAAAAAAAAAEAECEx/9oACAEBAAE/IQV2ar//2gAMAwEAAgADAAAAEHPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAIDAQAAAAAAAAAAAAAAAQARMVFx0f/aAAgBAQABPxBw0pcA+yw5Kdz/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"JPA",title:"JPA",src:"/archtech-playbook/static/f55fa0212e1a3ed209891de004142080/8d838/severe.jpg",srcSet:["/archtech-playbook/static/f55fa0212e1a3ed209891de004142080/69549/severe.jpg 288w","/archtech-playbook/static/f55fa0212e1a3ed209891de004142080/473e3/severe.jpg 576w","/archtech-playbook/static/f55fa0212e1a3ed209891de004142080/8d838/severe.jpg 926w"],sizes:"(max-width: 926px) 100vw, 926px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Behavior change on lookups for Enterprise JavaBeans")," In Liberty, EJB components are not bound to a server root Java Naming and Directory Interface (JNDI) namespace as they are in WebSphere Application Server traditional. The fix for this is to change the three classes that use ",Object(t.b)("inlineCode",{parentName:"p"},"ejblocal")," to use the correct URL for Liberty"),Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"The user of system provided Apache Wink APIs requires configuration")," To use system-provided third-party APIs in Liberty applications, you must configure the applications to include the APIs. In WebSphere Application Server traditional, these APIs are available without configuration. This is a configuration only change and can be achieved by using a ",Object(t.b)("inlineCode",{parentName:"p"},"classloader")," definition in the Liberty server.xml file."))),Object(t.b)("h3",null,"Final Analysis"),Object(t.b)("p",null,"The intention of this traditional WebSphere V855 —> Liberty (Private Cloud) scenario is to migrate the Customer Order Services application to the cloud-ready new runtime with minimal code changes."),Object(t.b)("p",null,"IBM Cloud Transformation Advisor was used to analyze the application for compatibility with traditional WebSphere V9 (Private Cloud) and determined that only small changes to three classes would be required."),Object(t.b)("p",null,"While this scenario will move the application to the cloud-ready WebSphere Liberty runtime in a container, it will not ",Object(t.b)("strong",{parentName:"p"},"modernize")," the application architecture and code in any way. "),Object(t.b)("p",null,"Now proceed to the ",Object(t.b)("a",i({parentName:"p"},{href:"liberty-build.md"}),"Liberty - Build")," section where the process of making the code changes and configuring the Liberty runtime will be covered step-by-step"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-applications-liberty-liberty-analyze-mdx-31ef1ad9abe994bff8ee.js.map