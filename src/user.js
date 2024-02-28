import user from './index.js'
import element from './createElement.js'

user.forEach(person => {
  const content = document.querySelector('.content')
  const personElement = element('p',person.name)

  content.appendChild(personElement)
})