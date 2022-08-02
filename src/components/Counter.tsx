import React, {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState<number>(0);

	const handleIncrease = ():void => {
		setCount(count + 1)
	}

	const handleDecrease = ():void => {
		setCount(count - 1);
	}

	return (
		<div>
			<h2>This is Counter</h2>
			<h3>{count}</h3>
			<button onClick={handleIncrease}>Increase</button>
			<button onClick={handleDecrease}>Decrease</button>
		</div>
	);
};

export default Counter;