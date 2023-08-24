import Link from "next/link";

export default function Success() {
  return (
    <>
      <div className="success-container">
        <h2 className="success">Your order is successfully placed</h2>
        <div className="success-message">
          Thank you for ordering. We will ship it in 1-2 days and send you a
          follow-up email to track the delivery.
        </div>
      </div>
      <Link href="/" className="link">
        <button className="continue-shopping-success">Continue Shopping</button>
      </Link>
    </>
  );
}
