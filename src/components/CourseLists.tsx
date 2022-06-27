import { useId } from 'react';
import useCourseStore from '../store/courseStore';

const CourseLists = () => {
	const courseStore = useCourseStore((state) => ({
		courses: state.courses,
		removeCourse: state.removeCourse,
		toggleCourseStatus: state.toggleCourseStatus,
	}));

	const { courses, removeCourse, toggleCourseStatus } = courseStore;

	const checkboxId = useId();

	return (
		<>
			<ul>
				{courses.map((course) => {
					return (
						<li
							key={course.id}
							className='course-item'
							style={{ backgroundColor: course.completed ? '#00FF0044' : '#fff' }}>
							<span className='course-item-col-1'>
								<label htmlFor={checkboxId}></label>
								<input
									type='checkbox'
									id={checkboxId}
									onChange={(e) => toggleCourseStatus(course.id)}
									checked={course.completed}
								/>
							</span>
							<span>{course?.title}</span>
							<button className='delete btn' onClick={() => removeCourse(course.id)}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CourseLists;
