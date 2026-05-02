import next from "next";

export const getBanner = async () => {
    const res = await fetch("https://skillsphere-api-htpu.onrender.com/banner");
    const data = res.json();
    return data;
}

export const getCourses = async () => {
    const res = await fetch("https://skillsphere-api-htpu.onrender.com/courses");
    const data = res.json();
    return data
}

export const getInstructor = async() => {
    const res = await fetch("https://skillsphere-api-htpu.onrender.com/instructors");
    const data = res.json();
    return data
}

export const getNewCourses = async () => {
    const res = await fetch("https://skillsphere-api-htpu.onrender.com/new-courses");
    const data = res.json();
    return data
}

export const getCoursesDetails = async (id) => {
    const res = await fetch(`https://skillsphere-api-htpu.onrender.com/courses_details/${id}`);
    const data = await res.json()
    return data
}