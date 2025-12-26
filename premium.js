const plans = [
  {
    id: "FREE",
    name: "Free Plan",
    price: "Free",
    accent: "#9e9e9e",
    bg: "#f5f5f5",
    features: [
      "Unlock: NP - Unlimited, P - ₹999",
      "Active Property: NP - 5 posts, P - 1",
      "Hot Leads Unlock: Zero",
      "Requirement: Post 1/day, Unlock 10/year",
      "Total Property: Any 20",
    ],
  },
  {
    id: "PREMIUM_6M",
    name: "6 Months Plan",
    price: "₹29,999 / 6 Months",
    accent: "#ff9800",
    bg: "#fff8ec",
    features: [
      "Unlock: NP - Unlimited, P - 6 Months",
      "Active Property: NP - 50 + 5 (Free), P - 10 + 1 (Free)",
      "Hot Leads: Only send 10 leads daily",
      "Requirement: Post 30/week, Unlock 100/month",
      "Total Property: Any 200",
    ],
  },
  {
    id: "PREMIUM_12M",
    name: "12 Months Plan",
    price: "₹49,999 / Year",
    accent: "#2979ff",
    bg: "#f0f7ff",
    features: [
      "Unlock: NP - Unlimited, P - 12 Months",
      "Active Property: NP - 100 + 5, P - 20 + 1",
      "Hot Leads: 15 leads daily",
      "Requirement: Post 40/week, Unlock 200/month",
      "Total Property: Any 500",
    ],
  },
];


let selectedPlan = plans[0];



const plansEl = document.getElementById("plans");
const includedEl = document.getElementById("included");
const purchaseBtn = document.getElementById("purchaseBtn");

function renderPlans() {
  plansEl.innerHTML = "";
  plans.forEach((plan) => {
    const isFree = plan.id === "FREE";
    const div = document.createElement("div");
    div.className =
      "plan-card" + (plan.id === selectedPlan.id ? " active" : "");
    div.style.setProperty("--accent", plan.accent);
    div.style.setProperty("--bg", plan.bg);

    div.innerHTML = `
      <div class="plan-left">
        <div class="radio"><span></span></div>
        <div>
          <div class="plan-name">${plan.name}</div>
          <div class="price">${plan.price}</div>
        </div>
      </div>

       <!-- Desktop details -->
      <div class="plan-details">
       ${plan.features
         .map((f) => {
           const parts = f.split(":");
           if (parts.length > 1) {
             return `<div><span class="check"></span> <strong>${
               parts[0]
             }:</strong>${parts.slice(1).join(":")}</div>`;
           }
           return `<div><span class="check"></span> ${f}</div>`;
         })
         .join("")}
      </div>

      <button onclick="selectPlan('${plan.id}')">
         ${isFree ? "Current Plan" : "Select Plan"}
      </button>
    `;

    div.onclick = () => {
      if (window.innerWidth < 768) {
        selectedPlan = plan;
        renderPlans();
        renderIncluded();
        renderButton();
      }
    };

    plansEl.appendChild(div);
  });
}

function renderIncluded() {
  includedEl.innerHTML = `
    <h3 style="color:${selectedPlan.accent}">What's Included</h3>
  ${selectedPlan.features
    .map((f) => {
      const parts = f.split(":");
      if (parts.length > 1) {
        return `
        <div class="feature feature-row">
          <span class="check"></span>
          <strong>${parts[0]}:</strong>${parts.slice(1).join(":")}
        </div>
      `;
      }
      return `
        <div class="feature feature-row">
            <span class="check"></span>
            ${f}
        </div>`;
    })
    .join("")}
`;
}

function renderButton() {
  purchaseBtn.style.background = selectedPlan.accent;
  purchaseBtn.innerText =
    selectedPlan.id === "EXTRA_POST" ? "Open Calculator" : "Purchase Plan";
}

renderPlans();
renderIncluded();
renderButton();

function selectPlan(planId) {
  const plan = plans.find((p) => p.id === planId);
//   if (!plan) return;
  if (planId === "FREE") return;
  // Example redirect
  // window.location.href = `checkout.html?plan=${plan.id}`;
  window.location.href = `/Page/subscription.html`;
}
