export const getCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    return await res.json();
}

export const getNewsByCategories = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    return await res.json();
}

export const getNewsById = async (news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const data = await res.json();
    return data.data[0];
}