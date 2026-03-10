import Hero from './components/Hero';
import LenisScroll from './components/lenis';
import Navbar from './components/Navbar';
import SoftBackdrop from './components/SoftBackdrop';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Hero />
		</>
	);
}
export default App;