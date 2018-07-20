const Users = require('../../models/users');
module.exports = (app) => {

// sign up

app.post('/api/account/signup', (req, res, next) => {
const { body } = req;
const {
    firstName,
    lastName,
    password
} = body;
let {
    email
} = body;

if (!firstName) {
   return res.send({
        success: false,
        message: 'error: cannot be blank.'
    });
}
if (!lastName) {
    return res.send({
        success: false,
        message: 'error: cannot be blank.'
    });
}
if (!email) {
    return res.send({
        success: false,
        message: 'error: cannot be blank.'
    });
}
if (!password) {
    return res.send({
        success: false,
        message: 'error: cannot be blank.'
    });
}

console.log('here');

email = email.toLowerCase();

// verify email hasnt been used
Users.find({
    email: email
}, (err, previousUsers) => {
    if (err) {
        return res.send({
            success: false,
            message: 'Error: server error'
        });
    } else if (previousUsers.length > 0) {
        return res.send({
            success: false,
            message: 'Error: Account already exists.'
        });
    }

    const newUser = new Users();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, Users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }
        return res.send({
            success: true,
            message: 'Signed up'
        })
    })


});

});
};