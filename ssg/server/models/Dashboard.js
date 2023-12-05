const mongoose = require('mongoose');

const DashBoardSchema = new mongoose.Schema({
    LoginCount : mongoose.Schema.Types.Mixed,
    ProposedCount : mongoose.Schema.Types.Mixed,
    WithdrawnCount : mongoose.Schema.Types.Mixed,
    Faculty_ApprovedCount : mongoose.Schema.Types.Mixed,
    Faculty_RejectedCount : mongoose.Schema.Types.Mixed,
    Faculty_CompletedCount : mongoose.Schema.Types.Mixed
});

const DashBoardModel = mongoose.model('DashBoard', DashBoardSchema);
module.exports = DashBoardModel;