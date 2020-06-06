export const localhostEnvironment: { [key: string]: string } = {
    apiUrl: process.env.apiUrl || 'http://localhost:3000',
    ioSocketUrl: process.env.socketUrl || 'http://localhost:2507',
};
