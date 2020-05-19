const mongoose=require('mongoose');
let HistoryModel;
HistoryModel = new mongoose.Schema({
    name: {
        type: String
    }
});

module.exports = ProductModel = mongoose.model('History',HistoryModel,'History')
