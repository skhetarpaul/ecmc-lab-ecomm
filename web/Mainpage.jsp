<%-- 
    Document   : Mainpage
    Created on : Jun 18, 2021, 7:45:40 AM
    Author     : hp
--%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Amazon-Shopping App </title>

    <link rel="icon" href="https://i.pinimg.com/474x/30/66/a0/3066a0cb646942a9542cb6a603c035de.jpg" type="image/jpg" sizes="16x16">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/content.css">
    <script src="https://kit.fontawesome.com/4a3b1f73a2.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
    <style>
        body
        {
            margin: 0;
        }
        #containerSlider
        {
            margin: auto;
            width: 90%;
            text-align: center;
            padding-top: 100px;
            box-sizing: border-box;
        }
        #containerSlider img
        {
            width: 100%;
            height: 140%;
            text-align: center;
            align-content: center;
        }
        @media(max-width: 732px)
        {
            #containerSlider img
            {
                height: 12em;
            }
        }
        @media(max-width: 500px)
        {
            #containerSlider img
            {
                height: 10em;
            }
        }
    </style>

</head>
<body>

    <header>
        <section>
            <div id="container">

                    
                    <div id="shopName"><a href="MainPage.html"> <b> AMAZON</b></a></div>
                    <div></div>

                    <div></div>
                    <div id="user">
                        <a href="cart.html"> <i class="fas fa-shopping-cart addedToCart"><div id="badge"> 0 </div></i></a>
                        <a href="#"> <i class="fas fa-user-circle userIcon"></i> </a>
                    </div>
            </div>

        </section>
    </header>
    <section>
            <div id="containerSlider">
                <div id="slidingImage"> <img src="img/img1.png" alt="image1"> </div>
                <div id="slidingImage"> <img src="img/img2.png" alt="image2"> </div>
                <div id="slidingImage"> <img src="img/img3.png" alt="image3"> </div>
                <div id="slidingImage"> <img src="img/img4.png" alt="image4"> </div>
            </div>
    </section>
    <div id="mainContainer">
        
        <h1>Hello, <%=request.getAttribute("username")%>. What are you looking for today?</h1>
        <h1> Clothing and Accessories </h1>
        <div id="containerClothing">
            <!-- JS rendered code -->
        </div>
        
        <h1> Electronics </h1>
        <div id="containerAccessories">
            <!-- JS rendered code -->
        </div>
    </div>


    
            
            
            <div id="credit"><a href="https://www.linkedin.com/in/saransh-mamta-khetarpaul-005747161/"> © Saransh Mamta Khetarpaul </a></div>
        

    
</body>
    <script src="content.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <script>
        $(document).ready(function()
        {
        $('#containerSlider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            });
        });
    </script>
</html>