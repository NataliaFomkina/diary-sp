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

    handleNoteChange(note, noteData){
        NotesActions.changeNote(note, noteData);
    },
render() {
    return (
        <div className='App'>
            <h1> Дневник самоконтроля</h1>
            <TableEditor onNoteAdd={this.handleNoteAdd}/>
            <Table notes={this.state.notes}/>
    </div>
    );
},
    _onChange() {
        this.setState(getStateFromFlux());
    }
});
export default App;