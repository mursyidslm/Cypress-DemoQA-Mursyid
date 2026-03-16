import { Locator } from "./Locators"
class ResizablePage {
    visit() {
        cy.visit("https://demoqa.com/resizable");
    }
    // melakukan resize ke ukuran yang paling besar dengan menggerakkan mouse ke posisi clientX: 1000 dan clientY: 500
    Resize() {
        cy.get(Locator.buttonresizebox)
          .trigger("mousedown", { which: 1 })
          .trigger("mousemove", { clientX: 653})
          .trigger("mouseup");
    }
    // validasi ukuran box setelah di resize menjadi 400 x 200
    ValidateResize() {
        cy.get(Locator.resizableBox)
          .should("have.css", "width", "400px")
          .and("have.css", "height", "200px");
    }
}
export default new ResizablePage()
