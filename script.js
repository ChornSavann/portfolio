var SK = [
  ["C# / .NET", "Desktop and backend systems", "code", "#6a5cff"],
  ["Java", "Object-oriented and enterprise", "code", "#e08a00"],
  ["PHP / Laravel", "Web apps and REST APIs", "data", "#e0434a"],
  ["Flutter / Dart", "Cross-platform mobile apps", "data", "#1aa3c7"],
  ["MySQL / PostgreSQL", "Relational database design", "data", "#0f8f6f"],
  ["MikroTik RouterOS", "Routing, hotspot and VLANs", "net", "#1aa3c7"],
  ["Cisco CCNA", "VLANs, OSPF, ACLs, port security", "net", "#3b7bf0"],
  ["FortiGate", "Firewall policies and VPN", "net", "#e0434a"],
  ["Ubiquiti UniFi", "Wireless access and control", "net", "#3b9ad9"],
  ["Docker", "Containerized deployment", "ops", "#2a7de1"],
  ["Git and GitHub", "Version control and CI/CD", "ops", "#e0762f"],
  ["Linux administration", "Ubuntu and CentOS servers", "ops", "#c99a06"],
];
SK.push(
  ["C / C++", "Core programming (Etect Center)", "code", "#00599C"],
  ["Microsoft Office", "Word, Excel and PowerPoint", "it", "#d9541e"],
  ["Windows setup", "Install and configure Windows and apps", "it", "#2a7de1"],
  ["Printer setup", "Connect and share printers on a network", "it", "#8b5cf6"],
  ["Hardware checks", "Diagnose and fix computer hardware", "it", "#e0762f"],
  [
    "Wi-Fi and internet",
    "Troubleshoot connections and access points",
    "it",
    "#1aa3c7",
  ],
  ["Email setup", "Set up and configure mail accounts", "it", "#e0434a"],
  [
    "PMS and POS support",
    "Property Management and Point of Sale",
    "it",
    "#0f8f6f",
  ],
);
var PR = [
  [
    "POS Inventory Management System",
    "Point-of-sale and stock system with real-time inventory tracking, barcode support and secure management workflows.",
    "POS and inventory",
    "PHP Laravel",
    ["Laravel", "MySQL", "Bootstrap"],
    "https://github.com/ChornSavann/POS_Inventory.git",
    "#e0434a",
  ],
  [
    "Restaurant Management System",
    "Desktop app for orders, billing and table management, built with Windows Forms to streamline restaurant service.",
    "Desktop software",
    "C# / .NET",
    ["C#", ".NET", "SQL Server"],
    "https://github.com/ChornSavann/Restaurant.git",
    "#6a5cff",
  ],
  [
    "Mobile App UI and Screens",
    "Cross-platform interface screens and widgets built in Flutter for smooth, consistent user experiences.",
    "Mobile app",
    "Flutter and Dart",
    ["Flutter", "Dart", "Material UI"],
    "https://github.com/ChornSavann/app_mobile_screen.git",
    "#1aa3c7",
  ],
  [
    "Backend RESTful API",
    "Laravel API that powers mobile apps, with secure authentication, database endpoints and JSON responses.",
    "Backend API",
    "PHP Laravel",
    ["Laravel", "REST API", "MySQL"],
    "https://github.com/ChornSavann/backend_api_app.git",
    "#8b5cf6",
  ],
  [
    "Hotel Cambodiana IT Internship",
    "IT support work during my internship: computers, printers, IP phones, projectors, Wi-Fi, and PMS and POS maintenance.",
    "IT support",
    "Hotel IT",
    ["IT support", "PMS / POS", "Wi-Fi"],
    "",
    "#0f8f6f",
  ],
];
var SN = [
  "php artisan serve",
  "Console.WriteLine(order.Total);",
  "runApp(const MyApp());",
  "GET /api/v1/products 200",
  "ipconfig /all",
];
var $ = function (s) {
  return document.querySelector(s);
};
function esc(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
$("#skills-grid").innerHTML = SK.map(function (s) {
  return (
    '<div class="sk" data-c="' +
    s[2] +
    '" style="--c:' +
    s[3] +
    '"><b>' +
    esc(s[0]) +
    "</b><span>" +
    esc(s[1]) +
    "</span></div>"
  );
}).join("");
$("#pgrid").innerHTML = PR.map(function (p, i) {
  var ft = p[5]
    ? '<a class="ft" href="' +
      p[5] +
      '" target="_blank" rel="noopener"><svg class="i"><use href="#gh"/></svg>View repository</a>'
    : '<div class="ft" style="color:var(--mute)">Internship at Hotel Cambodiana</div>';
  return (
    '<article class="proj rv" style="--c:' +
    p[6] +
    '" data-s="' +
    esc((p[0] + " " + p[2] + " " + p[3] + " " + p[4].join(" ")).toLowerCase()) +
    '"><div class="cov"><code>' +
    SN[i] +
    '</code></div><div class="top"><span class="kind">' +
    p[2] +
    "</span><span>" +
    p[3] +
    "</span></div><h3>" +
    esc(p[0]) +
    "</h3><p>" +
    esc(p[1]) +
    '</p><div class="tags">' +
    p[4]
      .map(function (t) {
        return "<i>" + t + "</i>";
      })
      .join("") +
    "</div>" +
    ft +
    "</article>"
  );
}).join("");
$("#tabs").addEventListener("click", function (e) {
  var b = e.target.closest(".tab");
  if (!b) return;
  document.querySelectorAll(".tab").forEach(function (t) {
    t.setAttribute("aria-pressed", t === b);
  });
  document.querySelectorAll(".sk").forEach(function (c) {
    c.hidden = !(b.dataset.f === "all" || c.dataset.c === b.dataset.f);
  });
});
$("#q").addEventListener("input", function (e) {
  var v = e.target.value.trim().toLowerCase(),
    n = 0;
  document.querySelectorAll(".proj").forEach(function (c) {
    var ok = c.dataset.s.indexOf(v) > -1;
    c.style.display = ok ? "" : "none";
    if (ok) n++;
  });
  $("#empty").style.display = n ? "none" : "block";
});
$("#theme").addEventListener("click", function () {
  var r = document.documentElement,
    d = r.dataset.theme === "dark" ? "light" : "dark";
  r.dataset.theme = d;
  try {
    localStorage.setItem("sc-theme", d);
  } catch (x) {}
});
try {
  var t = localStorage.getItem("sc-theme");
  if (t) document.documentElement.dataset.theme = t;
} catch (x) {}
$("#yr").textContent = new Date().getFullYear();
$("#cf").addEventListener("submit", function (e) {
  e.preventDefault();
  var b =
    "Name: " +
    $("#n").value +
    "\nEmail: " +
    $("#e").value +
    "\n\n" +
    $("#m").value;
  location.href =
    "mailto:chornsavann11@gmail.com?subject=" +
    encodeURIComponent($("#s").value) +
    "&body=" +
    encodeURIComponent(b);
});
$("#top").addEventListener("click", function () {
  scrollTo({ top: 0, behavior: "smooth" });
});
addEventListener(
  "scroll",
  function () {
    $("#top").classList.toggle("on", scrollY > 600);
  },
  { passive: true },
);
var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
        x.target.querySelectorAll("[data-n]").forEach(count);
      }
    });
  },
  { threshold: 0.15 },
);
function count(el) {
  var t = +el.dataset.n,
    i = 0;
  var id = setInterval(function () {
    i++;
    el.textContent = i;
    if (i >= t) clearInterval(id);
  }, 180);
}
document.querySelectorAll(".rv").forEach(function (el) {
  io.observe(el);
});
var KM = {
  About: "អំពីខ្ញុំ",
  Journey: "ដំណើរ",
  Skills: "ជំនាញ",
  Projects: "គម្រោង",
  Contact: "ទំនាក់ទំនង",
  "Chat on Telegram": "ជជែកតាម Telegram",
  "Open to internships and junior roles":
    "ត្រៀមខ្លួនសម្រាប់កម្មសិក្សា និងតួនាទីចាប់ផ្តើម",
  "builds apps and the networks they run on.":
    "បង្កើតកម្មវិធី និងបណ្តាញដែលវាដំណើរការលើ។",
  "IT student at Build Bright University. I write full-stack software in C#, Java, Laravel and Flutter, and I configure MikroTik, Cisco and FortiGate networks for real businesses.":
    "និស្សិត IT នៅសាកលវិទ្យាល័យ Build Bright។ ខ្ញុំសរសេរកម្មវិធី full-stack ដោយប្រើ C#, Java, Laravel និង Flutter ហើយកំណត់រចនាសម្ព័ន្ធបណ្តាញ MikroTik, Cisco និង FortiGate សម្រាប់អាជីវកម្មពិតៗ។",
  "See my projects": "មើលគម្រោងរបស់ខ្ញុំ",
  "Get in touch": "ទាក់ទងខ្ញុំ",
  "Build Bright University · IT": "សាកលវិទ្យាល័យ Build Bright · IT",
  "Software and networking, one skill set":
    "កម្មវិធី និងបណ្តាញ ក្នុងជំនាញតែមួយ",
  "Most developers never see the network under their app. I work on both sides, so I can build a service and make sure it is reachable and secure.":
    "អ្នកអភិវឌ្ឍភាគច្រើនមិនដែលមើលបណ្តាញនៅពីក្រោមកម្មវិធីរបស់ខ្លួនទេ។ ខ្ញុំធ្វើការទាំងសងខាង ដូច្នេះខ្ញុំអាចបង្កើតសេវាកម្ម ហើយធានាថាវាចូលប្រើបាន និងមានសុវត្ថិភាព។",
  "IT student with hands-on lab and internship work":
    "និស្សិត IT ដែលមានបទពិសោធន៍អនុវត្តជាក់ស្តែង និងកម្មសិក្សា",
  "My coursework and personal projects cover software design, database architecture and computer networking. I have built desktop, web and mobile apps, and I completed an internship project designing the network at Hotel Cambodiana.":
    "មេរៀន និងគម្រោងផ្ទាល់ខ្លួនរបស់ខ្ញុំគ្របដណ្តប់លើការរចនាកម្មវិធី ស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ និងបណ្តាញកុំព្យូទ័រ។ ខ្ញុំបានបង្កើតកម្មវិធី desktop, web និង mobile ហើយបានបញ្ចប់គម្រោងកម្មសិក្សារចនាបណ្តាញនៅ Hotel Cambodiana។",
  "On the network side I work with CCNA routing and switching, VLAN segmentation, OSPF and MikroTik administration.":
    "ផ្នែកបណ្តាញ ខ្ញុំធ្វើការជាមួយ CCNA routing និង switching ការបែងចែក VLAN, OSPF និងការគ្រប់គ្រង MikroTik។",
  "Programming languages": "ភាសាសរសេរកម្មវិធី",
  "Projects on GitHub": "គម្រោងនៅលើ GitHub",
  "Network platforms": "ប្រព័ន្ធបណ្តាញ",
  "Software development": "ការអភិវឌ្ឍកម្មវិធី",
  "Clean, scalable apps for desktop, web and mobile with C#, Java, Laravel, Flutter and relational databases.":
    "កម្មវិធីស្អាត និងអាចពង្រីកបាន សម្រាប់ desktop, web និង mobile ដោយប្រើ C#, Java, Laravel, Flutter និងមូលដ្ឋានទិន្នន័យ។",
  "Networks and security": "បណ្តាញ និងសុវត្ថិភាព",
  "Secure routing, VLANs, hotspot portals and load balancing, plus Linux servers and Docker deployments.":
    "routing សុវត្ថិភាព, VLAN, hotspot portal និង load balancing រួមទាំង Linux server និង Docker។",
  "My journey": "ដំណើររបស់ខ្ញុំ",
  "Study, internship and projects that shaped how I build software and networks.":
    "ការសិក្សា កម្មសិក្សា និងគម្រោង ដែលបានកំណត់របៀបដែលខ្ញុំបង្កើតកម្មវិធី និងបណ្តាញ។",
  Now: "ឥឡូវនេះ",
  Internship: "កម្មសិក្សា",
  Networking: "បណ្តាញ",
  Software: "កម្មវិធី",
  "Studying software design, databases and computer networking while building real projects on the side.":
    "កំពុងសិក្សាការរចនាកម្មវិធី មូលដ្ឋានទិន្នន័យ និងបណ្តាញកុំព្យូទ័រ ព្រមទាំងបង្កើតគម្រោងពិតៗ។",
  "Network project at Hotel Cambodiana": "គម្រោងបណ្តាញនៅ Hotel Cambodiana",
  "Designed a multi-VLAN campus network with a MikroTik hotspot guest portal, load balancing and secure core routing.":
    "រចនាបណ្តាញ multi-VLAN ជាមួយ MikroTik hotspot guest portal, load balancing និង core routing សុវត្ថិភាព។",
  "CCNA routing and switching": "CCNA routing និង switching",
  "Practised VLANs, OSPF, ACLs and port security, and worked with MikroTik, Cisco and FortiGate devices.":
    "អនុវត្ត VLAN, OSPF, ACL និង port security ហើយធ្វើការជាមួយឧបករណ៍ MikroTik, Cisco និង FortiGate។",
  "Full-stack and mobile projects": "គម្រោង full-stack និង mobile",
  "Built a Laravel POS system, a C# restaurant app, a Flutter UI and a REST API, all on GitHub.":
    "បង្កើតប្រព័ន្ធ POS ដោយ Laravel កម្មវិធីភោជនីយដ្ឋាន C# UI Flutter និង REST API ទាំងអស់នៅលើ GitHub។",
  "Skills and tools": "ជំនាញ និងឧបករណ៍",
  "Filter by area to see what I use for each kind of work.":
    "ជ្រើសតាមផ្នែក ដើម្បីមើលអ្វីដែលខ្ញុំប្រើសម្រាប់ការងារនីមួយៗ។",
  All: "ទាំងអស់",
  Programming: "ការសរសេរកម្មវិធី",
  "Frameworks and databases": "Framework និងមូលដ្ឋានទិន្នន័យ",
  "Desktop and backend systems": "ប្រព័ន្ធ desktop និង backend",
  "Object-oriented and enterprise": "Object-oriented និងកម្រិតអាជីវកម្ម",
  "Web apps and REST APIs": "កម្មវិធីវេប និង REST API",
  "Cross-platform mobile apps": "កម្មវិធី mobile សម្រាប់ច្រើនប្រព័ន្ធ",
  "Relational database design": "ការរចនាមូលដ្ឋានទិន្នន័យ",
  "Routing, hotspot and VLANs": "Routing, hotspot និង VLAN",
  "VLANs, OSPF, ACLs, port security": "VLAN, OSPF, ACL, port security",
  "Firewall policies and VPN": "គោលការណ៍ firewall និង VPN",
  "Wireless access and control": "Wi-Fi និងការគ្រប់គ្រង",
  "Containerized deployment": "ការដាក់ប្រើប្រាស់ជា container",
  "Version control and CI/CD": "Version control និង CI/CD",
  "Ubuntu and CentOS servers": "server Ubuntu និង CentOS",
  "Linux administration": "ការគ្រប់គ្រង Linux",
  "Applications, APIs and a network deployment. Code is on my GitHub.":
    "កម្មវិធី API និងការដាក់ពង្រាយបណ្តាញ។ កូដនៅលើ GitHub របស់ខ្ញុំ។",
  "No project matches that search. Try “Laravel”, “Flutter” or “MikroTik”.":
    "គ្មានគម្រោងត្រូវនឹងការស្វែងរកនេះទេ។ សាកល្បង “Laravel”, “Flutter” ឬ “MikroTik”។",
  "Search by name or technology": "ស្វែងរកតាមឈ្មោះ ឬបច្ចេកវិទ្យា",
  "POS and inventory": "POS និងស្តុក",
  "Desktop software": "កម្មវិធី desktop",
  "Mobile app": "កម្មវិធី mobile",
  "Enterprise networking": "បណ្តាញអាជីវកម្ម",
  "POS Inventory Management System": "ប្រព័ន្ធគ្រប់គ្រងស្តុក POS",
  "Restaurant Management System": "ប្រព័ន្ធគ្រប់គ្រងភោជនីយដ្ឋាន",
  "Mobile App UI and Screens": "UI និងអេក្រង់កម្មវិធី Mobile",
  "Hotel Cambodiana Network": "បណ្តាញ Hotel Cambodiana",
  "Point-of-sale and stock system with real-time inventory tracking, barcode support and secure management workflows.":
    "ប្រព័ន្ធលក់ និងស្តុក ដែលតាមដានស្តុកភ្លាមៗ គាំទ្រ barcode និងមានដំណើរការគ្រប់គ្រងសុវត្ថិភាព។",
  "Desktop app for orders, billing and table management, built with Windows Forms to streamline restaurant service.":
    "កម្មវិធី desktop សម្រាប់កុម្ម៉ង់ វិក្កយបត្រ និងគ្រប់គ្រងតុ បង្កើតដោយ Windows Forms ដើម្បីសម្រួលសេវាភោជនីយដ្ឋាន។",
  "Cross-platform interface screens and widgets built in Flutter for smooth, consistent user experiences.":
    "អេក្រង់ និង widget សម្រាប់ច្រើនប្រព័ន្ធ បង្កើតដោយ Flutter ដើម្បីបទពិសោធន៍អ្នកប្រើរលូន និងស្របគ្នា។",
  "Laravel API that powers mobile apps, with secure authentication, database endpoints and JSON responses.":
    "Laravel API សម្រាប់កម្មវិធី mobile មានការផ្ទៀងផ្ទាត់សុវត្ថិភាព endpoint មូលដ្ឋានទិន្នន័យ និង JSON response។",
  "Multi-VLAN campus network with MikroTik hotspot guest portal, load balancing and secure core routing switches.":
    "បណ្តាញ campus multi-VLAN ជាមួយ MikroTik hotspot guest portal, load balancing និង core routing switch សុវត្ថិភាព។",
  "View repository": "មើល repository",
  "Internship project at Hotel Cambodiana":
    "គម្រោងកម្មសិក្សានៅ Hotel Cambodiana",
  "What I built": "អ្វីដែលខ្ញុំបានបង្កើត",
  "Tech used": "បច្ចេកវិទ្យាដែលប្រើ",
  Close: "បិទ",
  "Real-time inventory tracking": "តាមដានស្តុកភ្លាមៗ",
  "Barcode support": "គាំទ្រ barcode",
  "Secure management workflows": "ដំណើរការគ្រប់គ្រងសុវត្ថិភាព",
  "Order taking": "ការទទួលកុម្ម៉ង់",
  Billing: "ការបង្កើតវិក្កយបត្រ",
  "Table management": "ការគ្រប់គ្រងតុ",
  "Cross-platform screens and widgets":
    "អេក្រង់ និង widget សម្រាប់ច្រើនប្រព័ន្ធ",
  "Smooth, consistent user experience": "បទពិសោធន៍អ្នកប្រើរលូន និងស្របគ្នា",
  "Secure authentication": "ការផ្ទៀងផ្ទាត់សុវត្ថិភាព",
  "Database endpoints": "endpoint មូលដ្ឋានទិន្នន័យ",
  "JSON responses for mobile apps": "JSON response សម្រាប់កម្មវិធី mobile",
  "Multi-VLAN campus network": "បណ្តាញ campus multi-VLAN",
  "MikroTik hotspot guest portal": "MikroTik hotspot guest portal",
  "Load balancing": "Load balancing",
  "Secure core routing switches": "core routing switch សុវត្ថិភាព",
  "Let’s work together": "ចូរសហការគ្នា",
  "I’m looking for opportunities in software development and network engineering. Send a message and I’ll reply.":
    "ខ្ញុំកំពុងស្វែងរកឱកាសក្នុងការអភិវឌ្ឍកម្មវិធី និងវិស្វកម្មបណ្តាញ។ ផ្ញើសារមក ខ្ញុំនឹងឆ្លើយតប។",
  "Contact details": "ព័ត៌មានទំនាក់ទំនង",
  Email: "អ៊ីមែល",
  "Your name": "ឈ្មោះរបស់អ្នក",
  "Your email": "អ៊ីមែលរបស់អ្នក",
  Subject: "ប្រធានបទ",
  Message: "សារ",
  "Send message": "ផ្ញើសារ",
  "This opens your email app with the message filled in.":
    "វានឹងបើកកម្មវិធីអ៊ីមែលរបស់អ្នក ជាមួយសារដែលបានបំពេញរួច។",
  "Have a project or an internship in mind?":
    "មានគម្រោង ឬកម្មសិក្សាក្នុងចិត្តទេ?",
  "Email me": "អ៊ីមែលមកខ្ញុំ",
  "Software developer and network engineer, studying Information Technology at Build Bright University.":
    "អ្នកអភិវឌ្ឍកម្មវិធី និងវិស្វករបណ្តាញ កំពុងសិក្សាព័ត៌មានវិទ្យានៅសាកលវិទ្យាល័យ Build Bright។",
  "Available for internships": "ត្រៀមសម្រាប់កម្មសិក្សា",
  Explore: "ស្វែងរក",
  Connect: "តភ្ជាប់",
  "Savann Chorn. All rights reserved.": "Savann Chorn។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  "Back to top": "ត្រឡប់ទៅលើ",
  "Software developer": "អ្នកអភិវឌ្ឍកម្មវិធី",
  "Network engineer": "វិស្វករបណ្តាញ",
  "Laravel and Flutter builder": "អ្នកបង្កើតកម្មវិធី Laravel និង Flutter",
  "MikroTik and Cisco configurator": "អ្នកកំណត់រចនាសម្ព័ន្ធ MikroTik និង Cisco",
  Home: "ទំព័រដើម",
  "Open to IT technician and junior roles":
    "ត្រៀមខ្លួនសម្រាប់តួនាទី IT Technician និងតួនាទីចាប់ផ្តើម",
  "IT student at Build Bright University who completed an IT internship at Hotel Cambodiana. I build software in C#, Java, Laravel and Flutter, and I set up and troubleshoot computers, Wi-Fi and networks.":
    "និស្សិត IT នៅសាកលវិទ្យាល័យ Build Bright ដែលបានបញ្ចប់កម្មសិក្សា IT នៅ Hotel Cambodiana។ ខ្ញុំបង្កើតកម្មវិធីដោយ C#, Java, Laravel និង Flutter ហើយតម្លើង និងដោះស្រាយបញ្ហាកុំព្យូទ័រ Wi-Fi និងបណ្តាញ។",
  "My coursework and personal projects cover software design, database architecture and computer networking. I completed a four-month IT internship at Hotel Cambodiana and short courses in C# and C/C++.":
    "មេរៀន និងគម្រោងផ្ទាល់ខ្លួនរបស់ខ្ញុំគ្របដណ្តប់លើការរចនាកម្មវិធី ស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ និងបណ្តាញកុំព្យូទ័រ។ ខ្ញុំបានបញ្ចប់កម្មសិក្សា IT រយៈពេល ៤ ខែនៅ Hotel Cambodiana និងវគ្គខ្លីៗផ្នែក C# និង C/C++។",
  "Months of IT internship": "ខែកម្មសិក្សា IT",
  "Languages and interests": "ភាសា និងចំណាប់អារម្មណ៍",
  "Khmer and English (medium level). I enjoy reading, research, listening to music and travelling.":
    "ខ្មែរ និងអង់គ្លេស (កម្រិតមធ្យម)។ ខ្ញុំចូលចិត្តអានសៀវភៅ ស្រាវជ្រាវ ស្តាប់តន្ត្រី និងធ្វើដំណើរ។",
  "2023 – Now": "២០២៣ – ឥឡូវ",
  "Feb 2025": "កុម្ភៈ ២០២៥",
  "Sep – Dec 2024": "កញ្ញា – ធ្នូ ២០២៤",
  "Short courses": "វគ្គខ្លី",
  Earlier: "មុននេះ",
  "Build Bright University": "សាកលវិទ្យាល័យ Build Bright",
  "Third-year student studying software design, databases and computer networking.":
    "និស្សិតឆ្នាំទី ៣ សិក្សាការរចនាកម្មវិធី មូលដ្ឋានទិន្នន័យ និងបណ្តាញកុំព្យូទ័រ។",
  "Letter of recommendation": "លិខិតបញ្ជាក់ និងណែនាំ",
  "Hotel Cambodiana’s Head of HR certified the internship and praised my work ethic, punctuality and keen interest in learning.":
    "ប្រធានធនធានមនុស្សនៃ Hotel Cambodiana បានបញ្ជាក់ពីកម្មសិក្សា ហើយកោតសរសើរការខិតខំ ភាពទាន់ពេល និងចំណាប់អារម្មណ៍ក្នុងការរៀនសូត្ររបស់ខ្ញុំ។",
  "IT intern at Hotel Cambodiana": "កម្មសិក្សាការី IT នៅ Hotel Cambodiana",
  "Finance Department · 5 Sep – 31 Dec 2024":
    "នាយកដ្ឋានហិរញ្ញវត្ថុ · ៥ កញ្ញា – ៣១ ធ្នូ ២០២៤",
  "First-line support for guests and staff, setting up computers, printers, IP phones and projectors, and helping maintain the PMS and POS systems.":
    "គាំទ្របច្ចេកទេសជួរមុខដល់ភ្ញៀវ និងបុគ្គលិក តម្លើងកុំព្យូទ័រ ម៉ាស៊ីនបោះពុម្ព ទូរស័ព្ទ IP និងម៉ាស៊ីនបញ្ចាំង ព្រមទាំងជួយថែទាំប្រព័ន្ធ PMS និង POS។",
  "C# and C/C++ courses": "វគ្គ C# និង C/C++",
  "Build Bright University · Etect Center":
    "សាកលវិទ្យាល័យ Build Bright · Etect Center",
  "Completed a short course in C# at Build Bright University and one in C/C++ at Etect Center.":
    "បានបញ្ចប់វគ្គខ្លីផ្នែក C# នៅសាកលវិទ្យាល័យ Build Bright និងវគ្គ C/C++ នៅ Etect Center។",
  "School education": "ការសិក្សានៅសាលា",
  "Kompong Thmar High School (2019–2023)":
    "វិទ្យាល័យ Kompong Thmar (២០១៩–២០២៣)",
  "Earlier studies at Kraya Secondary School (2016–2019) and Kraya Primary School (2011–2016).":
    "សិក្សាមុននេះនៅអនុវិទ្យាល័យ Kraya (២០១៦–២០១៩) និងបឋមសិក្សា Kraya (២០១១–២០១៦)។",
  "IT support": "IT Support",
  "Core programming (Etect Center)": "ការសរសេរកម្មវិធីមូលដ្ឋាន (Etect Center)",
  "Word, Excel and PowerPoint": "Word, Excel និង PowerPoint",
  "Windows setup": "ការតម្លើង Windows",
  "Install and configure Windows and apps":
    "តម្លើង និងកំណត់ Windows និងកម្មវិធី",
  "Printer setup": "ការតម្លើងម៉ាស៊ីនបោះពុម្ព",
  "Connect and share printers on a network":
    "តភ្ជាប់ និងចែករំលែកម៉ាស៊ីនបោះពុម្ពលើបណ្តាញ",
  "Hardware checks": "ការត្រួតពិនិត្យ Hardware",
  "Diagnose and fix computer hardware": "ពិនិត្យ និងជួសជុលហាតវែរកុំព្យូទ័រ",
  "Wi-Fi and internet": "Wi-Fi និងអ៊ីនធឺណិត",
  "Troubleshoot connections and access points":
    "ដោះស្រាយបញ្ហាការតភ្ជាប់ និង access point",
  "Email setup": "ការកំណត់អ៊ីមែល",
  "Set up and configure mail accounts": "កំណត់គណនីអ៊ីមែល",
  "PMS and POS support": "ការគាំទ្រ PMS និង POS",
  "Property Management and Point of Sale":
    "ប្រព័ន្ធ Property Management និង Point of Sale",
  "Applications, APIs and my IT internship. Code is on my GitHub.":
    "កម្មវិធី API និងកម្មសិក្សា IT របស់ខ្ញុំ។ កូដនៅលើ GitHub របស់ខ្ញុំ។",
  "Hotel Cambodiana IT Internship": "កម្មសិក្សា IT នៅ Hotel Cambodiana",
  "IT support work during my internship: computers, printers, IP phones, projectors, Wi-Fi, and PMS and POS maintenance.":
    "ការងារគាំទ្រ IT ក្នុងអំឡុងកម្មសិក្សា៖ កុំព្យូទ័រ ម៉ាស៊ីនបោះពុម្ព ទូរស័ព្ទ IP ម៉ាស៊ីនបញ្ចាំង Wi-Fi និងការថែទាំ PMS និង POS។",
  "Internship at Hotel Cambodiana": "កម្មសិក្សានៅ Hotel Cambodiana",
  "First-line support for guests and staff":
    "គាំទ្របច្ចេកទេសជួរមុខដល់ភ្ញៀវ និងបុគ្គលិក",
  "Computer, printer, IP phone and projector setup":
    "តម្លើងកុំព្យូទ័រ ម៉ាស៊ីនបោះពុម្ព ទូរស័ព្ទ IP និងម៉ាស៊ីនបញ្ចាំង",
  "PMS and POS system maintenance": "ថែទាំប្រព័ន្ធ PMS និង POS",
  "Software and hardware updates": "ធ្វើបច្ចុប្បន្នភាពកម្មវិធី និងហាតវែរ",
  Phone: "ទូរស័ព្ទ",
  Location: "ទីតាំង",
  "Phnom Penh, Cambodia": "ភ្នំពេញ កម្ពុជា",
  "References are available on request.": "អាចផ្តល់អ្នកធានាបានតាមការស្នើសុំ។",
  "IT technician and developer, studying Information Technology at Build Bright University.":
    "អ្នកបច្ចេកទេស IT និងអ្នកអភិវឌ្ឍ កំពុងសិក្សាព័ត៌មានវិទ្យានៅសាកលវិទ្យាល័យ Build Bright។",
  "IT technician": "អ្នកបច្ចេកទេស IT",
  "Network and Wi-Fi support": "គាំទ្របណ្តាញ និង Wi-Fi",
  "Information Technology (IT)": "ព័ត៌មានវិទ្យា (IT)",
  "Build Bright University · Information Technology":
    "សាកលវិទ្យាល័យ Build Bright · ព័ត៌មានវិទ្យា",
  "Download CV": "ទាញយក CV",
};
var lang = "en",
  orig = new WeakMap();
