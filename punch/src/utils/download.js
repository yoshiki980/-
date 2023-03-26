export default {
  name: 'downloadUtils',
  download (data, fileName) {
    const blob = new Blob([data])
    if (window.navigator.msSaveOrOpenBlob) { // 兼容IE10
      navigator.msSaveBlob(blob, fileName)
    } else {
      let url = window.URL.createObjectURL(data)
      let a = document.createElement('a')
      document.body.appendChild(a)
      a.href = url
      if (fileName !== null && fileName !== undefined) {
        a.download = fileName
      }
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }
}
