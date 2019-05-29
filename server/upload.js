const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(request, response) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    console.log(field)
    console.log(file)
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
  })

  form.on('end', () => {
    response.json()
  })

  form.parse(request)

}
