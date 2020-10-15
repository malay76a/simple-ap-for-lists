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
    },
    avatar: {
        function: function () {
            return 'https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff'
        }
    }
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            ...mocker().schema('user', user, 400).buildSync(),
            sortFields: [
                'group',
                'experience'
            ]
        })
    };
};