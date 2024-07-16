body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f7f7f7;
}

.container {
    text-align: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h1 {
    color: #32a852;
}

input {
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #32a852;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #28a745;
}

#numbersContainer {
    display: grid;
    grid-template-columns: repeat(8, 50px);
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

.number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: white;
    border-radius: 5px;
}

.even {
    background-color: #32a852;
}

.odd {
    background-color: #f4e04d;
    color: black;
}

.prime {
    background-color: #f27474;
}
