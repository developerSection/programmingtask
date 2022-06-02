const mongoose = require('mongoose');

// create mongoose promise
mongoose.Promise = global.Promise;

// established a connection with mongodb
mongoose.connect('', {
    useNewUrlParser: true,
}).then(_ => {
    console.log('connected to DB')
}).catch(err => console.log(err))

module.export = {
    mongoose
}