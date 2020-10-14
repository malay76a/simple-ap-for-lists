const mocker = require('mocker-data-generator').default;

const user = {
    id: {
        chance: 'guid'
    },
    firstName: {
        faker: 'name.firstName'
    },
    lastName: {
        faker: 'name.lastName'
    },
    email: {
        faker: 'internet.email'
    },
    group: {
        values: ['Management', 'Accounting', 'Human Resources', 'IT', '']
    },
    experience: {
        faker: 'random.number({"min": 1, "max": 8})'
    }
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            ...mocker().schema('user', user, 20).buildSync(),
            sortFields: [
                'group',
                'experience'
            ]
        })
    };
};