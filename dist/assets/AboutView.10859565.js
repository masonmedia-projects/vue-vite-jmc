import{g as n,S as l,s as d,u as a,d as u,A as h,o as i,c as r,e as s,a as t,b as _}from"./index.24cef21b.js";const g={key:0,class:"container-fluid p-0"},p={id:"banner",class:"row min-vh-100 mt-5 mx-0 w-100"},f={class:"col-lg-6 p-5 bg-sand d-flex flex-column justify-content-center align-items-stretch text-left mt-4 mt-lg-0 min-vh-75"},m=["innerHTML"],b=["innerHTML"],T={class:"up"},v=["href"],x=["innerHTML"],k=["href"],L=["innerHTML"],M={class:"col-lg-6 bg-sand p-0"},y=["src"],V={__name:"AboutView",setup(H){n.registerPlugin(l);const{content:e,loading:w,error:S}=d(a()),{fetchData:c}=a();return c(),u(()=>{h.init({offset:0,delay:0,duration:600,easing:"ease-in-out-cubic",mirror:!0}),n.utils.toArray(".up").forEach(o=>{n.from(o,{y:70,opacity:0,duration:1,stagger:.5,ease:"power2.inOut",scrollTrigger:{trigger:o,toggleActions:"play none none reverse",start:"top bottom",end:"bottom top"}})})}),(o,A)=>(i(),r("div",null,[s(e).hero?(i(),r("div",g,[t("div",p,[t("div",f,[t("h1",{"data-aos":"fade-up","data-aos-offset":"0","data-aos-easing":"ease-in-sine",class:"up site-title font-weight-bold",innerHTML:s(e).hero.title},null,8,m),t("h3",{"data-aos":"fade-up","data-aos-offset":"0","data-aos-delay":"100","data-aos-easing":"ease-in-sine",class:"up site-subtitle text-dark my-3",innerHTML:s(e).hero.subtitle},null,8,b),t("div",T,[t("a",{href:"#"+s(e).hero.btn1Link},[t("button",{class:"btn btn-dark cta px-4 me-2",role:"button",innerHTML:s(e).hero.btn1},null,8,x)],8,v),t("a",{href:"#"+s(e).hero.btn2link},[t("button",{class:"btn btn-dark cta px-4",role:"button",innerHTML:s(e).hero.btn2},null,8,L)],8,k)])]),t("div",M,[t("img",{src:`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${s(e).hero.img.path}`,width:"1000",height:"600",class:"w-100 img-full min-vh-50 p-0"},null,8,y)])])])):_("",!0)]))}};export{V as default};