import { Page } from "@playwright/test";
import { using } from "rxjs";
import { HelperBase } from "./helperBase";

export class FormLayoutPage extends HelperBase {

    constructor (page: Page) {
        super(page);
    }

    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string){
        const usingTheGridForm = this.page.locator("nb-card", {hasText: "Using the Grid"});
        await usingTheGridForm.getByRole("textbox", {name: "Email"}).fill(email);
        await usingTheGridForm.getByRole("textbox", {name: "Password"}).fill(password);
        await usingTheGridForm.getByRole("radio", {name: optionText}).check({force: true});
        await usingTheGridForm.getByRole("button").click();
    }

    /**
     * This method fills out the Inline form with user details
     * @param name - Should be first and last name
     * @param email - Valid email for the test user
     * @param checkbox - True or false if user session is saved
     */
    async submitInlineFormWithCredentialsAndSelectCheckbox(name: string, email: string, checkbox: boolean) {
        const usingInlineForm = this.page.locator("nb-card", {hasText: "Inline form"});
        await usingInlineForm.getByPlaceholder("Jane Doe").fill(name);
        await usingInlineForm.getByPlaceholder("Email").fill(email);
        if (checkbox)
            await usingInlineForm.getByRole("checkbox").check({force: true});
        else   
            await usingInlineForm.getByRole("checkbox").uncheck({force: true});

        await usingInlineForm.getByRole("button").click();
    }
}