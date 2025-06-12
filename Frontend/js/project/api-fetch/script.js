const container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users/5")
    .then((response) => response.json())
    .then((user) => {

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h2>Details of Person</h2>
        <h1>Name:${user.name}</h1>
        <p>Id: ${user.id}</p>
        <p>Username: ${user.username}</p>
        <p>Email:${user.email}</p>
        <p>Phone:${user.phone}</p>
        <p>Company: ${user.company.name}</p>
        <p>Website: ${user.website}</p>
        <p>Address: ${user.address.street}</p>
        
      `;
        container.appendChild(card);

    })