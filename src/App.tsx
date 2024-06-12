import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';

function App() {
	return (
		<div className='h-screen w-screen'>
			{/* UI Layer */}

			<Canvas shadows>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;
