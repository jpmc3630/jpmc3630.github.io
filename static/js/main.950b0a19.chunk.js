(this["webpackJsonpjames-mcglone-portfolio"]=this["webpackJsonpjames-mcglone-portfolio"]||[]).push([[0],{44:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),c=a(12),r=a.n(c),i=(a(44),a(37)),o=a(8),l=a(7),h=a(33),j=a.p+"static/media/colors.1aa9d066.svg",d=a.p+"static/media/logo.6ce24c58.svg",b=a.p+"static/media/notepad.00bfae70.svg",m="jpmc3630",u=(l.h,l.d,h.a,l.l,l.a,l.k,l.j,l.e,l.g,["Background-Generator"]),x=[{image:j},{image:d},{image:b}],p={email:"jamespmcglone@gmail.com",linkedin:"https://www.linkedin.com/in/james-mcglone-44114054/",stackoverflow:"https://stackoverflow.com/users/12001877/james-mcglone",phone:"+61 421 44 22 36",hackerrank:"https://www.hackerrank.com/jamespmcglone",github:"https://github.com/jpmc3630/"},g=function(e){var t=e.theme,a=e.error,s="".concat(t," app-error d-flex flex-column min-vh-100 justify-content-center align-items-center");return Object(n.jsx)("div",{className:s,children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h1",{className:"",children:"Sorry, something went wrong."}),Object(n.jsxs)("p",{className:"lead",children:[Object(n.jsx)("span",{id:"error",children:"Error: "})," ",a]})]})})},f=function(e){var t=e.theme,a="".concat(t," d-flex flex-column min-vh-100 justify-content-center align-items-center");return Object(n.jsx)("div",{className:a,children:Object(n.jsx)("h1",{className:"loading",children:"Loading..."})})},O=a(9),v=a(58),w=a(60),y=a(59),k=a(22),N=function(e){var t=e.theme,a=e.setTheme,c=Object(s.useState)(!1),r=Object(o.a)(c,2),i=r[0],h=r[1],j=Object(s.useState)(Object(n.jsx)(k.a,{})),d=Object(o.a)(j,2),b=d[0],m=d[1];return Object(s.useEffect)((function(){m("dark"===t?Object(n.jsx)(k.a,{}):Object(n.jsx)(k.b,{}))}),[t]),Object(n.jsxs)(v.a,{className:t,bg:"dark",variant:"dark",fixed:"top",expand:"lg",expanded:i,children:[Object(n.jsx)(v.a.Brand,{href:"http://github.com/jpmc3630",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(l.f,{})}),Object(n.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return h(!i)}}),Object(n.jsxs)(v.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(w.a,{className:"h4",children:[Object(n.jsx)(w.a.Item,{className:"mr-3",children:Object(n.jsx)(O.Link,{className:"text-white",activeClass:"active",to:"home",spy:!0,smooth:!0,duration:350,offset:0,onClick:function(){return setTimeout((function(){h(!1)}),500)},children:"Home"})}),Object(n.jsx)(w.a.Item,{className:"mr-3",children:Object(n.jsx)(O.Link,{className:"text-white",activeClass:"active",to:"about",spy:!0,smooth:!0,duration:350,offset:0,onClick:function(){return setTimeout((function(){h(!1)}),500)},children:"About"})}),Object(n.jsx)(w.a.Item,{className:"mr-3",children:Object(n.jsx)(O.Link,{className:"text-white",activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:300,offset:0,onClick:function(){return setTimeout((function(){h(!1)}),500)},children:"Skills"})}),Object(n.jsx)(w.a.Item,{className:"mr-3",children:Object(n.jsx)(O.Link,{className:"text-white",activeClass:"active",to:"projects",spy:!0,smooth:!0,duration:350,offset:0,onClick:function(){return setTimeout((function(){h(!1)}),500)},children:"Projects"})}),Object(n.jsx)(w.a.Item,{className:"mr-3",children:Object(n.jsx)(O.Link,{className:"text-white",activeClass:"active",to:"contact",spy:!0,smooth:!0,duration:350,offset:0,onClick:function(){return setTimeout((function(){h(!1)}),500)},children:"Contact"})})]}),Object(n.jsx)(y.a,{className:"d-flex w-100 justify-content-end",children:Object(n.jsx)(y.a.Check,{id:"custom-switch",className:"text-white",type:"switch",label:b,onChange:function(){a("dark"===t?"light":"dark"),setTimeout((function(){h(!1)}),500)}})})]})]})},S=function(){return Object(s.useEffect)((function(){var e=document.getElementById("canvas"),t=e.getContext("2d");e.width=200,e.height=200,t.fillStyle="black";var a=!0,n=t.canvas.width/2,s=t.canvas.height/2,c=1,r=n,i=s,o=500;setInterval((function(){1==a?o+=1:o-=1,o>=1e3&&(a=!1),o<=800&&(a=!0),t.beginPath(),t.arc(n,s,80,0,2*Math.PI,!1),t.fillStyle="black",t.fill(),t.stroke(),t.closePath();for(var e=1;e<=255;e+=8)for(var l=88;l<=255;l+=8)for(var h=1;h<=3;h+=8){t.beginPath(),t.moveTo(r,i);var j=.1*o*c;r=n+(.1+h*j)*Math.cos(j),i=s+(.1+h*j)*Math.sin(2^-2*j),t.lineTo(r,i),t.strokeStyle="RGB(".concat(e,",").concat(l,",200)"),t.stroke(),t.closePath(),c>-50?c-=.001:c+=.001,c<.73&&(c=1)}}),100)}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("canvas",{id:"canvas",style:{}})})},T=function(e){var t=e.theme,a=e.setTheme,s=(e.githubUrl,e.name,e.link,e.bio,e.twitter,"".concat(t," d-flex flex-column min-vh-100 justify-content-center"));return Object(n.jsxs)("header",{id:"home",className:s,children:[Object(n.jsx)(N,{theme:t,setTheme:a}),Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"James McGlone"}),Object(n.jsx)("p",{children:"FULL STACK DEVELOPER"}),Object(n.jsx)("br",{}),Object(n.jsx)(S,{}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"I like to make things happen with code."}),Object(n.jsx)(O.Link,{className:"scroll",to:"about",smooth:!0,duration:750,children:Object(n.jsx)(l.b,{id:"scroll-down"})})]})]})},I=a.p+"static/media/final.1900e16c.png",P=function(e){var t=e.theme,a="".concat(t," d-flex flex-column min-vh-100 justify-content-center");return Object(n.jsx)("section",{id:"about",className:a,children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"About"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"d-flex",children:Object(n.jsxs)("div",{className:"container text-left",children:[Object(n.jsx)("img",{src:I,style:{width:"23%"},className:"img-fluid rounded float-left mr-3",alt:"James McGlone"}),Object(n.jsx)("p",{children:"I'm a passionate developer with a lifelong interest in web and software development. I have proven skills in full stack development right through from building front-end UI/UX, beautiful back-ends, optimizing database usage, and designing and implementing cost effective and reliable hosting solutions."}),Object(n.jsx)("p",{children:"I enjoy pushing myself to continually improve and expand my understanding of technologies across different stacks. I get a kick out of creating and maintaining well oiled machines."}),Object(n.jsx)("p",{children:"My comfort zone is working with modern javascript frameworks (React and Vue), and NodeJS or Laravel PHP back-ends on Linux machines. That said, I love to break out of my comfort zone and have an interest in everything computer science related and am happiest when I'm learning something new."}),Object(n.jsx)("p",{children:"Recognised as a productive, creative and resourceful problem solver with a strong ability to communicate effectively with clients and colleagues. When I'm not programming I'm usually working on projects in lighting, electronics, film making and synthesizers, or rehearsing for the occasional gig."})]})})]})})},C=function(e){var t=e.theme,a="".concat(t," d-flex flex-column min-vh-100 justify-content-center"),s={fontWeight:"400px",fontStyle:"normal",textDecoration:"none"};return Object(n.jsx)("section",{id:"skills",className:a,children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"Skills"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("table",{className:"tg",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Deliverables"})}),Object(n.jsxs)("td",{className:"tg-0lax",children:[Object(n.jsx)("span",{style:s,children:"SPA, PWA, Hybrid Web-Native iOS, tvOS & Android Apps, UX/UI, "}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{style:s,children:"Database Architecture, API Development, Scalable Hosting."})]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Languages"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"HTML, CSS, Javascript/Typescript, PHP, Bash, C#."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Frontend Frameworks"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"ReactJS, React Native, VueJS (2 & 3), Ionic Capacitor, Quasar."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Backend"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"NodeJS, Laravel, Ruby on Rails."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Database"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"SQL, SQLite, MongoDB, PostgreSQL, MongoDB, Redis."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Testing"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"PHPUnit, Dusk, Cypress."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Cloud"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"AWS, Microsoft AppCenter, Google Cloud, Heroku, Docker."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Project Management"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"Git, Github, Gitlab, Agile Methodology, Kanban, Scrum, Working remotely."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Other Technologies"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"Vuex/Pinia/Redux, MapBox/Leaflet, WebRTC, Websockets/SocketIO/Pusher."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Hardware"})}),Object(n.jsx)("td",{className:"tg-0lax",children:Object(n.jsx)("span",{style:s,children:"Arduino, Raspberry Pi."})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tg-baqh",children:Object(n.jsx)("span",{style:s,children:"Software"})}),Object(n.jsxs)("td",{className:"tg-0lax",children:[Object(n.jsx)("span",{style:s,children:"VScode, Android Studio, Xcode, Unity, Adobe Photoshop & Premiere Pro,"}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Davinci Resolve, Ableton Live, Audacity, QLC+ lighting controller."})]})]})]})})})]})})},L=function(e){var t=e.theme,a=e.githubUsername,c=Object(s.useState)(!0),r=Object(o.a)(c,2),i=(r[0],r[1]),l=Object(s.useState)(!1),h=Object(o.a)(l,2),j=(h[0],h[1]),d=Object(s.useState)(null),b=Object(o.a)(d,2),m=(b[0],b[1]),p=Object(s.useState)(null),g=Object(o.a)(p,2),f=(g[0],g[1]),O="https://api.github.com/users/".concat(a,"/repos");Object(s.useEffect)((function(){fetch(O).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw j(!0),i(!1),m(e.statusText),new Error(e.statusText)})).then((function(e){var t=!1;if(0!==u.length){var a={};e.forEach((function(e,t){a[e.name]=t})),t=u.every((function(e){return void 0!==a[e]}))}if(t){var n=e.filter((function(e){return u.includes(e.name)}));if(x.length===u.length)for(var s=0;s<x.length;s++)n[s].imageInfo=x[s];f(n),i(!1)}else f(e),i(!1)})).catch((function(e){return console.log(e)}))}),[O]);var v="".concat(t," d-flex flex-column min-vh-100 justify-content-center align-items-center text-center");return Object(n.jsxs)("section",{id:"projects",className:v,children:[Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"Projects"}),Object(n.jsx)("p",{children:"These are a few personal projects I've been working on recently."})]}),Object(n.jsxs)("div",{className:"container text-left",children:[Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{children:"Multiplayer Quiz-Night Game in Unity Engine. April 2022."}),Object(n.jsx)("p",{children:"Last year with React Native I made a prototype for a multiplayer tvOS game based around a trivia game show (think The Chase) where players can use their phones as controllers to race each other to select multiple choice trivia questions."}),Object(n.jsx)("p",{children:"I figured this was the perfect project to use to learn Unity and C#. This time round I decided to use a Laravel backend and Pusher for managing websockets."}),Object(n.jsx)("p",{children:"The project picked up a few new features along the way, such as secure sockets, user accounts to ensure you are never asked the same question twice, menus, music and sound effects. But, it's still a long way off completion! I'm hoping to get some free time to return to this project to improve the game visually with some animations and stuff, which was kind of the point of using Unity, really!"}),Object(n.jsx)("p",{children:"It is a short-mid term goal of mine to get this game into the app stores!"}),Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{children:"Demoscene Visualisations. May 2021."}),Object(n.jsx)("p",{children:"Recently while working on a coding challenge that involved rendering colour palletes at certain bit-depths, I stumbled onto some striking pattern renders and decided to make a browser based 'Demo' scene in javascript. I came up with a handful of scenes and started working on some logic to build them into one piece of art. It's a bit of light-hearted fun demonstrating the power of HTML5 canvas."}),Object(n.jsx)("a",{href:"https://jpmc3630.github.io/funfunfun/",target:"_blank",rel:"noreferrer",children:"Live Demo"}),Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{children:"Map Tile Server hosted on AWS. May 2021."}),Object(n.jsx)("p",{children:"Recently a friend came to me with an emerging dilemma. They had built a data visualisation project and released it to Reddit. It then spread to facebook and went viral. After just 2 hours of going live, the app was getting around ten thousand visitors per hour. The problem was that the data was visualised on a map, which was built using the MapBox SDK, and relied on the MapBox API to serve the map tiles. The site had already exceeded the 50'000 free map tiles per month, and was chewing through about 100'000 tile requests per hour, at a cost of $5 per ten thousand. The app was a free data project and generated no revenue - there was no budget - and my friend thought he would have to close project down right as it was in it's prime."}),Object(n.jsx)("p",{children:"I wrote a bash script that automated spinning up a map server instance. It installed a docker image of an open source tile server, fetched appropriate maps for our region, configured Nginx and installed an SSL certificate. The servers were deployed on an AWS cluster of EC2 instances, and within a few hours a solution was up and running that cost next to nothing. We were serving beautiful vector maps, super fast, and had raster maps as fall back for older mobile devices."}),Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{children:"Interactive LED screen at arts festival. April 2021."}),Object(n.jsx)("p",{children:"This was an interactive LED screen for an arts festival at regional Burning Man event. The concept was to distribute QR codes around the festival, to give people access to a web interface that allowed them to post messages in real time to a giant LED screen. This turned out to be a pretty complicated project, and about as full stack as it gets."}),Object(n.jsx)("p",{children:"Firstly it involved building a controller to drive a giant LED matrix I bought auction, by modifying a community driven C++ library, and running it on a Raspberry Pi. It took a lot of hacking to get the HUB75A standard LED driver library to work with our screen. Including building a wiring harness, a custom multiplexer to get the screen to display correctly, and a custom pixel mapper to use the screen in the appropriate orientation! I wrote a NodeJS program on the Pi to connect to a web server and maintain a websocket connection and handle the communications between the web interface and the hardware running off the Pi."}),Object(n.jsx)("p",{children:"So there were three parts, the code running on the Pi, the web server, and the web interface. The screen was connected via a Telstra pre-paid sim card (with no addressable IP), in regional WA, outdoors, in weather, running off a generator. The project was a success, it generated a lot of public interest, had hundreds of messges posted and was considered a valuable contribution to the arts festival."}),Object(n.jsx)("a",{href:"https://github.com/jpmc3630/bs-screen",target:"_blank",rel:"noreferrer",children:"Raspberry Pi NodeJS Repo"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://github.com/jpmc3630/blazing-marquee",target:"_blank",rel:"noreferrer",children:"NodeJS Webserver and ReactJS Web Interface Repo"}),Object(n.jsx)("hr",{}),Object(n.jsx)("h5",{children:"Mutliplayer online tvOS/mobile trivia game. February 2021."}),Object(n.jsx)("p",{children:"This is a multiplayer party game that allows players to use their own phones and mobile internet connections via browser to connect to a game created by a tvOS app. The game is intialised by the TV and a code is shown on the screen, which users enter into a web site, and join the game. I was exploring the options for Apple/AndroidTV and built a prototype using NodeJS for the game server, React Native for tvOS for the TV part, and ReactJS for the website players use to connect to the game and play along asnwering the questions displayed on the TV."}),Object(n.jsx)("p",{children:"I got this to working prototype stage, but have decided to remake the tvOS part using Unity game engine. The main reason for this, is that at the end of the day, the game lacks visual charm. The trivia aspect is fun, but I didn't see it as worthwile to spend many hours trying to jazz up a fairly bland React-Native interface on a tv screen! I decided it would be a more fruitful pursuit to build the game in Unity, as it would ultimately look alot better, future proof my code base to a large extent, and also make it cross platform with some minimal changes for input controls. This is an ongoing project."}),Object(n.jsx)("a",{href:"https://github.com/jpmc3630/tvos-trivia",target:"_blank",rel:"noreferrer",children:"tvOS App Repo"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://github.com/jpmc3630/tvtrivia/",target:"_blank",rel:"noreferrer",children:"NodeJS Game Server and ReactJS Webserver Repo"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})},R=a(36),A="mailto:".concat(p.email),M="tel:".concat(p.phone),E=function(e){var t=e.theme,a=(e.avatar,e.name),s="".concat(t," d-flex flex-column min-vh-100 justify-content-center");return Object(n.jsxs)("section",{id:"contact",className:s,children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{children:"Contact"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsx)("img",{src:I,alt:a})}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsx)("h3",{children:a}),p.email&&""!==p.email?Object(n.jsxs)("a",{href:A,children:["Email ",Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:p.email})]}):"",Object(n.jsx)("br",{}),p.phone&&""!==p.phone?Object(n.jsxs)("a",{href:M,children:["Phone ",Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:p.phone})]}):"",p.email&&""!==p.email||p.phone&&""!==p.phone?"":Object(n.jsx)("a",{href:p.mailChimp,target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("button",{type:"button",className:"btn btn-secondary btn-lg",children:[Object(n.jsx)(R.a,{})," Contact me"]})}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:p.linkedin,target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:p.github,target:"_blank",rel:"noreferrer",children:"Github"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:p.stackoverflow,target:"_blank",rel:"noreferrer",children:"Stack Overflow"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:p.hackerrank,target:"_blank",rel:"noreferrer",children:"Hacker Rank"})]})]}),Object(n.jsx)(O.Link,{className:"scroll",to:"home",smooth:!0,duration:750,children:Object(n.jsx)(l.c,{id:"scroll-up"})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})},D=function(e){e.githubUrl,e.link,e.twitter;return Object(n.jsxs)("footer",{className:"d-flex flex-column justify-content-center align-items-center bg-dark",children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{className:"text-muted text-center",children:"\xa9 2020 James McGlone"})]})},U=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),l=Object(o.a)(r,2),h=l[0],j=l[1],d=Object(s.useState)(null),b=Object(o.a)(d,2),u=b[0],x=b[1],p=Object(s.useState)(null),O=Object(o.a)(p,2),v=O[0],w=O[1],y=Object(s.useState)("dark"),k=Object(o.a)(y,2),N=k[0],S=k[1],I="https://api.github.com/users/".concat(m);if(Object(s.useEffect)((function(){fetch(I).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw j(!0),c(!1),x(e.statusText),new Error(e.statusText)})).then((function(e){w(e),document.title=e.name,c(!1)})).catch((function(e){return console.log(e)}))}),[I]),a)return Object(n.jsx)(f,{theme:N});if(h)return Object(n.jsx)(g,{theme:N,error:u});var R={avatar:v.avatar_url,githubUrl:v.html_url,name:v.name,link:v.blog,bio:v.bio,twitter:v.twitter_username};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(T,Object(i.a)({theme:N,setTheme:S},R)),Object(n.jsxs)("main",{children:[Object(n.jsx)(P,{theme:N}),Object(n.jsx)(C,{theme:N}),Object(n.jsx)(L,{theme:N,githubUsername:m}),Object(n.jsx)(E,{theme:N,avatar:R.avatar,name:R.name})]}),Object(n.jsx)(D,{githubUrl:R.githubUrl,link:R.link,twitter:R.twitter})]})};r.a.render(Object(n.jsx)(U,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.950b0a19.chunk.js.map