import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    date:{type:Date, default:Date.now, required:true},
    samochuvstvie: {type:String, required:false},
    son: {type:Number, required:false},
    appetit: {type:String, required:false},
    pulses:{type:Number, required:false},
    ves: {type:Number,required:false},
    trenirovka:{type:String,required:false},
    narusheniya:{type:String,required:false},
    bol:{type:String,required:false},
});
mongoose.model('Note', NoteSchema);