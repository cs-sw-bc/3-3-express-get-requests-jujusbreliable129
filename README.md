# Random User API Project 👥

## 🎯 Objective

Create a small full‑stack project where the frontend displays random user information served by a backend Express API. Learners will understand how to connect a client and server using fetch requests.

---

## 🗂️ Folder Structure

```
└── lesson4_section3/
    ├── client/ # frontend code
    │   ├── index.html
    │   ├── script.js
    │   └── styles.css
    ├── server/ # backend code
    │   └── app.js
    ├── package.json
    ├── package-lock.json
    └── README.md
```

---

## 🧰 Prerequisites

* **Node.js** and **npm** installed on your machine.
* Familiarity with `fetch()`, Express, and JSON responses.

---

## 🖥️ Frontend Setup

1. Open the `client` folder.
2. Open `index.html` in your browser.
3. The page already includes a button labelled **“Get a random user”** and placeholders for user info.
4. When you click the button, it will call the backend API to retrieve user data.
5. Add an **input text box** to the HTML labeled **“Health Check Message”** — this will later be used to send data to a backend route.


---

## ⚙️ Backend Setup

1. In your terminal, `cd` into the root of the project.
2. Run `npm install` to install dependencies.
3. Move into the `server` folder and start your backend with `node app.js`.
4. You should see something like `Server is running on port 3000`.

🧠 *Hint:* Use `express()` to create the app, and remember to enable CORS so the frontend can access the server.

---

## 🔄 Displaying User Info

When the server is running:

1. Click **“Get a random user”** in your browser.
2. The frontend should call an endpoint (you’ll define it soon) and display the returned data.

💡 *Hint:* Start with hard‑coded JSON to verify your frontend connection before adding live API logic.

---

## 🧠 Building the `/users` Endpoint

Create an endpoint `/users` that returns a single random user.

**Hints:**

* Start with a hardcoded JSON object representing one user.
* Use `res.json()` to send it to the frontend.
* Once it works, modify your code to make an HTTP GET request to the [Random User API](https://randomuser.me/api). And return the results from here to your frontend.
* Remember to handle errors using a `try...catch` block.


---

## ⚕️ Bonus: Health Check Endpoint

Add a new endpoint `/health/:status` that responds differently based on the message received from the frontend.

**Hints:**

* Read incoming JSON using `express.json()` middleware.
* Check if the status contains the word **“ok”**.
* Return a JSON response indicating if the person  is *healthy* or *unhealthy* based on an if-else condition.

💬 *Example behavior (for reference only, do not copy directly)*:

* If message includes “ok” → server replies with a positive message.
* Otherwise → server returns a warning response.

---

## 💡 Alternative Option (Offline Mode)

If you don’t want to call the live API, create your **own list of 20–30 mock users** and randomly return one for each request.

**Hints:**

* Use an array of user objects containing `name`, `email`, and `city`.
* Use `Math.random()` to pick one.
* Keep this array in memory, no need for a database.

---

## 🧩 Summary

* Frontend calls `/users` → Backend responds with random user data.
* Add `/health` → Backend processes input and responds conditionally.
* Learners practice GET requests.
* Optionally, use mock data for offline mode.

Good luck and have fun connecting your first frontend + backend! 🚀