function T(s) {
  return lang === "km" && KM[s] ? KM[s] : s;
}
function walk() {
  var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        return p && p.closest && p.closest("script,style,code,#role,#modal")
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    }),
    n,
    L = [];
  while ((n = w.nextNode())) L.push(n);
  L.forEach(function (n) {
    var o = orig.get(n);
    if (o === undefined) {
      o = n.nodeValue;
      orig.set(n, o);
    }
    var k = o.trim();
    if (!k) return;
    var v =
      lang === "km" && KM[k]
        ? o.replace(k, function () {
            return KM[k];
          })
        : o;
    if (n.nodeValue !== v) n.nodeValue = v;
  });
}
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === "km" ? "km" : "en";
  walk();
  $("#q").placeholder = T("Search by name or technology");
  renderLang();
  ci = 0;
  del = false;
  if (rm) rl.textContent = T(roles[ri]);
  try {
    localStorage.setItem("sc-lang", l);
  } catch (x) {}
}
var FL = {
  en: '<svg class="flg" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" fill="#012169"/><path d="M0 0L24 24M24 0L0 24" stroke="#fff" stroke-width="4.5"/><path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" stroke-width="1.6"/><path d="M12 0V24M0 12H24" stroke="#fff" stroke-width="7"/><path d="M12 0V24M0 12H24" stroke="#C8102E" stroke-width="4"/></svg>',
  km: '<svg class="flg" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" fill="#032EA1"/><rect y="6" width="24" height="12" fill="#E00025"/><path fill="#fff" d="M6 15.5h12v1.2H6zM7.5 15.5V13h9v2.5zM9.5 13v-2.2h5V13zM10.8 10.8V8.6h2.4v2.2zM11.4 8.6 12 6.9l.6 1.7z"/></svg>',
};
function renderLang() {
  $("#flag").innerHTML = FL[lang];
  $("#lcode").textContent = lang === "km" ? "ខ្មែរ" : "EN";
  $("#lang").setAttribute(
    "aria-label",
    lang === "km" ? "Switch language to English" : "Switch language to Khmer",
  );
}
function G(s) {
  try {
    return Array.from(
      new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(s),
      function (x) {
        return x.segment;
      },
    );
  } catch (e) {
    return Array.from(s);
  }
}
var rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
var roles = [
    "IT technician",
    "Software developer",
    "Laravel and Flutter builder",
    "Network and Wi-Fi support",
  ],
  ri = 0,
  ci = 0,
  del = false,
  rl = $("#role");
