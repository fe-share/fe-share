function component() {
  const element = document.createElement('div')
  element.innerHTML = 'demo02'
  return element
}

document.body.appendChild(component())