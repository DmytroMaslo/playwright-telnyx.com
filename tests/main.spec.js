const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/mainPage')

test.describe('Main page', () => {

    test('Check title ', async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.goto();
        await mainPage.closeModal();
        await expect(page).toHaveTitle('Telnyx | Communication APIs for Seamless Connectivity')
    });
  
  });