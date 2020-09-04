import React from 'react';
import './Table.less';
import Mytd from './Mytd.jsx';
const Table = React.createClass({
    getInitialState() {
        return{

        }
    },
handleDelete(note){
    console.log("onclick");
    //this.props.onNoteDelete(note);
},
    render(){
        return (
            <div className='Table'>
                <div className='TLabel'>
                    <label>{this.props.notes.length} items found</label>
                </div>
                <table>
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Самочувствие</th>
                    <th>Сон</th>
                    <th>Аппетит</th>
                    <th>Пульс</th>
                    <th>Вес</th>
                    <th>Физ.нагрузка</th>
                    <th>Нарушения режима</th>
                    <th>Болевые ощущения</th>
                    <th></th>
                </tr>
                </thead>
                    <tbody>

                    {this.props.notes.map((note) => {
                        return (
                            <tr key={note.date} >
                                <td>{note.date}</td>
                            <td>{note.samochuvstvie}</td>
                            <td>{note.son}</td>
                    <td>{note.appetit}</td>
                    <td>{note.pulses}</td>
                    <td>{note.ves}</td>
                    <td>{note.trenirovka}</td>
                    <td>{note.narusheniya}</td>
                    <td>{note.bol}</td>
                                {/*   onClick={this.props.onNoteDelete(note)}         */}
                                <td><Mytd onDelete={this.props.onNoteDelete.bind(null,note)}></Mytd></td>
                            </tr>
                                )
                    })}
                    </tbody>
                </table>
                <br />
        </div>
        );
    }
});

export default Table;