const EMISSION_FACTORS = {  "India": {  //units : kgCo2/(km or KWh or meal or kg)
"Transportation": 0.14,"Electricity": 0.82,"Diet": 1.25,"Waste": 0.1   }    };
function calculateEmissions() {
    const country = document.getElementById("country").value ;
    const distance = parseFloat(document.getElementById("distance").value) || 0;
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const waste = parseFloat(document.getElementById("waste").value) || 0;
    const meals = parseFloat(document.getElementById("meals").value) || 0;
    // Convert to yearly values
    const yearlyDistance = distance * 365;
    const yearlyElectricity = electricity * 12;
    const yearlyMeals = meals * 365;
    const yearlyWaste = waste * 52;
    // Calculate emissions
    const transportationEmissions = EMISSION_FACTORS[country]["Transportation"] * yearlyDistance / 1000;
    const electricityEmissions = EMISSION_FACTORS[country]["Electricity"] * yearlyElectricity / 1000;
    const dietEmissions = EMISSION_FACTORS[country]["Diet"] * yearlyMeals / 1000;
    const wasteEmissions = EMISSION_FACTORS[country]["Waste"] * yearlyWaste / 1000;
    const totalEmissions = transportationEmissions + electricityEmissions + dietEmissions + wasteEmissions;
    // Display results
    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>🚗 Transportation: ${transportationEmissions.toFixed(2)} tonnes CO2 per year</p>
        <p>💡 Electricity: ${electricityEmissions.toFixed(2)} tonnes CO2 per year</p>
        <p>🍽️ Diet: ${dietEmissions.toFixed(2)} tonnes CO2 per year</p>
        <p>🗑️ Waste: ${wasteEmissions.toFixed(2)} tonnes CO2 per year</p>
        <h3>🌍 Your total carbon footprint is: ${totalEmissions.toFixed(2)} tonnes CO2 per year</h3>
        <p>In 2021, CO2 emissions per capita for India was 1.9 tons of CO2 per capita...</p>
    ` ;
}