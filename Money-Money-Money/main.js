function calculateYears(principal, interest, tax, desired) {
    let years = 0

    while (Math.ceil(principal) < desired) {
        let int = principal * interest
        let taxAmt = int * tax
        let annualNet = int - taxAmt
        years++
        principal = Math.ceil(principal + annualNet)
        if (principal >= desired) {
            console.log(years)
            console.log(principal)
            return years
        }
        console.log(years)
        console.log(principal)
    }
    return years
} 