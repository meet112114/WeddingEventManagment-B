const mongoose = require("mongoose")

const ServicesSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    serviceType:{
      type:String,
      required:true,
      enum:["food","decoration","mehndi","photography", "jewellery", "bridalwear", "groomwear" ,"makeup","pandit" , "others" ],
      default:"others"
    },
    startPrice:{
      type:Number,
      default:10000
    },
    vendorId : {
        type: String,
        required : true
    },
    vendorName:{
      type: String,
      required : true
    },
    description :{
        type: String,
        required :true
    },
    location:{
      type: String,
        required :true
    },
    images :{
        type: [String]
    },
    venueList: [
        {
            venueId:{
                type: String
            },
            status:{
                type:String,
                default:"false"
            }
        }
    ],
    plans: [
        {
          planName: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],

  status:{
    type:String,
    enum:["accepted","rejected","pending"],
    default:"pending"
}
})

const Service = mongoose.model("Service" , ServicesSchema )
module.exports = Service