import React from 'react';
import './TableEditor.less';
const TableEditor = React.createClass({
    getInitialState() {
        return {
            date: '',
            samochuvstvie:'',
            son:'',
            appetit:'',
            pulse: '',
            ves:'',
            trenirovka:'',
            narusheniya:'',
            bol:'',
        };
    },

    handleDateChange(e) {
        this.setState({
            date: e.target.value
        });
    },
    handleSamochuvstvieChange(e) {
        this.setState({
            samochuvstvie: e.target.value
        });
    },
    handleSonChange(e) {
        this.setState({
            son: e.target.value
        });
    },
    handleAppetitChange(e) {
        this.setState({
            appetit: e.target.value
        });
    },
    handlePulseChange(e) {
        this.setState({
            pulses: e.target.value
        });
    },
    handleVesChange(e) {
        this.setState({
            ves: e.target.value
        });
    },
    handleTrenirovkaChange(e) {
        this.setState({
            trenirovka: e.target.value
        });
    },
    handleNarusheniyaChange(e) {
        this.setState({
            narusheniya: e.target.value
        });
    },
    handleBolChange(e) {
        this.setState({
            bol: e.target.value
        });
    },
    handleNoteAdd(){
        console.log('handleNoteAdd()');
        const newNote = {
            date: this.state.date,
            samochuvstvie:this.state.samochuvstvie,
            son:this.state.son,
            appetit:this.state.appetit,
            pulses: this.state.pulses,
            ves:this.state.ves,
            trenirovka:this.state.trenirovka,
            narusheniya:this.state.narusheniya,
            bol:this.state.bol,
        }
        this.props.onNoteAdd(newNote);
        this.setState({
            date: '',
            samochuvstvie: '',
            son: '',
            appetit: '',
            pulses: '',
            ves: '',
            trenirovka: '',
            narusheniya: '',
            bol: '',
        });
    },
    render() {
        return (
            <div className='TableEditor'>
                <label className='TableEditor__label'>Дата:
                <input
                    type='date'
                    className='TableEditor__input'
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
                </label>
                <label className='TableEditor__label'>Самочувствие:
                <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.samochuvstvie}
                    onChange={this.handleSamochuvstvieChange}
                />
                </label>
                <label className='TableEditor__label'>Сон:
                    <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.son}
                    onChange={this.handleSonChange}
                />
                </label>
                <label className='TableEditor__label'>Аппетит:
                    <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.appetit}
                    onChange={this.handleAppetitChange}
                />
                </label>
                <label className='TableEditor__label'>Пульс:
                    <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.pulses}
                    onChange={this.handlePulseChange}
                />
                </label>
                <label className='TableEditor__label'>Вес:
                    <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.ves}
                    onChange={this.handleVesChange}
                />
                </label>
                <label className='TableEditor__label'>Физическая нагрузка:
                <input
                    rows={3}
                    type='text'
                    className='TableEditor__input'
                    value={this.state.trenirovka}
                    onChange={this.handleTrenirovkaChange}
                />
                </label>
                <label className='TableEditor__label'>Нарушения режима:
                    <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.narusheniya}
                    onChange={this.handleNarusheniyaChange}
                />
                </label>
                <label className='TableEditor__label'>Болевые ощущения:
                    <input
                    type='text'
                    className='TableEditor__input'
                    value={this.state.bol}
                    onChange={this.handleBolChange}
                />
                </label>
                    <div className='TableEditor__footer'>
                    <button
                        className='TableEditor__button'
                        disabled={!this.state.date}
                        onClick={this.handleNoteAdd}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        );
    }
});
export default TableEditor;
// class Table extends Component {
//     render() {
//         return <Datatable options={options} />;
//     }
// }

//export default Table;
// export default Table;
/*
import React from 'react';
import ReactTable from 'react-table';
const Table = React.createClass({

    render(){
        const columns = [
            {
                Header:"Дата",
                accessor: "date"
            },
            {
                Header:"Самочувствие",
                accessor: "samochuvstvie"
            },
            {
                Header:"Сон",
                accessor: "sleep"
            },
            {
                Header:"Аппетит",
                accessor: "appetite"
            },
            {
                Header:"Пульс",
                accessor: "pulse"
            },
            {
                Header:"Вес",
                accessor: "weight"
            },
            {
                Header:"Тренировка",
                accessor: "training"
            },
            {
                Header:"Нарушения режима",
                accessor: "narusheniya"
            },
            {
                Header:"Болевые ощущения",
                accessor: "bol"
            },
            {
                Header:"Спортивные результаты",
                accessor: "sportresults"
            }
        ]
        return(<ReactTable
            columns = {columns}>
            </ReactTable>);
    }
});
*/
