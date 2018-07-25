const User = require('../../models/users');
const userSession = require('../../models/userSession');
const router = require("express").Router();


// sign up

router.post('/api/account/signup', (req, res, next) => {
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
   return res.json({
        success: false,
        message: 'error: cannot be blank.'
    });
}
if (!lastName) {
    return res.json({
        success: false,
        message: 'error: cannot be blank.'
    });
}
if (!email) {
    return res.json({
        success: false,
        message: 'error: cannot be blank.'
    });
}
if (!password) {
    return res.json({
        success: false,
        message: 'error: cannot be blank.'
    });
}

console.log('here');

email = email.toLowerCase();

// verify email hasnt been used
User.find({
    email: email
}, (err, previousUsers) => {
    if (err) {
        return res.json({
            success: false,
            message: 'Error: server error'
        });
    } else if (previousUsers.length > 0) {
        return res.json({
            success: false,
            message: 'Error: Account already exists.'
        });
    }

    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, User) => {
        if (err) {
            return res.json({
                success: false,
                message: 'Error: server error'
            });
        }
        return res.json({
            success: true,
            message: 'Signed up'
        });
    });
    });
});

// user session
router.post('/api/account/signin', (req, res, next) => {
    console.log('here');
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;
    if (!email) {
        return res.json({
            success: false,
            message: 'error: cannot be blank.'
        });
    }
    if (!password) {
        return res.json({
            success: false,
            message: 'error: cannot be blank.'
        });
    }

    email = email.toLowerCase();

    // checking for valid user, I may have an issue with mixing up variables somewhere
    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.json({
                success: false,
                message: 'error: server error'
            });
        }
        if (users.length != 1) {
            return res.json({
                success: false,
                message: 'error: invalid'
            });
        }

        const User = users[0];
        if(!User.validPassword(password)) {
            return res.json({
                success: false,
                message: 'Error: invalid'
            });
        }

        // if its a valid user, create session
        const userSession = new userSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'error: server error'
                });
            }

            return res.json({
                success: true,
                message: 'Valid sign in',
                token: doc._id
            });
        });

    }); 
    });
router.get('/api/account/verify', (req, res, next) => {
// get token
// has some errors
const { query } = req;
const { token } = query;
// token test?

// verify token is unique and not deleted

userSession.find({
    _id: token,
    isDeleted: false
}, (err, sessions) => {
    if(err) {
        return res.json({
            success: false,
            message: 'error: server error'
        });
    }

    if(sessions.length != 1) {
        return res.json({
            success: false,
            message: 'error: invalid'            
        });
    } else {
        return res.json({
            success: true,
            message: 'good'
        });
    }
});
});

router.get('/api/account/logout', (req, res, next) => {
    const { query } = req;
    const { token } = query;
    // token test?
    
    // verify token is unique and not deleted
    
    userSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    },{
        $set: {
        isDeleted:true}
    }, null, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: 'error: server error'
            });
        }
    

            return res.send({
                success: true,
                message: 'good'
            });
        
    });    
});

module.exports = router;