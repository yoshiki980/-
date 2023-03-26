export default {
  name: 'functionUtil',
  formatDate (datetime) {
    let d = new Date(datetime)
    let formatdatetime = d.getFullYear() + '-' + this.addDateZero(d.getMonth() + 1) + '-' + this.addDateZero(d.getDate())
    return formatdatetime
  },
  getDateAndTime (dateTime) {
    let d = new Date(dateTime)
    let formatdatetime = d.getFullYear() + '-' + this.addDateZero(d.getMonth() + 1) + '-' + this.addDateZero(d.getDate())
    let time = this.addDateZero(d.getHours()) + ':' + this.addDateZero(d.getMinutes())
    return {
      date: formatdatetime,
      time: time
    }
  },
  addDateZero (num) {
    return (num < 10 ? '0' + num : num)
  }
}
