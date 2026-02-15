export default async function handler(req, res) {
  try {
    const { reference } = req.query;

    if (!reference) {
      return res.status(400).json({ error: "No reference supplied" });
    }

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    if (data.data && data.data.status === "success") {
      return res.status(200).json({ verified: true, data: data.data });
    } else {
      return res.status(400).json({ verified: false });
    }

  } catch (error) {
    return res.status(500).json({ error: "Verification failed" });
  }
}
