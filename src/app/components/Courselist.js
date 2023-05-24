

import  {supabase}  from '../../lib/supabase';
import {useState,useEffect} from 'react';
const CourseList = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      // Create a Supabase client  
      // Fetch the courses from the database
      const fetchCourses = async () => {
        const { data, error } = await supabase.from('courses').select('*');
        if (error) {
          console.error('Error fetching courses:', error);
        } else {
          setCourses(data);
        }
      };
  
      fetchCourses();
    }, []);
  
    return (
      <div>
        <h1>Course List</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CourseList;
  