function tick() {
  var g = G(T(roles[ri]));
  if (rm) {
    rl.textContent = g.join("");
    return;
  }
  ci += del ? -1 : 1;
  if (ci > g.length) ci = g.length;
  rl.textContent = g.slice(0, ci).join("");
  var d = del ? 35 : 75;
  if (!del && ci >= g.length) {
    del = true;
    d = 1400;
  } else if (del && ci <= 0) {
    del = false;
    ri = (ri + 1) % roles.length;
    d = 300;
  }
  setTimeout(tick, d);
}
tick();
var items = [
  "C# / .NET",
  "Java",
  "Laravel",
  "Flutter",
  "MySQL",
  "MikroTik",
  "Cisco CCNA",
  "FortiGate",
  "UniFi",
  "Docker",
  "Linux",
];
var mh = items
  .map(function (t) {
    return "<span>" + t + "</span>";
  })
  .join("");
$("#mq").innerHTML = mh + mh;
addEventListener(
  "scroll",
  function () {
    var h = document.documentElement;
    $("#prog").style.width =
      (scrollY / (h.scrollHeight - innerHeight)) * 100 + "%";
  },
  { passive: true },
);
document.querySelectorAll(".card,.proj,.sk,.row").forEach(function (c) {
  c.classList.add("spot");
  c.addEventListener("pointermove", function (e) {
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });
});
var ph = $("#photo");
if (ph && !rm) {
  var fr = ph.querySelector(".frame");
  ph.addEventListener("pointermove", function (e) {
    var r = ph.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    fr.style.transform =
      "rotateY(" + x * 12 + "deg) rotateX(" + -y * 12 + "deg)";
  });
  ph.addEventListener("pointerleave", function () {
    fr.style.transform = "";
  });
}

