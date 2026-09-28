<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>DOC XANDER | Official</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #050505;
      color: white;
      line-height: 1.6;
    }

    /* HEADER */
    header {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 30px 20px;
      background:
        radial-gradient(circle at top, #222 0%, #090909 45%, #000 100%);
    }

    /* LOGO */
    .logo {
      width: 180px;
      max-width: 65vw;
      height: auto;
      display: block;
      margin-bottom: 25px;
      object-fit: contain;
    }

    .brand {
      font-size: clamp(40px, 10vw, 80px);
      font-weight: 900;
      letter-spacing: 5px;
      margin-bottom: 10px;
    }

    .tagline {
      font-size: 18px;
      color: #ccc;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      padding: 14px 28px;
      background: white;
      color: black;
      text-decoration: none;
      font-weight: bold;
      border-radius: 30px;
      transition: 0.3s;
    }

    .button:hover {
      transform: scale(1.05);
      background: #ddd;
    }

    /* NAVIGATION */
    nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.95);
      border-bottom: 1px solid #222;
      padding: 15px;
      text-align: center;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 12px;
      font-size: 14px;
      font-weight: bold;
    }

    nav a:hover {
      color: #aaa;
    }

    /* SECTIONS */
    section {
      padding: 80px 20px;
      max-width: 1100px;
      margin: auto;
    }

    .section-title {
      text-align: center;
      font-size: 35px;
      margin-bottom: 45px;
      letter-spacing: 2px;
    }

    .about {
      text-align: center;
      max-width: 800px;
      margin: auto;
      color: #ccc;
      font-size: 17px;
    }

    /* SHOWS */
    .shows {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 25px;
    }

    .card {
      background: #111;
      border: 1px solid #252525;
      border-radius: 15px;
      padding: 30px 20px;
      text-align: center;
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-7px);
      border-color: #555;
    }

    .card h3 {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .card p {
      color: #aaa;
    }

    /* YOUTUBE */
    .youtube {
      text-align: center;
      background: #0d0d0d;
      border-radius: 20px;
      padding: 50px 20px;
    }

    .youtube p {
      color: #bbb;
      margin-bottom: 25px;
    }

    /* CONTACT */
    .contact {
      text-align: center;
    }

    .contact p {
      color: #bbb;
      margin: 10px 0;
    }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 30px 15px;
      border-top: 1px solid #222;
      color: #777;
      font-size: 14px;
    }

    /* MOBILE */
    @media (max-width: 600px) {
      .logo {
        width: 140px;
      }

      nav a {
        margin: 0 6px;
        font-size: 12px;
      }

      section {
        padding: 60px 18px;
      }

      .section-title {
        font-size: 29px;
      }
    }
  </style>
</head>

<body>

  <!-- HERO -->
  <header id="home">

    <!-- DOC XANDER LOGO -->
    <img
      src="file_000000003df881f4a14cf90d9108b8e2.png"
      alt="DOC XANDER Logo"
      class="logo"
    >

    <h1 class="brand">DOC XANDER</h1>

    <p class="tagline">
      Entertainment • Interviews • Original Programs
    </p>

    <a href="#shows" class="button">
      Explore DOC XANDER
    </a>

  </header>

  <!-- NAVIGATION -->
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#shows">Programs</a>
    <a href="#youtube">YouTube</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- ABOUT -->
  <section id="about">

    <h2 class="section-title">ABOUT DOC XANDER</h2>

    <p class="about">
      Welcome to the official DOC XANDER platform.
      DOC XANDER brings entertainment, conversations,
      interviews and original programs designed to connect
      with audiences and create memorable moments.
    </p>

  </section>

  <!-- PROGRAMS -->
  <section id="shows">

    <h2 class="section-title">OUR PROGRAMS</h2>

    <div class="shows">

      <div class="card">
        <h3>Blind Meet ❤️</h3>
        <p>
          Real connections, unexpected meetings and
          unforgettable moments.
        </p>
      </div>

      <div class="card">
        <h3>Deep End</h3>
        <p>
          Deep conversations, real stories and
          meaningful discussions.
        </p>
      </div>

      <div class="card">
        <h3>Exclusive Interviews</h3>
        <p>
          Exclusive conversations with interesting
          personalities and guests.
        </p>
      </div>

    </div>

  </section>

  <!-- YOUTUBE -->
  <section id="youtube">

    <div class="youtube">

      <h2 class="section-title">
        DOC XANDER ON YOUTUBE
      </h2>

      <p>
        Subscribe to the DOC XANDER YouTube channel
        for new programs, interviews and exclusive content.
      </p>

      <!-- Replace # with your actual YouTube channel link -->
      <a
        href="#"
        class="button"
        target="_blank"
      >
        Subscribe on YouTube
      </a>

    </div>

  </section>

  <!-- CONTACT -->
  <section id="contact">

    <div class="contact">

      <h2 class="section-title">CONTACT DOC XANDER</h2>

      <p>
        For collaborations, interviews, promotions
        and other enquiries, get in touch with us.
      </p>

      <p>
        📧 Email: Add your email here
      </p>

      <p>
        📱 Phone: Add your contact number here
      </p>

    </div>

  </section>

  <!-- FOOTER -->
  <footer>
    © 2026 DOC XANDER. All Rights Reserved.
  </footer>

</body>
</html>
