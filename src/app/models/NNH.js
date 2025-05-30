import mongoose from "mongoose";
/*************  ✨ Windsurf Command ⭐  *************/
const NNHSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
/*******  bef5bd9c-08bc-44d5-8f85-126510363365  *******/    
const NNH = mongoose.models.NNH || mongoose.model ("NNH", NNHSchema);
export default NNH