const mongoose = require("mongoose");

const VenueSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    vendorId :{
        type: String,
        required : true
    },
    vendorName : {
        type: String,
        required : true
    },
    venueType:{
        type: String,
        required : true
    },
    tags:[
        {type: String}
    ],
    venueDecs:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required: true
    },
    locationUrl:{
        type: String,
        required: true
    },
    location :{
        type: String,
        required : true
    },
    basePrice: {
        type: String,
        required : true
    },
    tags : {  
        type: [String], 
        required: false
    },
    images : {  
        type: [String],  
        required: false
    },
    status:{
        type:String,
        enum:["accepted","rejected","pending"],
        default:"pending"
    }
})

const Venue = mongoose.model("Venue" , VenueSchema);
module.exports = Venue
