const navDiologe = document.getElementById("nav-diologe")
const companies = document.getElementById("companies-container")


function handelMenu(){
    
    navDiologe.classList.toggle('hidden')
    companies.classList.toggle('hidden')
}
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  if (!element) return; // Check if element exists

  const scrollHandler = () => {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = isLTR
      ? translateX + initialTranslateLTR
      : -(translateX + initialTranslateRTL);
    element.style.transform = `translateX(${totalTranslate}px)`;
  };

  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const new11 =  document.getElementById("new11")

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(new11, true, 0.30);


const dtElements = document.querySelectorAll("dt")
dtElements.forEach(element =>{
  element.addEventListener("click",()=>{
    const ddId = element.getAttribute("aria-controls")
    const ddElements = document.getElementById(ddId)
    const dtArrow = element.querySelectorAll("i")[0]

    ddElements.classList.toggle("hidden")
    dtArrow.classList.toggle("-rotate-180")
  })
})










