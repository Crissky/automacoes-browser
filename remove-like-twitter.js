// Remove todos os likes do Twitter
// Vá para a página https://twitter.com/SEU-NICK/likes
// e no console do navegador execute o código abaixo:

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
    d.click()
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 1000)