describe("Drag and Drop", () => {
  it("Drag draggable to droppable", () => {
    cy.visit("https://demoqa.com/droppable");

    // pastikan terlihat
    cy.get("#draggable").should("contain", "Drag Me").and("be.visible");
    cy.get("#droppable").should("contain", "Drop Here").and("be.visible");

    // melakukan drag and drop dengan menggerakkan mouse ke posisi clientX: 300 dan clientY: 300

    cy.get("#draggable")
    .trigger("mousedown", { which: 1 })
    .trigger("mousemove", { clientX: 1000, clientY: 300})
    .trigger("mouseup", { force: true });

    cy.get("#droppable").should("contain", "Dropped!");
  });
});
