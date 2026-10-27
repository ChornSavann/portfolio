var SK=[
["C# / .NET","Desktop and backend systems","code","#6a5cff"],["Java","Object-oriented and enterprise","code","#e08a00"],
["PHP / Laravel","Web apps and REST APIs","data","#e0434a"],["Flutter / Dart","Cross-platform mobile apps","data","#1aa3c7"],
["MySQL / PostgreSQL","Relational database design","data","#0f8f6f"],["MikroTik RouterOS","Routing, hotspot and VLANs","net","#1aa3c7"],
["Cisco CCNA","VLANs, OSPF, ACLs, port security","net","#3b7bf0"],["FortiGate","Firewall policies and VPN","net","#e0434a"],
["Ubiquiti UniFi","Wireless access and control","net","#3b9ad9"],["Docker","Containerized deployment","ops","#2a7de1"],
["Git and GitHub","Version control and CI/CD","ops","#e0762f"],["Linux administration","Ubuntu and CentOS servers","ops","#c99a06"]];
var PR=[
["POS Inventory Management System","Point-of-sale and stock system with real-time inventory tracking, barcode support and secure management workflows.","POS and inventory","PHP Laravel",["Laravel","MySQL","Bootstrap"],"https://github.com/ChornSavann/POS_Inventory.git","#e0434a"],
["Restaurant Management System","Desktop app for orders, billing and table management, built with Windows Forms to streamline restaurant service.","Desktop software","C# / .NET",["C#",".NET","SQL Server"],"https://github.com/ChornSavann/Restaurant.git","#6a5cff"],
["Mobile App UI and Screens","Cross-platform interface screens and widgets built in Flutter for smooth, consistent user experiences.","Mobile app","Flutter and Dart",["Flutter","Dart","Material UI"],"https://github.com/ChornSavann/app_mobile_screen.git","#1aa3c7"],
["Backend RESTful API","Laravel API that powers mobile apps, with secure authentication, database endpoints and JSON responses.","Backend API","PHP Laravel",["Laravel","REST API","MySQL"],"https://github.com/ChornSavann/backend_api_app.git","#8b5cf6"],
["Hotel Cambodiana Network","Multi-VLAN campus network with MikroTik hotspot guest portal, load balancing and secure core routing switches.","Enterprise networking","MikroTik and Cisco",["MikroTik RouterOS","VLAN / Hotspot","Cisco CLI"],"","#0f8f6f"]];
var SN=["php artisan serve","Console.WriteLine(order.Total);","runApp(const MyApp());","GET /api/v1/products 200","/ip hotspot add name=guest"];
var $=function(s){return document.querySelector(s)};
function esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
$("#skills-grid").innerHTML=SK.map(function(s){return '<div class="sk" data-c="'+s[2]+'" style="--c:'+s[3]+'"><b>'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></div>'}).join("");
$("#pgrid").innerHTML=PR.map(function(p,i){
 var ft=p[5]?'<a class="ft" href="'+p[5]+'" target="_blank" rel="noopener"><svg class="i"><use href="#gh"/></svg>View repository</a>':'<div class="ft" style="color:var(--mute)">Internship project at Hotel Cambodiana</div>';
 return '<article class="proj rv" style="--c:'+p[6]+'" data-s="'+esc((p[0]+" "+p[2]+" "+p[3]+" "+p[4].join(" ")).toLowerCase())+'"><div class="cov"><code>'+SN[i]+'</code></div><div class="top"><span class="kind">'+p[2]+'</span><span>'+p[3]+'</span></div><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p><div class="tags">'+p[4].map(function(t){return '<i>'+t+'</i>'}).join("")+'</div>'+ft+'</article>'}).join("");
$("#tabs").addEventListener("click",function(e){var b=e.target.closest(".tab");if(!b)return;
 document.querySelectorAll(".tab").forEach(function(t){t.setAttribute("aria-pressed",t===b)});
 document.querySelectorAll(".sk").forEach(function(c){c.hidden=!(b.dataset.f==="all"||c.dataset.c===b.dataset.f)})});
$("#q").addEventListener("input",function(e){var v=e.target.value.trim().toLowerCase(),n=0;
 document.querySelectorAll(".proj").forEach(function(c){var ok=c.dataset.s.indexOf(v)>-1;c.style.display=ok?"":"none";if(ok)n++});
 $("#empty").style.display=n?"none":"block"});
$("#theme").addEventListener("click",function(){var r=document.documentElement,d=r.dataset.theme==="dark"?"light":"dark";r.dataset.theme=d;try{localStorage.setItem("sc-theme",d)}catch(x){}});
try{var t=localStorage.getItem("sc-theme");if(t)document.documentElement.dataset.theme=t}catch(x){}
$("#yr").textContent=new Date().getFullYear();
$("#cf").addEventListener("submit",function(e){e.preventDefault();
 var b="Name: "+$("#n").value+"\nEmail: "+$("#e").value+"\n\n"+$("#m").value;
 location.href="mailto:chornsavann11@gmail.com?subject="+encodeURIComponent($("#s").value)+"&body="+encodeURIComponent(b)});
$("#top").addEventListener("click",function(){scrollTo({top:0,behavior:"smooth"})});
addEventListener("scroll",function(){$("#top").classList.toggle("on",scrollY>600)},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);
 x.target.querySelectorAll("[data-n]").forEach(count)}})},{threshold:.15});
function count(el){var t=+el.dataset.n,i=0;var id=setInterval(function(){i++;el.textContent=i;if(i>=t)clearInterval(id)},180)}
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var roles=["Software developer","Network engineer","Laravel and Flutter builder","MikroTik and Cisco configurator"],ri=0,ci=0,del=false,rl=$("#role");
function tick(){var w=roles[ri];if(rm){rl.textContent=w;return}
 ci+=del?-1:1;rl.textContent=w.slice(0,ci);var d=del?35:75;
 if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}
 setTimeout(tick,d)}
tick();
var items=["C# / .NET","Java","Laravel","Flutter","MySQL","MikroTik","Cisco CCNA","FortiGate","UniFi","Docker","Linux"];
var mh=items.map(function(t){return "<span>"+t+"</span>"}).join("");$("#mq").innerHTML=mh+mh;
addEventListener("scroll",function(){var h=document.documentElement;$("#prog").style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"},{passive:true});
document.querySelectorAll(".card,.proj,.sk,.row").forEach(function(c){c.classList.add("spot");c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});
var ph=$("#photo");if(ph&&!rm){var fr=ph.querySelector(".frame");ph.addEventListener("pointermove",function(e){var r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;fr.style.transform="rotateY("+x*12+"deg) rotateX("+(-y*12)+"deg)"});ph.addEventListener("pointerleave",function(){fr.style.transform=""})}