function resize(params) {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';
}
resize()

window.onresize = () => {
  resize()
}