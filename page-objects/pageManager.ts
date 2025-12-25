import { Page } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage"
import { FormLayoutPage } from "../page-objects/formLayoutPage";
import { DatepickerPage } from "../page-objects/datepickerPage";

export class PageManager {
    private readonly navigationPage: NavigationPage;
    private readonly formLayoutPage: FormLayoutPage;
    private readonly datepickerPage: DatepickerPage;

    constructor(page: Page){
        this.navigationPage = new NavigationPage(page);
        this.formLayoutPage = new FormLayoutPage(page);
        this.datepickerPage = new DatepickerPage(page);
    }

    navigateTo(){
        return this.navigationPage;
    }
    onFormLayoutPage(){
        return this.formLayoutPage;
    }
    onDatePickerPage(){
        return this.datepickerPage;
    }
}