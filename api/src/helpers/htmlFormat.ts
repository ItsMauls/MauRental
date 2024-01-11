export const htmlFormat = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Template</title>
<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    background: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .header {
    background: #ff4500;
    padding: 10px 20px;
    color: #fff;
    text-align: center;
  }
  .header img {
    max-width: 180px;
    margin-bottom: 10px;
  }
  .content {
    padding: 20px;
    text-align: center;
  }
  .footer {
    background: #ff4500;
    color: #ffffff;
    text-align: center;
    padding: 10px 20px;
    line-height: 1.6;
  }
  .footer a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src='cid:logo-cid' alt='MauRental Logo'/>
      <h1>Selamat Datang di MauRental!</h1>
    </div>
    <div class="content">
    <p>Dear ${name},</p>
    <p>Selamat datang di MauRental, aplikasi rental kendaraan terbaik di kota Anda!</p>
    <p>Kami sangat senang Anda telah bergabung dengan kami. Di MauRental, kami berkomitmen untuk memberikan pengalaman rental kendaraan yang mudah, cepat, dan aman. Dengan berbagai pilihan kendaraan yang tersedia, kami yakin Anda akan menemukan kendaraan yang sempurna untuk kebutuhan Anda.</p>
    <h2>Berikut adalah beberapa fitur yang dapat Anda nikmati sebagai anggota MauRental:</h2>
    <ul>
        <li><strong>Pilihan Kendaraan Luas</strong>: Dari mobil hingga sepeda motor, pilih kendaraan yang paling sesuai dengan kebutuhan Anda.</li>
        <li><strong>Proses Pemesanan Mudah</strong>: Dengan beberapa klik, Anda bisa memesan kendaraan impian Anda.</li>
        <li><strong>Harga Bersaing</strong>: Nikmati tarif terbaik di kota Anda dengan MauRental.</li>
    </ul>
    <p>Untuk memulai, cukup masuk ke akun Anda dan jelajahi berbagai pilihan kendaraan kami. Jika Anda memiliki pertanyaan atau membutuhkan bantuan, tim dukungan kami siap membantu Anda.</p>
    <p>Terima kasih telah memilih MauRental. Kami berharap Anda menikmati perjalanan Anda!</p>
    <p>Salam hangat,<br>Tim MauRental</p>
    </div>
    <div class="footer">
      <p>Need help or have questions? We're here for you!</p>
      <p>Contact us at <a href="mailto:support@MauRental.com">support@MauRental.com</a> or call us at <a href="tel:+123456789">+123 456 789</a>.</p>
      <p>Follow us on social media!</p>
      <a href="https://twitter.com/MIbraAP" style="margin-right: 8px;">🐦 Twitter</a>
      <a href="https://github.com/ItsMauls>📷 Github</a>
      <p>Stay pawsome!</p>
      <p>Team MauRental</p>
    </div>
  </div>
</body>
</html>

</html>
`
