import React from 'react';
import TableEditor from './TableEditor.jsx';
import Table from './Table.jsx';
import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

function getStateFromFlux(){
    return{
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}
const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        NotesActions.loadNotes();
    },

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    },

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    },

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
    },

    handleNoteChange(note){
        console.log("handleNoteChange");
        NotesActions.changeNote(note);
    },
render() {
    return (
        <div className='App'>
            <h1> Дневник самоконтроля</h1>
            <TableEditor onNoteAdd={this.handleNoteAdd}/>
            <Table notes={this.state.notes} onNoteDelete={this.handleNoteDelete} onNoteChange={this.handleNoteChange}/>
    </div>
    );
},
    _onChange() {
        this.setState(getStateFromFlux());
    }
});
export default App;