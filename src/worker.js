// jsQR is concatenated by gulp

self.addEventListener('message', function(event) {
  const { imageData, src } = event.data

  const decoded = jsQR(
    imageData.data,
    imageData.width,
    imageData.height
  )

  postMessage({ decoded, src })
})
