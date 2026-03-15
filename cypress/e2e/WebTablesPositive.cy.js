// ini untuk mengimport class WebTablesPage dari file webTablesPage.jsagar bisa digunakan di file ini
import WebTablesPage from "../pages/webTablesPage";
// ini untuk mengimport library neatCSV untuk membaca file CSV
import Papa from "papaparse";

// ini untuk mendefinisikan test suite dengan nama "WebTables Bulk Register"
describe("WebTables Bulk Register", () => {
  // ini untuk mendefinisikan test case dengan nama "Register multiple menggunakan CSV"
  it("Register multiple menggunakan CSV", () => {
    WebTablesPage.visit();
    // ini untuk membaca file CSV yang berada di folder fixtures dengan nama users.csv
    cy.readFile("cypress/fixtures/users.csv").then((csv) => {
      const users = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
      }).data;
      // ini untuk melakukan looping pada setiap data user yang ada di file CSV dan melakukan register pada web tables dengan menggunakan data tersebut
      users.forEach((user) => {
        // ini untuk melakukan register pada web tables dengan menggunakan data user yang ada di file CSV
        WebTablesPage.clickAdd();
        WebTablesPage.fillFirstName(user.firstName);
        WebTablesPage.fillLastName(user.lastName);
        WebTablesPage.fillEmail(user.email);
        WebTablesPage.fillAge(user.age);
        WebTablesPage.fillSalary(user.salary);
        WebTablesPage.fillDepartment(user.department);
        WebTablesPage.submit();
        WebTablesPage.verifyUser(user.firstName);
      });
    });
  });
});
