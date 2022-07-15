<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="test.css">
    <link rel="stylesheet" href="botlist.css">
    <title>Chat app</title>
</head>
<body>

    <nav>
        <div class="logo">
            <h3>Yuri kun's ChatBot</h3>
        </div>
        
    </nav>

    <div class="main">
        <div class="micontainer">

        <div class="sidebar">
                <ul class="botlist">

                    <h2>Bots</h2>

                    <hr style="height:2px;border-width:0;color:gray;background-color:gray">

                    <a href="#" class="list-active">
                    <div class="botlist-container">
                      <li>  <img src="https://i.pinimg.com/originals/ac/d9/d1/acd9d14e9cd2f6a990dc1d07dd465023.jpg" alt="Harumin" width="48px"
                        height="48px"><h3>Harumin</h3></li>
                    </div></a>
                    <a href="kurumeow.php">
                    <div class="botlist-container">
                        <li> <img src="http://images6.fanpop.com/image/photos/35700000/Chihaya-Megumi-servant-x-service-35769309-256-256.png" alt="Megumi" width="48px"
                            height="48px"><h3>Chihaya</h3></li>
                    </div></a>
                    <a href="#">
                    <div class="botlist-container">
                        <li><img src="https://i0.wp.com/thefanboyseo.com/wp-content/uploads/2020/05/your-name-ruben-2.jpg?ssl=1" alt="Megumi" width="48px"
                            height="48px"><h3>Ruben</h3></li>
                    </div></a>
                    <a href="#">
                    <div class="botlist-container">
                        <li><img src="https://i.pinimg.com/736x/36/52/e7/3652e7bae997f73f9139265ac92dc0aa.jpg" alt="Megumi" width="48px"
                            height="48px"><h3>Udin</h3></li>
                    </div></a>
                   
                </ul>
            </div>
        
        <?php include "contents/message.html"?>

    </div>

    <script src="javascript/bot.js"></script>
    <script src="javascript/app.js"></script>
</body>
</html>