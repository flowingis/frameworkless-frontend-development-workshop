export const htmlToElement = html => {
  var template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstChild
}
