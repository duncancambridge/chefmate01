# ChefMate Blueprint

## Overview
ChefMate is a single-page React application designed to convert natural language meal ideas into interactive, categorized shopping checklists. It aims to provide a fresh, organic, and minimalist user experience ("modern digital cookbook").

## Current Implementation
### Core Features
- **Meal Input:** Large text area for users to input natural language meal ideas.
- **Mock AI Processing:** Simulates AI generation with a 2-second delay, returning a structured JSON response (currently mocked).
- **Interactive List:** 
    - Ingredients are categorized into Meat, Produce, Dairy, Bakery, and Pantry.
    - Users can toggle items to mark them as "checked" (visual dimming and strikethrough).
- **Visual Feedback:** Loading states with spinning animations and clean transitions.

### Technical Architecture
- **Framework:** React 19 (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with a custom configuration (Sage Green, Cream, Slate).
- **Icons:** Lucide React
- **State Management:** Local React state (`useState`).

### Design System
- **Palette:** 
    - Background: `#F9FAFB` (Cream)
    - Primary: `#10B981` (Sage Green)
    - Text: `#1E293B` (Slate)
- **Components:** Minimalist cards, pill-shaped category badges, and rounded input fields.

## Planned Changes
- [x] Initial Project Setup (React, Tailwind, Lucide)
- [x] Component Architecture Implementation (Header, MealInput, IconLegend, IngredientList)
- [ ] Integration with Google Generative AI (Gemini) for real-time list generation.
