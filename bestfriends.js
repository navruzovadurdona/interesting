<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Прогулка двух подружек</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(#87ceeb, #ffffff); /* небо -> земля */
      height: 100vh;
      font-family: sans-serif;
      overflow: hidden;
    }

    .scene {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .ground {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40%;
      background-color: #7cfc00; /* трава */
    }

    .sun {
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 60px;
    }

    .cloud {
      position: absolute;
      top: 50px;
      font-size: 50px;
      animation: cloudMove 30s linear infinite;
    }

    .cloud:nth-child(2) {
      left: 0;
      top: 80px;
      animation-delay: 10s;
    }

    @keyframes cloudMove {
      0% { left: -100px; }
      100% { left: 110%; }
    }

    .tree {
      position: absolute;
      bottom: 25%;
      font-size: 40px;
    }

    .tree.left { left: 10%; }
    .tree.right { right: 10%; }

    .girls {
      position: absolute;
      bottom: 25%;
      left: 20%;
      font-size: 48px;
      animation: walk 10s infinite alternate;
    }

    .speech {
      position: absolute;
      bottom: 40%;
      left: 24%;
      background: white;
      border-radius: 12px;
      padding: 10px 16px;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
      font-size: 16px;
      animation: talk 6s infinite;
    }

    @keyframes walk {
      from { left: 20%; }
      to { left: 60%; }
    }

    @keyframes talk {
      0%, 100% { opacity: 0; }
      20%, 60% { opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="scene">
    <div class="sun">☀️</div>
    <div class="cloud">☁️</div>
    <div class="cloud">☁️</div>
    <div class="tree left">🌳</div>
    <div class="tree right">🌲</div>
    <div class="girls">👧👧</div>
    <div class="speech">— Как красиво сегодня!</div>
    <div class="ground"></div>
  </div>
</body>
</html>
