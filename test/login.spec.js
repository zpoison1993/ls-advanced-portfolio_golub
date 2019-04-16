const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8081//admin#/login');
});

test('На странице авторизации есть кнопка "Отправить"', () => {
    return client
        .isExisting('.login__send-data')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/send_${browserName}_is_visible.png`, browsers[browserName].value, 'base64');
            }
        });
});

test('На странице авторизации есть все необходимые поля', () => {
    return client
        .isExisting('#login')
        .isExisting('#pass')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })

        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/form-rows_${browserName}_are_visible.png`, browsers[browserName].value, 'base64');
            }
        });
});



afterAll(() => {
    return client.end();
});
