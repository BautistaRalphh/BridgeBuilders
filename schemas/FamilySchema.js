import mongoose from "mongoose";

const FamilySchema = new mongoose.Schema(
  {
    bata: [
      {
        // relevant children case numbers
        caseNo: { type: Number },
      },
    ],
    //education
    ilanNagaaral: { type: Number },
    ilanBaon: { type: Number },
    saanGastosBaon: { type: String },
    schoolActivity: [{ type: String }],
    kainPasok: { type: Boolean }, //kumakain bago pumasok ng school
    alsAttend: { type: Boolean },
    //health
    checkup: { type: Boolean },
    familyPlanningMethod: { type: Boolean },
    saanTubig: { type: String },
    saanLaba: { type: String },
    saanCR: { type: String },
    sakit: [
      {
        //kadalasang sakit ng pamilya, multiple input bar
        name: { type: String },
      },
    ],
    ilanKain: { type: Number }, //ilang beses kumakain sa isang araw
    ilanLigo: { type: Number }, //ilang beses naliligo sa isang araw
    //socio-economic
    ipon: { type: Boolean },
    utang: { type: Boolean },
    dswd: { type: Boolean },
    gastosKita: [
      {
        //multiple input
        name: { type: String },
      },
    ],
    tirahan: { type: String }, //list of options
    reason: { type: String },
  },
  { versionKey: false }
);

const Family = mongoose.model("Family", FamilySchema);
export default mongoose.models.Family || Family;
