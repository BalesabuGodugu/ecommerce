"use client";
import styles from './page.module.css'
import CourseList from '../components/Courselist';



export default function Home() {
  return (
    <main className={styles.main}>
        <CourseList/>
    </main>
  )
}
