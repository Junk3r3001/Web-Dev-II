document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-tip-btn");
  const tipContent = document.getElementById("tip-content");

  if (!toggleBtn || !tipContent) return;

  toggleBtn.addEventListener("click", () => {
    
    const isHidden = tipContent.classList.toggle("hidden");

    
    if (isHidden) {
      toggleBtn.textContent = "Show Practical Tips";
      tipContent.setAttribute("aria-hidden", "true");
    } else {
      toggleBtn.textContent = "Hide Practical Tips";
      tipContent.setAttribute("aria-hidden", "false");
    }
  });
});