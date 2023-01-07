const messages = [
    {
        id: 1,
        text: 'Hello User',
        user: {
            id: 2,
            name: 'Admin',
        },
        isAdmin: true,
        isRead: true,
        date: '2023-01-07T06:10:46.432Z',
    },
    {
        id: 2,
        text: 'Hello Admin',
        user: {
            id: 1,
            name: 'User'
        },
        isAdmin: false,
        isRead: true,
        date: '2023-01-07T06:12:46.432Z',
    },
]

module.exports = {messages};
