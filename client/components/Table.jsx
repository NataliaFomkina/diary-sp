import React from 'react';
import './Table.less';
const Table = React.createClass({
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
                    <th></th>
                </tr>
                </thead>
                    <tbody>

                    {this.props.notes.map((note) => {
                        return (
                            <tr key={note.date} >
                                <td>{note.date}</td>
                                <td><textarea className="tableInput" defaultValue={note.samochuvstvie}></textarea></td>
                            <td><textarea className="tableInput" defaultValue={note.son}></textarea></td>
                    <td><textarea className="tableInput" defaultValue={note.appetit}></textarea></td>
                    <td><input className="tableInput" type="text" defaultValue={note.pulses}></input></td>
                    <td><input className="tableInput" type="text" defaultValue={note.ves}></input></td>
                    <td><textarea className="tableInput" defaultValue={note.trenirovka}></textarea></td>
                    <td><textarea className="tableInput" defaultValue={note.narusheniya}></textarea></td>
                    <td><textarea className="tableInput" defaultValue={note.bol}></textarea></td>
                                <td><input className= "changeButton" type="button" value="Save changes" /></td>
                                <td><input className= "deleteButton" type="button" value="Delete"  onClick={this.props.onNoteDelete.bind(null,note)}/></td>
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