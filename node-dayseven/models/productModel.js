var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: [1000, "Minimum Price should be 1000"],
        max: 20000
    },
    quantity: {
        type: Number,
        required: true,
        min: [5, "Mube have 5 product quantity at least."]
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model
    ('Product', productSchema);