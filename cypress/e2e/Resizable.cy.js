import ResizablePage from "../pages/ResizablePage"

describe("Resizable Test", () => {
  it("Resize box menjadi maximum size", () => {
    ResizablePage.visit();
    // melakukan resize ke ukuran yang paling besar dengan menggerakkan mouse ke posisi clientX: 1000 dan clientY: 500
    ResizablePage.Resize();
    // validasi ukuran box setelah di resize menjadi 400 x 200
    ResizablePage.ValidateResize();
  });
});
