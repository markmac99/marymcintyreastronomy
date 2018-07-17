$(function() {
Morris.Line({
  element: 'planet-magnitude',
data: [ 
{time: 1517471122000, magnitude: 1.34},
{time: 1520145898000, magnitude: 1.34},
{time: 1522820049000, magnitude: 1.26},
{time: 1525492343000, magnitude: 1.1},
{time: 1528163029000, magnitude: 0.92},
{time: 1530919925000, magnitude: 0.85},
{time: 1533590494000, magnitude: 1.02},
{time: 1536261363000, magnitude: 1.19},
{time: 1538933336000, magnitude: 1.31},
{time: 1541607983000, magnitude: 1.35},
{time: 1544284450000, magnitude: 1.32},
{time: 1546905600000, magnitude: 1.26},
{time: 1549611245000, magnitude: 1.34},
{time: 1552285789000, magnitude: 1.34},
{time: 1554959937000, magnitude: 1.27},
{time: 1557634513000, magnitude: 1.13},
{time: 1560305256000, magnitude: 0.95},
{time: 1563062173000, magnitude: 0.81},
{time: 1565732717000, magnitude: 0.98},
{time: 1568403530000, magnitude: 1.16},
{time: 1571074732000, magnitude: 1.29},
{time: 1573748152000, magnitude: 1.34},
{time: 1576425217000, magnitude: 1.31},
{time: 1579046400000, magnitude: 1.23},
{time: 1581751292000, magnitude: 1.32},
{time: 1584425662000, magnitude: 1.34},
{time: 1587099851000, magnitude: 1.27},
{time: 1589774866000, magnitude: 1.14},
{time: 1592447450000, magnitude: 0.96},
{time: 1595118001000, magnitude: 0.79},
{time: 1597874932000, magnitude: 0.94},
{time: 1600545694000, magnitude: 1.11},
{time: 1603216832000, magnitude: 1.25},
{time: 1605888424000, magnitude: 1.32},
{time: 1608566143000, magnitude: 1.3},
{time: 1611187200000, magnitude: 1.22},
{time: 1613891279000, magnitude: 1.29},
{time: 1616565527000, magnitude: 1.32},
{time: 1619239803000, magnitude: 1.27},
{time: 1621915163000, magnitude: 1.14},
{time: 1624589593000, magnitude: 0.97},
{time: 1627260187000, magnitude: 0.79},
{time: 1630017117000, magnitude: 0.88},
{time: 1632687835000, magnitude: 1.06},
{time: 1635358908000, magnitude: 1.21},
{time: 1638030362000, magnitude: 1.29},
{time: 1640707221000, magnitude: 1.28},
{time: 1643328000000, magnitude: 1.21},
{time: 1646006400000, magnitude: 1.25},
{time: 1648705393000, magnitude: 1.29},
{time: 1651379805000, magnitude: 1.25},
{time: 1654055576000, magnitude: 1.14},
{time: 1656731679000, magnitude: 0.97},
{time: 1659402324000, magnitude: 0.78},
{time: 1662159260000, magnitude: 0.81},
{time: 1664829940000, magnitude: 0.99},
{time: 1667500949000, magnitude: 1.15},
{time: 1670172336000, magnitude: 1.24},
{time: 1672848437000, magnitude: 1.25},
{time: 1675529840000, magnitude: 1.19},
{time: 1678147200000, magnitude: 1.2},
{time: 1680845270000, magnitude: 1.25},
{time: 1683519869000, magnitude: 1.23},
{time: 1686196120000, magnitude: 1.13},
{time: 1688873717000, magnitude: 0.96},
{time: 1691544416000, magnitude: 0.77},
{time: 1694301365000, magnitude: 0.74},
{time: 1696972011000, magnitude: 0.92},
{time: 1699642957000, magnitude: 1.09},
{time: 1702314277000, magnitude: 1.19},
{time: 1704989769000, magnitude: 1.22}],
        xkey: 'time',
        ykeys: ['magnitude'],
        labels: ['Magnitude'],
        hideHover: 'auto',
        xLabelAngle: 45,
        ymax: 0 ,
        ymin: 2,
        postUnits: ' mag',
        resize: true
    });
});
