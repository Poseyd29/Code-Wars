function betterThanAverage(classPoints, yourPoints) {
    const init = 0;
    const numberOfTests = classPoints.length;
    const sum = classPoints.reduce((prev, current) => prev + current, init);

    const classScore = sum / numberOfTests;
    const result = yourPoints > classScore ? true : false;
    return result
}