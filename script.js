async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            // Show account
            document.getElementById("account").innerText =
                "Connected: " + accounts[0];

        } catch (error) {
            console.log("User rejected connection");
        }
    } else {
        alert("MetaMask is not installed!");
    }
}