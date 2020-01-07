$(function() {
Morris.Line({
  element: 'planet-magnitude',
data: [ 
{time: 1574007106000, magnitude: 10.24},
{time: 1574611413000, magnitude: 10.08},
{time: 1575215857000, magnitude: 9.92},
{time: 1575820455000, magnitude: 9.74},
{time: 1576368000000, magnitude: 9.56},
{time: 1576972800000, magnitude: 9.37},
{time: 1577577600000, magnitude: 9.18},
{time: 1578182400000, magnitude: 9.01},
{time: 1578787200000, magnitude: 8.90},
{time: 1579392000000, magnitude: 8.97},
{time: 1579996800000, magnitude: 9.14},
{time: 1580601600000, magnitude: 9.33},
{time: 1581206400000, magnitude: 9.53},
{time: 1581811200000, magnitude: 9.72},
{time: 1582416000000, magnitude: 9.90},
{time: 1583020800000, magnitude: 10.07},
{time: 1583625600000, magnitude: 10.24},
{time: 1584230400000, magnitude: 10.39},
{time: 1584835200000, magnitude: 10.53},
{time: 1585440000000, magnitude: 10.66},
{time: 1586044800000, magnitude: 10.78},
{time: 1586668504000, magnitude: 10.87},
{time: 1587272397000, magnitude: 10.95},
{time: 1587876333000, magnitude: 11.01},
{time: 1588480328000, magnitude: 11.05},
{time: 1589084395000, magnitude: 11.07},
{time: 1589688552000, magnitude: 11.07},
{time: 1590292815000, magnitude: 11.03},
{time: 1590897203000, magnitude: 10.97},
{time: 1591501730000, magnitude: 10.88},
{time: 1592106406000, magnitude: 10.76},
{time: 1592711235000, magnitude: 10.60},
{time: 1593316211000, magnitude: 10.41},
{time: 1593921323000, magnitude: 10.19},
{time: 1594526390000, magnitude: 9.93},
{time: 1595129509000, magnitude: 9.63},
{time: 1595732559000, magnitude: 9.31},
{time: 1596335542000, magnitude: 8.98},
{time: 1596938462000, magnitude: 8.64},
{time: 1597541327000, magnitude: 8.33},
{time: 1598144150000, magnitude: 8.10},
{time: 1598746946000, magnitude: 8.05},
{time: 1599436132000, magnitude: 8.21},
{time: 1600038929000, magnitude: 8.49},
{time: 1600641754000, magnitude: 8.82},
{time: 1601244624000, magnitude: 9.16},
{time: 1601847550000, magnitude: 9.49},
{time: 1602450542000, magnitude: 9.79},
{time: 1603053602000, magnitude: 10.06},
{time: 1603656733000, magnitude: 10.30},
{time: 1604259932000, magnitude: 10.50},
{time: 1604863196000, magnitude: 10.67},
{time: 1605466520000, magnitude: 10.80},
{time: 1606069900000, magnitude: 10.89},
{time: 1606673328000, magnitude: 10.96},
{time: 1607276801000, magnitude: 10.99},
{time: 1607880313000, magnitude: 11.00},
{time: 1608483859000, magnitude: 10.98},
{time: 1609087435000, magnitude: 10.94},
{time: 1609691038000, magnitude: 10.87},
{time: 1610295347000, magnitude: 10.79},
{time: 1610900790000, magnitude: 10.69},
{time: 1611506301000, magnitude: 10.58},
{time: 1612111854000, magnitude: 10.45},
{time: 1612717428000, magnitude: 10.31},
{time: 1613323005000, magnitude: 10.16},
{time: 1613928577000, magnitude: 10.00},
{time: 1614534136000, magnitude: 9.83},
{time: 1615139682000, magnitude: 9.66},
{time: 1615745215000, magnitude: 9.48},
{time: 1616284800000, magnitude: 9.31},
{time: 1616889600000, magnitude: 9.16},
{time: 1617494400000, magnitude: 9.06},
{time: 1618099200000, magnitude: 9.06},
{time: 1618704000000, magnitude: 9.15},
{time: 1619308800000, magnitude: 9.30},
{time: 1619913600000, magnitude: 9.46},
{time: 1620518400000, magnitude: 9.63},
{time: 1621123200000, magnitude: 9.80},
{time: 1621728000000, magnitude: 9.96},
{time: 1622332800000, magnitude: 10.11},
{time: 1622951368000, magnitude: 10.26},
{time: 1623556017000, magnitude: 10.40},
{time: 1624160819000, magnitude: 10.53},
{time: 1624765770000, magnitude: 10.65},
{time: 1625370859000, magnitude: 10.75},
{time: 1625976066000, magnitude: 10.84},
{time: 1626581369000, magnitude: 10.91},
{time: 1627186744000, magnitude: 10.97},
{time: 1627792168000, magnitude: 11.01},
{time: 1628397622000, magnitude: 11.02},
{time: 1629003093000, magnitude: 11.01},
{time: 1629608570000, magnitude: 10.98},
{time: 1630214048000, magnitude: 10.92},
{time: 1630819525000, magnitude: 10.83},
{time: 1631423819000, magnitude: 10.70},
{time: 1632027194000, magnitude: 10.54},
{time: 1632630505000, magnitude: 10.34},
{time: 1633233747000, magnitude: 10.09},
{time: 1633836915000, magnitude: 9.80},
{time: 1634440003000, magnitude: 9.47},
{time: 1635043011000, magnitude: 9.09},
{time: 1635645940000, magnitude: 8.68},
{time: 1636248797000, magnitude: 8.24},
{time: 1636851591000, magnitude: 7.77}],
        xkey: 'time',
        ykeys: ['magnitude'],
        labels: ['magnitude'],
        hideHover: 'auto',
        xLabelAngle: 45,
        ymax: 7 ,
        ymin: 12,
        postUnits: ' mag',
        resize: true
    });
});