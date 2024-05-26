import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import { useCharacterAnimation } from './store';

function App() {
	const { currentAnimation } = useCharacterAnimation();

	const handleClick = () => {
		currentAnimation?.reset().play();
	};

	return (
		<div className='h-screen w-screen'>
			{/* UI Layer */}
			<div className='absolute top-[10%] bottom-[5%] z-[99] '>
				<button
					className='bg-green-400 shadow-inner shadow-black rounded-lg p-2'
					onClick={handleClick}>
					Play Animation
				</button>
			</div>
			<Canvas shadows>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;
