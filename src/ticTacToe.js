import React from 'react';

const Square = ({ index }) => {
    const [bgColor, setBgColor] = React.useState('bg-white');
    const handleClick = () => setBgColor('bg-blue-200');

    return (
        <div onClick={handleClick} className={`"relative inline-flex items-center px-4 py-2 border border-gray-300 text-large font-large rounded-md text-gray-900 ${bgColor} hover:bg-green-300 "`}>
            {index}
        </div>);
};


export default function TicTacToe() {
    const [number, useNumber] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const IncreaseNumber = index => useNumber(number[index]++);

    const renderSquare = (id) => {
        return <Square index={id} />
    }


    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                        <div class="grid grid-cols-3 gap-2">
                            {number.map(element => renderSquare(element))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
