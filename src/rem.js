function resize(params) {
  let { clientWidth } = document.documentElement
  if (clientWidth < 1440) clientWidth = 1440
  document.documentElement.style.fontSize = clientWidth / 100 + 'px';
}
resize()

window.onresize = () => {
  resize()
}