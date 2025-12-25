import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { faker } from "@faker-js/faker";
import { argosScreenshot } from "@argos-ci/playwright";

test.beforeEach(async({page}) => {
    await page.goto("/");
});

test("Navigate to form page @smoke @regression", async({page}) => {
    const pm = new PageManager(page);
    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().toastrPage();
    await pm.navigateTo().tooltipPage();
});

test("Parametrized methods @smoke", async({page}) => {
    const pm = new PageManager(page);
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(" ","")}${faker.number.int(1000)}@test.com`;

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 2");
    await pm.onFormLayoutPage().submitInlineFormWithCredentialsAndSelectCheckbox(randomFullName, randomEmail, false);
    // await pm.navigateTo().datepickerPage();
    // await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(10);
    // await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(6, 15);
});

test.only("Testing with argos ci", async({page}) => {
    const pm = new PageManager(page);
    await pm.navigateTo().formLayoutsPage();
    await argosScreenshot(page, "form layouts page");
    await pm.navigateTo().datepickerPage();
});