const Hapi = require('@hapi/hapi');

const {initCustomerControllers} = require('./controllers/customer-controller');
const {initCartControllers} = require('./controllers/cart-controller');
const {initItemControllers} = require('./controllers/items-controller');
const {initCartItemsControllers} = require('./controllers/cart-Items-controller');

const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000
    });

    initCustomerControllers(server);
    initCartControllers(server);
    initItemControllers(server);
    initCartItemsControllers(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
