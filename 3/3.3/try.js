const globalVariable = "Global";

function scope() {
  const LocalVariable = "Local";
}

const LocalVariable = "Local";
console.log(globalVariable); // Output: Global
console.log(LocalVariable);

scope();
