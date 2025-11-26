

# Project Specification: ChefMate
**Filename:** `ChemateSpec.md`
**Type:** Vibe Coding Specification
**Goal:** Create a single-page React application that converts natural language meal ideas into an interactive, categorized shopping checklist using AI.

---

## 1. The Vibe (UI/UX)
The application should feel **fresh, organic, and minimalist**. Think "modern digital cookbook" or "high-end meal kit service."

* **Color Palette:**
    * Background: Soft off-white or very light cream (`#F9FAFB`).
    * Primary Action: Sage Green (`#10B981`) or Burnt Orange (`#F97316`) for buttons.
    * Text: Dark Slate (`#1E293B`) for readability; never pure black.
    * Borders/Dividers: Soft Gray (`#E2E8F0`).
* **Typography:** Clean sans-serif (Inter or system-ui). Large, friendly headings.
* **Animations:** Smooth transitions when the list loads; satisfying "check" animation when an ingredient is toggled.

---

## 2. Core User Flow
1.  **Landing:** User sees a centered input box with a friendly prompt (e.g., "What are you craving today?").
2.  **Input:** User types a meal (e.g., "Spaghetti Bolognese" or "A healthy salad with quinoa and feta").
3.  **Processing:** A loading state appears (skeleton loader or spinning utensil animation).
4.  **Result:** The UI expands to show:
    * The title of the meal.
    * A "Legend" key explaining the category icons.
    * The interactive checklist of ingredients, categorized by food type.

---

## 3. Technical Stack Requirements
* **Framework:** React (Vite recommended).
* **Styling:** Tailwind CSS (crucial for rapid styling).
* **Icons:** Lucide React (standard, clean SVG icons).
* **AI Mocking:** For the initial build, mock the AI response with a `setTimeout`, but structure the code to easily swap in an OpenAI/Gemini API call later.

---

## 4. Component Architecture

### A. `Header`
* Simple logo text ("ChefMate") in the top left.
* Minimalist design.

### B. `MealInput`
* Large text area or input field.
* "Generate List" button (Primary color).
* *Vibe check:* Input should have a subtle shadow and focus ring.

### C. `IconLegend` (The Key)
* A horizontal or grid-based distinct section showing the mapping of icons to categories.
* **Visuals:** Small pill-shaped badges.
    * 🥩 **Meat:** Red/Pink tint.
    * 🥕 **Vegetable/Produce:** Green tint.
    * 🥛 **Dairy:** Blue/White tint.
    * 🥖 **Bakery/Grains:** Yellow/Tan tint.
    * 🧂 **Pantry/Spices:** Gray/Orange tint.

### D. `IngredientList`
* The main display area.
* Items should be rendered as individual rows/cards.
* **Left side:** The Category Icon.
* **Middle:** The Ingredient Name (and quantity if available).
* **Right side:** A custom checkbox.
* **Interaction:** Clicking the row or box toggles the `checked` state. When checked, the text should strikethrough and dim.

---

## 5. Data Structure (AI Contract)
The AI agent should be instructed to return JSON in the following schema. The app must parse this schema.

```json
{
  "meal_title": "Spaghetti Carbonara",
  "ingredients": [
    {
      "item": "Pancetta or Bacon",
      "category": "meat",
      "quantity": "150g"
    },
    {
      "item": "Eggs",
      "category": "dairy",
      "quantity": "3 large"
    },
    {
      "item": "Spaghetti",
      "category": "bakery",
      "quantity": "400g"
    },
    {
      "item": "Black Pepper",
      "category": "pantry",
      "quantity": "to taste"
    }
  ]
}


