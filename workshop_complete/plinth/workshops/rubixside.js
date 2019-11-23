$("#back").click(function (){
        
    /*var p=document.querySelector("p");
    var b=document.querySelector(".h3");
    p.innerHTML=null;
    b.innerHTML=null;
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;*/
var j=window.location.href;
var k=j.lastIndexOf("/");
j=j.substring(0,k);
j=j+"/workshop.html";
var s=document.getElementById("back");
s.href=j;
})

$("#synopsis").click(function () {
// $("#querycontent").addClass("d-none");
 //$("#morecontent").addClass("d-none");
 //$("#rulescontent").addClass("d-none");
 //$("#synopsiscontent").removeClass("d-none");
 console.log($("#synopsis").html().trim());
 if($("#synopsis").html().trim()=="Synopsis"){
     console.log("asdf");
     var p=document.querySelector("p");
    
    var b=document.querySelector(".h3");

    b.textContent="SYNOPSIS";
    p.textContent="This introductory workshop on Artificial Intelligence gives an overview of many concepts, techniques, and algorithms in Fuzzy Logic, machine learning, and beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training, adaptive training, Best Meaning Fitting, Support Vector Machine etc. The course will give the student the basic ideas and intuition behind modern machine learning methods as well as a bit more formal understanding of how, why, and when they work.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;

 }
});

var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="This introductory workshop on Artificial Intelligence gives an overview of many concepts, techniques, and algorithms in Fuzzy Logic, machine learning, and beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training, adaptive training, Best Meaning Fitting, Support Vector Machine etc. The course will give the student the basic ideas and intuition behind modern machine learning methods as well as a bit more formal understanding of how, why, and when they work.";
pinitial.style.fontSize="1.3em";

$("#query").click(function () {
 //$("#synopsiscontent").addClass("d-none");
 //$("#morecontent").addClass("d-none");
 //$("#rulescontent").addClass("d-none");
 //$("#querycontent").removeClass("d-none");
 console.log($("#query").html().trim());
 if($("#query").html().trim()=="Query"){
     console.log("asdf");
     var p=document.querySelector("p");
    
     var b=document.querySelector(".h3");
     b.textContent="QUERY";
     p.style.fontSize="1.3em";
     p.textContent="For more info, visit : www.htindialabs.com";
     var p1=document.createElement("p");
     p1.textContent="Suyash Agrawal: +91-7339875167";
     p.appendChild(p1);
     var p2=document.createElement("p");  
     p2.textContent="For any query, contact us at workshops@plinth.in";
     p.appendChild(p2);
     var ul=document.querySelector("#mylist");
     ul.innerHTML=null;
 }
});

$("#rules").click(function () {
 //$("#querycontent").addClass("d-none");
 //$("#synopsiscontent").addClass("d-none");
 //$("#rulescontent").addClass("d-none");
 //$("#morecontent").removeClass("d-none");
 console.log($("#rules").html().trim());
 if($("#rules").html().trim()=="Benefits"){
     console.log("asdf");
     var p=document.querySelector("p");
    
     var b=document.querySelector(".h3");
     b.textContent="BENEFITS";
     p.textContent="";
     p.style.fontSize="1.3em";
     var ul=document.querySelector("#mylist");
     ul.innerHTML="<li>Receive an unparalleled education from HT India Labs team with personal one-on-one attention.</li><li>Learn and interact with one of the respected authorities on computer security.</li><li>HT India Labs certification programs are recognized in the security industry.</li><li>Improve your job prospects and get an edge over your counterparts.</li><li>Interactive Query sessions, Live Demos, PowerPoint Presentation.</li><li>Certificate of Participation for all the workshop participants from HT India Labs.</li><li>At the end of this workshop, a small competition will be organized among the participating students and winners will be awarded with a 'Certificate of Excellence'.</li>";
 }
});
$("#more").click(function () {
 //$("#synopsiscontent").addClass("d-none");
 //$("#morecontent").addClass("d-none");
 //$("#querycontent ").addClass("d-none");
 //$("#rulescontent").removeClass("d-none");
 console.log($("#more").html().trim());
 if($("#more").html().trim()=="Structure"){
     console.log("asdf");
     var p=document.querySelector("p");
    
     var b=document.querySelector(".h3");
     b.textContent="STRUCTURE";
    p.textContent="Topics to be covered";
    var p1=document.createElement("p");
    p1.textContent="Module 1:";
    p.appendChild(p1);
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="<li>Introduction to Artificial Intelligence</li><li>Applications of AI & Current trends</li><li>Different AI Techniques</li><li>AI Agents</li><li>PEAS Analysis</li><li>Different Types of AI Agents</li><li>Machine Learning</li><li>Introduction and Applications of Machine Learning</li><li>Supervised and Unsupervised Learning</li><li>Classification & Regression Problem</li><li>Clustering, Anomaly Detection</li><li>Getting started with Linear Regression</li><li>Building Linear Model</li><li>Gradient Descent Algorithm</li><li>Error Correction</li>";
 }
});



