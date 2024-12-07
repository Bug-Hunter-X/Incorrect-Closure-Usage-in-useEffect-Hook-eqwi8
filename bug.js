```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over a mutable variable
    let myVar = 0;
    const interval = setInterval(() => {
      myVar++;
      setCount(myVar); // This will be incorrect due to the closure
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```