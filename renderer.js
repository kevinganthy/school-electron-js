// Declare features
const getVersions = () => {
  return `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
}
const ping = async () => {
  const response = await window.versions.ping()
  console.log(response)
}
const listFiles = async () => {
  const files = await window.versions.ls()
  console.log('Files in current directory:', files)
}

// Map DOM elements and events
const pingBtn = document.getElementById('ping-btn')
pingBtn.addEventListener('click', ping)

const lsBtn = document.getElementById('ls-btn')
lsBtn.addEventListener('click', listFiles)

const information = document.getElementById('info')
information.innerText = getVersions()