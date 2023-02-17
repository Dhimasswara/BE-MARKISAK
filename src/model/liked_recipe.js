const pool = require('../config/db');

const selectRecipeLikedRecipes = (id_recipe) => {
    return pool.query(`select id, step, url_video from videos where id_recipe='${id_recipe}' order by step asc`);
}

const insertLikedRecipe = (data) => {
    const { id, id_recipe, step, url_video } = data;
    return pool.query(`insert into videos values('${id}', '${id_recipe}', ${step},
        '${url_video}')`);
}

const updateLikedRecipes = (data) => {
    const { id, id_recipe, step, url_video } = data;
    return pool.query(`update videos set url_video='${url_video}', step=${step} where id='${id}'`);
}

const deleteLikedRecipes = (id_recipe, step) => {
    return pool.query(`delete from videos where id_recipe='${id_recipe}' and step=${step}`);
}

const countLikedRecipes = (id_recipe) => {
    return pool.query(`select count(*) from videos where id_recipe='${id_recipe}'`);
}

const findId = (id) => {
    return new Promise((resolve, reject) =>
        pool.query(`select id from videos where id='${id}'`, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    )
}

module.exports = {
    selectAllRecipesOrderByLikeCount,
}