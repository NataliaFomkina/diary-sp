import React from 'react';
import './Table.less';
const Table = React.createClass({

        render(){
            console.log(this.props.notes);
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

                    {this.props.notes.map((note,index) => {
                        return (
                            <tr key={index}>
                                <td>{note.date}</td>
                                <td>{note.samochuvstvie}</td>
                                <td>{note.son}</td>
                                <td>{note.appetit}</td>
                                <td>{note.pulses}</td>
                                <td>{note.ves}</td>
                                <td>{note.trenirovka}</td>
                                <td>{note.narusheniya}</td>
                                <td>{note.bol}</td>
                                {/*<td><input id = {note._id} className= "changeButton" type="button" value="Save changes" onClick={this.handleNoteChange}/></td>*/}
                                <td><input className= "deleteButton" type="button" value="Delete"
                                               onClick = {this.props.onNoteDelete.bind(null,note)}/></td>
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