```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Log only on mount, to prevent unnecessary renders
    if (count === 0) {
        console.log('Component mounted with count:', count);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```