// EVENT DATA
// Fallback list. The live list is the EVENT CALENDAR tab, read through FEED_URL below.
const BUILT_IN_EVENTS = [
  {id:"EC-001",category:"WEBINAR",title:"LinkedIn Live",role:"Hosting",status:"Confirmed",start_date:"2026-10-06",end_date:"",start_time:"10:00 AM",end_time:"",time_zone:"ET",place:"Online",link:"",note:"",layer:"Atlas",ops_tab:"Sheet: ATLAS RELATIONSHIPS <> Tab: APPEARANCE LOG",month_hint:""},
  {id:"EC-002",category:"FILMING",title:"Capture session with Shark Group",role:"Filming",status:"Confirmed",start_date:"2026-10-06",end_date:"",start_time:"12:15 PM",end_time:"",time_zone:"ET",place:"New York",link:"",note:"",layer:"Atlas",month_hint:""},
  {id:"EC-003",category:"EVENT",title:"A Chance In Life gala",role:"Honoree",status:"Confirmed",start_date:"2026-10-06",end_date:"",start_time:"6:00 PM",end_time:"",time_zone:"ET",place:"New York",link:"https://achanceinlife.org/events/nyg2026/",note:"",layer:"Atlas",ops_tab:"Sheet: Master Sheet <> Tab: EVENTS FALL 2026",month_hint:""},
  {id:"EC-004",category:"EVENT",title:"DELIVER America",role:"Speaking",status:"Confirmed",start_date:"2026-10-07",end_date:"2026-10-08",start_time:"",end_time:"",time_zone:"",place:"Las Vegas",link:"https://www.deliver.events/america/deliver-america-2026",note:"Las Vegas supply chain event. Kerim speaks and Atlas is on the event floor on October 8.",layer:"Atlas",ops_tab:"Sheet: Master Sheet <> Tab: EVENTS FALL 2026",month_hint:"",floor_dates:["2026-10-08"]},
  {id:"EC-005",category:"INTERVIEW",title:"Bloomberg, by dial in",role:"Guest",status:"To be confirmed",start_date:"2026-10-08",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Remote",link:"",note:"Being arranged.",layer:"Atlas",month_hint:""},
  {id:"EC-006",category:"WEBINAR",title:"ADI: People, Process and Innovation. Building a Resilient Supply Chain",role:"Speaking",status:"Confirmed",start_date:"2026-10-12",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"American Distilling Institute. Hour to be confirmed.",layer:"Atlas",month_hint:""},
  {id:"EC-007",category:"PODCAST",title:"Podcast with Nadia Russo and Chris Guerrera",role:"Guest",status:"Confirmed",start_date:"2026-10-13",end_date:"",start_time:"",end_time:"",time_zone:"",place:"",link:"",note:"Hour to be confirmed.",layer:"Atlas",month_hint:""},
  {id:"EC-008",category:"INTERVIEW",title:"Atlas Verified with Dylan",role:"Guest",status:"Confirmed",start_date:"2026-10-13",end_date:"",start_time:"2:00 PM",end_time:"",time_zone:"ET",place:"",link:"",note:"",layer:"Atlas",month_hint:""},
  {id:"EC-009",category:"WEBINAR",title:"Global Chamber: The New Global Economy",role:"Speaking",status:"Confirmed",start_date:"2026-10-21",end_date:"",start_time:"10:00 AM",end_time:"11:00 AM",time_zone:"ET",place:"Online",link:"",note:"Session 1 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:""},
  {id:"EC-010",category:"FILMING",title:"Educational Series 1 filming",role:"Filming",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"",link:"",note:"Second half of October.",layer:"Atlas",month_hint:"2026-10"},
  {id:"EC-011",category:"WEBINAR",title:"LinkedIn Live",role:"Hosting",status:"Confirmed",start_date:"2026-11-03",end_date:"",start_time:"10:00 AM",end_time:"",time_zone:"ET",place:"Online",link:"",note:"",layer:"Atlas",ops_tab:"Sheet: ATLAS RELATIONSHIPS <> Tab: APPEARANCE LOG",month_hint:""},
  {id:"EC-012",category:"FILMING",title:"China: Educational Series 2 filming and team visit",role:"Filming",status:"Confirmed",start_date:"2026-11-16",end_date:"2026-11-20",start_time:"",end_time:"",time_zone:"",place:"China",link:"",note:"",layer:"Atlas",month_hint:"",floor_dates:["2026-11-16","2026-11-17","2026-11-18","2026-11-19","2026-11-20"]},
  {id:"EC-013",category:"WEBINAR",title:"Global Chamber: The Power of Global Connections",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 2 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2026-11"},
  {id:"EC-014",category:"WEBINAR",title:"Global Chamber: From Local Business to Global Opportunity",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 3 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2026-12"},
  {id:"EC-015",category:"WEBINAR",title:"Global Chamber: The Human Side of Globalization",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 4 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-01"},
  {id:"EC-016",category:"WEBINAR",title:"Global Chamber: Navigating Uncertainty in Global Business",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 5 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-02"},
  {id:"EC-017",category:"WEBINAR",title:"Global Chamber: Building Resilient Businesses in a Changing World",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 6 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-03"},
  {id:"EC-018",category:"WEBINAR",title:"Global Chamber: The Future of Global Supply Chains",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 7 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-04"},
  {id:"EC-019",category:"WEBINAR",title:"Global Chamber: AI and the Future of Global Business",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 8 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-05"},
  {id:"EC-020",category:"WEBINAR",title:"Global Chamber: Sustainability, Innovation and the Global Marketplace",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 9 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-06"},
  {id:"EC-021",category:"WEBINAR",title:"Global Chamber: What Comes Next. Preparing for the Next Decade of Global Business",role:"Speaking",status:"To be confirmed",start_date:"",end_date:"",start_time:"",end_time:"",time_zone:"",place:"Online",link:"",note:"Session 10 of 10.",layer:"Atlas",ops_tab:"Sheet: ATLAS GLOBAL CHAMBER <> Tab: KERIM WEBINARS",month_hint:"2027-07"}
];

// THE ONE SPOT. Address of the read only events feed. Empty means: show the list above.
const FEED_URL="";
const SAVED_KEY="atlas-event-calendar-saved-v1";
const DATE_RE=/^\d{4}-\d{2}-\d{2}$/;
const MONTH_RE=/^\d{4}-\d{2}$/;

function text(value,max){ return (value===undefined||value===null?"":String(value)).trim().slice(0,max); }
function realDate(value){
  if(!DATE_RE.test(value)) return "";
  const [year,month,day]=value.split("-").map(Number);
  const date=new Date(year,month-1,day);
  return date.getFullYear()===year&&date.getMonth()===month-1&&date.getDate()===day?value:"";
}
function cleanEvent(raw){
  if(!raw||typeof raw!=="object") return null;
  const event={
    id:text(raw.id,40),category:text(raw.category,24).toUpperCase(),title:text(raw.title,180),
    role:text(raw.role,40),status:text(raw.status,40),
    start_date:realDate(text(raw.start_date,10)),end_date:realDate(text(raw.end_date,10)),
    start_time:text(raw.start_time,20),end_time:text(raw.end_time,20),time_zone:text(raw.time_zone,12),
    place:text(raw.place,80),month_hint:text(raw.month_hint,7),link:text(raw.link,400),
    ops_tab:text(raw.ops_tab,160),guidance:text(raw.guidance||raw.note,900),guidance_from:text(raw.guidance_from,20),
    layer:text(raw.layer,30)||"Atlas",note:""
  };
  if(!event.id||!event.title||!event.category) return null;
  if(!MONTH_RE.test(event.month_hint)) event.month_hint="";
  if(!event.start_date&&!event.month_hint) return null;
  if(!event.start_date||event.end_date<=event.start_date) event.end_date="";
  if(!event.link.startsWith("https://")) event.link="";
  const floor=Array.isArray(raw.floor_dates)?raw.floor_dates:[];
  event.floor_dates=floor.map(value=>realDate(text(value,10))).filter(Boolean).slice(0,40);
  return event;
}
function cleanList(list){
  if(!Array.isArray(list)) return [];
  const seen=new Set();
  return list.map(cleanEvent).filter(event=>{
    if(!event||seen.has(event.id)) return false;
    seen.add(event.id);
    return true;
  });
}
function readSaved(){
  try{
    const data=JSON.parse(localStorage.getItem(SAVED_KEY)||"null");
    const list=cleanList(data&&data.events);
    return list.length?{events:list,savedAt:text(data.savedAt,30)}:null;
  }catch(error){ return null; }
}
function writeSaved(list){
  try{ localStorage.setItem(SAVED_KEY,JSON.stringify({events:list,savedAt:new Date().toISOString()})); }catch(error){}
}
const savedCopy=FEED_URL?readSaved():null;
function getEventData(){ return savedCopy?savedCopy.events:cleanList(BUILT_IN_EVENTS); }

const CATEGORY_COLORS={EVENT:"#e76f51",WEBINAR:"#3f8dcc",PODCAST:"#7658a8",INTERVIEW:"#00a0a8",SPEAKING:"#be7b19",FILMING:"#b44667"};
const now=new Date();
const TODAY=new Date(now.getFullYear(),now.getMonth(),now.getDate());
const MONTH_COUNT=6;
const preferredFilters=["WEBINAR","FILMING","EVENT","PODCAST","INTERVIEW"];
let events=[];
let categories=[];
let filterCategories=[];
let activeCategory="ALL";
function setEvents(list){
  events=list;
  categories=[...new Set(events.map(event=>event.category))];
  filterCategories=[...preferredFilters.filter(category=>categories.includes(category)),...categories.filter(category=>!preferredFilters.includes(category)),"GLOBAL CHAMBER"];
  if(activeCategory!=="ALL"&&!filterCategories.includes(activeCategory)) activeCategory="ALL";
}
setEvents(getEventData());
let selectedMonthIndex=0;
let currentView=window.matchMedia("(max-width: 760px)").matches?"list":"month";
let deferredInstallPrompt=null;

const content=document.getElementById("calendarContent");
const dialog=document.getElementById("detailDialog");
const detailContent=document.getElementById("detailContent");

function el(tag,className,text){
  const node=document.createElement(tag);
  if(className) node.className=className;
  if(text!==undefined) node.textContent=text;
  return node;
}
function iso(date){ return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`; }
function parseDate(value){ const [year,month,day]=value.split("-").map(Number); return new Date(year,month-1,day); }
function monthKey(date){ return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}`; }
function monthName(date,short=false){ return date.toLocaleDateString("en-US",{month:short?"short":"long",year:"numeric"}); }
function dateLabel(event){
  if(!event.start_date) return "Date to be confirmed";
  const start=parseDate(event.start_date);
  const first=start.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});
  if(!event.end_date) return first;
  const end=parseDate(event.end_date);
  return `${first} to ${end.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}`;
}
function timeLabel(event){
  if(!event.start_time) return "";
  const range=event.end_time?`${event.start_time} to ${event.end_time}`:event.start_time;
  return event.time_zone?`${range} ${event.time_zone}`:range;
}
function colorFor(category){ return CATEGORY_COLORS[category]||"#55706d"; }
function filterLabel(category){ return category==="GLOBAL CHAMBER"?"Global Chamber":category[0]+category.slice(1).toLowerCase(); }
function isGlobalChamber(event){ return event.title.toLowerCase().startsWith("global chamber:"); }
function filteredEvents(){
  if(activeCategory==="ALL") return events;
  if(activeCategory==="GLOBAL CHAMBER") return events.filter(isGlobalChamber);
  return events.filter(event=>event.category===activeCategory&&!isGlobalChamber(event));
}
function inEventRange(event,date){
  if(!event.start_date) return false;
  const value=iso(date);
  return value>=event.start_date&&value<=(event.end_date||event.start_date);
}
function monthWindow(){ return Array.from({length:MONTH_COUNT},(_,i)=>new Date(TODAY.getFullYear(),TODAY.getMonth()+i,1)); }

function renderNextUp(){
  const confirmed=events.filter(event=>event.status==="Confirmed"&&event.start_date&&parseDate(event.end_date||event.start_date)>=TODAY).sort((a,b)=>a.start_date.localeCompare(b.start_date));
  const next=confirmed[0];
  const card=document.getElementById("nextUp");
  card.replaceChildren();
  const kicker=el("div","next-kicker");
  kicker.append(el("span","","NEXT UP"));
  if(!next){
    kicker.append(el("span","","CHECK BACK SOON"));
    card.append(kicker,el("h2","","Nothing confirmed ahead"),el("div","next-meta","The six-month calendar remains available below."));
    return;
  }
  const start=parseDate(next.start_date);
  const end=parseDate(next.end_date||next.start_date);
  const days=Math.round((parseDate(next.start_date)-TODAY)/86400000);
  const underWay=start<TODAY&&end>=TODAY;
  const timing=underWay?"UNDER WAY":days===0?"TODAY":days===1?"TOMORROW":`${days} DAYS AWAY`;
  kicker.append(el("span","",timing));
  const title=el("h2","",next.title);
  const meta=el("div","next-meta");
  [dateLabel(next),timeLabel(next),next.place].filter(Boolean).forEach(value=>meta.append(el("span","",value)));
  card.append(kicker,title,meta);
}

function renderFilters(){
  const holder=document.getElementById("filterChips");
  holder.replaceChildren();
  ["ALL",...filterCategories].forEach(category=>{
    const button=el("button",category===activeCategory?"active":"",category==="ALL"?"All":filterLabel(category));
    button.type="button";
    button.addEventListener("click",()=>{activeCategory=category;renderFilters();renderCalendar();requestAnimationFrame(()=>jumpToMonth(selectedMonthIndex,false));});
    holder.append(button);
  });
  const legend=document.getElementById("legend");
  legend.replaceChildren();
  filterCategories.forEach(category=>{
    const item=el("span","legend-item");
    item.style.setProperty("--category",category==="GLOBAL CHAMBER"?"#f26a21":colorFor(category));
    item.append(el("i","legend-swatch"),el("span","",filterLabel(category)));
    legend.append(item);
  });
}

function makeEventButton(event,className){
  const button=el("button",className);
  button.type="button";
  button.style.setProperty("--category",isGlobalChamber(event)?"#f26a21":colorFor(event.category));
  button.addEventListener("click",()=>openDetails(event));
  return button;
}

function hasFloorPresence(event,dateValue=""){
  if(event.floor_dates&&event.floor_dates.length) return dateValue?event.floor_dates.includes(dateValue):true;
  return false;
}

function floorLabel(event){
  if(!event.floor_dates||!event.floor_dates.length) return "EVENT FLOOR";
  const dates=event.floor_dates.map(value=>parseDate(value).toLocaleDateString("en-US",{month:"short",day:"numeric"}).toUpperCase()).join(", ");
  return `EVENT FLOOR · ${dates}`;
}

function makeFloorTag(label="EVENT FLOOR"){
  const tag=el("span","floor-tag");
  const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("viewBox","0 0 18 18");
  svg.setAttribute("aria-hidden","true");
  [[6,2,6,9],[12,2,12,9],[6,9,4,16],[12,9,14,16],[2.5,16,6,16],[12,16,15.5,16]].forEach(points=>{
    const line=document.createElementNS("http://www.w3.org/2000/svg","path");
    line.setAttribute("d",`M${points[0]} ${points[1]} L${points[2]} ${points[3]}`);
    svg.append(line);
  });
  tag.append(svg,el("span","",label));
  return tag;
}

function renderMonthView(){
  const stack=el("div","months-stack");
  monthWindow().forEach((month,monthIndex)=>{
    const section=el("section","month-section");
    section.dataset.monthIndex=String(monthIndex);
    section.id=`month-${monthKey(month)}`;
    const heading=el("div","month-heading");
    const appearanceCount=events.filter(e=>(e.start_date||e.month_hint).startsWith(monthKey(month))).length;
    heading.append(el("h2","",monthName(month)),el("span","",`${appearanceCount} ${appearanceCount===1?"APPEARANCE":"APPEARANCES"}`));
    section.append(heading);
    const weekdays=el("div","weekday-row");
    ["SUN","MON","TUE","WED","THU","FRI","SAT"].forEach(day=>weekdays.append(el("span","",day)));
    section.append(weekdays);
    const grid=el("div","month-grid");
    const first=new Date(month.getFullYear(),month.getMonth(),1);
    const gridStart=new Date(month.getFullYear(),month.getMonth(),1-first.getDay());
    const last=new Date(month.getFullYear(),month.getMonth()+1,0);
    const total=Math.ceil((first.getDay()+last.getDate())/7)*7;
    for(let w=0;w<total/7;w++){
      const row=el("div","week-row");
      for(let d=0;d<7;d++){
        const date=new Date(gridStart.getFullYear(),gridStart.getMonth(),gridStart.getDate()+w*7+d);
        const classes=["day-cell"];
        if(date.getMonth()!==month.getMonth()) classes.push("outside");
        if(date<TODAY) classes.push("past");
        if(iso(date)===iso(TODAY)) classes.push("today");
        if(filteredEvents().some(event=>inEventRange(event,date))) classes.push("has-events");
        const cell=el("div",classes.join(" "));
        const number=el("div","day-number");
        number.append(el("span","",String(date.getDate())));
        if(iso(date)===iso(TODAY)) number.append(el("span","today-label","TODAY"));
        cell.append(number);
        filteredEvents().filter(event=>inEventRange(event,date)).forEach(event=>{
          const classes=["calendar-event"];
          if(event.start_date!==iso(date)) classes.push("continues-left");
          if((event.end_date||event.start_date)!==iso(date)) classes.push("continues-right");
          const button=makeEventButton(event,classes.join(" "));
          button.append(el("span","",event.title),el("small","",event.status));
          if(hasFloorPresence(event,iso(date))) button.append(makeFloorTag());
          cell.append(button);
        });
        row.append(cell);
      }
      grid.append(row);
    }
    section.append(grid);
    const tbc=filteredEvents().filter(event=>!event.start_date&&event.month_hint===monthKey(month));
    if(tbc.length){
      const strip=el("div","tbc-strip");
      const stripTitle=el("div","tbc-title");
      stripTitle.append(el("span","","DATE TO BE CONFIRMED"),el("span","",String(tbc.length)));
      const items=el("div","tbc-items");
      tbc.forEach(event=>{
        const button=makeEventButton(event,"tbc-chip");
        button.append(el("span","",event.title),el("small","",`${event.role} · ${event.status}`));
        items.append(button);
      });
      strip.append(stripTitle,items);
      section.append(strip);
    }
    stack.append(section);
  });
  content.append(stack);
}

function renderListView(){
  const agenda=el("div","agenda");
  monthWindow().forEach((month,monthIndex)=>{
    const section=el("section","agenda-month");
    section.dataset.monthIndex=String(monthIndex);
    section.id=`month-${monthKey(month)}`;
    section.append(el("h2","",monthName(month)));
    const items=el("div","agenda-items");
    const monthEvents=filteredEvents().filter(event=>(event.start_date||event.month_hint).startsWith(monthKey(month))).sort((a,b)=>(a.start_date||"9999").localeCompare(b.start_date||"9999"));
    if(!monthEvents.length) items.append(el("div","empty-month","No appearances currently listed."));
    monthEvents.forEach(event=>{
      const button=makeEventButton(event,"agenda-item");
      const date=el("div","agenda-date",event.start_date?parseDate(event.start_date).toLocaleDateString("en-US",{month:"short",day:"numeric"}):"TBC");
      const dot=el("i","agenda-dot");
      const copy=el("div","agenda-copy");
      if(!event.start_date) copy.append(el("span","tbc-list-label","DATE TO BE CONFIRMED"));
      copy.append(el("strong","",event.title));
      const details=[event.role,timeLabel(event),event.place].filter(Boolean).join(" · ");
      if(details) copy.append(el("small","",details));
      if(hasFloorPresence(event)) copy.append(makeFloorTag(floorLabel(event)));
      button.append(date,dot,copy,el("span","status-pill",event.status));
      items.append(button);
    });
    section.append(items);
    agenda.append(section);
  });
  content.append(agenda);
}

function renderCalendar(){
  content.replaceChildren();
  const month=monthWindow()[selectedMonthIndex];
  document.getElementById("selectedMonthLabel").textContent=monthName(month);
  document.getElementById("previousMonth").disabled=selectedMonthIndex===0;
  document.getElementById("nextMonth").disabled=selectedMonthIndex===MONTH_COUNT-1;
  document.querySelectorAll("[data-view]").forEach(button=>button.classList.toggle("active",button.dataset.view===currentView));
  currentView==="month"?renderMonthView():renderListView();
}

function updateMonthControls(){
  const month=monthWindow()[selectedMonthIndex];
  document.getElementById("selectedMonthLabel").textContent=monthName(month);
  document.getElementById("previousMonth").disabled=selectedMonthIndex===0;
  document.getElementById("nextMonth").disabled=selectedMonthIndex===MONTH_COUNT-1;
}

function jumpToMonth(index,smooth=true){
  selectedMonthIndex=Math.max(0,Math.min(MONTH_COUNT-1,index));
  updateMonthControls();
  const target=content.querySelector(`[data-month-index="${selectedMonthIndex}"]`);
  if(target) target.scrollIntoView({behavior:smooth?"smooth":"auto",block:"start"});
}

let scrollFrame=0;
function syncMonthFromScroll(){
  scrollFrame=0;
  const sections=[...content.querySelectorAll("[data-month-index]")];
  if(!sections.length) return;
  const anchor=window.innerWidth<=760?150:145;
  let index=0;
  sections.forEach(section=>{if(section.getBoundingClientRect().top<=anchor) index=Number(section.dataset.monthIndex);});
  if(index!==selectedMonthIndex){selectedMonthIndex=index;updateMonthControls();}
}

function addDetailRow(list,label,value,isLink=false,linkText=""){
  if(!value) return;
  if(isLink&&!value.startsWith("https://")) return;
  list.append(el("dt","",label));
  const dd=el("dd");
  if(isLink){ const anchor=el("a","",linkText||value);anchor.href=value;anchor.target="_blank";anchor.rel="noreferrer";dd.append(anchor); }
  else dd.textContent=value;
  list.append(dd);
}

function openDetails(event){
  detailContent.replaceChildren();
  const layout=el("div","detail-layout");
  const main=el("div","detail-main");
  const side=el("aside","detail-side");
  const category=el("p","detail-category",event.category);
  category.style.setProperty("--category",colorFor(event.category));
  const title=el("h2","",event.title);title.id="detailTitle";
  const badges=el("div","detail-badges");
  badges.append(el("span","",event.status),el("span","",event.role));
  if(hasFloorPresence(event)) badges.append(makeFloorTag(floorLabel(event)));
  const list=el("dl","detail-grid");
  addDetailRow(list,"Date",dateLabel(event));
  addDetailRow(list,"Time",timeLabel(event));
  addDetailRow(list,"Place",event.place);
  addDetailRow(list,"Link",event.link,true,"Open the official page");
  addDetailRow(list,"Lives in",event.ops_tab);
  addDetailRow(list,"Reference",event.id);
  main.append(category,title,badges,list);
  side.append(el("p","intel-kicker","BEHIND THE CURTAIN"),el("h3","","Team Notes"));
  const noteText=event.guidance||event.note||"";
  const noteDisplay=event.guidance_from&&event.guidance_from.toLowerCase()==="kerim"?`KERIM: ${noteText}`:noteText;
  const note=el("p",noteText?"intel-note":"intel-note intel-empty",noteDisplay||"No guidance has been added for this appearance yet.");
  const source=el("div","intel-source");
  const star=document.createElement("img");star.src="assets/kk-star.png";star.alt="";
  source.append(star,el("span","","Shared with the Atlas team"));
  side.append(note,source);
  layout.append(main,side);
  detailContent.append(layout);
  dialog.showModal();
}

document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>{currentView=button.dataset.view;renderCalendar();requestAnimationFrame(()=>jumpToMonth(selectedMonthIndex,false));}));
document.getElementById("previousMonth").addEventListener("click",()=>jumpToMonth(selectedMonthIndex-1));
document.getElementById("nextMonth").addEventListener("click",()=>jumpToMonth(selectedMonthIndex+1));
document.getElementById("dialogClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog) dialog.close();});

window.addEventListener("scroll",()=>{if(!scrollFrame) scrollFrame=requestAnimationFrame(syncMonthFromScroll);},{passive:true});

window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();deferredInstallPrompt=event;document.getElementById("installButton").hidden=false;});
document.getElementById("installButton").addEventListener("click",async()=>{if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;document.getElementById("installButton").hidden=true;});
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));

document.getElementById("todayLabel").textContent=`TODAY · ${TODAY.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}).toUpperCase()}`;
renderNextUp();renderFilters();renderCalendar();

const feedNotice=el("p","feed-notice");
feedNotice.hidden=true;
document.querySelector(".calendar-shell").prepend(feedNotice);
function showNotice(message){ feedNotice.textContent=message; feedNotice.hidden=!message; }
function savedDay(value){
  const date=new Date(value);
  return Number.isNaN(date.getTime())?"":date.toLocaleDateString("en-US",{month:"long",day:"numeric"});
}
let lastFeedTry=0;
async function loadFeed(){
  if(!FEED_URL) return;
  lastFeedTry=Date.now();
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),15000);
  try{
    const response=await fetch(FEED_URL,{signal:controller.signal,mode:"cors",credentials:"omit",cache:"no-store",redirect:"follow"});
    if(!response.ok) throw new Error("feed status "+response.status);
    const data=await response.json();
    const list=cleanList(data&&data.events);
    if(!list.length) throw new Error("feed empty");
    writeSaved(list);
    const changed=JSON.stringify(list)!==JSON.stringify(events);
    showNotice("");
    if(changed){
      setEvents(list);
      renderNextUp();renderFilters();renderCalendar();
    }
  }catch(error){
    const saved=readSaved();
    const day=saved?savedDay(saved.savedAt):"";
    showNotice(day?`The live list could not be reached. Showing the list saved on ${day}.`:"The live list could not be reached. Showing the list built into this page.");
  }finally{ clearTimeout(timer); }
}
loadFeed();
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState!=="visible") return;
  if(iso(new Date())!==iso(TODAY)){ location.reload(); return; }
  if(Date.now()-lastFeedTry>10*60*1000) loadFeed();
});
