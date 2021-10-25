const https = require('https');

module.exports = function(options, callback) {
  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (d) => {
      data += d
    })

    res.on('end', function () {
      callback(data)
    })
  })

  req.end()
}