import mongoose from 'mongoose';

const Connect = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(res =>{
        console.log(`mongodb connected successfully`)
    }).catch(err => console.log(err))
}

export default Connect
