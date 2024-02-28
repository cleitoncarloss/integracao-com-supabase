function element (tag,text) {
  const element = document.createElement(tag)
  element.textContent = text

  return element
}

export default element