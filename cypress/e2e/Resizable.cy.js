describe("Resizable Test", () => {
  it("Resize box menjadi maximum size", () => {
    cy.visit("https://demoqa.com/resizable");
    // melakukan resize ke ukuran yang paling besar dengan menggerakkan mouse ke posisi clientX: 1000 dan clientY: 500
    cy.get("#resizableBoxWithRestriction > .react-resizable-handle")
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 653})
      .trigger("mouseup");
    // validasi ukuran box setelah di resize menjadi 400 x 200
    cy.get("#resizableBoxWithRestriction")
      .should("have.css", "width", "400px")
      .and("have.css", "height", "200px");
  });
});
