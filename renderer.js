const pingBtn = document.getElementById('joke-btn')
pingBtn.addEventListener('click', async () => {
  const joke = await window.jokes.getJoke()
  const info = document.getElementById('joke')
  info.innerText = joke
})

const jokeForm = document.getElementById('joke-form')
jokeForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const jokeInput = document.getElementById('joke-input')
  const joke = jokeInput.value
  window.jokes.sendJoke(joke)
  jokeInput.value = ''
})