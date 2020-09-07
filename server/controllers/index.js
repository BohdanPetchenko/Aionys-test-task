const FakeModel = require('simple-fake-model');
const model = new FakeModel();


const addNotes = async function (object) {    
    await model.insert(object);
};

const getAllNotes = async function () {
    
    let result = await model.list();      
    return result;
};

const getNoteById = async function (id) {
    
    let result = await model.getById(id); 
           
    return result;
};

const removeNoteById = async function (id) {
    await model.deleteById(id);
    console.log(`Server has successfully removed a record with id = ${id} from db collection`);
};

const updateNoteById = async function (id, object) {
    await model.updateById(id, object)
    console.log(`Server has successfully updated a record with id = ${id} from db collection`);
};


module.exports = {
    addNotes,
    getAllNotes,
    getNoteById,
    removeNoteById,
    updateNoteById
}