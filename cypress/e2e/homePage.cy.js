

describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // 🔹 General homepage load test
  it("Load the homepage successfully", () => {
    cy.contains("Aman Diagnostic Center", { timeout: 5000 }).should("be.visible");
    cy.contains("Book an Appointment").should("be.visible");
  });

  // 🔹 Header Component Tests
  describe("Header Component", () => {
    it("should display logo and main nav links", () => {
      cy.get("header img[alt='logo']").should("be.visible");
      cy.contains("Book an Appointment").should("be.visible");
    });

    it("should open dropdown menu on hover", () => {
      cy.contains("Services").trigger("mouseover");
      cy.get(".absolute").should("be.visible");
    });

    it("should toggle mobile menu when hamburger is clicked", () => {
      cy.viewport("iphone-x");
      cy.get("button").first().click(); // assuming first button is menu
      cy.get("nav, .MobileMenu").should("be.visible");
    });

    it("should navigate to booking page when button clicked", () => {
      cy.contains("Book an Appointment").click();
      cy.url().should("include", "/book-appointment");
    });
  });

  // 🔹 OurImpact Component Tests
  describe("OurImpact Component", () => {
    it("should render title and cards", () => {
      cy.contains("Our Impact at a", { timeout: 5000 }).should("be.visible");
      cy.get(".grid > div").should("have.length.greaterThan", 0);
    });

    it("should flip a card on click", () => {
      cy.get(".grid > div").first().click();
      cy.get(".grid > div").first().find(".rotate-y-180").should("exist");
    });
  });

  // 🔹 FreeHomeSample Component Tests
  describe("FreeHomeSample Component", () => {
    it("should display heading and CTA button", () => {
      cy.contains("Free Home Sample Collection").should("be.visible");
      cy.contains("BOOK A FREE SAMPLE").should("be.visible");
    });

    it("should show correct phone number and link", () => {
      cy.get("a[href^='tel:']").should(
        "have.attr",
        "href",
        "tel:+923365660653"
      );
      cy.contains("+92 336 5660653").should("be.visible");
    });

    it("should display trust indicators", () => {
      cy.contains("Certified Lab Technicians").should("be.visible");
      cy.contains("Quick & Safe Process").should("be.visible");
      cy.contains("Free Service").should("be.visible");
    });
  });

  // 🔹 Footer Component Tests
  describe("Footer Component", () => {
    it("should display company info", () => {
      cy.contains("Reliable Diagnostic Services You Can Trust").should("be.visible");
      cy.get("a[href^='mailto:']").should(
        "have.attr",
        "href",
        "mailto:amanlabs2012@gmail.com"
      );
    });

    it("should display social links", () => {
      cy.get("footer a[target='_blank']").should("have.length.greaterThan", 0);
    });

    it("should show correct copyright", () => {
      const year = new Date().getFullYear();
      cy.contains(`© ${year}`).should("be.visible");
    });
  });
});
