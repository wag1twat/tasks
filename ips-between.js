function ipsBetween(start, end) {
  const parse = (ip) => {
    return (
      ip
        .split(".")
        .reduce((int, octet) => (int << 8) + parseInt(octet, 10), 0) >>> 0
    );
  };

  return parse(end) - parse(start);
}

console.log(ipsBetween('127.0.0.1', '127.1.1.0'))