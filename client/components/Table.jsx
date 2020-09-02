import React from 'react';
import ObjectList from "react-object-list";


const Table = React.createClass({
    getInitialState() {
        return{

        }
    },
    render(){
        return (
            <div className='Table'>
                <ObjectList
                    columns={[
                        [
                            {dataKey: 'date', header: 'Дата'},
                        ],
                        {dataKey: 'samochuvstvie', header: 'Самочувствие'},
                        {dataKey: 'son', header: 'Сон'},
                        {dataKey: 'appetit', header: 'Аппетит'},
                        {dataKey: 'pulses', header: 'Пульс'},
                        {dataKey: 'ves', header: 'Вес'},
                        {dataKey: 'trenirovka', header: 'Тренировка'},
                        {dataKey: 'narusheniya', header: 'Нарушения режима'},
                        {dataKey: 'bol', header: 'Болевые ощущения'},

                    ]}
                    data={this.props.notes}
                    meta={{
                        totalCount:this.props.notes.length,
                    }}
                    favouritesEnabled={false}
                />,
        </div>
        );
    }
});

export default Table;