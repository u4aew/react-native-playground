const messages = [
    {
        id: 1,
        text: 'Hello User',
        user: {
            id: 1,
            name: 'Employee 574',
        },
        isAdmin: true,
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
    },
    {
        id: 3,
        text: 'Hello Admin',
        user: {
            id: 1,
            name: 'Mike Smith'
        },
        isAdmin: false,
        isRead: true
    },
    {
        id: 4,
        text: 'Hello Admin',
        user: {
            id: 1,
            name: 'Mike Smith'
        },
        isAdmin: false,
        isRead: true
    }
]

module.exports = {messages};
