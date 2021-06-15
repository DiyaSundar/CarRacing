canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d")

RedCar_width = 150;
RedCar_height = 120;
RedCar_image = "RedCar.png";
RedCar_x = 10;
RedCar_y = 10;

BlueCar_width = 150;
BlueCar_height = 120;
BlueCar_image = "BlueCar.png";
BlueCar_x = 10;
BlueCar_y = 50;

background_image = "https://image.shutterstock.com/image-vector/race-track-start-finish-line-260nw-1444312355.jpg";

function Screen_Load(){
    BG_imgTag = new Image();
    BG_imgTag.onload = LoadBackground;
    BG_imgTag.src = background_image;

    RedCar_imgTag = new Image();
    RedCar_imgTag.onload = LoadRedCar;
    RedCar_imgTag.src = RedCar_image;

    BlueCar_imgTag = new Image();
    BlueCar_imgTag.onload = LoadBlueCar;
    BlueCar_imgTag.src = BlueCar_image;
}

function LoadBackground(){
    ctx.drawImage(BG_imgTag, 0, 0, canvas.width, canvas.height);
}

function LoadRedCar(){
    ctx.drawImage(RedCar_imgTag, RedCar_x, RedCar_y, RedCar_width, RedCar_height);
}

function LoadBlueCar(){
    ctx.drawImage(BlueCar_imgTag, BlueCar_x, BlueCar_y, BlueCar_width, BlueCar_height);
}

