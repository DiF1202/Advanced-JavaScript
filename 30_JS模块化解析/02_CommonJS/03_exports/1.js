function expect(num) {
  return {
    toBe(num1) {
      if (num === num1) return true;
      return false;
    },
    not: {
      toBe(num2) {
        if (num === num2) return false;
        return true;
      },
    },
  };
}