/*let navtabside = document.querySelector("nav.navtab");
let navtabItemside = document.querySelectorAll("li.navtab-item");
var pinitial=document.querySelector("p");
var h3init=document.querySelector(".h3");
h3init.textContent="SYNOPSIS";
pinitial.textContent="This introductory workshop on Artificial Intelligence gives an overview of many concepts, techniques, and algorithms in Fuzzy Logic, machine learning, and beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training, adaptive training, Best Meaning Fitting, Support Vector Machine etc. The course will give the student the basic ideas and intuition behind modern machine learning methods as well as a bit more formal understanding of how, why, and when they work.";
pinitial.style.fontSize="1.3em";

navtabItemside.forEach((navtabItem, activeIndex) => navtabItem.addEventListener("click", () => {
navtabItemside.forEach(navtabItem => navtabItem.classList.remove("active"));
navtabItem.classList.add("active");
navtabside.style.setProperty("--active-index", `${activeIndex}`);
var c=document.querySelector(".active");

var a=document.querySelector(".active").querySelector("i").innerHTML;

var p=document.querySelector("p");
console.log(a);
var b=document.querySelector(".h3");
if(a=="<!--syn-->"){
    b.textContent="SYNOPSIS";
    p.textContent="This introductory workshop on Artificial Intelligence gives an overview of many concepts, techniques, and algorithms in Fuzzy Logic, machine learning, and beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training, adaptive training, Best Meaning Fitting, Support Vector Machine etc. The course will give the student the basic ideas and intuition behind modern machine learning methods as well as a bit more formal understanding of how, why, and when they work.";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;
}
if(a=="<!--str-->"){
    b.textContent="STRUCTURE";
    p.textContent="Topics to be covered";
    var p1=document.createElement("p");
    p1.textContent="Module 1:";
    p.appendChild(p1);
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="<li>Introduction to Artificial Intelligence</li><li>Applications of AI & Current trends</li><li>Different AI Techniques</li><li>AI Agents</li><li>PEAS Analysis</li><li>Different Types of AI Agents</li><li>Machine Learning</li><li>Introduction and Applications of Machine Learning</li><li>Supervised and Unsupervised Learning</li><li>Classification & Regression Problem</li><li>Clustering, Anomaly Detection</li><li>Getting started with Linear Regression</li><li>Building Linear Model</li><li>Gradient Descent Algorithm</li><li>Error Correction</li>";
}
if(a=="<!--ben-->"){
    b.textContent="BENEFITS";
    p.textContent="";
    p.style.fontSize="1.3em";
    var ul=document.querySelector("#mylist");
    ul.innerHTML="<li>Receive an unparalleled education from HT India Labs team with personal one-on-one attention.</li><li>Learn and interact with one of the respected authorities on computer security.</li><li>HT India Labs certification programs are recognized in the security industry.</li><li>Improve your job prospects and get an edge over your counterparts.</li><li>Interactive Query sessions, Live Demos, PowerPoint Presentation.</li><li>Certificate of Participation for all the workshop participants from HT India Labs.</li><li>At the end of this workshop, a small competition will be organized among the participating students and winners will be awarded with a 'Certificate of Excellence'.</li>";
 }
if(a=="<!--que-->"){
    b.textContent="QUERY";
    p.style.fontSize="1.3em";
    p.textContent="For more info, visit : www.htindialabs.com";
    var p1=document.createElement("p");
    p1.textContent="Suyash Agrawal: +91-7339875167";
    p.appendChild(p1);
    var p2=document.createElement("p");  
    p2.textContent="For any query, contact us at workshops@plinth.in";
    p.appendChild(p2);
    var ul=document.querySelector("#mylist");
    ul.innerHTML=null;
}
}));*/
