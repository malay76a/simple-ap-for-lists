const mocker = require('mocker-data-generator').default;

const user = {
    id: {
        function: function() {
            return `f${(~~(Math.random()*1e8)).toString(16)}`;
        }
    },
    firstName: {
        faker: 'name.firstName'
    },
    lastName: {
        faker: 'name.lastName'
    },
    group: {
        values: ['Management', 'Accounting', 'Human Resources', 'IT']
    },
    experience: {
        function: function() {
            return Math.floor(Math.random() * Math.floor(5));
        }
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