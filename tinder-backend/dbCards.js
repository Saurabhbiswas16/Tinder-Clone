import mongooose from 'mongoose';

const cardSchema = mongooose.Schema({
    name: String,
    url: String
})

export default mongooose.model('cards',cardSchema);