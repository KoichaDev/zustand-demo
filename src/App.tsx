import CourseForm from './components/CourseForm';
import CourseLists from './components/CourseLists';
import './App.css';

const App = () => {
	return (
		<main className='main-container'>
			<h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>My Course List</h1>
			<CourseForm />
			<CourseLists />
		</main>
	);
};

export default App;
