<h1 align="center">Hunt App (backend)</h1>
<p>This backend was maden in nodejs, and use cors to permite cross-origin and mongoose to connect the application with the nosql database mongo</p>
<p>The database store the product informations</p>

# Routes
- - -
- `base_url/products` (get route): this route get all products that exists in database's records. 
- `base_url/products/:id` (get route): this route reviece one id in the route and get the record in database that id is equal the id that was get in route 
- `base_url/products` (post route): this route is to create products and reviece body in json like this
```json
{
    "title":"product's title",
    "description":"product's description",
    "url":"product's url"
}
```
- `base_url/products/:id` (put route): this route revice a a id by the route and reviece a body in json and update in database the values where are changed in json's body
- `base_url/products/:id` (delete route): this route reviece a id by the route and delete the product in database where the id is equal the id that was get in route