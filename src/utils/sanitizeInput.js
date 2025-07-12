export function sanitizeInput(input) {
  const temp = document.createElement('div')
  temp.textContent = input
  return temp.innerHTML.trim()
}
