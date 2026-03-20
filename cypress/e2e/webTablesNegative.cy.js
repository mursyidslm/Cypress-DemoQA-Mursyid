
import webTablesPage from "../pages/webTablesPage"
import WebTablesPage from "../pages/webTablesPage"
import { emailinvalid } from "../fixtures/emailinvalid"

describe("WebTables Bulk Register Negative Case", () => {

it("Negative Case - First Name dikosongkan", () => {

WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillLastName("User")
WebTablesPage.fillEmail("testuser@example.com")
WebTablesPage.fillAge("25")
webTablesPage.fillSalary("5000000")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldFirstNameError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})

it("Negative Case - Last Name dikosongkan", () => {
WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillEmail("testuser@example.com")
WebTablesPage.fillAge("25")
webTablesPage.fillSalary("5000000")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldLastNameError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})

it("Negative Case - email dikosongkan", () => {

WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillLastName("User")
WebTablesPage.fillAge("25")
WebTablesPage.fillSalary("5000")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldEmailError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})

emailinvalid.forEach((email) => {
it("Negative Case - invalid email: " + email, () => {

WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillLastName("User")
WebTablesPage.fillEmail(email)
WebTablesPage.fillAge("25")
WebTablesPage.fillSalary("5000")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldEmailError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")
})

it("Negative Case - Age diisi Huruf", () => {

WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillLastName("User")
WebTablesPage.fillEmail("testuser@example.com")
WebTablesPage.fillAge("tw")
WebTablesPage.fillSalary("5000")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldAgeError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})
it("Negative Case - Salary Dikosongkan", () => {

WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillLastName("User")
WebTablesPage.fillEmail("testuser@example.com")
WebTablesPage.fillAge("25")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldSalaryError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})

it("Negative Case - Salary Di input menggunakan huruf", () => {

WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillLastName("User")
WebTablesPage.fillEmail("testuser@example.com")
WebTablesPage.fillAge("25")
webTablesPage.fillSalary("five thousand")
WebTablesPage.fillDepartment("IT")
WebTablesPage.submit()
webTablesPage.VerifyFieldSalaryError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})

it("Negative Case - Department dikosongkan", () => {
WebTablesPage.visit()
WebTablesPage.clickAdd()
WebTablesPage.fillFirstName("Test")
WebTablesPage.fillLastName("User")
WebTablesPage.fillEmail("testuser@example.com")
WebTablesPage.fillAge("25")
WebTablesPage.fillSalary("5000000")
WebTablesPage.submit()
webTablesPage.VerifyFieldDepartmentError()
webTablesPage.VerifyRegistrationformvisible()
webTablesPage.verifyUserNotExist("Test")

})
})
})