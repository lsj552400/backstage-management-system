const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/sz1905');

module.exports = {
    mongoose
}