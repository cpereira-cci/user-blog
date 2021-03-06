/**
 * 
 * @param {any} model 
 * @param {string} id 
 * 
 * check if the requested resource exist
 */
const resourceExists = async (model, id) => {
    try {
        let count = await model.count({ where: { id: id } })
        return count === 1 ? true : false
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    resourceExists
}