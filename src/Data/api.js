export const getBanner = async () => {
    const res = await fetch("https://skillsphere-api-htpu.onrender.com/banner");
    const data = res.json();
    return data;
}