# Ice Cream

{% api-method method="get" host="localhost:8000" path="/icecream" %}
{% api-method-summary %}
Get all ice creams
{% endapi-method-summary %}

{% api-method-description %}
Returns all Ice Creams from the database.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "iceCreams": [
        {
            "tags": [
                "sweet",
                "crunchy"
            ],
            "_id": "603dd2f387bd5d6b89e03d3f",
            "name": "test 2",
            "rating": 4,
            "vendor": "603d43451cdd394f82125343",
            "__v": 0
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="localhost:8000" path="/icecream/:iceCreamId" %}
{% api-method-summary %}
Get ice cream by id
{% endapi-method-summary %}

{% api-method-description %}
Returns the Ice Cream with the specified id.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="iceCreamId" type="string" required=true %}
The id associated with the ice cream.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "iceCream": {
        "tags": [
            "sweet",
            "crunchy"
        ],
        "_id": "603dd2f387bd5d6b89e03d3f",
        "name": "Peanut Butter Crunch",
        "rating": 4,
        "vendor": "603d43451cdd394f82125343",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="localhost:8000" path="/icecream" %}
{% api-method-summary %}
Add new ice cream
{% endapi-method-summary %}

{% api-method-description %}
Adds a new Ice Cream to the database.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Bearer Token" type="string" required=true %}
Use the JWT Token returned from the authentication.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
The name of the ice cream.
{% endapi-method-parameter %}

{% api-method-parameter name="vendor" type="string" required=true %}
The id of the vendor that manufactures this ice cream.
{% endapi-method-parameter %}

{% api-method-parameter name="tags" type="array" required=false %}
An array of strings that represent tags.
{% endapi-method-parameter %}

{% api-method-parameter name="rating" type="number" required=false %}
An integer between 1 and 5.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "iceCream": {
        "tags": [
            "strawberry",
            "cheesy"
        ],
        "_id": "6041d0d95769ba35abd6e38b",
        "name": "Strawberry Cheesecake",
        "rating": 4,
        "vendor": "603dd8b5ec5cd46f11d1e049",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Invalid vendor id.
{% endapi-method-response-example-description %}

```
{
    "error": "Cannot read property 'iceCreams' of null"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="localhost:8000" path="/icecream/:iceCreamId" %}
{% api-method-summary %}
Update ice cream by id
{% endapi-method-summary %}

{% api-method-description %}
Updates the Vendor with the specified id.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Bearer Token" type="string" required=false %}
Use the JWT Token returned from authentication.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="" path="" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

