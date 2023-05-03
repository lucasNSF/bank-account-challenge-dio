import { CompanyAccount } from "./class/CompanyAccount";
import { CustomAccount } from "./class/CustomAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(200);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(200);

const customAccount: CustomAccount = new CustomAccount("MyBank", 30);
customAccount.deposit(200);

console.log(peopleAccount, companyAccount, customAccount);
