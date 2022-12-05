export default function handler(req, res) {
  res
    .status(200)
    .json(
      { name: "Prabhat Jadhav", age: 24 },
      { name: "Tvwyb Miwu", age: 28 },
      { name: "Duwwvwyb Fiwu", age: 20 }
    );
}
