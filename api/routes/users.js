import express from 'express'

const router = express.Router()
const users = [
    {
        firstName : "Paarth",
        lastname : "Agrawal",
        age : 20,
    }
]
router.get('/' , (req , res) =>{
    // console.log(users)
    res.send(users);
});

router.post('/' , (req , res) => {
    // console.log('post route reached')
    const user = req.body;
    console.log(user);
    users.push(user);
    res.send(`Data added of ${user.firstName} to database`);
});

export default router