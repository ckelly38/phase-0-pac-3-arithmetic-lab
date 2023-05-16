function add(a, b)
{
    return a + b;
}
function subtract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    if (b === 0)
    {
        throw "Error: Divide by Zero is not allowed!";
    }
    else
    {
        return a / b;
    }
}
function increment(a)
{
    return a + 1;
}
function decrement(a)
{
    return a - 1;
}
function makeInt(n)
{
    return parseInt(n, 10);
}
function preserveDecimal(n)
{
    return parseFloat(n, 10);
}
