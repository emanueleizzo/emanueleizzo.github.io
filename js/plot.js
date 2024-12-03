function plot(id, equations, i1, i2, step = 1) {
    var xValues = generateLabels(i1, i2, step);

    var yValues = generateData(equations, i1, i2, step);
    
    var data = { labels: xValues, datasets: [] };
    equations.forEach((equation, index) => {
        data.datasets.push({
            fill: false,
            pointRadius: 1,
            borderColor: equation[1],
            data: yValues[index]
        });
    });

    new Chart(id, {
        type: "line",
        data: data,
        options: {
            legend: {display: false},
            title: {
                display: false,
                text: null,
                fontSize: 16
            }
        }
    });
}

function generateLabels(i1, i2, step) {
    const error = 10**(-5);
    var xValues = [];
    
    for (let x = i1; x <= i2; x += step) {
        x = Number(x.toFixed(-Math.log10(step)));

        if (Math.round(x) == x || Math.abs(Math.round(x) - x) < error) {
            xValues.push(x);
        } else {
            xValues.push("");
        }
    }

    return xValues;
}

function generateData(equations, i1, i2, step) {
    const error = 10**(-5);
    var yValues = [];

    equations.forEach(equation => {
        yValues.push([])
    });
    
    equations.forEach((equation, index) => {
        for (let x = i1; x <= i2; x += step) {
            x = Number(x.toFixed(-Math.log10(step)));
            
            yValues[index].push(eval(equation[0]));;
        }
    })

    return yValues;
}