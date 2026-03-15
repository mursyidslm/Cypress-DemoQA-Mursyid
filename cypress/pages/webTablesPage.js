
class WebTablesPage {

// ini untuk visit halaman web tables
visit(){
cy.visit("https://demoqa.com/webtables")
}

// ini untuk klik button add
clickAdd(){
cy.get("#addNewRecordButton").click()
}

// ini untuk mengisi first name
fillFirstName(firstName){
cy.get("#firstName").clear().type(firstName)
}

// ini untuk mengisi last name
fillLastName(lastName){
cy.get("#lastName").clear().type(lastName)
}

// ini untuk mengisi email
fillEmail(email){
cy.get("#userEmail").clear().type(email)
}

// ini untuk mengisi age atau umur
fillAge(age){
cy.get("#age").clear().type(age)
}

// ini untuk mengisi salary atau gaji
fillSalary(salary){
cy.get("#salary").clear().type(salary)
}

// ini untuk mengisi department
fillDepartment(department){
cy.get("#department").clear().type(department)
}

// ini untuk klik button submit
submit(){
cy.get("#submit").click()
}

// ini untuk verifikasi apakah user sudah terdaftar
verifyUser(firstName){
cy.get("table").should("contain", firstName)
}

// ini untuk verifikasi jika terjadi error pada field first name
VerifyFieldFirstNameError(){
cy.get("#firstName:invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field last name
VerifyFieldLastNameError(){
cy.get("#lastName:invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field email
VerifyFieldEmailError(){
cy.get("#userEmail:invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field age
VerifyFieldAgeError(){
cy.get("#age:invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field salary
VerifyFieldSalaryError(){
cy.get("#salary:invalid").should("exist")
}

// ini untuk verifikasi jika terjadi error pada field department
VerifyFieldDepartmentError(){
cy.get("#department:invalid").should("exist")
}

// ini untuk verifikasi jika form registrasi terlihat
VerifyRegistrationformvisible(){
cy.get(".modal-header").should("be.visible")
}

// ini untuk verifikasi jika user tidak berhasil terdaftar
verifyUserNotExist(firstName){
cy.get("table").should("not.contain", firstName)
}

}
export default new WebTablesPage()
