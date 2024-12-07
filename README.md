# Incorrect Closure Usage in useEffect Hook

This example demonstrates a common mistake when using the `useEffect` hook in React.  The issue involves incorrect handling of closures and how they affect state updates within the component.

## Problem

The `MyComponent` uses `setInterval` to increment a counter. However, the variable `myVar` is declared inside the `useEffect`'s callback function. Each render creates a new closure over `myVar`. This means each interval runs with its own isolated `myVar` resulting in unexpected counts.

## Solution

The solution is to avoid the closure issue. One way is to move the `myVar` outside of the useEffect and manage its state or use useRef hook.