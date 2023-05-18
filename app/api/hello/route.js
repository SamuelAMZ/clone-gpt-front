// export async function POST(req, res) {
//   return res.status(200).json({ message: "good" });
// }

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
