// jsQR is concatenated by gulp

self.addEventListener('message', function(e) {
  const decoded = jsQR( // eslint-disable-line no-undef
    e.data.data,
    e.data.width,
    e.data.height
  )
  postMessage(decoded)
})
