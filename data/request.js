const https = require('https');

module.exports = function request(options, callback) {
  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (d) => {
      data += d;
    });

    res.on('end', () => {
      callback(data);
    });
  });

  req.end();
};
