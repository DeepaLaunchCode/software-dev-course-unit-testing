# 🧪 Shared Codebase Testing Activity

## 🎯 Objective
Students will work together to write unit tests for a shared codebase, verify method behavior, and provide feedback to their peers. This activity emphasizes collaboration, critical thinking, and knowledge sharing within the learning community.

---

## 🧱 Activity Overview

### 🔧 Setup a Shared Codebase

Provide a starter project containing partially implemented methods (e.g., `calculateDiscount`, `filterProducts`, `sortInventory`).  
Include minimal or no existing tests, encouraging students to create them from scratch.

### 📂 Partially Implemented Methods

```js
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    return null;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}
```

## 👥 Form Groups

Divide students into small groups of 3–5. Each group will be responsible for writing unit tests for one or more methods in the shared codebase.

### 🧑‍🤝‍🧑 Assign Roles Within the Group:

- **Test Writer**: Writes initial test cases.
- **Code Reviewer**: Reviews and improves the test cases.
- **Debugger**: Ensures the implementation passes all tests.
- **Presenter**: Summarizes the group’s contributions for sharing with the class.

---

## 📝 Instructions

### 🧪 Write Tests
- Use **Jest** to write unit tests for their assigned method(s).
- Ensure they include **positive**, **negative**, and **edge cases**.

### 🤝 Collaborate
- Share and discuss test ideas within their group.
- Ensure all possible scenarios are covered.

### 🧪 Run Tests
- Use the command below to execute the test suite and refine the implementation:

```bash
npm test


##############here is my observation for this

Highlight Challenges and Resolutions:
Example challenges:
Challenge: sortInventory didn’t handle case-sensitive names correctly.
Resolution: Added a test for name sorting and updated the implementation to use .toLowerCase() for comparisons.
Challenge: Tests failed due to incorrect assumptions about method outputs.
Resolution: Reviewed method requirements and updated tests to match expected behavior.
Document how the group collaborated to resolve issues (e.g., pair programming, PR reviews).
Note Interesting Bugs:
Example bugs:
calculateDiscount returned negative prices for discounts > 100%.
filterProducts didn’t handle null categories, causing crashes.
Explain how tests uncovered these bugs and how they were fixed.
```
