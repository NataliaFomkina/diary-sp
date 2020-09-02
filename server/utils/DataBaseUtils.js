import mongoose from "mongoose";
import '../models/Note';

import config from '../../etc/config.json';
const Note = mongoose.model('Note');

export function setUpConnection(){
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    console.log("DB connected");
    const db = mongoose.connection;
}
export function listNotes() {
return Note.find();
}
export function createNote(data){
    const note = new Note({
        date: data.date,
        samochuvstvie:data.samochuvstvie,
        son:data.son,
        appetit:data.appetit,
       pulses: data.pulses,
        ves:data.ves,
        trenirovka:data.trenirovka,
        narusheniya:data.narusheniya,
        bol:data.bol,
    });
    return note.save();
}
export function deleteNote(id){
    return Note.findById(id).remove();
}
export function changeNote(id, req, res){//потестить
   return Note.findOne({ "id": id }, function (err, doc){
        doc.date = req.body.date,
            doc.samochuvstvie = req.body.samochuvstvie,
            doc.son = req.body.son,
            doc.appetit=req.body.appetit,
            doc.pulses= req.body.pulses,
            doc.ves=req.body.ves,
            doc.trenirovka=req.body.trenirovka,
            doc.narusheniya=req.body.narusheniya
            doc.bol=req.body.bol,

       // doc.save();
         doc.save(function (err, documentSaved, numberAffected) {
          if (!err) {
             console.log('Success!');
            res.json(documentSaved);
          } else {
             console.log(err);
           }
         });
    });

}
//
// export function addUser(data){
//    if(!Users.find({username:data.email}){
//        const User = new Users({
//            username: data.username;
//            email: data.email;
//            password: data.password;
//        });
//        return  Users.save();
//     } else return false;
// }