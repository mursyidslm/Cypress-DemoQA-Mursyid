import { Locator } from "./Locators"
class DropPages {
    visit() {
        cy.visit(Locator.linkdroppable);
    }

    // pastikan terlihat
    validateVisibility() {
        cy.get(Locator.draggable).should("contain", "Drag Me").and("be.visible");
        cy.get(Locator.droppable).should("contain", "Drop Here").and("be.visible");
    }

    // melakukan drag and drop dengan menggerakkan mouse ke posisi clientX: 300 dan clientY: 300

    dragAndDrop() {
        cy.get(Locator.draggable)
        .trigger("mousedown", { which: 1 })
        .trigger("mousemove", { clientX: 1000, clientY: 300})
        .trigger("mouseup", { force: true });
    }
    // validasi setelah melakukan drag and drop, pastikan tulisan pada droppable berubah menjadi "Dropped!"
    validateDrop() {
        cy.get(Locator.droppable).should("contain", "Dropped!");
    }
}
export default new DropPages()