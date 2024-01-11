const randomNums : number = Math.floor(Math.random() * 9999) + 1227  

export const otpGenerator =  {    
    otp : randomNums,
    createdAt : new Date()
}


export const htmlFormatForOTP = (name) => `
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
    <p>Halo ${name},</p>
    <p>Berikut kode OTP Anda ${otpGenerator.otp} </p>
    </div>
  </div>
</body>
</html>

</html>
`
