document.addEventListener('DOMContentLoaded',function(){var migrationInfoAccepted=window.localStorage.getItem('migrationInfoAccepted')
if(migrationInfoAccepted!='true'){var migrationBar=document.getElementById('migration-info')
migrationBar.style.display='flex';var migrationButton=document.getElementById('migration-button')
migrationButton.addEventListener('click',function(){window.localStorage.setItem('migrationInfoAccepted',true)
migrationBar.style.display='none';})}
var $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0)
if($navbarBurgers.length>0){$navbarBurgers.forEach(function(el){el.addEventListener('click',function(){var target=el.dataset.target
var $target=document.getElementById(target)
el.classList.toggle('is-active')
$target.classList.toggle('is-active')})})}
const tabs=[...document.querySelectorAll('.tabs li')]
const tabContent=[...document.querySelectorAll('.tab-content section')]
const activeClass='is-active'
function init(){if(window.sessionStorage.getItem('tabActive')){toggleTab(window.sessionStorage.getItem('tabActive'))}else if(tabs&&tabs[0]){let key=tabs[0].getAttribute('data-tab')
toggleTab(key)}
tabs.forEach(tab=>{tab.addEventListener('click',handleClick)})
document.querySelectorAll('figure').forEach(fig=>{fig.addEventListener('click',event=>{basicLightbox.create(`<img src="${event.target.src}" alt="${event.target.alt}" />`).show()})})}
function handleClick(event){event.preventDefault()
let tab=event.currentTarget
let key=tab.getAttribute('data-tab')
toggleTab(key)}
function toggleTab(key){let activeTabs=getTabsByKey(key)
if(!activeTabs)return
tabs.forEach(tab=>{if(tab&&tab.classList.contains(activeClass)){tab.classList.remove(activeClass)}})
activeTabs.forEach(tab=>{tab.classList.add(activeClass)})
tabContent.forEach(item=>{if(item&&item.classList.contains(activeClass)){item.classList.remove(activeClass)}
let data=item.getAttribute('data-content')
if(data===key){item.classList.add(activeClass)}})
if(window.sessionStorage){window.sessionStorage.setItem('tabActive',key)}}
function getTabsByKey(key){return[...document.querySelectorAll(`[data-tab="${key}"]`)]}
init()})