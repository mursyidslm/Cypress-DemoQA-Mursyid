import { Locator } from "./Locators"
class WebTablesPage {

// ini untuk visit halaman web tables
visit(){
cy.visit(Locator.linkWebtables)
}

// ini untuk klik button add
clickAdd(){
cy.get(Locator.addButton).click()
}

// ini untuk mengisi first name
fillFirstName(firstName){
cy.get(Locator.firstNameInput).clear().type(firstName)
}

// ini untuk mengisi last name
fillLastName(lastName){
cy.get(Locator.lastNameInput).clear().type(lastName)
}

// ini untuk mengisi email
fillEmail(email){
cy.get(Locator.emailInput).clear().type(email)
}

// ini untuk mengisi age atau umur
fillAge(age){
cy.get(Locator.ageInput).clear().type(age)
}

// ini untuk mengisi salary atau gaji
fillSalary(salary){
cy.get(Locator.salaryInput).clear().type(salary)
}

// ini untuk mengisi department
fillDepartment(department){
cy.get(Locator.departmentInput).clear().type(department)
}

// ini untuk klik button submit
submit(){
cy.get(Locator.submitButton).click()
}

// ini untuk verifikasi apakah user sudah terdaftar
verifyUser(firstName){
cy.get(Locator.table).should("contain", firstName)
}

// ini untuk verifikasi jika terjadi error pada field first name
VerifyFieldFirstNameError(){
cy.get(Locator.firstNameInput + ":invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field last name
VerifyFieldLastNameError(){
cy.get(Locator.lastNameInput + ":invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field email
VerifyFieldEmailError(){
cy.get(Locator.emailInput + ":invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field age
VerifyFieldAgeError(){
cy.get(Locator.ageInput + ":invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field salary
VerifyFieldSalaryError(){
cy.get(Locator.salaryInput + ":invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field department
VerifyFieldDepartmentError(){
cy.get(Locator.departmentInput + ":invalid").should("exist")
}

// ini untuk verifikasi jika form registrasi terlihat
VerifyRegistrationformvisible(){
cy.get(Locator.table).should("be.visible")
}

// ini untuk verifikasi jika user tidak berhasil terdaftar
verifyUserNotExist(firstName){
cy.get(Locator.table).should("not.contain", firstName)
}

}
export default new WebTablesPage()