var DET = [
  {
    f: [
      "Real-time inventory tracking",
      "Barcode support",
      "Secure management workflows",
    ],
  },
  { f: ["Order taking", "Billing", "Table management"] },
  {
    f: [
      "Cross-platform screens and widgets",
      "Smooth, consistent user experience",
    ],
  },
  {
    f: [
      "Secure authentication",
      "Database endpoints",
      "JSON responses for mobile apps",
    ],
  },
  {
    f: [
      "First-line support for guests and staff",
      "Computer, printer, IP phone and projector setup",
      "PMS and POS system maintenance",
      "Software and hardware updates",
    ],
  },
]; /* optional: add img:"images/pos.webp" to any item to show a screenshot */
document.querySelectorAll(".proj").forEach(function (c, i) {
  c.dataset.i = i;
  c.tabIndex = 0;
  c.setAttribute("role", "button");
});
var mo = $("#modal"),
  lastF = null;
function openM(i) {
  var p = PR[i],
    d = DET[i];
  lastF = document.activeElement;
  var h = d.img
    ? '<img class="mimg" src="' + d.img + '" alt="">'
    : '<div class="cov"><code>' + esc(SN[i]) + "</code></div>";
  h +=
    '<div class="mb"><div class="mk">' +
    T(p[2]) +
    " · " +
    T(p[3]) +
    '</div><h3 id="mt">' +
    T(p[0]) +
    "</h3><p>" +
    T(p[1]) +
    "</p>";
  h +=
    "<h4>" +
    T("What I built") +
    "</h4><ul>" +
    d.f
      .map(function (x) {
        return "<li>" + T(x) + "</li>";
      })
      .join("") +
    "</ul>";
  h +=
    "<h4>" +
    T("Tech used") +
    '</h4><div class="tags">' +
    p[4]
      .map(function (t) {
        return "<i>" + t + "</i>";
      })
      .join("") +
    '</div><div class="macts">';
  if (p[5])
    h +=
      '<a class="btn pri" href="' +
      p[5] +
      '" target="_blank" rel="noopener">' +
      T("View repository") +
      "</a>";
  h += '<button class="btn" data-close>' + T("Close") + "</button></div></div>";
  $("#mc").innerHTML = h;
  $(".mbox").style.setProperty("--c", p[6]);
  mo.hidden = false;
  document.body.style.overflow = "hidden";
  $(".mx").focus();
}
function closeM() {
  mo.hidden = true;
  document.body.style.overflow = "";
  if (lastF) lastF.focus();
}
$("#pgrid").addEventListener("click", function (e) {
  var c = e.target.closest(".proj");
  if (c && !e.target.closest("a")) openM(+c.dataset.i);
});
$("#pgrid").addEventListener("keydown", function (e) {
  var c = e.target.closest(".proj");
  if (c && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openM(+c.dataset.i);
  }
});
mo.addEventListener("click", function (e) {
  if (e.target.closest("[data-close]")) closeM();
});
addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mo.hidden) closeM();
});
var navA = document.querySelectorAll("nav a"),
  secs = ["home", "about", "journey", "skills", "projects", "contact"].map(
    function (id) {
      return document.getElementById(id);
    },
  );
function spy() {
  var y = scrollY + 120,
    cur = "home";
  secs.forEach(function (s) {
    if (s && s.offsetTop <= y) cur = s.id;
  });
  navA.forEach(function (a) {
    a.classList.toggle("act", a.getAttribute("href") === "#" + cur);
  });
}
addEventListener("scroll", spy, { passive: true });
spy();
var tl = $("#tl"),
  tlf = $("#tlf");
function tlp() {
  var r = tl.getBoundingClientRect(),
    p = (innerHeight * 0.65 - r.top) / r.height;
  tlf.style.height = Math.max(0, Math.min(1, p)) * 100 + "%";
}
addEventListener("scroll", tlp, { passive: true });
tlp();
$("#lang").addEventListener("click", function () {
  setLang(lang === "en" ? "km" : "en");
});
var sl = "en";
try {
  sl = localStorage.getItem("sc-lang") || "en";
} catch (x) {}
if (sl === "km") setLang("km");
else renderLang();
