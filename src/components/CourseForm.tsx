import { useState, useId } from 'react';

import useCourseStore from '../store/courseStore';

const CourseForm = () => {
	const [coursetitle, setcCourseTitle] = useState('');
	const addCourse = useCourseStore((state) => state.addCourse);

	const courseId = useId();

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!coursetitle) return;

		addCourse({
			id: Math.random() * 10000,
			title: coursetitle,
		});
		setcCourseTitle('');
	};

	return (
		<form onSubmit={onSubmitHandler} className='form-container'>
			<label htmlFor={courseId}>Course title</label>
			<input
				type='text'
				id={courseId}
				value={coursetitle}
				onChange={(e) => setcCourseTitle(e.target.value)}
			/>
			<button type='submit' className='form-submit-btn'>
				Add Course
			</button>
		</form>
	);
};

export default CourseForm;
