const message = [
    {
        id: 1,
        text: 'Hello User',
        user: {
            id: 1,
            name: 'Employee 574',
        },
        isAdmin: false,
        isRead: true
    },
    {
        id: 2,
        text: 'Hello Admin',
        user: {
            id: 1,
            name: 'Mike Smith'
        },
        isAdmin: false,
        isRead: true
    }
]

module.exports = {message};
