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
    console.log("server utils DataBaseUtils createNote()");
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
export function changeNote(id, data){//потестить

  var newNote = new Note({
      date: data.date,
      samochuvstvie: data.samochuvstvie,
      son : data.son,
      apetit :data.appetit,
      pulses :data.pulses,
      ves :data.ves,
      trenirovka :data.trenirovka,
      narusheniya :data.narusheniya,
      bol :data.bol
  });

  var upsertData = newNote.toObject();
  delete upsertData._id;
  return Note.update({_id: id},upsertData,{upsert:false},function(err, foundData){});
/*
        foundNote.date= data.date;
            foundNote.samochuvstvie= data.samochuvstvie;
            foundNote.son = data.son;
            foundNote.apetit =data.appetit;
            foundNote.pulses =data.pulses;
            foundNote.ves =data.ves;
            foundNote.trenirovka =data.trenirovka;
            foundNote.narusheniya =data.narusheniya;
            foundNote.bol =data.bol;
            return foundNote.save();
    });
    /*return Note.save({_id: id,
        date: data.date,
        samochuvstvie: data.samochuvstvie,
        son : data.son,
        apetit :data.appetit,
        pulses :data.pulses,
        ves :data.ves,
        trenirovka :data.trenirovka,
        narusheniya :data.narusheniya,
        bol :data.bol,});
        */
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