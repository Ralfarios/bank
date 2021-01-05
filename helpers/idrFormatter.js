let formatter = (value) =>  value.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'});

module.exports = formatter;