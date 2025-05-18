// Confirm the page has loaded
console.log("✅ Page loaded: Welcome to TSX Web Dev!");

// For Topic 1 Button
const btn = document.getElementById("topic1Btn");

if (btn) {
  btn.addEventListener("click", () => {
    const now = new Date();
    console.log(`🕒 Button clicked at: ${now.toLocaleTimeString()}`);
    
    const facts = [
      "HTML stands for HyperText Markup Language.",
      "CSS makes the web beautiful.",
      "JavaScript adds interactivity to websites!",
      "You just clicked a DOM element!"
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    alert(`🧠 Quick Fact:\n${randomFact}`);
  });
}
