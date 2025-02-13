var counter = 1
const screenWidth = window.screen.width
console.log(screenWidth)

function onClickButtonYes(el1, el2) {
  el1.style.cssText = "display: none;"
  el2.style.cssText = "display: flex;"

}

function onClickButtonNo(el1, el2, el3) {
  switch (counter) {
    case 1:
      el1.style.cssText = `font-size: 50px;`
      el2.innerHTML = "ты што прамазала"
      break
    case 2:
      el1.style.cssText = `font-size: 70px;`
      el2.innerHTML = "давай паакуратнее"
      break
    case 3:
      el1.style.cssText = `font-size: 95px;`
      el2.innerHTML = "чучут ливее"
      break
    case 4:
      el1.style.cssText = `font-size: 130px;`
      el2.innerHTML = "вот видиш зильона кнопка"
      break
    case 5:
      el1.style.cssText = `font-size: 160px;`
      el2.innerHTML = "ты дуро"
      break
    case 6:
      el1.style.cssText = `font-size: 200px;`
      if (screenWidth < 1000) {
        el1.style.cssText = `font-size: 200px; margin: 0 0 20px;`
        el3.style.cssText = "flex-direction: column; align-items: center;"
      }
      el2.innerHTML = "я растроюсь"
      break
    case 7:
      el1.style.cssText = `font-size: 240px;`
      if (screenWidth < 1000) {
        el1.style.cssText = `font-size: 240px; margin: 0 0 20px;`
      }
      el2.innerHTML = "очинь растроюсь"
      break
    case 8:
      el1.style.cssText = `font-size: 300px;`
      if (screenWidth < 1000) {
        el1.style.cssText = `font-size: 300px; margin: 0 0 20px;`
      }
      el2.innerHTML = "и буду плакоть"
      break
    case 9:
      el1.style.cssText = `font-size: 500px;`
      if (screenWidth < 1000) {
        el1.style.cssText = `font-size: 500px; margin: 0 0 20px;`
      }
      el2.innerHTML = "ну всьо"
      break
    case 10:
      if (screenWidth < 1000) {
        el1.style.cssText = `font-size: 350px; margin: 0 0 20px;`
        el1.innerHTML = "д\nо"
      } else {
        el1.style.cssText = `font-size: 900px;`
      }
      el2.style.cssText = "display: none"
      break
  }
  counter++
}