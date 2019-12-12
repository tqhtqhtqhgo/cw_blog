function time(){
    var d=new Date().getDay();
    switch (d)
    {
        case 0:x="今天是星期日";
            document.write(x);
            break;
        case 1:x="今天是星期一";
            document.write(x);
            break;
        case 2:x="今天是星期二";
            document.write(x);
            break;
        case 3:x="今天是星期三";
            document.write(x);
            break;
        case 4:x="今天是星期四";
            document.write(x);
            break;
        case 5:x="今天是星期五";
            document.write(x);
            break;
        case 6:x="今天是星期六";
            document.write(x);
            break;
    }
}

