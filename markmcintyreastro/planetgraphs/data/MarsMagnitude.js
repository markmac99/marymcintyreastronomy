$(function() {
Morris.Line({
  element: 'planet-magnitude',
data: [ 
{time: 1573975711000, magnitude: 1.76},
{time: 1576570103000, magnitude: 1.66},
{time: 1579161956000, magnitude: 1.49},
{time: 1581751291000, magnitude: 1.26},
{time: 1584339400000, magnitude: 0.97},
{time: 1586927311000, magnitude: 0.63},
{time: 1589515925000, magnitude: 0.24},
{time: 1592106406000, magnitude: -0.21},
{time: 1594699489000, magnitude: -0.72},
{time: 1597291725000, magnitude: -1.34},
{time: 1599877795000, magnitude: -2.07},
{time: 1602461166000, magnitude: -2.61},
{time: 1605130854000, magnitude: -1.80},
{time: 1607716583000, magnitude: -0.81},
{time: 1610304117000, magnitude: -0.01},
{time: 1612892648000, magnitude: 0.60},
{time: 1615485702000, magnitude: 1.06},
{time: 1618080775000, magnitude: 1.39},
{time: 1620675777000, magnitude: 1.63},
{time: 1623270061000, magnitude: 1.77},
{time: 1625862124000, magnitude: 1.84},
{time: 1628451681000, magnitude: 1.84},
{time: 1630972800000, magnitude: 1.78},
{time: 1633564800000, magnitude: 1.66},
{time: 1636182607000, magnitude: 1.66},
{time: 1638777477000, magnitude: 1.62},
{time: 1641370347000, magnitude: 1.53},
{time: 1643960427000, magnitude: 1.40},
{time: 1646548827000, magnitude: 1.24},
{time: 1649136709000, magnitude: 1.05},
{time: 1651724962000, magnitude: 0.86},
{time: 1654314648000, magnitude: 0.66},
{time: 1656906847000, magnitude: 0.45},
{time: 1659501130000, magnitude: 0.20},
{time: 1662096012000, magnitude: -0.13},
{time: 1664685658000, magnitude: -0.59},
{time: 1667271896000, magnitude: -1.22},
{time: 1669855008000, magnitude: -1.81},
{time: 1672523756000, magnitude: -1.24},
{time: 1675108829000, magnitude: -0.31},
{time: 1677696171000, magnitude: 0.43},
{time: 1680287709000, magnitude: 0.96},
{time: 1682882750000, magnitude: 1.33},
{time: 1685477438000, magnitude: 1.58},
{time: 1688070421000, magnitude: 1.72},
{time: 1690660756000, magnitude: 1.78},
{time: 1693249281000, magnitude: 1.77},
{time: 1695772800000, magnitude: 1.69},
{time: 1698364800000, magnitude: 1.56},
{time: 1700956800000, magnitude: 1.44},
{time: 1703548800000, magnitude: 1.41},
{time: 1706169361000, magnitude: 1.35},
{time: 1708758194000, magnitude: 1.29},
{time: 1711346151000, magnitude: 1.21},
{time: 1713934171000, magnitude: 1.14},
{time: 1716523214000, magnitude: 1.08},
{time: 1719114472000, magnitude: 1.02},
{time: 1721708198000, magnitude: 0.93},
{time: 1724302997000, magnitude: 0.81},
{time: 1726897902000, magnitude: 0.60},
{time: 1729489914000, magnitude: 0.27},
{time: 1732077371000, magnitude: -0.25},
{time: 1734662519000, magnitude: -0.92},
{time: 1737244930000, magnitude: -1.34},
{time: 1739914164000, magnitude: -0.58},
{time: 1742499798000, magnitude: 0.20},
{time: 1745089693000, magnitude: 0.78},
{time: 1747684604000, magnitude: 1.17},
{time: 1750278371000, magnitude: 1.42},
{time: 1752869610000, magnitude: 1.56},
{time: 1755458622000, magnitude: 1.62},
{time: 1758046606000, magnitude: 1.60},
{time: 1760634505000, magnitude: 1.53}],
        xkey: 'time',
        ykeys: ['magnitude'],
        labels: ['magnitude'],
        hideHover: 'auto',
        xLabelAngle: 45,
        ymax: -3 ,
        ymin: 2,
        postUnits: ' mag',
        resize: true
    });
});
