const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        "Id": Number,
        "Semseter" : String,
        "PaymentHistory" : {
            "DatePaid" : Date,
            "PaymentAmount" : Number,
            "PaymentSource" : String,
        },
        "TuitionBreakdown" : {
            "ActivityFee" : Number,
            "MSUSA" : Number,
            "TechnologyFee" : Number,
            "AthleticsFee" : Number,
            "FaciltiesAssesment" : Number,
            "StudentUnion" : Number,
            "HealthServices" : Number,
        },
        "ViewScholarships" : {
            "ScholarshipAmount" : Number,
            "ScholarshipSource" : String,
        },
        "StudentEmployment" : {
            "RoutingNumber" : String,
            "HoursWorked" : Number,
        }, 
    }
);

module.exports = mongoose.model("Data", DataSchema);