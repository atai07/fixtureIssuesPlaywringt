import { Page } from "@playwright/test";

export default class LoginPage {
    page:Page;
    email =`//input[@name='email']`;
    password =`//*[@name="password"]`;
    button = `//*[@type='submit']`;
    url = `https://staging-association.memberlounge.app/login`;

    constructor(page:Page){
        this.page = page;
    };


    async mlLoginUrl(url:string){
        await this.page.goto(url);
    }

    async enterEmail(useEmail: string){
        await this.page.locator(this.email).fill(useEmail);
    }

    async enterPass(userPass:string){
        await this.page.locator(this.password).fill(userPass);
    }

    async clickSubmit(){
        await this.page.locator(this.button).click();
    }


} 
