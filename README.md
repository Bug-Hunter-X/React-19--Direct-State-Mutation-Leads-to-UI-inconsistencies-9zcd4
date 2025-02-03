# React 19 Bug: Silent State Mutation

This repository demonstrates a common error in React applications where developers directly modify state variables instead of using the `setState` function.  This often results in silent state updates that don't trigger a re-render, leading to inconsistencies between the application's internal state and what is displayed on the user interface.

## Bug Description

The `bug.js` file contains code where the `count` state variable is directly incremented using `count = count + 1`.  While this might change the value of `count`, React's change detection mechanism won't pick up this modification and the UI will remain unchanged.  The `console.log` statement will show that the variable has changed, but the user interface will be out of sync with the actual state.

## Solution

The `bugSolution.js` file provides the corrected code. It uses the `setCount` function properly to update the state.  This ensures React's state update mechanism is triggered, causing a re-render and updating the UI accurately.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the increment button works as expected, but the initial increment in `useEffect` does not update the UI.