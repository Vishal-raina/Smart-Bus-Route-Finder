

const buses = [

{ number: "1", from: "Maruthamalai", to: "Avarampalayam", first: "05:40 AM", last: "10:15 PM", freq: "30 mins" },
{ number: "1A", from: "Ondipudur", to: "Vadavalli", first: "05:30 AM", last: "10:30 PM", freq: "20 mins" },
{ number: "1C", from: "Ondipudur", to: "Vadavalli", first: "05:50 AM", last: "10:10 PM", freq: "25 mins" },
{ number: "1D", from: "Ondipudur", to: "Maruthamalai", first: "05:45 AM", last: "09:45 PM", freq: "30 mins" },
{ number: "2", from: "Perur", to: "Polytechnic", first: "06:00 AM", last: "09:30 PM", freq: "25 mins" },
{ number: "3", from: "Ganapathy", to: "Madukkarai", first: "05:50 AM", last: "10:00 PM", freq: "20 mins" },
{ number: "4B", from: "Ukkadam", to: "Press Colony", first: "06:00 AM", last: "09:40 PM", freq: "30 mins" },
{ number: "6A", from: "Gandhipuram", to: "Periyanaickanpalayam", first: "05:45 AM", last: "10:15 PM", freq: "20 mins" },
{ number: "8", from: "Chettipalayam", to: "Singanallur", first: "05:45 AM", last: "09:45 PM", freq: "25 mins" },
{ number: "10B", from: "Saibaba Colony", to: "Kalapatti", first: "06:00 AM", last: "09:45 PM", freq: "25 mins" },
{ number: "11", from: "Railway Station", to: "Kanuvai", first: "06:00 AM", last: "09:50 PM", freq: "30 mins" },
{ number: "12", from: "Gandhipuram", to: "Premier Mills", first: "05:40 AM", last: "10:00 PM", freq: "20 mins" },
{ number: "16", from: "Town Hall", to: "Airport", first: "05:45 AM", last: "10:30 PM", freq: "20 mins" },
{ number: "19A", from: "Saibaba Colony", to: "Vellalore", first: "06:00 AM", last: "09:30 PM", freq: "30 mins" },
{ number: "21", from: "Gandhipuram", to: "Kembanur", first: "06:00 AM", last: "08:30 PM", freq: "45 mins" },
{ number: "24", from: "Ukkadam", to: "Kalapatti", first: "05:50 AM", last: "09:50 PM", freq: "25 mins" },
{ number: "28", from: "Gandhipuram", to: "Thondamuthur", first: "05:45 AM", last: "10:00 PM", freq: "20 mins" },
{ number: "30C", from: "Ukkadam", to: "Aerodrome", first: "06:00 AM", last: "09:30 PM", freq: "30 mins" },
{ number: "33A", from: "Railway Station", to: "Kinathukadavu", first: "06:15 AM", last: "09:00 PM", freq: "40 mins" },
{ number: "45E", from: "Gandhipuram", to: "Annur", first: "05:30 AM", last: "08:45 PM", freq: "50 mins" },
{ number: "70", from: "Gandhipuram", to: "Maruthamalai", first: "05:40 AM", last: "10:10 PM", freq: "25 mins" }

];

// Unique Locations
const locations = [...new Set(buses.flatMap(bus => [bus.from, bus.to]))];

// Autocomplete
function showSuggestions(input, type) {
    const value = input.value.toLowerCase();
    const suggestionBox = document.getElementById(type + "Suggestions");
    suggestionBox.innerHTML = "";

    if (!value) return;

    const filtered = locations.filter(loc =>
        loc.toLowerCase().includes(value)
    );

    filtered.forEach(loc => {
        const div = document.createElement("div");
        div.textContent = loc;
        div.onclick = () => {
            input.value = loc;
            suggestionBox.innerHTML = "";
        };
        suggestionBox.appendChild(div);
    });
}

// Search Function
function searchBus() {
    const fromValue = document.getElementById("fromInput").value.trim().toLowerCase();
    const toValue = document.getElementById("toInput").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filtered = buses.filter(bus =>
        bus.from.toLowerCase() === fromValue &&
        bus.to.toLowerCase() === toValue
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<div class='no-result'>No buses found for this route.</div>";
        return;
    }

    let table = `
        <table>
            <tr>
                <th>Bus No</th>
                <th>Route</th>
                <th>First Bus</th>
                <th>Last Bus</th>
                <th>Frequency</th>
            </tr>
    `;

    filtered.forEach(bus => {
        table += `
            <tr>
                <td>${bus.number}</td>
                <td>${bus.from} ➝ ${bus.to}</td>
                <td>${bus.first}</td>
                <td>${bus.last}</td>
                <td>Every ${bus.freq}</td>
            </tr>
        `;
    });

    table += "</table>";
    resultsDiv.innerHTML = table;
}