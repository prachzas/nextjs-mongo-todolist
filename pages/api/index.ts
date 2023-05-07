import mongoose from 'mongoose'
import Todo from '../../models/Todo'

(async () => {
    await mongoose.connect('mongodb+srv://admin:1234@cluster0.hp7jhdg.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('Connnect to database successfully.'))
        .catch((err) => console.error('connect to database error ', err))
        console.log('eiei',await Todo.find())
})();

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
}